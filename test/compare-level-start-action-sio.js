"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesNotification } = require("../src-cjs/86178__mod.js")
const { LevelStartAction } = require("../src-cjs/19474_LevelStartAction.js")
const { GameState } = require("../src-cjs/65370_GameState.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { LevelStartActionSIO: OriginalLevelStartActionSIO } = require("../src-cjs/99629_LevelStartActionSIO.js")
const { LevelStartAction: RestoredLevelStartAction } = require("../src-restored/core/LevelStartAction.js")
const { LevelStartActionSIO: RestoredLevelStartActionSIO } = require("../src-restored/core/LevelStartActionSIO.js")

const originalDeps = {
  LevelStartActionSIO: OriginalLevelStartActionSIO,
}
const restoredDeps = {
  LevelStartActionSIO: RestoredLevelStartActionSIO,
}

const originalEnv = {
  baseBeforeLaunch: LevelStartAction.prototype.beforeLaunch,
  baseLaunch: LevelStartAction.prototype.launch,
  restoredBaseBeforeLaunch: RestoredLevelStartAction.prototype.beforeLaunch,
  restoredBaseLaunch: RestoredLevelStartAction.prototype.launch,
  diIsBound: core.di.isBound,
  diGet: core.di.get,
  diBind: core.di.bind,
  restoredDiIsBound: restoredCore.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiBind: restoredCore.di.bind,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelStartActionSIO),
  publicPrototypeMembers(originalDeps.LevelStartActionSIO),
  "restored LevelStartActionSIO public prototype differs",
)

const pendingComparisons = []

compareScenario("beforeLaunch reuses an already loaded data level", async (deps) => {
  const h = makeHarness(deps, {
    data: "known",
    levels: { known: { id: "known-continent" } },
  })
  await h.action.beforeLaunch()
  return snapshot(h)
})

compareScenario("beforeLaunch reads context data before reusing a loaded level", async (deps) => {
  const h = makeHarness(deps, {
    data: undefined,
    contextData: { l: "from-context", c: 4 },
    levels: { "from-context": { id: "context-continent" } },
  })
  await h.action.beforeLaunch()
  return snapshot(h)
})

compareScenario("beforeLaunch shows loading UI and loads missing level data", async (deps) => {
  const h = makeHarness(deps, {
    data: "remote-level",
    loadedData: { id: "loaded-level-data" },
  })
  await h.action.beforeLaunch()
  return snapshot(h)
})

compareScenario("launch creates a field and enters lobby in solo mode", async (deps) => {
  const h = makeHarness(deps, {
    contextData: { c: 3 },
    inSolo: true,
    levels: { solo: { id: "solo-continent" } },
  })
  await h.action.launch("solo")
  return snapshot(h)
})

compareScenario("launch initializes loaded level data and starts stage outside solo mode", async (deps) => {
  const h = makeHarness(deps, {
    contextData: undefined,
    inSolo: false,
    levelData: { id: "loaded-data-for-init" },
    createdContinent: { id: "created-continent" },
  })
  h.action.levelData = h.levelData
  await h.action.launch("fresh")
  return snapshot(h)
})

compareScenario("sendPush is intentionally disabled by the SIO subclass", async (deps) => {
  const h = makeHarness(deps)
  return {
    result: h.action.sendPush(TypesNotification.start, { payload: true }),
    records: h.records,
  }
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          module: "LevelStartActionSIO",
          prototype: publicPrototypeMembers(restoredDeps.LevelStartActionSIO),
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

function makeHarness(
  deps,
  {
    data,
    contextData,
    levels = {},
    inSolo = true,
    loadedData = { id: "loaded-data" },
    levelData,
    createdContinent = { id: "created-continent" },
  } = {},
) {
  const records = []
  const action = new deps.LevelStartActionSIO()
  const h = {
    action,
    contextData,
    createdContinent,
    field: { id: "field-view" },
    levelData,
    loadedData,
    records,
  }
  action.data = data
  action._contextChangePromise = Promise.resolve().then(() => {
    records.push(["contextChange.resolved"])
  })
  action.root = makeRoot(records)
  action.model = makeModel(records, { levels, contextData })
  action.social = { inSolo, me: { scoreSession: 99 } }
  action.inputManager = {
    start() {
      records.push(["input.start"])
    },
  }
  currentHarness = h
  return h
}

function makeRoot(records) {
  return {
    overlay: {
      blur() {
        records.push(["root.overlay.blur"])
      },
      unblur() {
        records.push(["root.overlay.unblur"])
      },
    },
    spinner: {
      show() {
        records.push(["root.spinner.show"])
      },
      hide() {
        records.push(["root.spinner.hide"])
      },
    },
    progressBar: {
      hide() {
        records.push(["root.progressBar.hide"])
      },
    },
    addChild(child) {
      records.push(["root.addChild", child?.id])
    },
  }
}

function makeModel(records, { levels, contextData }) {
  let state
  return {
    levels,
    disposeCurrentLevel: async () => {
      records.push(["model.disposeCurrentLevel"])
    },
    getContextData: () => {
      records.push(["model.getContextData"])
      return contextData
    },
    set state(value) {
      state = value
      records.push(["model.state", gameStateName(value)])
    },
    get state() {
      return state
    },
    setCurrentContinent(continent) {
      records.push(["model.setCurrentContinent", continent?.id, continent?.stageLevel])
    },
    startStage() {
      records.push(["model.startStage"])
    },
  }
}

function patchEnvironment() {
  LevelStartAction.prototype.beforeLaunch = async function beforeLaunch() {
    currentHarness?.records.push(["base.beforeLaunch", this.data])
  }
  LevelStartAction.prototype.launch = async function launch(levelId) {
    currentHarness?.records.push(["base.launch", levelId])
  }
  RestoredLevelStartAction.prototype.beforeLaunch = LevelStartAction.prototype.beforeLaunch
  RestoredLevelStartAction.prototype.launch = LevelStartAction.prototype.launch
  core.di.get = restoredCore.di.get = function get(token) {
    const name = tokenName(token)
    currentHarness?.records.push(["di.get", name])
    if (token === TypesNotification.start) {
      return {
        run: async () => {
          currentHarness?.records.push(["notification.start.run"])
        },
      }
    }
    if (token === TypesGame.actions.loadLevel) {
      return {
        run: async (levelId) => {
          currentHarness?.records.push(["loadLevel.run", levelId])
          return currentHarness.loadedData
        },
      }
    }
    if (token === TypesGame.views.fieldClass) return currentHarness.field
    if (token === TypesGame.levelModel) {
      return {
        init(levelData) {
          currentHarness?.records.push(["levelModel.init", levelData?.id])
          return currentHarness.createdContinent
        },
      }
    }
    return undefined
  }
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", tokenName(token)])
    return token === TypesNotification.start
  }
  core.di.bind = restoredCore.di.bind = function bind(token) {
    currentHarness?.records.push(["di.bind", tokenName(token)])
    return {
      toConstantValue(value) {
        currentHarness?.records.push(["di.toConstantValue", value?.id])
      },
    }
  }
}

function restoreEnvironment() {
  LevelStartAction.prototype.beforeLaunch = originalEnv.baseBeforeLaunch
  LevelStartAction.prototype.launch = originalEnv.baseLaunch
  RestoredLevelStartAction.prototype.beforeLaunch = originalEnv.restoredBaseBeforeLaunch
  RestoredLevelStartAction.prototype.launch = originalEnv.restoredBaseLaunch
  core.di.isBound = originalEnv.diIsBound
  core.di.get = originalEnv.diGet
  core.di.bind = originalEnv.diBind
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.bind = originalEnv.restoredDiBind
}

function snapshot(h) {
  return {
    actionContextData: h.action.contextData,
    actionLevelData: h.action.levelData,
    createdStageLevel: h.createdContinent.stageLevel,
    existingStageLevels: Object.fromEntries(
      Object.entries(h.action.model.levels).map(([key, value]) => [key, value.stageLevel]),
    ),
    records: h.records,
  }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function tokenName(token) {
  if (token === TypesGame.actions.loadLevel) return "actions.loadLevel"
  if (token === TypesGame.views.fieldClass) return "views.fieldClass"
  if (token === TypesGame.views.fieldInstance) return "views.fieldInstance"
  if (token === TypesGame.levelModel) return "levelModel"
  if (token === TypesNotification.start) return "notification.start"
  return String(token)
}

function gameStateName(value) {
  const entry = Object.entries(GameState).find(([, item]) => item === value)
  return entry?.[0] || String(value)
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
