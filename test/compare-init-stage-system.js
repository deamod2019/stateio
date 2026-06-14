"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const { InitStageSystem: OriginalInitStageSystem } = require("../src-cjs/11073_InitStageSystem.js")
const { InitStageSystem: RestoredInitStageSystem } = require("../src-restored/core/InitStageSystem.js")
const { StateShapeView: OriginalStateShapeView } = require("../src-cjs/91585_StateShapeView.js")
const { StateShapeView: RestoredStateShapeView } = require("../src-restored/core/StateShapeView.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = { InitStageSystem: OriginalInitStageSystem, StateShapeView: OriginalStateShapeView }
const restoredDeps = { InitStageSystem: RestoredInitStageSystem, StateShapeView: RestoredStateShapeView }
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.InitStageSystem),
  publicPrototypeMembers(originalDeps.InitStageSystem),
  "restored InitStageSystem public prototype differs",
)

const pendingComparisons = []

core.di.get = function getFromTestContainer() {
  return {
    emit(event) {
      currentHarness.records.push(["dispatcher.emit", event])
    },
  }
}

compareAsyncScenario("onAddedToEngine initializes stage owners and emits loaded", async (deps) => {
  const h = makeHarness(deps, 1)
  h.system.onAddedToEngine()
  await Promise.resolve()
  return snapshot(h)
})

compareAsyncScenario("future stage buildings become inactive neutral", async (deps) => {
  const h = makeHarness(deps, 0)
  h.system.onAddedToEngine()
  await Promise.resolve()
  return snapshot(h)
})

compareAsyncScenario("past stage buildings become inactive first player", async (deps) => {
  const h = makeHarness(deps, 2)
  h.system.onAddedToEngine()
  await Promise.resolve()
  return snapshot(h)
})

pendingComparisons
  .reduce((promise, runComparison) => promise.then(runComparison), Promise.resolve())
  .then(() => {
    console.log(
      JSON.stringify(
        {
          module: "InitStageSystem",
          prototype: publicPrototypeMembers(restoredDeps.InitStageSystem),
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

function compareAsyncScenario(name, run) {
  pendingComparisons.push(
    () => withHarness(async () => {
      const originalResult = normalize(await run(originalDeps))
      const restoredResult = normalize(await run(restoredDeps))
      assert.deepEqual(restoredResult, originalResult, name)
    }),
  )
}

async function withHarness(run) {
  try {
    return await run()
  } finally {
    currentHarness = null
  }
}

function makeHarness(deps, stageLevel) {
  const records = []
  const buildings = new Map()
  const currentContinent = {
    parsed: new Map([
      ["past", { stage: 0, startOwner: PlayerType.Second }],
      ["current", { stage: 1, startOwner: PlayerType.Third }],
      ["future", { stage: 2, startOwner: PlayerType.Fourth }],
    ]),
    getOrCreateBuildingEntity(stateId, stateData) {
      records.push(["continent.getOrCreate", stateId, stateData.stage])
      if (!buildings.has(stateId)) buildings.set(stateId, makeBuilding(deps, stateId, records))
      return buildings.get(stateId)
    },
  }
  const system = new deps.InitStageSystem(currentContinent, stageLevel)
  system.setEngine({
    addEntity(entity) {
      records.push(["engine.addEntity", entity.id])
    },
    removeSystem(systemToRemove) {
      records.push(["engine.removeSystem", systemToRemove === system])
    },
  })
  currentHarness = { records, system, buildings, currentContinent }
  return currentHarness
}

function makeBuilding(deps, id, records) {
  return {
    id,
    startOwners: [],
    inactive: [],
    setStartOwner(owner) {
      records.push(["building.setStartOwner", id, owner])
      this.startOwners.push(owner)
    },
    setInactive(inactive) {
      records.push(["building.setInactive", id, inactive])
      this.inactive.push(inactive)
    },
    get(key) {
      if (key !== deps.StateShapeView) return undefined
      return { initialPromise: Promise.resolve(`shape-${id}`) }
    },
  }
}

function snapshot(h) {
  return {
    buildings: Array.from(h.buildings.values()).map((building) => ({
      id: building.id,
      startOwners: building.startOwners,
      inactive: building.inactive,
    })),
    records: h.records,
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
