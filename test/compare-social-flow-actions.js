"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { log } = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const {
  TypesAnalytics,
  TypesFlow,
  TypesNotification,
} = require("../src-cjs/86178__mod.js")
const { SocialEvents } = require("../src-cjs/48616__mod.js")
const { SocialFlowAction: OriginalSocialFlowAction } = require("../src-cjs/3057_SocialFlowAction.js")
const { LevelStartAction: OriginalLevelStartAction } = require("../src-cjs/19474_LevelStartAction.js")
const { SocialFlowAction: RestoredSocialFlowAction } = require("../src-restored/core/SocialFlowAction.js")
const { LevelStartAction: RestoredLevelStartAction } = require("../src-restored/core/LevelStartAction.js")

const originalDeps = {
  SocialFlowAction: OriginalSocialFlowAction,
  LevelStartAction: OriginalLevelStartAction,
}
const restoredDeps = {
  SocialFlowAction: RestoredSocialFlowAction,
  LevelStartAction: RestoredLevelStartAction,
}

const originalEnv = {
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
  logDebug: log.debug,
  restoredLogDebug: restoredRuntime.log.debug,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.SocialFlowAction),
  publicPrototypeMembers(originalDeps.SocialFlowAction),
  "restored SocialFlowAction public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelStartAction),
  publicPrototypeMembers(originalDeps.LevelStartAction),
  "restored LevelStartAction public prototype differs",
)

const pendingComparisons = []

compareScenario("SocialFlowAction execute runs ad, launch, and tracking in order", async (deps) => {
  const h = makeHarness(deps.SocialFlowAction)
  h.action.TRACK_EVENT = "flow"
  h.action.launch = async (data) => h.records.push(["launch", data])
  await h.action.execute({ id: "payload" })
  return h.records
})

compareScenario("SocialFlowAction can skip ads when needToShowAD is false", async (deps) => {
  const h = makeHarness(deps.SocialFlowAction)
  h.action.needToShowAD = () => false
  await h.action.beforeLaunch()
  return h.records
})

compareScenario("SocialFlowAction push helpers and banner display", async (deps) => {
  const h = makeHarness(deps.SocialFlowAction)
  await h.action.sendPushAsync("push-token", { message: "async" })
  h.action.sendPush("push-token", { message: "fire" })
  await Promise.resolve()
  h.action.tryToShowBanner()
  h.action.track()
  return h.records
})

compareScenario("LevelStartAction constructor and launch reset score/start screen", async (deps) => {
  const h = makeHarness(deps.LevelStartAction)
  const initial = {
    trackEvent: h.action.TRACK_EVENT,
    waitForContextChange: h.action.waitForContextChange,
  }
  h.action.social.me.scoreSession = 99
  await h.action.launch("level-1")
  return {
    initial,
    scoreSession: h.action.social.me.scoreSession,
    records: h.records,
  }
})

compareScenario("LevelStartAction beforeLaunch without context wait sends start push", async (deps) => {
  const h = makeHarness(deps.LevelStartAction)
  await h.action.beforeLaunch()
  return h.records
})

compareScenario("LevelStartAction beforeLaunch waits for social context change when enabled", async (deps) => {
  const h = makeHarness(deps.LevelStartAction)
  h.action.waitForContextChange = true
  const pending = h.action.beforeLaunch()
  await Promise.resolve()
  h.records.push(["before-resolve"])
  h.resolveContext()
  await pending
  return h.records
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          modules: ["SocialFlowAction", "LevelStartAction"],
          socialPrototype: publicPrototypeMembers(restoredDeps.SocialFlowAction),
          levelStartPrototype: publicPrototypeMembers(restoredDeps.LevelStartAction),
          scenarios: pendingComparisons.length,
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
  .finally(() => {
    restoreEnvironment()
    currentHarness = null
  })

function compareScenario(name, run) {
  pendingComparisons.push(async () => {
    patchEnvironment()
    currentHarness = null
    const originalResult = normalize(await run(originalDeps))
    currentHarness = null
    const restoredResult = normalize(await run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeHarness(Klass) {
  const records = []
  let resolveContext = null
  const action = new Klass()
  action.social = {
    session: { ftue: false },
    me: { scoreSession: 0 },
    once(eventName, callback) {
      records.push(["social.once", eventName === SocialEvents.CONTEXT_CHANGE])
      resolveContext = callback
    },
  }
  action.adAction = {
    async run() {
      records.push(["adAction.run"])
    },
  }
  action.gameConfig = { useBannerAd: true }
  action.adManager = {
    showBanner() {
      records.push(["adManager.showBanner"])
    },
  }
  currentHarness = {
    action,
    records,
    resolveContext() {
      if (!resolveContext) throw new Error("context resolver was not registered")
      records.push(["resolve-context"])
      resolveContext()
    },
  }
  return currentHarness
}

function patchEnvironment() {
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", tokenLabel(token)])
    return true
  }
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness?.records.push(["lazyGet", tokenLabel(token)])
    return {
      async run(data) {
        currentHarness?.records.push(["lazyGet.run", tokenLabel(token), data])
      },
      track(eventName) {
        currentHarness?.records.push(["tracker.track", eventName])
      },
    }
  }
  log.debug = function debug(...args) {
    currentHarness?.records.push(["log.debug", args[0], args[1] === currentHarness?.action])
  }
  restoredRuntime.log.debug = log.debug
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  log.debug = originalEnv.logDebug
  restoredRuntime.log.debug = originalEnv.restoredLogDebug
}

function tokenLabel(token) {
  if (token === TypesAnalytics.tracker) return "TypesAnalytics.tracker"
  if (token === TypesFlow.UI.startScreenAction) return "TypesFlow.UI.startScreenAction"
  if (token === TypesNotification.start) return "TypesNotification.start"
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
