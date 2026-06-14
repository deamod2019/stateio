"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/26630_Population.js").Population
const restored = require("../src-restored/core/Population.js").Population

const originalMethods = publicPrototypeMembers(original)
const restoredMethods = publicPrototypeMembers(restored)

assert.deepEqual(restoredMethods, originalMethods, "restored Population public prototype differs")
assert.equal(restored.BLOCK_POPULATION_SECONDS, original.BLOCK_POPULATION_SECONDS)
assert.equal(restored.SPAWN_AMOUNT_ON_OCCUPATION, original.SPAWN_AMOUNT_ON_OCCUPATION)

compareScenario("allocate below current", (population) => {
  prepareLabel(population)
  population.current = 10
  const allocated = population.allocate(4)
  return snapshot(population, { allocated })
})

compareScenario("allocate above current", (population) => {
  prepareLabel(population)
  population.current = 3
  const allocated = population.allocate(10)
  return snapshot(population, { allocated })
})

compareScenario("remove below current", (population) => {
  prepareLabel(population)
  population.current = 10
  const removed = population.remove(4)
  return snapshot(population, { removed })
})

compareScenario("remove above current", (population) => {
  prepareLabel(population)
  population.current = 3
  const removed = population.remove(10)
  return snapshot(population, { removed })
})

compareScenario("active setter", (population) => {
  prepareLabel(population)
  population.active = false
  const inactive = snapshot(population)
  population.active = true
  return { inactive, active: snapshot(population) }
})

compareScenario("population limit and cap", (population) => {
  prepareLabel(population)
  population.setPopulationLimit(42)
  return snapshot(population)
})

compareDateScenario("tryPopulate increments after rate", [0, 1000, 1700], (population) => {
  prepareLabel(population)
  population.setPopulationRate(2)
  population.tryPopulate()
  population.tryPopulate()
  population.tryPopulate()
  return snapshot(population)
})

compareDateScenario("tryPopulate respects limit", [0, 1000], (population) => {
  prepareLabel(population)
  population.setPopulationLimit(1)
  population.current = 1
  population.tryPopulate()
  population.tryPopulate()
  return snapshot(population)
})

console.log(
  JSON.stringify(
    {
      module: "Population",
      prototype: restoredMethods,
      scenarios: 8,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const realNow = Date.now
  try {
    Date.now = () => 123456
    const originalResult = run(new original())

    Date.now = () => 123456
    const restoredResult = run(new restored())

    assert.deepEqual(restoredResult, originalResult, name)
  } finally {
    Date.now = realNow
  }
}

function compareDateScenario(name, timestamps, run) {
  const realNow = Date.now
  try {
    let index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const originalResult = run(new original())

    index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const restoredResult = run(new restored())

    assert.deepEqual(restoredResult, originalResult, name)
  } finally {
    Date.now = realNow
  }
}

function prepareLabel(population) {
  population._label = {
    text: "",
    width: 20,
    x: 0,
    y: 0,
    visible: true,
  }
}

function snapshot(population, extra = {}) {
  return {
    current: population.current,
    cap: population.cap,
    active: population.active,
    alpha: population.alpha,
    labelText: population._label.text,
    labelX: population._label.x,
    labelVisible: population._label.visible,
    lastBlockTimestamp: population.lastBlockTimestamp,
    ...extra,
  }
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
