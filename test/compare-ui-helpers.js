"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesAds, TypesAudio } = require("../src-restored/core/CoreTypes.js")

const original = require("../src-cjs/37725__mod.js")
const restored = require("../src-restored/core/UIHelpers.js")

const originalEnv = {
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
}

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored), Object.keys(original), "UI helper export order differs")
    assert.deepEqual(runRankableScenario(restored), runRankableScenario(original))
    assert.deepEqual(await runAdScenario(restored), await runAdScenario(original))
    assert.deepEqual(await runSoundScenario(restored), await runSoundScenario(original))
    assert.deepEqual(runClickSoundScenario(restored), runClickSoundScenario(original))

    console.log(
      JSON.stringify(
        {
          module: "UIHelpers",
          exports: Object.keys(restored).length,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(restoreEnvironment)

function runRankableScenario(helpers) {
  return {
    withMethod: helpers.isRankableUser({ getLbRecord() {} }),
    withUndefinedMethod: helpers.isRankableUser({ getLbRecord: undefined }),
    withoutMethod: helpers.isRankableUser({}),
  }
}

async function runAdScenario(helpers) {
  const records = []
  core.di.get = restoredCore.di.get = (token) => {
    records.push(["di.get", token])
    assert.equal(token, TypesAds.adAction)
    return {
      async showAd(placement, reward) {
        records.push(["showAd", placement, reward])
        return reward ? "reward-result" : "inter-result"
      },
    }
  }

  return {
    showAd: await helpers.showAd("inter"),
    showReward: await helpers.showReward("reward"),
    records,
  }
}

async function runSoundScenario(helpers) {
  const records = []
  core.di.isBound = restoredCore.di.isBound = (token) => {
    records.push(["isBound", token])
    assert.equal(token, TypesAudio.soundAction)
    return true
  }
  core.di.get = restoredCore.di.get = (token) => {
    records.push(["di.get", token])
    assert.equal(token, TypesAudio.soundAction)
    return {
      run(soundId) {
        records.push(["run", soundId])
        return "sound-result"
      },
    }
  }

  const withSoundAction = await helpers.playSound("button")
  core.di.isBound = restoredCore.di.isBound = (token) => {
    records.push(["isBound", token])
    assert.equal(token, TypesAudio.soundAction)
    return false
  }
  const withoutSoundAction = await helpers.playSound("missing")

  return { withSoundAction, withoutSoundAction, records }
}

function runClickSoundScenario(helpers) {
  const records = []
  core.di.isBound = restoredCore.di.isBound = (token) => {
    records.push(["isBound", token])
    return true
  }
  core.di.get = restoredCore.di.get = (token) => ({
    run(soundId) {
      records.push(["di.get.run", token, soundId])
      return "ignored"
    },
  })

  const result = helpers.playUIClickSound()
  return { result, records }
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
}
