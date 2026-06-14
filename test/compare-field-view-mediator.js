"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const { Container } = require("../src-cjs/6538_SIDES.js")
const { GameState } = require("../src-cjs/65370_GameState.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { FieldView: OriginalFieldView } = require("../src-cjs/59310_FieldView.js")
const { FieldView: RestoredFieldView } = require("../src-restored/core/FieldView.js")
const { FieldMediator: OriginalFieldMediator } = require("../src-cjs/40470_FieldMediator.js")
const { FieldMediator: RestoredFieldMediator } = require("../src-restored/core/FieldMediator.js")

const originalGsap = {
  to: gsapModule.gsap.to,
}
let currentHarness = null

const originalDeps = {
  FieldView: OriginalFieldView,
  FieldMediator: OriginalFieldMediator,
}
const restoredDeps = {
  FieldView: RestoredFieldView,
  FieldMediator: RestoredFieldMediator,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FieldView),
  publicPrototypeMembers(originalDeps.FieldView),
  "restored FieldView public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FieldMediator),
  publicPrototypeMembers(originalDeps.FieldMediator),
  "restored FieldMediator public prototype differs",
)

try {
  patchGsap()

  compareScenario("FieldView creates and orders display layers", (deps) => {
    const view = new deps.FieldView()
    view.arrows = labeledContainer("arrows")
    view.onAdded()
    return snapshotFieldView(view)
  })

  compareScenario("initialize registers rendering system and listeners", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    h.mediator.initialize()
    return {
      viewAlpha: h.view.alpha,
      renderingSystemCreated: !!h.mediator._renderingSystem,
      addSystemRecords: h.records.filter((record) => record[0] === "engine.addSystem"),
      listeners: h.listeners.map((listener) => listener.event),
    }
  })

  compareScenario("initialize reuses existing rendering system", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    const existing = { id: "existing-rendering-system" }
    h.mediator._renderingSystem = existing
    h.mediator.initialize()
    return {
      reused: h.mediator._renderingSystem === existing,
      records: h.records,
    }
  })

  compareScenario("level loaded listener focuses current state and fades in", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    h.mediator.initialize()
    h.records.length = 0
    h.listeners.find((listener) => listener.event === GameEvents.LEVEL_LOADED).handler()
    return h.records
  })

  compareScenario("state changes route to the expected focus target", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    h.mediator.focusOn = function focusOn(stage, duration) {
      h.records.push(["focusOn", normalizeNumber(stage), duration])
    }
    ;[
      GameState.GAMEPLAY,
      GameState.LOBBY,
      GameState.LOOSE,
      GameState.WIN_STAGE,
      GameState.WIN_CONTINENT,
      "__unknown__",
    ].forEach((state) => h.mediator.onStateChanged(state))
    h.model.state = GameState.LOBBY
    h.mediator.onResize()
    return h.records
  })

  compareScenario("getMapBounds supports full map, stage radius, and shape bounds", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    return {
      full: h.mediator.getMapBounds(NaN),
      stageRadius: h.mediator.getMapBounds(1, 25),
      stageShapes: h.mediator.getMapBounds(2, NaN),
      missing: h.mediator.getMapBounds(9, 25),
    }
  })

  compareScenario("focusOn computes camera scale and toggles buildings", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    h.mediator.focusOn(1, 0.75)
    h.mediator.focusOn(NaN, 0)
    return h.records
  })

  compareScenario("destroy removes rendering system before base cleanup", (deps) => {
    const h = makeMediatorHarness(deps, GameState.GAMEPLAY)
    h.mediator._renderingSystem = { id: "rendering" }
    h.mediator.destroy()
    return h.records
  })
} finally {
  restoreGsap()
  currentHarness = null
}

console.log(
  JSON.stringify(
    {
      module: "FieldViewMediator",
      fieldViewPrototype: publicPrototypeMembers(restoredDeps.FieldView),
      fieldMediatorPrototype: publicPrototypeMembers(restoredDeps.FieldMediator),
      scenarios: 8,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  currentHarness = null
  const originalResult = normalize(run(originalDeps))
  currentHarness = null
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
  currentHarness = null
}

function makeMediatorHarness(deps, state) {
  const records = []
  const listeners = []
  const view = makeFieldViewFixture()
  const buildings = new Map([
    ["a", makeBuilding("a", records)],
    ["b", makeBuilding("b", records)],
  ])
  const model = {
    state,
    engine: {
      addSystem(system) {
        records.push(["engine.addSystem", !!system, system.fieldView === view])
      },
      removeSystem(system) {
        records.push(["engine.removeSystem", system && (system.id || system.fieldView === view)])
      },
    },
    currentContinent: {
      stageLevel: 1,
      parsed: new Map([
        ["a", { stage: 1, statePos: [50, 60], shapes: ["M0 0 L20 0 L20 10 L0 10 Z"] }],
        ["b", { stage: 1, statePos: [140, 160], shapes: ["M100 100 L150 100 L150 120 L100 120 Z"] }],
        ["c", { stage: 2, statePos: [300, 320], shapes: ["M10 20 L30 20 L30 40 L10 40 Z"] }],
      ]),
      buildings,
    },
  }
  const root = { size: { width: 400, height: 300 } }
  const mediator = new deps.FieldMediator()
  mediator.view = view
  mediator.model = model
  mediator.root = root
  mediator.addListener = function addListener(event, handler) {
    listeners.push({ event, handler })
    records.push(["addListener", event])
  }
  currentHarness = { records, listeners, view, model, root, mediator }
  return currentHarness
}

function makeFieldViewFixture() {
  return {
    __label: "view",
    alpha: 1,
    x: 0,
    y: 0,
    scale: { __label: "view.scale", x: 1, y: 1 },
    getLocalBounds() {
      return { left: -10, top: -20, right: 210, bottom: 180 }
    },
    labels: labeledContainer("labels"),
    shapes: labeledContainer("shapes"),
    capitals: labeledContainer("capitals"),
    fighters: labeledContainer("fighters"),
  }
}

function makeBuilding(id, records) {
  return {
    id,
    toggleActive(stage, duration) {
      records.push(["building.toggleActive", id, normalizeNumber(stage), duration])
    },
  }
}

function labeledContainer(label) {
  const container = new Container()
  container.__label = label
  return container
}

function snapshotFieldView(view) {
  return {
    labelsType: view.labels.constructor.name,
    mapType: view.map.constructor.name,
    capitalsType: view.capitals.constructor.name,
    fightersType: view.fighters.constructor.name,
    shapesHasOnAdded: typeof view.shapes.onAdded === "function",
    rootChildren: view.children.map(labelDisplayObject),
    mapChildren: view.map.children.map(labelDisplayObject),
  }
}

function patchGsap() {
  gsapModule.gsap.to = function to(target, vars) {
    currentHarness?.records.push(["gsap.to", labelTarget(target), cloneVars(vars)])
    Object.assign(target, Object.fromEntries(Object.entries(vars).filter(([key]) => key !== "duration")))
    return { target, vars }
  }
}

function restoreGsap() {
  gsapModule.gsap.to = originalGsap.to
}

function cloneVars(vars) {
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => [key, typeof value === "number" ? round(value) : value]),
  )
}

function labelTarget(target) {
  if (target?.__label) return target.__label
  return target?.constructor?.name || typeof target
}

function labelDisplayObject(child) {
  if (child === undefined) return "__undefined__"
  const name = child.constructor.name
  return child.__label || (name === "View" ? "t" : name)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number") return normalizeNumber(item)
      return item
    }),
  )
}

function normalizeNumber(value) {
  if (Number.isNaN(value)) return "NaN"
  if (value === Infinity) return "Infinity"
  if (value === -Infinity) return "-Infinity"
  return round(value)
}

function round(value) {
  return Math.round(value * 1e9) / 1e9
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
