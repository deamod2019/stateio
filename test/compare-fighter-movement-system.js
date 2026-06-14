"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { FighterMovementSystem: OriginalSystem, FighterEvent: OriginalEvent } = require("../src-cjs/99806_FighterMovementSystem.js")
const { FighterMovementSystem: RestoredSystem, FighterEvent: RestoredEvent } = require("../src-restored/core/FighterMovementSystem.js")
const { FighterView: OriginalFighterView } = require("../src-cjs/26463_FighterView.js")
const { FighterView: RestoredFighterView } = require("../src-restored/core/FighterView.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { Fighter: OriginalFighter } = require("../src-cjs/46697_Fighter.js")
const { Fighter: RestoredFighter } = require("../src-restored/core/Fighter.js")
const { FighterDeathEffectAction: OriginalFighterDeathEffectAction } = require("../src-cjs/71981_FighterDeathEffectAction.js")
const { FighterDeathEffectAction: RestoredFighterDeathEffectAction } = require("../src-restored/core/FighterDeathEffectAction.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  FighterMovementSystem: OriginalSystem,
  FighterEvent: OriginalEvent,
  Fighter: OriginalFighter,
  CapitalView: OriginalCapitalView,
  FighterView: OriginalFighterView,
  FighterDeathEffectAction: OriginalFighterDeathEffectAction,
}
const restoredDeps = {
  FighterMovementSystem: RestoredSystem,
  FighterEvent: RestoredEvent,
  Fighter: RestoredFighter,
  CapitalView: RestoredCapitalView,
  FighterView: RestoredFighterView,
  FighterDeathEffectAction: RestoredFighterDeathEffectAction,
  RuntimeCore: restoredCore,
}
originalDeps.RuntimeCore = core
let currentHarness = null
const originalDiGet = core.di.get
const originalDiIsBound = core.di.isBound
const originalRestoredDiGet = restoredCore.di.get
const originalRestoredDiIsBound = restoredCore.di.isBound

assert.equal(RestoredEvent.FIGHTER_CREATED, OriginalEvent.FIGHTER_CREATED)
assert.equal(RestoredEvent.FIGHTER_DIED, OriginalEvent.FIGHTER_DIED)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FighterMovementSystem),
  publicPrototypeMembers(originalDeps.FighterMovementSystem),
  "restored FighterMovementSystem public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FighterEvent),
  publicPrototypeMembers(originalDeps.FighterEvent),
  "restored FighterEvent public prototype differs",
)

try {
  compareScenario("event class shape", (deps) => {
    const fighter = { id: "fighter" }
    const event = new deps.FighterEvent(deps.FighterEvent.FIGHTER_CREATED, fighter)
    return { type: event.type, fighter: event.fighter.id }
  })

  compareScenario("entityAdded positions view and dispatches created event", (deps) => {
    const h = makeHarness(deps)
    h.system.entityAdded({ current: h.fighters[0] })
    return snapshot(h)
  })

  compareScenario("entityRemoved removes view and dispatches died event", (deps) => {
    const h = makeHarness(deps)
    h.system.entityRemoved({ current: h.fighters[0] })
    return snapshot(h)
  })

  compareScenario("updateEntity reaches target and removes fighter", (deps) => {
    const h = makeHarness(deps)
    h.fighters[0].moveResult = true
    h.system.updateEntity(h.fighters[0], 0.16)
    return snapshot(h)
  })

  compareScenario("updateEntity moves fighter into cell and syncs view", (deps) => {
    const h = makeHarness(deps)
    h.fighters[0].position = [145, 245]
    h.fighters[0].moveResult = false
    h.system.updateEntity(h.fighters[0], 0.16)
    return snapshot(h)
  })

  compareScenario("update runs entities then collision cleanup", (deps) => {
    const h = makeHarness(deps)
    h.fighters[0].position = [10, 10]
    h.fighters[1].position = [11, 11]
    h.fighters[0].moveResult = false
    h.fighters[1].moveResult = false
    h.system.query._entities = h.fighters.slice(0, 2)
    h.system.update(0.16)
    return snapshot(h)
  })

  compareScenario("onRemovedFromEngine clears cells and removes current entities", (deps) => {
    const h = makeHarness(deps)
    h.system.cells.set("0_0", { getCollisions: () => [] })
    h.system.query._entities = h.fighters.slice(0, 2)
    h.system.onRemovedFromEngine()
    return snapshot(h)
  })

  console.log(
    JSON.stringify(
      {
        module: "FighterMovementSystem",
        prototype: publicPrototypeMembers(restoredDeps.FighterMovementSystem),
        scenarios: 7,
        status: "ok",
      },
      null,
      2,
    ),
  )
} finally {
  core.di.get = originalDiGet
  core.di.isBound = originalDiIsBound
  restoredCore.di.get = originalRestoredDiGet
  restoredCore.di.isBound = originalRestoredDiIsBound
}

function compareScenario(name, run) {
  core.di.get = function getFromTestContainer(token) {
    return currentHarness.getService(token)
  }
  core.di.isBound = function isBoundInTestContainer(token) {
    return Boolean(currentHarness.getService(token))
  }
  const originalResult = normalize(run(originalDeps))
  restoredCore.di.get = function getFromRestoredTestContainer(token) {
    return currentHarness.getService(token)
  }
  restoredCore.di.isBound = function isBoundInRestoredTestContainer(token) {
    return Boolean(currentHarness.getService(token))
  }
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
  currentHarness = null
}

function makeHarness(deps) {
  const records = []
  const system = new deps.FighterMovementSystem()
  const fightersLayer = {
    toLocal(position, parent) {
      records.push(["fighters.toLocal", position.x, position.y, parent && parent.id])
      return {
        x: position.x + 1,
        y: position.y + 2,
        set(x, y) {
          this.x = x
          this.y = y
          records.push(["view.position.set", x, y])
        },
      }
    },
    addChild(view) {
      records.push(["fighters.addChild", view.__id])
      view.parent = this
    },
    removeChild(view) {
      records.push(["fighters.removeChild", view.__id])
      view.parent = null
    },
  }
  const services = new Map()
  services.set(TypesGame.views.fieldInstance, { fighters: fightersLayer })
  services.set(deps.FighterDeathEffectAction, {
    run(collision) {
      records.push(["deathEffect.run", collision.map((fighter) => fighter.id)])
    },
  })

  const engine = {
    entities: [],
    removeEntity(fighter) {
      records.push(["engine.removeEntity", fighter.id])
      const index = this.entities.indexOf(fighter)
      if (index !== -1) this.entities.splice(index, 1)
      const queryIndex = system.query._entities.indexOf(fighter)
      if (queryIndex !== -1) system.query._entities.splice(queryIndex, 1)
    },
    removeQuery(query) {
      records.push(["engine.removeQuery", query === system.query])
    },
  }
  system.setEngine(engine)
  system.dispatch = function dispatch(event) {
    records.push(["dispatch", event.type, event.fighter.id])
  }

  const fighters = [
    makeFighter(deps, "a", PlayerType.First, records),
    makeFighter(deps, "b", PlayerType.Second, records),
  ]
  engine.entities = fighters.slice(0)
  currentHarness = {
    deps,
    records,
    system,
    fighters,
    fightersLayer,
    getService(token) {
      return services.get(token)
    },
  }
  return currentHarness
}

function makeFighter(deps, id, owner, records) {
  const view = {
    __id: `view-${id}`,
    position: {
      x: 0,
      y: 0,
      set(x, y) {
        this.x = x
        this.y = y
        records.push(["view.position.set", id, x, y])
      },
    },
    rotation: 0,
    parent: {
      removeChild(child) {
        records.push(["parent.removeChild", child.__id])
        child.parent = null
      },
    },
  }
  const capital = {
    position: { x: 20, y: 30 },
    parent: { id: `capital-parent-${id}` },
  }
  return {
    id,
    owner,
    position: [0, 0],
    rotation: 1.25,
    moveResult: false,
    moveDelta: undefined,
    target: {
      tryOccupy(fighter) {
        records.push(["target.tryOccupy", fighter.id])
      },
    },
    source: {
      get(key) {
        return key === deps.CapitalView ? capital : undefined
      },
    },
    group: {
      OnFighterDied() {
        records.push(["group.died", id])
      },
    },
    tags: new Set(),
    has(key) {
      return key === deps.FighterView
    },
    get(key) {
      return key === deps.FighterView ? view : undefined
    },
    move(delta) {
      records.push(["fighter.move", id, delta])
      this.moveDelta = delta
      return this.moveResult
    },
    hasTag(tag) {
      return this.tags.has(tag)
    },
    addTag(tag) {
      records.push(["fighter.addTag", id, tag])
      this.tags.add(tag)
    },
  }
}

function snapshot(h) {
  return {
    cells: Array.from(h.system.cells.keys()).sort(),
    engineEntities: h.system.engine.entities.map((fighter) => fighter.id),
    queryEntities: h.system.query._entities.map((fighter) => fighter.id),
    fighters: h.fighters.map((fighter) => ({
      id: fighter.id,
      position: fighter.position,
      tags: Array.from(fighter.tags).sort(),
      moveDelta: fighter.moveDelta,
      viewParent: !!fighter.get(h.deps.FighterView).parent,
      viewPosition: {
        x: fighter.get(h.deps.FighterView).position.x,
        y: fighter.get(h.deps.FighterView).position.y,
      },
      viewRotation: fighter.get(h.deps.FighterView).rotation,
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
