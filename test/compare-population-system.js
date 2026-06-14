"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { PopulationSystem: OriginalPopulationSystem } = require("../src-cjs/28300_PopulationSystem.js")
const { PopulationSystem: RestoredPopulationSystem } = require("../src-restored/core/PopulationSystem.js")
const { Population: OriginalPopulation } = require("../src-cjs/26630_Population.js")
const { Population: RestoredPopulation } = require("../src-restored/core/Population.js")
const { Building: OriginalBuilding } = require("../src-cjs/26511_Building.js")
const { Building: RestoredBuilding } = require("../src-restored/core/Building.js")
const { StateShapeView: OriginalStateShapeView } = require("../src-cjs/91585_StateShapeView.js")
const { StateShapeView: RestoredStateShapeView } = require("../src-restored/core/StateShapeView.js")

const originalDeps = {
  PopulationSystem: OriginalPopulationSystem,
  Population: OriginalPopulation,
  Building: OriginalBuilding,
  StateShapeView: OriginalStateShapeView,
}
const restoredDeps = {
  PopulationSystem: RestoredPopulationSystem,
  Population: RestoredPopulation,
  Building: RestoredBuilding,
  StateShapeView: RestoredStateShapeView,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PopulationSystem),
  publicPrototypeMembers(originalDeps.PopulationSystem),
  "restored PopulationSystem public prototype differs",
)

compareScenario("constructor predicate selects active population shape entities", (deps) => {
  const system = new deps.PopulationSystem()
  return [
    system.query._predicate(makePredicateEntity(deps, true, true, true)),
    system.query._predicate(makePredicateEntity(deps, true, false, true)),
    system.query._predicate(makePredicateEntity(deps, true, true, false)),
  ]
})

compareScenario("updateEntity populates and updates shape view", (deps) => {
  const system = new deps.PopulationSystem()
  const entity = makeUpdateEntity(deps)
  system.updateEntity(entity, 0.25)
  return entity.records
})

compareScenario("entityAdded is intentionally empty", (deps) => {
  const system = new deps.PopulationSystem()
  const entity = makeUpdateEntity(deps)
  return system.entityAdded(entity)
})

console.log(
  JSON.stringify(
    {
      module: "PopulationSystem",
      prototype: publicPrototypeMembers(restoredDeps.PopulationSystem),
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

function makePredicateEntity(deps, hasAll, hasShape, active) {
  return {
    hasAll(...keys) {
      return hasAll && keys[0] === deps.Population && keys[1] === deps.StateShapeView && hasShape
    },
    hasTag(tag) {
      return active && tag === deps.Building.ACTIVE_TAG
    },
  }
}

function makeUpdateEntity(deps) {
  const records = []
  const population = {
    tryPopulate(delta) {
      records.push(["tryPopulate", delta])
    },
  }
  const shape = {
    updateWithPopulation(value) {
      records.push(["updateWithPopulation", value === population])
    },
  }
  return {
    records,
    get(key) {
      if (key === deps.Population) return population
      if (key === deps.StateShapeView) return shape
      return undefined
    },
  }
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
