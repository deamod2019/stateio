"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { SOCIAL_POPUP, SocialEvents } = require("../src-cjs/48616__mod.js")
const { UIEvents } = require("../src-cjs/83430_InversifyContext.js")
const { TypesFlow } = require("../src-cjs/86178__mod.js")
const { GameState } = require("../src-cjs/65370_GameState.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { DestroyFieldAction: OriginalDestroyFieldAction } = require("../src-cjs/196_DestroyFieldAction.js")
const { LevelRestartAction: OriginalLevelRestartAction } = require("../src-cjs/56403_LevelRestartAction.js")
const { LevelRestartActionSIO: OriginalLevelRestartActionSIO } = require("../src-cjs/83042_LevelRestartActionSIO.js")
const { LevelNextAction: OriginalLevelNextAction } = require("../src-cjs/10274_LevelNextAction.js")
const { LevelNextActionSIO: OriginalLevelNextActionSIO } = require("../src-cjs/15872_LevelNextActionSIO.js")
const { DestroyFieldAction: RestoredDestroyFieldAction } = require("../src-restored/core/DestroyFieldAction.js")
const { LevelRestartAction: RestoredLevelRestartAction } = require("../src-restored/core/LevelRestartAction.js")
const { LevelRestartActionSIO: RestoredLevelRestartActionSIO } = require("../src-restored/core/LevelRestartActionSIO.js")
const { LevelNextAction: RestoredLevelNextAction } = require("../src-restored/core/LevelNextAction.js")
const { LevelNextActionSIO: RestoredLevelNextActionSIO } = require("../src-restored/core/LevelNextActionSIO.js")

const originalDeps = {
  DestroyFieldAction: OriginalDestroyFieldAction,
  LevelRestartAction: OriginalLevelRestartAction,
  LevelRestartActionSIO: OriginalLevelRestartActionSIO,
  LevelNextAction: OriginalLevelNextAction,
  LevelNextActionSIO: OriginalLevelNextActionSIO,
}
const restoredDeps = {
  DestroyFieldAction: RestoredDestroyFieldAction,
  LevelRestartAction: RestoredLevelRestartAction,
  LevelRestartActionSIO: RestoredLevelRestartActionSIO,
  LevelNextAction: RestoredLevelNextAction,
  LevelNextActionSIO: RestoredLevelNextActionSIO,
}

const originalEnv = {
  dateNow: Date.now,
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
  originalRestartLast: OriginalLevelRestartAction.LAST_RESTART,
  restoredRestartLast: RestoredLevelRestartAction.LAST_RESTART,
  originalNextAttempts: OriginalLevelNextAction.FREE_SOLO_ATTEMPTS,
  restoredNextAttempts: RestoredLevelNextAction.FREE_SOLO_ATTEMPTS,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelRestartAction),
  publicPrototypeMembers(originalDeps.LevelRestartAction),
  "restored LevelRestartAction public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelRestartActionSIO),
  publicPrototypeMembers(originalDeps.LevelRestartActionSIO),
  "restored LevelRestartActionSIO public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelNextAction),
  publicPrototypeMembers(originalDeps.LevelNextAction),
  "restored LevelNextAction public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelNextActionSIO),
  publicPrototypeMembers(originalDeps.LevelNextActionSIO),
  "restored LevelNextActionSIO public prototype differs",
)

const pendingComparisons = []

compareScenario("LevelRestartAction ad gate and launch timestamp update", async (deps) => {
  Date.now = () => 5000
  deps.LevelRestartAction.LAST_RESTART = 1000
  const h = makeRestartHarness(deps.LevelRestartAction)
  const needSoon = h.action.needToShowAD()
  deps.LevelRestartAction.LAST_RESTART = -20000
  const needLate = h.action.needToShowAD()
  deps.LevelRestartAction.LAST_RESTART = 1000
  await h.action.launch("ignored")
  return {
    initial: {
      trackEvent: h.action.TRACK_EVENT,
      showAdInterval: h.action.SHOW_AD_INTERVAL,
    },
    needSoon,
    needLate,
    scoreSession: h.action.social.me.scoreSession,
    lastRestart: deps.LevelRestartAction.LAST_RESTART,
    records: h.records,
  }
})

compareScenario("LevelRestartActionSIO resets current UI/model before generic restart", async (deps) => {
  Date.now = () => 7000
  deps.LevelRestartAction.LAST_RESTART = 2000
  const h = makeRestartHarness(deps.LevelRestartActionSIO)
  h.action.root = makeRoot(h.records)
  h.action.model = {
    restartLevel() {
      h.records.push(["model.restartLevel"])
    },
  }
  await h.action.launch("ignored")
  return {
    lastRestart: deps.LevelRestartAction.LAST_RESTART,
    records: h.records,
  }
})

compareScenario("LevelNextAction handles solo, same opponent, accepted invite, and cancelled fallback", async (deps) => {
  deps.LevelNextAction.FREE_SOLO_ATTEMPTS = 2
  const h = makeNextHarness(deps.LevelNextAction)
  h.action.gotoNextLevel = async (wait) => h.records.push(["gotoNextLevel", wait])
  h.action.playNextSolo = async () => h.records.push(["playNextSolo"])

  await h.action.launch()
  await h.action.launch(h.action.social.opponent)
  h.nextPlayWithResult = SOCIAL_POPUP.ACCEPTED
  await h.action.launch({ id: "new-opponent" })
  h.nextPlayWithResult = SOCIAL_POPUP.CANCELLED
  await h.action.launch({ id: "cancel-opponent" })

  return {
    initial: {
      trackEvent: h.action.TRACK_EVENT,
      needToShowAD: h.action.needToShowAD(),
    },
    freeAttempts: deps.LevelNextAction.FREE_SOLO_ATTEMPTS,
    records: h.records,
  }
})

compareScenario("LevelNextAction default playNextSolo and gotoNextLevel run level start", async (deps) => {
  const h = makeNextHarness(deps.LevelNextAction)
  await h.action.playNextSolo()
  await h.action.gotoNextLevel(true)
  return {
    waitForContextChange: h.action.levelStart.waitForContextChange,
    records: h.records,
  }
})

compareScenario("LevelNextActionSIO advances within current continent stage", async (deps) => {
  const h = makeSioNextHarness(deps)
  h.model.gotoNextLevelStageResult = true
  const pending = h.action.gotoNextLevel(true)
  await pending
  h.resolveContext()
  await Promise.resolve()
  return snapshotSioNext(h)
})

compareScenario("LevelNextActionSIO rebuilds field when the continent has no next stage", async (deps) => {
  const h = makeSioNextHarness(deps)
  h.model.gotoNextLevelStageResult = false
  const pending = h.action.gotoNextLevel(false)
  await pending
  h.resolveContext()
  await Promise.resolve()
  return snapshotSioNext(h)
})

compareScenario("LevelNextActionSIO playNextSolo delegates to gotoNextLevel", async (deps) => {
  const h = makeSioNextHarness(deps)
  h.action.gotoNextLevel = async (wait) => h.records.push(["gotoNextLevel", wait])
  await h.action.playNextSolo()
  return h.records
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          modules: [
            "LevelRestartAction",
            "LevelRestartActionSIO",
            "LevelNextAction",
            "LevelNextActionSIO",
          ],
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
    patchEnvironment(originalDeps)
    currentHarness = null
    const originalResult = normalize(await run(originalDeps))
    patchEnvironment(restoredDeps)
    currentHarness = null
    const restoredResult = normalize(await run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeRestartHarness(Klass) {
  const records = []
  const action = new Klass()
  action.social = { me: { scoreSession: 99 } }
  currentHarness = { action, records }
  return currentHarness
}

function makeNextHarness(Klass) {
  const records = []
  const h = { records, nextPlayWithResult: SOCIAL_POPUP.ACCEPTED }
  const opponent = { id: "current-opponent" }
  const action = new Klass()
  action.social = {
    opponent,
    async playSolo() {
      records.push(["social.playSolo"])
    },
    async playWith(candidate, withContext) {
      records.push(["social.playWith", candidate?.id, withContext])
      return h.nextPlayWithResult
    },
  }
  action.levelStart = {
    waitForContextChange: false,
    async run() {
      records.push(["levelStart.run", action.levelStart.waitForContextChange])
    },
  }
  h.action = action
  currentHarness = h
  return h
}

function makeSioNextHarness(deps) {
  const records = []
  let resolveContext = null
  const model = {
    gotoNextLevelStageResult: true,
    state: GameState.GAMEPLAY,
    cookie: {
      syncTime() {
        records.push(["cookie.syncTime"])
      },
    },
    gotoNextLevelStage() {
      records.push(["model.gotoNextLevelStage"])
      return this.gotoNextLevelStageResult
    },
    startStage() {
      records.push(["model.startStage"])
    },
    getAssociatedUsers() {
      records.push(["model.getAssociatedUsers"])
      return [{ id: "me" }, { id: "opponent" }]
    },
  }
  const action = new deps.LevelNextActionSIO()
  action.model = model
  action.levelStart = {
    waitForContextChange: null,
    async run() {
      records.push(["levelStart.run", action.levelStart.waitForContextChange])
    },
  }
  action.social = {
    once(eventName, callback) {
      records.push(["social.once", eventName === SocialEvents.CONTEXT_CHANGE])
      resolveContext = callback
    },
  }
  action.dispatch = function dispatch(eventName, payload) {
    records.push([
      "dispatch",
      eventName === UIEvents.SCREEN_CHANGED,
      payload?.id,
      payload?.props?.participants?.map((user) => user.id).join(","),
    ])
  }
  const h = {
    action,
    destroyFieldToken: deps.DestroyFieldAction,
    model,
    records,
    resolveContext() {
      if (!resolveContext) throw new Error("context resolver was not registered")
      records.push(["resolve-context"])
      resolveContext()
    },
  }
  currentHarness = h
  return h
}

function makeRoot(records) {
  return {
    progressBar: {
      hide() {
        records.push(["root.progressBar.hide"])
      },
    },
    overlay: {
      unblur() {
        records.push(["root.overlay.unblur"])
      },
    },
  }
}

function patchEnvironment(deps) {
  Date.now = originalEnv.dateNow
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", tokenName(token, deps)])
    return true
  }
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness?.records.push(["di.get", tokenName(token, deps)])
    if (token === currentHarness?.destroyFieldToken) {
      return {
        async run() {
          currentHarness?.records.push(["destroyField.run"])
        },
      }
    }
    return {
      async run(data) {
        currentHarness?.records.push(["di.run", tokenName(token, deps), data])
      },
    }
  }
}

function restoreEnvironment() {
  Date.now = originalEnv.dateNow
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  OriginalLevelRestartAction.LAST_RESTART = originalEnv.originalRestartLast
  RestoredLevelRestartAction.LAST_RESTART = originalEnv.restoredRestartLast
  OriginalLevelNextAction.FREE_SOLO_ATTEMPTS = originalEnv.originalNextAttempts
  RestoredLevelNextAction.FREE_SOLO_ATTEMPTS = originalEnv.restoredNextAttempts
}

function snapshotSioNext(h) {
  return {
    waitForContextChange: h.action.levelStart.waitForContextChange,
    records: h.records,
  }
}

function tokenName(token, deps) {
  if (token === TypesFlow.UI.startScreenAction) return "TypesFlow.UI.startScreenAction"
  if (token === deps.DestroyFieldAction) return "DestroyFieldAction"
  if (token === TypesGame.actions.loadLevel) return "TypesGame.actions.loadLevel"
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
