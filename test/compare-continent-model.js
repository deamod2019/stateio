"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { ContinentModel: OriginalContinentModel } = require("../src-cjs/36637_ContinentModel.js")
const { ContinentModel: RestoredContinentModel } = require("../src-restored/core/ContinentModel.js")
const { Building: OriginalBuilding } = require("../src-cjs/26511_Building.js")
const { Building: RestoredBuilding } = require("../src-restored/core/Building.js")
const { Population: OriginalPopulation } = require("../src-cjs/26630_Population.js")
const { Population: RestoredPopulation } = require("../src-restored/core/Population.js")
const { FighterGroupsSystem: OriginalFighterGroupsSystem } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredFighterGroupsSystem } = require("../src-restored/core/FighterGroupsSystem.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  ContinentModel: OriginalContinentModel,
  Building: OriginalBuilding,
  Population: OriginalPopulation,
  FighterGroupsSystem: OriginalFighterGroupsSystem,
}
const restoredDeps = {
  ContinentModel: RestoredContinentModel,
  Building: RestoredBuilding,
  Population: RestoredPopulation,
  FighterGroupsSystem: RestoredFighterGroupsSystem,
  RuntimeCore: restoredCore,
}
originalDeps.RuntimeCore = core

const originalDiGet = core.di.get
const originalRestoredDiGet = restoredCore.di.get
const originalLogWarn = originalRuntime.log.warn
const restoredLogWarn = restoredRuntime.log.warn
let currentHarness = null

try {
  assert.deepEqual(
    publicPrototypeMembers(restoredDeps.ContinentModel),
    publicPrototypeMembers(originalDeps.ContinentModel),
    "restored ContinentModel public prototype differs",
  )

  compareScenario("constructor shape", (deps) => {
    const model = new deps.ContinentModel()
    return {
      parsedSize: model.parsed.size,
      buildingsSize: model.buildings.size,
      stageLevel: model.stageLevel,
      hasTime: Boolean(model.time),
    }
  })

  compareScenario("init parses states and warns on missing shapes", (deps) => {
    const h = makeHarness(deps)
    h.model.init(makeContinentData())

    return {
      data: h.model.data,
      parsed: mapEntries(h.model.parsed),
      stageScores: h.model._stageScores,
      records: h.records,
      totalStages: h.model.totalStages,
      isFinished: h.model.isFinished,
    }
  })

  compareScenario("stage level setter and finished state", (deps) => {
    const h = makeHarness(deps)
    h.model.init(makeContinentData())
    h.model.stageLevel = 2
    return {
      stageLevel: h.model.stageLevel,
      isFinished: h.model.isFinished,
      totalStages: h.model.totalStages,
    }
  })

  compareScenario("getOrCreateBuildingEntity creates once and reuses", (deps) => {
    const h = makeHarness(deps)
    const stateData = { statePos: [3, 4], stateRadius: 12 }
    const first = h.model.getOrCreateBuildingEntity("state-a", stateData)
    const second = h.model.getOrCreateBuildingEntity("state-a", { ignored: true })

    return {
      sameEntity: first === second,
      buildingIds: Array.from(h.model.buildings.keys()),
      records: h.records,
    }
  })

  compareScenario("stage score includes owned buildings and active groups", (deps) => {
    const h = makeHarness(deps)
    h.model.init(makeContinentData())
    h.model.time = makeTime(2000, h.records)
    h.model.buildings.set("first-a", makeScoredBuilding(PlayerType.First, 7, deps))
    h.model.buildings.set("second", makeScoredBuilding(PlayerType.Second, 50, deps))
    h.model.buildings.set("first-b", makeScoredBuilding(PlayerType.First, 4, deps))
    resetGroups(deps)
    deps.FighterGroupsSystem._groups[0] = { Owner: PlayerType.First, Amount: 5 }
    deps.FighterGroupsSystem._groups[1] = { Owner: PlayerType.Second, Amount: 100 }

    return {
      score: h.model.getStageScore(),
      activeGroups: deps.FighterGroupsSystem.GetActiveGroups().length,
    }
  })

  compareScenario("captureStage records score and advances", (deps) => {
    const h = makeHarness(deps)
    h.model.init(makeContinentData())
    h.model.time = makeTime(1000, h.records)
    h.model.buildings.set("first", makeScoredBuilding(PlayerType.First, 10, deps))
    resetGroups(deps)
    deps.FighterGroupsSystem._groups[0] = { Owner: PlayerType.First, Amount: 2 }

    h.model.captureStage()

    return {
      stageLevel: h.model.stageLevel,
      stageScores: h.model._stageScores,
      totalScore: h.model.getTotalScore(),
      history: h.model.getHistory(),
      records: h.records,
    }
  })

  compareScenario("dispose destroys buildings and stops time", (deps) => {
    const h = makeHarness(deps)
    h.model.init(makeContinentData())
    h.model.time = makeTime(1000, h.records)
    h.model.buildings.set("a", makeDisposableBuilding("a", h.records))
    h.model.buildings.set("b", makeDisposableBuilding("b", h.records))

    h.model.dispose()

    return {
      buildingsSize: h.model.buildings.size,
      parsedSize: h.model.parsed.size,
      records: h.records,
    }
  })

  console.log(
    JSON.stringify(
      {
        module: "ContinentModel",
        prototype: publicPrototypeMembers(restoredDeps.ContinentModel),
        scenarios: 7,
        status: "ok",
      },
      null,
      2,
    ),
  )
} finally {
  core.di.get = originalDiGet
  restoredCore.di.get = originalRestoredDiGet
  originalRuntime.log.warn = originalLogWarn
  restoredRuntime.log.warn = restoredLogWarn
  currentHarness = null
  resetGroups(originalDeps)
  resetGroups(restoredDeps)
}

function compareScenario(name, run) {
  resetGroups(originalDeps)
  resetGroups(restoredDeps)
  originalRuntime.log.warn = function warnFromTest(...args) {
    currentHarness?.records.push(["log.warn", ...args])
  }
  core.di.get = function getFromTestContainer(token) {
    if (!currentHarness) return originalDiGet.call(core.di, token)
    return currentHarness.getService(token)
  }
  const originalResult = normalize(run(originalDeps))
  currentHarness = null
  originalRuntime.log.warn = originalLogWarn
  restoredRuntime.log.warn = function warnFromTest(...args) {
    currentHarness?.records.push(["log.warn", ...args])
  }
  restoredCore.di.get = function getFromRestoredTestContainer(token) {
    if (!currentHarness) return originalRestoredDiGet.call(restoredCore.di, token)
    return currentHarness.getService(token)
  }
  const restoredResult = normalize(run(restoredDeps))
  currentHarness = null
  restoredRuntime.log.warn = restoredLogWarn
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeHarness(deps) {
  const records = []
  const model = new deps.ContinentModel()
  const services = new Map()
  const harness = {
    model,
    records,
    deps,
    getService(token) {
      records.push(["di.get", labelToken(token, deps)])
      if (!services.has(token)) services.set(token, makeBuildingFactory(records))
      return services.get(token)
    },
  }
  currentHarness = harness
  return harness
}

function makeBuildingFactory(records) {
  return {
    init(id, stateData) {
      records.push(["building.init", id, stateData])
      return { id, stateData }
    },
  }
}

function makeContinentData() {
  return {
    id: "earth",
    stages: [
      {
        states: [
          {
            id: "a",
            x: 10,
            y: 20,
            radius: 12,
            shapes: ["shape-a"],
            fillColor: "#D2D2D2",
          },
          {
            id: "missing",
            x: 1,
            y: 2,
            fillColor: "#B44935",
          },
        ],
      },
      {
        states: [
          {
            id: "b",
            x: 30,
            y: 40,
            shapes: ["shape-b"],
            fillColor: "#70C6EB",
          },
        ],
      },
    ],
  }
}

function makeScoredBuilding(owner, current, deps) {
  return {
    owner,
    get(token) {
      if (token !== deps.Population) return undefined
      return { current }
    },
  }
}

function makeDisposableBuilding(id, records) {
  return {
    destroy() {
      records.push(["building.destroy", id])
    },
  }
}

function makeTime(totalTime, records) {
  return {
    getTotalTime() {
      records.push(["time.getTotalTime"])
      return totalTime
    },
    stop() {
      records.push(["time.stop"])
    },
  }
}

function resetGroups(deps) {
  if (typeof deps.FighterGroupsSystem.Clear === "function") {
    deps.FighterGroupsSystem.Clear()
  } else {
    deps.FighterGroupsSystem._groups.fill(null)
  }
  deps.FighterGroupsSystem._lastIndex = -1
}

function mapEntries(map) {
  return Array.from(map.entries()).sort(([left], [right]) => left.localeCompare(right))
}

function labelToken(token, deps) {
  if (token === deps.Building) return "Building"
  return token?.name || String(token)
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
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
