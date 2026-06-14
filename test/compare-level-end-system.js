"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { LevelEndSystem: OriginalLevelEndSystem } = require("../src-cjs/71554_LevelEndSystem.js")
const { LevelEndSystem: RestoredLevelEndSystem } = require("../src-restored/core/LevelEndSystem.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { FighterGroupsSystem: OriginalFighterGroupsSystem } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredFighterGroupsSystem } = require("../src-restored/core/FighterGroupsSystem.js")

const originalDeps = {
  LevelEndSystem: OriginalLevelEndSystem,
  FighterGroupsSystem: OriginalFighterGroupsSystem,
  Spawner: OriginalSpawner,
}
const restoredDeps = {
  LevelEndSystem: RestoredLevelEndSystem,
  FighterGroupsSystem: RestoredFighterGroupsSystem,
  Spawner: RestoredSpawner,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelEndSystem),
  publicPrototypeMembers(originalDeps.LevelEndSystem),
  "restored LevelEndSystem public prototype differs",
)

compareScenario("constructor clears fighter groups", (deps) => {
  deps.FighterGroupsSystem._groups[0] = { id: 0 }
  deps.FighterGroupsSystem._groups[2] = { id: 2 }
  const before = deps.FighterGroupsSystem.GetActiveGroups().length
  const system = new deps.LevelEndSystem()
  return {
    before,
    after: deps.FighterGroupsSystem.GetActiveGroups().length,
    queryMatchesSpawner: system.query._predicate(makeEntity(true, deps)),
    queryRejectsMissingSpawner: system.query._predicate(makeEntity(false, deps)),
  }
})

compareScenario("update stops spawners and removes itself", (deps) => {
  const system = new deps.LevelEndSystem()
  const records = []

  system.query._entities = [
    makeUpdateEntity("first", records, true, deps),
    makeUpdateEntity("missing", records, false, deps),
    makeUpdateEntity("second", records, true, deps),
  ]
  system.setEngine({
    removeSystem(removed) {
      records.push(["engine.removeSystem", removed === system])
    },
  })

  return {
    result: system.update(0.25),
    records,
  }
})

console.log(
  JSON.stringify(
    {
      module: "LevelEndSystem",
      prototype: publicPrototypeMembers(restoredDeps.LevelEndSystem),
      scenarios: 2,
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

function makeEntity(hasSpawner, deps) {
  return {
    has(key) {
      return hasSpawner && key === deps.Spawner
    },
  }
}

function makeUpdateEntity(id, records, hasSpawner, deps) {
  const spawner = {
    stopRoutine() {
      records.push(["spawner.stopRoutine", id])
    },
  }
  return {
    get(key) {
      return hasSpawner && key === deps.Spawner ? spawner : undefined
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
