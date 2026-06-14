"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { PathsGenerationSystem: OriginalPathsGenerationSystem } = require("../src-cjs/57620_PathsGenerationSystem.js")
const { PathsGenerationSystem: RestoredPathsGenerationSystem } = require("../src-restored/core/PathsGenerationSystem.js")
const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")

const originalDeps = {
  PathsGenerationSystem: OriginalPathsGenerationSystem,
  PathHolder: OriginalPathHolder,
  CapitalView: OriginalCapitalView,
}
const restoredDeps = {
  PathsGenerationSystem: RestoredPathsGenerationSystem,
  PathHolder: RestoredPathHolder,
  CapitalView: RestoredCapitalView,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PathsGenerationSystem),
  publicPrototypeMembers(originalDeps.PathsGenerationSystem),
  "restored PathsGenerationSystem public prototype differs",
)

compareScenario("updateEntity generates paths to every other building", (deps) => {
  const h = makeHarness(deps)
  h.system.updateEntity(h.buildings[0], 0.16)
  return snapshot(h)
})

compareScenario("update runs entities and removes itself", (deps) => {
  const h = makeHarness(deps)
  h.system.update(0.16)
  return snapshot(h)
})

compareScenario("entity without holder is ignored", (deps) => {
  const h = makeHarness(deps)
  h.buildings[0].holder = null
  h.system.updateEntity(h.buildings[0], 0.16)
  return snapshot(h)
})

console.log(
  JSON.stringify(
    {
      module: "PathsGenerationSystem",
      prototype: publicPrototypeMembers(restoredDeps.PathsGenerationSystem),
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const originalResult = normalize(run(originalDeps))
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeHarness(deps) {
  const records = []
  const system = new deps.PathsGenerationSystem()
  const buildings = [
    makeBuilding(deps, "a", [0, 0], 20),
    makeBuilding(deps, "b", [100, 0], 40),
    makeBuilding(deps, "c", [0, 100], 10),
  ]
  system.query._entities = buildings
  system.setEngine({
    removeSystem(systemToRemove) {
      records.push(["engine.removeSystem", systemToRemove === system])
    },
  })
  return { system, buildings, records }
}

function makeBuilding(deps, stateId, statePos, stateRadius) {
  const holder = new deps.PathHolder()
  return {
    stateId,
    holder,
    data: { statePos, stateRadius },
    has(key) {
      return key === deps.CapitalView
    },
    get(key) {
      return key === deps.PathHolder ? this.holder : undefined
    },
  }
}

function snapshot(h) {
  return {
    records: h.records,
    holders: h.buildings.map((building) => ({
      stateId: building.stateId,
      paths: building.holder
        ? Array.from(building.holder._cachedWays.entries()).map(([key, path]) => [key, path])
        : null,
    })),
  }
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      if (typeof item === "number") return Math.round(item * 1e9) / 1e9
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
