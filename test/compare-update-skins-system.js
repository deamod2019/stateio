"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { UpdateSkinsSystem: OriginalUpdateSkinsSystem } = require("../src-cjs/44802_UpdateSkinsSystem.js")
const { UpdateSkinsSystem: RestoredUpdateSkinsSystem } = require("../src-restored/core/UpdateSkinsSystem.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { StateShapeView: OriginalStateShapeView } = require("../src-cjs/91585_StateShapeView.js")
const { StateShapeView: RestoredStateShapeView } = require("../src-restored/core/StateShapeView.js")

const originalDeps = {
  UpdateSkinsSystem: OriginalUpdateSkinsSystem,
  CapitalView: OriginalCapitalView,
  StateShapeView: OriginalStateShapeView,
}
const restoredDeps = {
  UpdateSkinsSystem: RestoredUpdateSkinsSystem,
  CapitalView: RestoredCapitalView,
  StateShapeView: RestoredStateShapeView,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.UpdateSkinsSystem),
  publicPrototypeMembers(originalDeps.UpdateSkinsSystem),
  "restored UpdateSkinsSystem public prototype differs",
)

compareScenario("constructor predicate selects visual skin entities", (deps) => {
  const system = new deps.UpdateSkinsSystem()
  return [
    system.query._predicate(makePredicateEntity(deps, true, false)),
    system.query._predicate(makePredicateEntity(deps, false, true)),
    system.query._predicate(makePredicateEntity(deps, true, true)),
    system.query._predicate(makePredicateEntity(deps, false, false)),
  ]
})

compareScenario("update refreshes skins and removes itself", (deps) => {
  const system = new deps.UpdateSkinsSystem()
  const records = []
  system.query._entities = [
    makeSkinEntity("capital", records),
    makeSkinEntity("shape", records),
  ]
  system.setEngine({
    removeSystem(removed) {
      records.push(["engine.removeSystem", removed === system])
      removed.onRemovedFromEngine()
    },
    removeQuery(query) {
      records.push(["engine.removeQuery", query === system.query])
    },
  })

  return {
    result: system.update(0.125),
    removed: system._removed,
    records,
  }
})

compareScenario("update default delta is zero", (deps) => {
  const system = new deps.UpdateSkinsSystem()
  const records = []
  system.query._entities = [makeSkinEntity("only", records)]
  system.updateEntity = function updateEntity(entity, delta) {
    records.push(["updateEntity", entity.id, delta])
  }
  system.setEngine({
    removeSystem() {
      records.push(["engine.removeSystem"])
    },
  })

  system.update()
  return records
})

console.log(
  JSON.stringify(
    {
      module: "UpdateSkinsSystem",
      prototype: publicPrototypeMembers(restoredDeps.UpdateSkinsSystem),
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

function makePredicateEntity(deps, hasCapital, hasShape) {
  return {
    hasAny(...keys) {
      return (
        (hasCapital && keys.includes(deps.CapitalView)) ||
        (hasShape && keys.includes(deps.StateShapeView))
      )
    },
  }
}

function makeSkinEntity(id, records) {
  return {
    id,
    updateAllSkins() {
      records.push(["updateAllSkins", id])
    },
  }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
