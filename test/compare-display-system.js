"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { DisplaySystem: OriginalDisplaySystem } = require("../src-cjs/88969_DisplaySystem.js")
const { DisplaySystem: RestoredDisplaySystem } = require("../src-restored/core/DisplaySystem.js")
const { Population: OriginalPopulation } = require("../src-cjs/26630_Population.js")
const { Population: RestoredPopulation } = require("../src-restored/core/Population.js")
const { StateShapeView: OriginalStateShapeView } = require("../src-cjs/91585_StateShapeView.js")
const { StateShapeView: RestoredStateShapeView } = require("../src-restored/core/StateShapeView.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { TutorialFingerView: OriginalTutorialFingerView } = require("../src-cjs/51006_TutorialFingerView.js")
const { TutorialFingerView: RestoredTutorialFingerView } = require("../src-restored/core/TutorialFingerView.js")

const originalDeps = {
  DisplaySystem: OriginalDisplaySystem,
  Population: OriginalPopulation,
  StateShapeView: OriginalStateShapeView,
  CapitalView: OriginalCapitalView,
  TutorialFingerView: OriginalTutorialFingerView,
}
const restoredDeps = {
  DisplaySystem: RestoredDisplaySystem,
  Population: RestoredPopulation,
  StateShapeView: RestoredStateShapeView,
  CapitalView: RestoredCapitalView,
  TutorialFingerView: RestoredTutorialFingerView,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.DisplaySystem),
  publicPrototypeMembers(originalDeps.DisplaySystem),
  "restored DisplaySystem public prototype differs",
)

compareScenario("constructor query matches supported view components", (deps) => {
  const h = makeHarness(deps)
  return [
    predicate(h.system.query, makeQueryEntity(deps, [deps.Population])),
    predicate(h.system.query, makeQueryEntity(deps, [deps.StateShapeView])),
    predicate(h.system.query, makeQueryEntity(deps, [deps.CapitalView])),
    predicate(h.system.query, makeQueryEntity(deps, [deps.TutorialFingerView])),
    predicate(h.system.query, makeQueryEntity(deps, [])),
  ]
})

compareScenario("entityAdded attaches components to field layers", (deps) => {
  const h = makeHarness(deps)
  const components = {
    population: makeDisplayObject("population"),
    shape: makeDisplayObject("shape"),
    capital: makeDisplayObject("capital"),
    tutorialFinger: makeDisplayObject("tutorialFinger"),
  }

  h.system.entityAdded({
    current: makeEntity(deps, components),
  })

  return {
    records: h.records,
    parents: parentLabels(components),
  }
})

compareScenario("entityAdded skips missing components", (deps) => {
  const h = makeHarness(deps)
  const components = {
    population: makeDisplayObject("population"),
    capital: makeDisplayObject("capital"),
  }

  h.system.entityAdded({
    current: makeEntity(deps, components),
  })

  return h.records
})

compareScenario("entityRemoved detaches present components from parents", (deps) => {
  const h = makeHarness(deps)
  const components = {
    population: makeDisplayObject("population"),
    shape: makeDisplayObject("shape"),
    capital: makeDisplayObject("capital"),
    tutorialFinger: makeDisplayObject("tutorialFinger"),
  }

  h.system.entityAdded({
    current: makeEntity(deps, components),
  })
  h.records.length = 0
  h.system.entityRemoved({
    previous: makeEntity(deps, components),
  })

  return {
    records: h.records,
    parents: parentLabels(components),
  }
})

console.log(
  JSON.stringify(
    {
      module: "DisplaySystem",
      prototype: publicPrototypeMembers(restoredDeps.DisplaySystem),
      scenarios: 4,
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
  const fieldView = makeFieldView(records)
  return {
    records,
    fieldView,
    system: new deps.DisplaySystem(fieldView),
  }
}

function makeFieldView(records) {
  return {
    labels: makeContainer("labels", records),
    shapes: makeContainer("shapes", records),
    capitals: makeContainer("capitals", records),
    addChild(child) {
      records.push(["field.addChild", child.id])
      child.parent = this
      child.parentLabel = "field"
    },
    removeChild(child) {
      records.push(["field.removeChild", child.id])
      child.parent = null
      child.parentLabel = null
    },
  }
}

function makeContainer(label, records) {
  return {
    addChild(child) {
      records.push([`${label}.addChild`, child.id])
      child.parent = this
      child.parentLabel = label
    },
    removeChild(child) {
      records.push([`${label}.removeChild`, child.id])
      child.parent = null
      child.parentLabel = null
    },
  }
}

function makeDisplayObject(id) {
  return {
    id,
    parent: null,
    parentLabel: null,
  }
}

function makeEntity(deps, components) {
  return {
    get(token) {
      if (token === deps.Population) return components.population
      if (token === deps.StateShapeView) return components.shape
      if (token === deps.CapitalView) return components.capital
      if (token === deps.TutorialFingerView) return components.tutorialFinger
      return undefined
    },
  }
}

function makeQueryEntity(deps, tokens) {
  return {
    hasAny(...checkedTokens) {
      return checkedTokens.some((token) => tokens.includes(token))
    },
  }
}

function parentLabels(components) {
  return Object.fromEntries(
    Object.entries(components).map(([key, component]) => [key, component.parentLabel]),
  )
}

function predicate(query, entity) {
  return (query._predicate || query.predicate)(entity)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
