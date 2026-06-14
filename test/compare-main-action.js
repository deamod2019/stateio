"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { MainAction: OriginalMainAction } = require("../src-cjs/57165_MainAction.js")
const { MainAction: RestoredMainAction } = require("../src-restored/core/MainAction.js")

const originalEnv = {
  get: core.di.get,
  isBound: core.di.isBound,
  restoredGet: restoredCore.di.get,
  restoredIsBound: restoredCore.di.isBound,
}

Promise.resolve()
  .then(async () => {
    assert.deepEqual(
      publicPrototypeMembers(RestoredMainAction),
      publicPrototypeMembers(OriginalMainAction),
      "MainAction prototype surface differs",
    )

    await compareScenario("normal launch waits for leaderboard sync")
    await compareScenario("solo launch skips waiting for leaderboard sync", { inSolo: true })

    console.log(
      JSON.stringify(
        {
          module: "MainAction",
          scenarios: 2,
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

async function compareScenario(name, options = {}) {
  restoreEnvironment()
  const originalResult = normalize(await exercise(OriginalMainAction, options))
  restoreEnvironment()
  const restoredResult = normalize(await exercise(RestoredMainAction, options))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exercise(Klass, { inSolo = false } = {}) {
  const records = []
  patchEnvironment(records)

  let resolveLeaderboard = null
  const action = new Klass()
  action.social = {
    inSolo,
    syncLeaderboards() {
      records.push(["social.syncLeaderboards"])
      return new Promise((resolve) => {
        resolveLeaderboard = () => {
          records.push(["leaderboards.resolved"])
          resolve()
        }
      })
    },
  }
  action.cookies = {
    async sync() {
      records.push(["cookies.sync"])
      if (resolveLeaderboard) resolveLeaderboard()
    },
  }
  action.levelStart = {
    async run() {
      records.push(["levelStart.run"])
    },
  }

  const result = await action.launch()
  return { result, records }
}

function patchEnvironment(records) {
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    records.push(["di.isBound", tokenLabel(token)])
    return true
  }
  core.di.get = restoredCore.di.get = function get(token) {
    records.push(["di.get", tokenLabel(token)])
    if (token === TypesSocial.vibrationManager) {
      return {
        init() {
          records.push(["vibration.init"])
        },
      }
    }
    if (token === TypesGame.skinManager) {
      return {
        updateSkins() {
          records.push(["skinManager.updateSkins"])
        },
      }
    }
    return undefined
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.get
  core.di.isBound = originalEnv.isBound
  restoredCore.di.get = originalEnv.restoredGet
  restoredCore.di.isBound = originalEnv.restoredIsBound
}

function tokenLabel(token) {
  if (token === TypesSocial.vibrationManager) return "TypesSocial.vibrationManager"
  if (token === TypesGame.skinManager) return "TypesGame.skinManager"
  return String(token)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
