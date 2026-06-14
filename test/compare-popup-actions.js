"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { UIEvents } = require("../src-cjs/83430_InversifyContext.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { ShowWinPopupAction: OriginalShowWinPopupAction } = require("../src-cjs/47665_ShowWinPopupAction.js")
const { ShowGiftPopupAction: OriginalShowGiftPopupAction } = require("../src-cjs/97586_ShowGiftPopupAction.js")
const { BattleResultsPopupAction: OriginalBattleResultsPopupAction } = require("../src-cjs/10379_BattleResultsPopupAction.js")
const { ShowWinPopupAction: RestoredShowWinPopupAction } = require("../src-restored/core/ShowWinPopupAction.js")
const { ShowGiftPopupAction: RestoredShowGiftPopupAction } = require("../src-restored/core/ShowGiftPopupAction.js")
const { BattleResultsPopupAction: RestoredBattleResultsPopupAction } = require("../src-restored/core/BattleResultsPopupAction.js")

const originalDeps = {
  ShowWinPopupAction: OriginalShowWinPopupAction,
  ShowGiftPopupAction: OriginalShowGiftPopupAction,
  BattleResultsPopupAction: OriginalBattleResultsPopupAction,
}
const restoredDeps = {
  ShowWinPopupAction: RestoredShowWinPopupAction,
  ShowGiftPopupAction: RestoredShowGiftPopupAction,
  BattleResultsPopupAction: RestoredBattleResultsPopupAction,
}

const originalEnv = {
  diIsBound: core.di.isBound,
  diGet: core.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
  restoredDiGet: restoredCore.di.get,
  originalLogDebug: originalRuntime.log.debug,
  restoredLogDebug: restoredRuntime.log.debug,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.ShowWinPopupAction),
  publicPrototypeMembers(originalDeps.ShowWinPopupAction),
  "ShowWinPopupAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.ShowGiftPopupAction),
  publicPrototypeMembers(originalDeps.ShowGiftPopupAction),
  "ShowGiftPopupAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.BattleResultsPopupAction),
  publicPrototypeMembers(originalDeps.BattleResultsPopupAction),
  "BattleResultsPopupAction prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("win popup merges default props and waits for onContinue", (deps) =>
      exerciseWinPopup(deps.ShowWinPopupAction, {
        id: PopupType.WIN_STAGE,
        props: { coins: 99, custom: "x" },
        currentContinent: { getStageScore: () => 42 },
      }),
    )
    await compareScenario("win popup uses zero stage score without current continent", (deps) =>
      exerciseWinPopup(deps.ShowWinPopupAction, {
        id: PopupType.WIN_LEVEL,
        props: {},
        currentContinent: null,
      }),
    )
    await compareScenario("gift popup includes skin manager reward when bound", (deps) =>
      exerciseGiftPopup(deps.ShowGiftPopupAction, true),
    )
    await compareScenario("gift popup leaves reward undefined when skin manager is unbound", (deps) =>
      exerciseGiftPopup(deps.ShowGiftPopupAction, false),
    )
    await compareScenario("battle results popup defaults to win and waits for onContinue", (deps) =>
      exerciseBattleResultsPopup(deps.BattleResultsPopupAction),
    )
    await compareScenario("battle results popup accepts explicit lose flag", (deps) =>
      exerciseBattleResultsPopup(deps.BattleResultsPopupAction, false),
    )

    console.log(
      JSON.stringify(
        {
          modules: ["ShowWinPopupAction", "ShowGiftPopupAction", "BattleResultsPopupAction"],
          scenarios: 6,
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

async function compareScenario(name, run) {
  restoreEnvironment()
  currentHarness = null
  const originalResult = normalize(await run(originalDeps))
  restoreEnvironment()
  currentHarness = null
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseWinPopup(Klass, { id, props, currentContinent }) {
  const records = []
  currentHarness = { records, skinBound: false }
  patchEnvironment()

  const action = new Klass()
  action.model = {
    meta: {
      getReward() {
        records.push(["model.meta.getReward"])
        return 17
      },
    },
    currentContinent:
      currentContinent && typeof currentContinent.getStageScore === "function"
        ? {
            getStageScore() {
              records.push(["model.currentContinent.getStageScore"])
              return currentContinent.getStageScore()
            },
          }
        : currentContinent,
    offerX3() {
      records.push(["model.offerX3"])
      return "offer-x3"
    },
  }
  action.dispatch = (eventName, payload) => {
    records.push(["dispatch", eventName, summarizePayload(payload)])
    assert.equal(eventName, UIEvents.POPUP)
    payload.props.onContinue("collected")
  }

  const result = await action.execute({ id, props })
  return { records, result }
}

async function exerciseGiftPopup(Klass, skinBound) {
  const records = []
  currentHarness = { records, skinBound }
  patchEnvironment()

  const action = new Klass()
  action.model = {
    currentContinent: {
      stageLevel: 3,
      totalStages: 8,
    },
  }
  action.dispatch = (eventName, payload) => {
    records.push(["dispatch", eventName, summarizePayload(payload)])
    assert.equal(eventName, UIEvents.POPUP)
    payload.props.onContinue("gifted")
  }

  const result = await action.execute()
  return { records, result }
}

async function exerciseBattleResultsPopup(Klass, explicitWin) {
  const records = []
  currentHarness = { records, skinBound: false }
  patchEnvironment()

  const action = new Klass()
  action.model = {}
  action.social = {}
  action.dispatch = (eventName, payload) => {
    records.push(["dispatch", eventName, summarizePayload(payload)])
    assert.equal(eventName, UIEvents.POPUP)
    payload.props.onContinue(payload.props.win ? "shared" : "retry")
  }

  const result =
    arguments.length === 2 ? await action.execute(explicitWin) : await action.execute()
  return { records, result }
}

function patchEnvironment() {
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", tokenLabel(token)])
    return token === TypesGame.skinManager && currentHarness.skinBound
  }
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness?.records.push(["di.get", tokenLabel(token)])
    if (token !== TypesGame.skinManager) return undefined
    return {
      getGift() {
        currentHarness?.records.push(["skinManager.getGift"])
        return "skin-gift"
      },
    }
  }
  const debug = function debug(...args) {
    currentHarness?.records.push(["log.debug", ...args])
  }
  originalRuntime.log.debug = debug
  restoredRuntime.log.debug = debug
}

function restoreEnvironment() {
  core.di.isBound = originalEnv.diIsBound
  core.di.get = originalEnv.diGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  originalRuntime.log.debug = originalEnv.originalLogDebug
  restoredRuntime.log.debug = originalEnv.restoredLogDebug
}

function summarizePayload(payload) {
  return {
    id: payload.id,
    props: {
      ...payload.props,
      onContinue: typeof payload.props.onContinue,
    },
  }
}

function tokenLabel(token) {
  if (token === TypesGame.skinManager) return "TypesGame.skinManager"
  return String(token)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
