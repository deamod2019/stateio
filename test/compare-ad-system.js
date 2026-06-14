"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesAds, AdEvents, AdResponse } = require("../src-cjs/86178__mod.js")

const original = {
  AdManagerBase: require("../src-cjs/73018_AdManagerBase.js").AdManagerBase,
  AdAction: require("../src-cjs/45301_AdAction.js").AdAction,
  AdsModule: require("../src-cjs/10556_AdsModule.js").AdsModule,
  helpers: require("../src-cjs/68252__mod.js"),
}

const restored = {
  AdManagerBase: require("../src-restored/core/AdManagerBase.js").AdManagerBase,
  AdAction: require("../src-restored/core/AdAction.js").AdAction,
  AdsModule: require("../src-restored/core/AdsModule.js").AdsModule,
  helpers: require("../src-restored/core/AdHelpers.js"),
}

assert.deepEqual(
  publicPrototypeMembers(restored.AdManagerBase),
  publicPrototypeMembers(original.AdManagerBase),
  "AdManagerBase prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restored.AdAction),
  publicPrototypeMembers(original.AdAction),
  "AdAction prototype differs",
)

Promise.resolve()
  .then(async () => {
    assert.deepEqual(
      runThrottleScenario(restored.AdManagerBase, require("../src-restored/core/RuntimeUtils.js").log),
      runThrottleScenario(original.AdManagerBase, require("../src-cjs/84194__mod.js").log),
    )
    assert.deepEqual(await runManagerScenario(restored.AdManagerBase), await runManagerScenario(original.AdManagerBase))
    assert.deepEqual(await runAdActionScenario(restored.AdAction), await runAdActionScenario(original.AdAction))
    assert.deepEqual(
      await runHelperScenario(restored.helpers, restoredCore.di),
      await runHelperScenario(original.helpers, core.di),
    )
    assert.deepEqual(recordBindings(restored.AdsModule).records, recordBindings(original.AdsModule).records)

    const restoredBindings = recordBindings(restored.AdsModule)
    assert.equal(restoredBindings.targets.get(TypesAds.adAction), restored.AdAction)
    assert.equal(restoredBindings.targets.get(TypesAds.manager), restored.AdManagerBase)

    console.log(
      JSON.stringify(
        {
          modules: ["AdManagerBase", "AdAction", "AdsModule", "AdHelpers"],
          scenarios: 5,
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

function runThrottleScenario(AdManagerBase, log) {
  const originalNow = Date.now
  const records = []
  const originalTrace = log.trace
  log.trace = (message) => records.push(["trace", message])

  try {
    Date.now = () => 1000
    const beforeFirst = AdManagerBase.needToThrottleAd({
      systemStart: 0,
      showFirstDelay: 2000,
      showNextDelay: 100,
      lastShow: 0,
    })
    Date.now = () => 3000
    const beforeNext = AdManagerBase.needToThrottleAd({
      systemStart: 0,
      showFirstDelay: 2000,
      showNextDelay: 5000,
      lastShow: 1000,
    })
    Date.now = () => 7000
    const allowed = AdManagerBase.needToThrottleAd({
      systemStart: 0,
      showFirstDelay: 2000,
      showNextDelay: 5000,
      lastShow: 1000,
    })

    return {
      beforeFirst,
      beforeNext,
      allowed,
      records,
      configShape: {
        ids: Object.keys(AdManagerBase.config.ids),
        throttling: Object.keys(AdManagerBase.config.throttling),
        disabled: AdManagerBase.config.interstitialsDisabled,
      },
    }
  } finally {
    Date.now = originalNow
    log.trace = originalTrace
  }
}

async function runManagerScenario(AdManagerBase) {
  const manager = new AdManagerBase()
  const events = []
  manager.dispatch = (event, payload) => events.push([event, payload])

  const showAd = await manager.showAd("inter", false, true)
  const showRewardAd = await manager.showRewardAd("reward", false)
  const preloadInter = await manager.preloadNextInter("inter")
  const preloadReward = await manager.preloadNextReward("reward")
  manager.onAdStarted({ placement: "a" })
  manager.onAdEnded({ placement: "b" })

  return {
    showAd,
    showRewardAd,
    preloadInter,
    preloadReward,
    events,
    expectedEvents: [AdEvents.STARTED, AdEvents.ENDED],
  }
}

async function runAdActionScenario(AdAction) {
  const action = new AdAction()
  const records = []
  action.ads = {
    async showAd(placement, reward, preloadNext) {
      records.push(["showAd", placement, reward, preloadNext])
      return "inter-result"
    },
    async showRewardAd(placement, preloadNext) {
      records.push(["showRewardAd", placement, preloadNext])
      return "reward-result"
    },
  }

  const explicitInter = await action.showAd("inter-a", false, false)
  const explicitReward = await action.showAd("reward-a", true, false)
  const defaultReward = await action.showRewardAd()
  const executeBoolean = await action.execute(true)
  const executeObject = await action.execute({ placement: "obj", reward: false, preloadNext: false })

  return {
    explicitInter,
    explicitReward,
    defaultReward,
    executeBoolean,
    executeObject,
    unknown: AdResponse.UNKNOWN,
    records,
  }
}

async function runHelperScenario(helpers, di) {
  const originalGet = di.get
  const records = []
  di.get = (token) => {
    records.push(["di.get", token])
    return {
      async showAd(placement, reward) {
        records.push(["action.showAd", placement, reward])
        return reward ? "reward" : "inter"
      },
    }
  }

  try {
    return {
      inter: await helpers.showAd("inter-placement"),
      reward: await helpers.showReward("reward-placement"),
      records,
    }
  } finally {
    di.get = originalGet
  }
}

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry(
    (token) => {
      records.push(["bind", token])
      return makeBindSyntax(records, targets, token)
    },
    (token) => records.push(["unbind", token]),
    (token) => {
      records.push(["isBound", token])
      return false
    },
    (token) => {
      records.push(["rebind", token])
      return makeBindSyntax(records, targets, token)
    },
  )

  return { records, targets }
}

function makeBindSyntax(records, targets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
  }
  return syntax
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
