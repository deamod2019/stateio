"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { Population: OriginalPopulation } = require("../src-cjs/26630_Population.js")
const { Population: RestoredPopulation } = require("../src-restored/core/Population.js")

const originalDeps = { Spawner: OriginalSpawner, Population: OriginalPopulation }
const restoredDeps = { Spawner: RestoredSpawner, Population: RestoredPopulation }
let currentHarness = null
const originalContainerEnv = {
  oldGet: core.di.get,
  restoredGet: restoredCore.di.get,
}

for (const key of ["UNITS_PER_WAVE", "BURST_WAVES_LEN"]) {
  assert.equal(restoredDeps.Spawner[key], originalDeps.Spawner[key], `static ${key} differs`)
}
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.Spawner),
  publicPrototypeMembers(originalDeps.Spawner),
  "restored Spawner public prototype differs",
)

core.di.get = restoredCore.di.get = function getFromTestContainer() {
  return {
    run(payload) {
      currentHarness.records.push([
        "burst.run",
        payload.spawner === currentHarness.spawner,
        payload.amount,
        payload.target && payload.target.id,
      ])
    },
  }
}

compareScenario("constructor and burst delay", (deps) => {
  const h = makeHarness(deps, { current: 0 })
  return {
    burstDelay: h.spawner.burstDelay,
    hasRoutine: typeof h.spawner._spawnRoutine === "function",
  }
})

compareScenario("spawnAndSend stops previous routine and starts immediately", (deps) => {
  const h = makeHarness(deps, { current: 12 })
  h.spawner._spawnRoutineTimeout = "old-timeout"
  h.spawner.spawnAndSend(12, h.target)
  return snapshot(h)
})

compareScenario("spawnRoutine schedules even when target is fully drained this wave", (deps) => {
  const h = makeHarness(deps, { current: 3 })
  h.spawner._targetAmount = 3
  h.spawner._targetBuilding = h.target
  h.spawner.spawnRoutine()
  return snapshot(h)
})

compareScenario("spawnRoutine does nothing without population", (deps) => {
  const h = makeHarness(deps, { current: 10, hasPopulation: false })
  h.spawner._targetAmount = 10
  h.spawner._targetBuilding = h.target
  h.spawner.spawnRoutine()
  return snapshot(h)
})

compareScenario("spawnRoutine stops when allocate returns zero", (deps) => {
  const h = makeHarness(deps, { current: 0 })
  h.spawner._targetAmount = 10
  h.spawner._targetBuilding = h.target
  h.spawner.spawnRoutine()
  return snapshot(h)
})

console.log(
  JSON.stringify(
    {
      module: "Spawner",
      prototype: publicPrototypeMembers(restoredDeps.Spawner),
      scenarios: 5,
      status: "ok",
    },
    null,
    2,
  ),
)
restoreContainers()

function compareScenario(name, run) {
  withPatchedTimers(() => {
    const originalResult = normalize(run(originalDeps))
    const restoredResult = normalize(run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
  currentHarness = null
}

function makeHarness(deps, options) {
  const records = []
  const spawner = new deps.Spawner()
  const target = { id: "target" }
  const population = {
    current: options.current,
    allocate(amount) {
      records.push(["population.allocate", amount])
      const allocated = Math.min(this.current, amount)
      this.current -= allocated
      return allocated
    },
  }

  spawner.selfBuilding = {
    get(key) {
      if (!options.hasPopulation && options.hasPopulation !== undefined) return undefined
      return key === deps.Population ? population : undefined
    },
  }

  currentHarness = { records, spawner, target, population }
  return currentHarness
}

function snapshot(h) {
  return {
    targetAmount: h.spawner._targetAmount,
    targetBuilding: h.spawner._targetBuilding && h.spawner._targetBuilding.id,
    timeout: normalizeTimeout(h.spawner._spawnRoutineTimeout),
    populationCurrent: h.population.current,
    records: h.records,
  }
}

function withPatchedTimers(run) {
  const realSetTimeout = global.setTimeout
  const realClearTimeout = global.clearTimeout
  let timeoutId = 0
  try {
    global.setTimeout = function patchedSetTimeout(callback, delay) {
      const id = `timeout-${++timeoutId}`
      currentHarness.records.push(["setTimeout", typeof callback, delay, normalizeTimeout(id)])
      return id
    }
    global.clearTimeout = function patchedClearTimeout(id) {
      currentHarness.records.push(["clearTimeout", normalizeTimeout(id)])
    }
    return run()
  } finally {
    global.setTimeout = realSetTimeout
    global.clearTimeout = realClearTimeout
  }
}

function normalizeTimeout(id) {
  if (typeof id === "string" && /^timeout-\d+$/.test(id)) return "timeout-id"
  return typeof id === "object" && id ? "timeout-object" : id
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
  restoredCore.di.get = originalContainerEnv.restoredGet
}
