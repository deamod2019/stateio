"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { GamePlaySystem: OriginalGamePlaySystem, GamePlayEvent: OriginalGamePlayEvent } = require("../src-cjs/93972_GamePlaySystem.js")
const { GamePlaySystem: RestoredGamePlaySystem, GamePlayEvent: RestoredGamePlayEvent } = require("../src-restored/core/GamePlaySystem.js")
const { Population: OriginalPopulation } = require("../src-cjs/26630_Population.js")
const { Population: RestoredPopulation } = require("../src-restored/core/Population.js")
const { Building: OriginalBuilding } = require("../src-cjs/26511_Building.js")
const { Building: RestoredBuilding } = require("../src-restored/core/Building.js")
const { FighterEvent: OriginalFighterEvent } = require("../src-cjs/99806_FighterMovementSystem.js")
const { FighterEvent: RestoredFighterEvent } = require("../src-restored/core/FighterMovementSystem.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { TypesCore } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const originalDeps = {
  GamePlaySystem: OriginalGamePlaySystem,
  GamePlayEvent: OriginalGamePlayEvent,
  Population: OriginalPopulation,
  Building: OriginalBuilding,
  FighterEvent: OriginalFighterEvent,
}
const restoredDeps = {
  GamePlaySystem: RestoredGamePlaySystem,
  GamePlayEvent: RestoredGamePlayEvent,
  Population: RestoredPopulation,
  Building: RestoredBuilding,
  FighterEvent: RestoredFighterEvent,
}
let currentHarness = null
const originalContainerEnv = {
  oldGet: core.di.get,
  oldIsBound: core.di.isBound,
  restoredGet: restoredCore.di.get,
  restoredIsBound: restoredCore.di.isBound,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GamePlaySystem),
  publicPrototypeMembers(originalDeps.GamePlaySystem),
  "restored GamePlaySystem public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GamePlayEvent),
  publicPrototypeMembers(originalDeps.GamePlayEvent),
  "restored GamePlayEvent public prototype differs",
)

core.di.get = restoredCore.di.get = function getFromTestContainer(token) {
  if (token === TypesCore.dispatcher) {
    return {
      emit(event, payload) {
        currentHarness.records.push(["dispatcher.emit", event, payload])
      },
    }
  }
  if (token === TypesGame.model) return currentHarness.model
  return currentHarness.model
}
core.di.isBound = restoredCore.di.isBound = function isBoundInTestContainer() {
  return currentHarness !== null
}

compareScenario("event shape", (deps) => {
  return {
    defaultWon: new deps.GamePlayEvent().won,
    trueWon: new deps.GamePlayEvent(true).won,
  }
})

compareScenario("update reports stats while bots remain alive", (deps) => {
  const h = makeHarness(deps, [
    makeBuilding(deps, "first", PlayerType.First, 10),
    makeBuilding(deps, "second", PlayerType.Second, 5),
  ])
  h.system.update(0.16)
  return snapshot(h)
})

compareScenario("update wins when no bots alive", (deps) => {
  const h = makeHarness(deps, [makeBuilding(deps, "first", PlayerType.First, 10)])
  h.system.update(0.16)
  return snapshot(h)
})

compareScenario("update loses when first player is not alive", (deps) => {
  const h = makeHarness(deps, [makeBuilding(deps, "second", PlayerType.Second, 10)])
  h.system.update(0.16)
  return snapshot(h)
})

compareScenario("fighter created and died adjusts free counts", (deps) => {
  const h = makeHarness(deps, [
    makeBuilding(deps, "first", PlayerType.First, 10),
    makeBuilding(deps, "second", PlayerType.Second, 5),
  ])
  h.system.onFighterEnitityHandler({
    type: deps.FighterEvent.FIGHTER_CREATED,
    fighter: { owner: PlayerType.Second },
  })
  h.system.onFighterEnitityHandler({
    type: deps.FighterEvent.FIGHTER_DIED,
    fighter: { owner: PlayerType.First },
  })
  h.system.update(0.16)
  return snapshot(h)
})

compareScenario("onAdded and onRemoved subscribe and clear state", (deps) => {
  const h = makeHarness(deps, [])
  h.system.onAddedToEngine()
  h.system._freeCounts.set(PlayerType.First, 1)
  h.system._fullAmount.set(PlayerType.First, 2)
  h.system._isAnyBuilding.set(PlayerType.First, true)
  h.system.onRemovedFromEngine()
  return snapshot(h)
})

console.log(
  JSON.stringify(
    {
      module: "GamePlaySystem",
      prototype: publicPrototypeMembers(restoredDeps.GamePlaySystem),
      scenarios: 6,
      status: "ok",
    },
    null,
    2,
  ),
)
restoreContainers()

function compareScenario(name, run) {
  const originalResult = normalize(run(originalDeps))
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
  currentHarness = null
}

function makeHarness(deps, buildings) {
  const records = []
  const model = {
    endStage(won) {
      records.push(["model.endStage", won])
    },
  }
  const system = new deps.GamePlaySystem()
  system.query._entities = buildings
  system.setEngine({
    addQuery(query) {
      records.push(["engine.addQuery", query === system.query])
    },
    removeQuery(query) {
      records.push(["engine.removeQuery", query === system.query])
    },
    subscribe(eventClass, handler) {
      records.push(["engine.subscribe", eventClass === deps.FighterEvent, handler === system._fighterEntityCreated])
    },
    unsubscribe(eventClass, handler) {
      records.push(["engine.unsubscribe", eventClass === deps.FighterEvent, handler === system._fighterEntityCreated])
    },
  })
  system.dispatch = function dispatch(event) {
    records.push(["system.dispatch", event.won])
  }
  currentHarness = {
    system,
    records,
    model,
    getService() {
      return model
    },
  }
  return currentHarness
}

function makeBuilding(deps, id, owner, current) {
  return {
    id,
    owner,
    has(key) {
      return key === deps.Population
    },
    hasTag(tag) {
      return tag === deps.Building.ACTIVE_TAG
    },
    get(key) {
      return key === deps.Population ? { current } : undefined
    },
  }
}

function snapshot(h) {
  return {
    freeCounts: Array.from(h.system._freeCounts.entries()).sort(([a], [b]) => a - b),
    fullAmount: Array.from(h.system._fullAmount.entries()).sort(([a], [b]) => a - b),
    isAnyBuilding: Array.from(h.system._isAnyBuilding.entries()).sort(([a], [b]) => a - b),
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

function restoreContainers() {
  core.di.get = originalContainerEnv.oldGet
  core.di.isBound = originalContainerEnv.oldIsBound
  restoredCore.di.get = originalContainerEnv.restoredGet
  restoredCore.di.isBound = originalContainerEnv.restoredIsBound
}
