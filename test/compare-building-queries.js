"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { ActiveBuildingsQuery: OriginalActiveBuildingsQuery } = require("../src-cjs/62260_ActiveBuildingsQuery.js")
const { AllBuildingsQuery: OriginalAllBuildingsQuery } = require("../src-cjs/9964_AllBuildingsQuery.js")
const { ActiveBuildingsQuery: RestoredActiveBuildingsQuery } = require("../src-restored/core/ActiveBuildingsQuery.js")
const { AllBuildingsQuery: RestoredAllBuildingsQuery } = require("../src-restored/core/AllBuildingsQuery.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  ActiveBuildingsQuery: OriginalActiveBuildingsQuery,
  AllBuildingsQuery: OriginalAllBuildingsQuery,
  Spawner: OriginalSpawner,
  CapitalView: OriginalCapitalView,
}
const restoredDeps = {
  ActiveBuildingsQuery: RestoredActiveBuildingsQuery,
  AllBuildingsQuery: RestoredAllBuildingsQuery,
  Spawner: RestoredSpawner,
  CapitalView: RestoredCapitalView,
}

compareScenario("active query requires spawner and non-default owner", (deps) => {
  return [
    predicate(deps.ActiveBuildingsQuery, makeEntity(deps, { hasSpawner: true, owner: PlayerType.First })),
    predicate(deps.ActiveBuildingsQuery, makeEntity(deps, { hasSpawner: true, owner: PlayerType.Default })),
    predicate(deps.ActiveBuildingsQuery, makeEntity(deps, { hasSpawner: false, owner: PlayerType.First })),
    predicate(deps.ActiveBuildingsQuery, makeEntity(deps, { hasSpawner: true, owner: PlayerType.Second })),
  ]
})

compareScenario("all query requires capital view", (deps) => {
  return [
    predicate(deps.AllBuildingsQuery, makeEntity(deps, { hasCapitalView: true })),
    predicate(deps.AllBuildingsQuery, makeEntity(deps, { hasCapitalView: false })),
  ]
})

console.log(
  JSON.stringify(
    {
      module: "BuildingQueries",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const originalResult = run(originalDeps)
  const restoredResult = run(restoredDeps)
  assert.deepEqual(restoredResult, originalResult, name)
}

function predicate(query, entity) {
  return (query._predicate || query.predicate)(entity)
}

function makeEntity(deps, { hasSpawner = false, hasCapitalView = false, owner = PlayerType.Default }) {
  return {
    owner,
    has(token) {
      return (hasSpawner && token === deps.Spawner) || (hasCapitalView && token === deps.CapitalView)
    },
  }
}
