"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")
const { PauseAction: OriginalPauseAction } = require("../src-cjs/92287_PauseAction.js")
const { StageEndAction: OriginalStageEndAction } = require("../src-cjs/12079_StageEndAction.js")
const { PauseAction: RestoredPauseAction } = require("../src-restored/core/PauseAction.js")
const { StageEndAction: RestoredStageEndAction } = require("../src-restored/core/StageEndAction.js")

const originalDeps = {
  PauseAction: OriginalPauseAction,
  StageEndAction: OriginalStageEndAction,
}
const restoredDeps = {
  PauseAction: RestoredPauseAction,
  StageEndAction: RestoredStageEndAction,
}

const originalEnv = {
  diGet: core.di.get,
  restoredDiGet: restoredCore.di.get,
}
let currentRecords = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PauseAction),
  publicPrototypeMembers(originalDeps.PauseAction),
  "PauseAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.StageEndAction),
  publicPrototypeMembers(originalDeps.StageEndAction),
  "StageEndAction prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("pause default true", (deps) => exercisePause(deps.PauseAction))
    await compareScenario("pause explicit false", (deps) => exercisePause(deps.PauseAction, false))
    await compareScenario("stage end solo win", (deps) =>
      exerciseStageEnd(deps.StageEndAction, { inSolo: true, win: true }),
    )
    await compareScenario("stage end solo loss", (deps) =>
      exerciseStageEnd(deps.StageEndAction, { inSolo: true, win: false }),
    )
    await compareScenario("stage end social win", (deps) =>
      exerciseStageEnd(deps.StageEndAction, { inSolo: false, win: true }),
    )
    await compareScenario("stage end social loss", (deps) =>
      exerciseStageEnd(deps.StageEndAction, { inSolo: false, win: false }),
    )
    await compareScenario("stage end ad gate disabled", (deps) => {
      const action = new deps.StageEndAction()
      return action.needToShowAD()
    })

    console.log(
      JSON.stringify(
        {
          modules: ["PauseAction", "StageEndAction"],
          scenarios: 7,
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
    core.di.get = originalEnv.diGet
    restoredCore.di.get = originalEnv.restoredDiGet
    currentRecords = null
  })

async function compareScenario(name, run) {
  core.di.get = originalEnv.diGet
  restoredCore.di.get = originalEnv.restoredDiGet
  currentRecords = null
  const originalResult = normalize(await run(originalDeps))
  core.di.get = originalEnv.diGet
  restoredCore.di.get = originalEnv.restoredDiGet
  currentRecords = null
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exercisePause(Klass, paused) {
  const records = []
  const action = new Klass()
  action.dispatch = (eventName, value) => records.push(["dispatch", eventName, value])

  const result = arguments.length === 2 ? await action.execute(paused) : await action.execute()
  return { records, result }
}

async function exerciseStageEnd(Klass, options) {
  const records = []
  currentRecords = records
  core.di.get = restoredCore.di.get = diGet

  const action = new Klass()
  action.social = { me: { scoreSession: 0 } }
  action.model = {
    meta: {
      loseMultiplier: 3,
      getReward() {
        records.push(["meta.getReward"])
        return 11
      },
    },
    cookie: { absoluteTryNum: 7 },
    social: { inSolo: options.inSolo },
    currentContinent: {
      getTotalScore() {
        records.push(["continent.getTotalScore"])
        return 12.6
      },
    },
    offerX3() {
      records.push(["model.offerX3"])
      return "offer-x3"
    },
  }
  action.levelNext = {
    async run() {
      records.push(["levelNext.run"])
    },
  }
  action.dispatch = (eventName, data) => records.push(["dispatch", eventName, data])

  const result = await action.launch(options.win)
  return {
    records,
    result,
    absoluteTryNum: action.model.cookie.absoluteTryNum,
    scoreSession: action.social.me.scoreSession,
  }
}

function diGet(token) {
  if (token === TypesGame.actions.tournamentPostScore) {
    return {
      async run(data) {
        currentRecords.push(["tournamentPostScore.run", data])
      },
    }
  }
  if (token === TypesGame.actions.winPopup) {
    return {
      async run(data) {
        currentRecords.push(["winPopup.run", normalizePopupData(data)])
      },
    }
  }
  if (token === TypesGame.actions.giftPopup) {
    return {
      async run(data) {
        currentRecords.push(["giftPopup.run", data])
      },
    }
  }
  if (token === TypesGame.actions.battleResultsPopup) {
    return {
      async run(data) {
        currentRecords.push(["battleResultsPopup.run", data])
      },
    }
  }

  throw new Error(`unexpected token ${String(token)}`)
}

function normalizePopupData(data) {
  if (data?.id === PopupType.WIN_STAGE) {
    return { id: "WIN_STAGE", props: data.props }
  }
  return data
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
