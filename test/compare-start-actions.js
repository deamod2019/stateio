"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesFlow, TypesUI } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { StartScreenAction: OriginalStartScreenAction } = require("../src-cjs/44046_StartScreenAction.js")
const { StartGameAction: OriginalStartGameAction } = require("../src-cjs/51779_StartGameAction.js")
const { StartScreenAction: RestoredStartScreenAction } = require("../src-restored/core/StartScreenAction.js")
const { StartGameAction: RestoredStartGameAction } = require("../src-restored/core/StartGameAction.js")

const originalDeps = {
  StartScreenAction: OriginalStartScreenAction,
  StartGameAction: OriginalStartGameAction,
}
const restoredDeps = {
  StartScreenAction: RestoredStartScreenAction,
  StartGameAction: RestoredStartGameAction,
}

const originalEnv = {
  isBound: core.di.isBound,
  get: core.di.get,
  restoredIsBound: restoredCore.di.isBound,
  restoredGet: restoredCore.di.get,
}
let currentRecords = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.StartScreenAction),
  publicPrototypeMembers(originalDeps.StartScreenAction),
  "StartScreenAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.StartGameAction),
  publicPrototypeMembers(originalDeps.StartGameAction),
  "StartGameAction prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("start screen opens home when home screen is bound", (deps) =>
      exerciseStartScreen(deps.StartScreenAction, true),
    )
    await compareScenario("start screen falls back to gameplay without home binding", (deps) =>
      exerciseStartScreen(deps.StartScreenAction, false),
    )
    await compareScenario("start game runs bot popup, next flow, and banner lookup", (deps) =>
      exerciseStartGame(deps.StartGameAction),
    )

    console.log(
      JSON.stringify(
        {
          modules: ["StartScreenAction", "StartGameAction"],
          scenarios: 3,
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
  currentRecords = null
  const originalResult = normalize(await run(originalDeps))
  restoreEnvironment()
  currentRecords = null
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseStartScreen(Klass, homeBound) {
  const records = []
  currentRecords = records
  patchEnvironment({ homeBound, bannerBound: false })

  const action = new Klass()
  action.dispatch = (eventName, data) => records.push(["dispatch", eventName, data])
  const result = await action.execute()
  return { records, result }
}

async function exerciseStartGame(Klass) {
  const records = []
  currentRecords = records
  patchEnvironment({ homeBound: false, bannerBound: true })

  const action = new Klass()
  action.model = {}
  action.social = {
    async showBotPopup() {
      records.push(["social.showBotPopup"])
    },
  }
  action.levelNext = {
    async run() {
      records.push(["levelNext.run"])
    },
  }

  const result = await action.execute()
  return { records, result }
}

function patchEnvironment({ homeBound, bannerBound }) {
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentRecords?.push(["di.isBound", tokenLabel(token)])
    if (token === TypesUI.screen.HOME) return homeBound
    if (token === TypesGame.actions.bannerControllerGameDistribution) return bannerBound
    return false
  }
  core.di.get = restoredCore.di.get = function get(token) {
    currentRecords?.push(["di.get", tokenLabel(token)])
    return { token }
  }
}

function restoreEnvironment() {
  core.di.isBound = originalEnv.isBound
  core.di.get = originalEnv.get
  restoredCore.di.isBound = originalEnv.restoredIsBound
  restoredCore.di.get = originalEnv.restoredGet
}

function tokenLabel(token) {
  if (token === TypesUI.screen.HOME) return "TypesUI.screen.HOME"
  if (token === TypesGame.actions.bannerControllerGameDistribution) {
    return "TypesGame.actions.bannerControllerGameDistribution"
  }
  if (token === TypesFlow.LevelNext) return "TypesFlow.LevelNext"
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
