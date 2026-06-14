"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
core.di.get = function getFromTestContainer(token) {
  return {
    __kind: token && token.name ? `di:${token.name}` : "di:token",
    vibrate() {},
  }
}

const originalDeps = {
  Building: require("../src-cjs/26511_Building.js").Building,
  Population: require("../src-cjs/26630_Population.js").Population,
  CapitalView: require("../src-cjs/53351_CapitalView.js").CapitalView,
  StateShapeView: require("../src-cjs/91585_StateShapeView.js").StateShapeView,
  Spawner: require("../src-cjs/52057_Spawner.js").Spawner,
  PathHolder: require("../src-cjs/85126_PathHolder.js").PathHolder,
  BotLogic: require("../src-cjs/3565_BotLogic.js").BotLogic,
  PlayerType: require("../src-cjs/36596_PlayerType.js").PlayerType,
}

const restoredDeps = {
  ...originalDeps,
  Building: require("../src-restored/core/Building.js").Building,
  Population: require("../src-restored/core/Population.js").Population,
  CapitalView: require("../src-restored/core/CapitalView.js").CapitalView,
  StateShapeView: require("../src-restored/core/StateShapeView.js").StateShapeView,
  Spawner: require("../src-restored/core/Spawner.js").Spawner,
  PathHolder: require("../src-restored/core/PathHolder.js").PathHolder,
  BotLogic: require("../src-restored/core/BotLogic.js").BotLogic,
}

assert.equal(restoredDeps.Building.ACTIVE_TAG, originalDeps.Building.ACTIVE_TAG)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.Building),
  publicPrototypeMembers(originalDeps.Building),
  "restored Building public prototype differs",
)

compareScenario("constructor defaults", (deps) => {
  const building = new deps.Building()
  return {
    selected: building.selected,
    hasPathWidth: typeof building._pathHolder.getPathWidth === "function",
  }
})

compareScenario("init wires components", (deps) => {
  const h = makeHarness(deps)
  h.building.init("state-1", { statePos: [10, 20], stateRadius: 12 })
  return snapshot(h)
})

compareScenario("setInactive true removes runtime components", (deps) => {
  const h = makeHarness(deps)
  h.tags.add(deps.Building.ACTIVE_TAG)
  h.building.setInactive(true)
  return snapshot(h)
})

compareScenario("setInactive false restores main components", (deps) => {
  const h = makeHarness(deps)
  h.building.setInactive(false)
  return snapshot(h)
})

compareScenario("toggleActive uses global isNaN semantics", (deps) => {
  const h = makeHarness(deps)
  h.building.toggleActive("not-a-number", true)
  const activeFromString = snapshot(h)
  h.records.length = 0
  h.tags.delete(deps.Building.ACTIVE_TAG)
  h.building.toggleActive(1, false)
  return { activeFromString, inactiveFromOwner: snapshot(h) }
})

compareScenario("setStartOwner applies meta start population", (deps) => {
  const h = makeHarness(deps)
  h.building.setStartOwner(deps.PlayerType.First)
  return snapshot(h)
})

compareDateScenario("tryOccupy allied adds population", [5500], (deps) => {
  const h = makeHarness(deps)
  h.building._owner = deps.PlayerType.First
  h.population.current = 4
  h.building.tryOccupy({ owner: deps.PlayerType.First, amount: 6 })
  return snapshot(h)
})

compareDateScenario("tryOccupy enemy damages population", [6000], (deps) => {
  const h = makeHarness(deps)
  h.building._owner = deps.PlayerType.Second
  h.population.current = 10
  h.building.tryOccupy({ owner: deps.PlayerType.Third, amount: 3 })
  return snapshot(h)
})

compareDateScenario("tryOccupy empty territory changes owner", [7000], (deps) => {
  const h = makeHarness(deps)
  h.building._owner = deps.PlayerType.Second
  h.building._selected = true
  h.population.current = 0
  h.building.tryOccupy({ owner: deps.PlayerType.First, amount: 5 })
  return snapshot(h)
})

compareDateScenario("getSnapshot", [5000], (deps) => {
  const h = makeHarness(deps)
  h.building._owner = deps.PlayerType.First
  h.population.current = 9
  h.population.lastBlockTimestamp = 4500
  return h.building.getSnapshot()
})

console.log(
  JSON.stringify(
    {
      module: "Building",
      prototype: publicPrototypeMembers(restoredDeps.Building),
      scenarios: 10,
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

function compareDateScenario(name, timestamps, run) {
  const realNow = Date.now
  try {
    let index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const originalResult = normalize(run(originalDeps))

    index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const restoredResult = normalize(run(restoredDeps))

    assert.deepEqual(restoredResult, originalResult, name)
  } finally {
    Date.now = realNow
  }
}

function makeHarness(deps) {
  const records = []
  const tags = new Set()
  const presence = new Set(["population", "capital", "shape", "spawner", "pathHolder"])
  const componentsAdded = new Set()

  const population = {
    __kind: "population",
    current: 0,
    visible: true,
    active: true,
    lastBlockTimestamp: 100,
    init(data) {
      records.push(["population.init", data.stateRadius, data.statePos.slice()])
    },
    block() {
      records.push(["population.block"])
      this.lastBlockTimestamp = Date.now()
    },
    remove(amount) {
      records.push(["population.remove", amount])
      const previous = this.current
      this.current = Math.max(previous - amount, 0)
      return Math.max(previous - this.current, 0)
    },
    setPopulationLimit(limit) {
      records.push(["population.limit", limit])
      this.limit = limit
    },
    setPopulationRate(rate) {
      records.push(["population.rate", rate])
      this.rate = rate
    },
  }
  const capital = {
    __kind: "capital",
    visible: true,
    init(data) {
      records.push(["capital.init", data.stateRadius])
    },
    setActive(value, animated) {
      records.push(["capital.active", value, animated])
    },
    showSelection(selectionColor, alpha) {
      records.push(["capital.selection", selectionColor, alpha])
    },
    shake(duration, strength) {
      records.push(["capital.shake", duration, strength])
    },
    occupiedAnimation(duration) {
      records.push(["capital.occupied", duration])
    },
    updateSkin(owner, active) {
      records.push(["capital.skin", owner, active])
    },
  }
  const shape = {
    __kind: "shape",
    interactive: false,
    init(data, stateId) {
      records.push(["shape.init", stateId, data.statePos.slice()])
    },
    setActive(value, animated) {
      records.push(["shape.active", value, animated])
    },
    updateSkin(owner) {
      records.push(["shape.skin", owner])
    },
    updateWithPopulation(pop) {
      records.push(["shape.population", pop === population])
    },
  }
  const spawner = {
    __kind: "spawner",
    burstDelay: 0.7,
    selfBuilding: null,
    spawnAndSend(amount, target) {
      records.push(["spawner.spawnAndSend", amount, target])
    },
    stopRoutine() {
      records.push(["spawner.stop"])
    },
  }
  const pathHolder = {
    __kind: "pathHolder",
    getPathWidth() {
      return 30
    },
  }

  const components = { population, capital, shape, spawner, pathHolder }
  const building = Object.create(deps.Building.prototype)

  Object.assign(building, {
    _selected: false,
    _owner: deps.PlayerType.Neutral,
    _stateId: "state-1",
    _data: { statePos: [10, 20], stateRadius: 12 },
    _population: population,
    _capital: capital,
    _shape: shape,
    _spawner: spawner,
    _pathHolder: pathHolder,
    model: {
      meta: {
        getStartPopulation(owner) {
          records.push(["meta.start", owner])
          return owner + 20
        },
        getBuildingPopulationLimit(owner) {
          records.push(["meta.limit", owner])
          return owner + 60
        },
        getPopulationRate(owner) {
          records.push(["meta.rate", owner])
          return owner + 1.5
        },
      },
    },
    addTag(tag) {
      records.push(["addTag", tag])
      tags.add(tag)
    },
    removeTag(tag) {
      records.push(["removeTag", tag])
      tags.delete(tag)
    },
    hasTag(tag) {
      return tags.has(tag)
    },
    add(component) {
      records.push(["add", component.__kind || "unknown"])
      componentsAdded.add(component)
      const kind = component.__kind
      if (kind) presence.add(kind)
      return this
    },
    remove(key) {
      records.push(["remove", labelForKey(key, deps)])
      presence.delete(labelForKey(key, deps))
    },
    removeComponent(key) {
      records.push(["removeComponent", labelForKey(key, deps)])
      presence.delete(labelForKey(key, deps))
    },
    has(key) {
      return presence.has(labelForKey(key, deps))
    },
    hasAll(...items) {
      return items.every((item) => componentsAdded.has(item))
    },
    get(key) {
      return components[labelForKey(key, deps)]
    },
    onComponentListUpdated: deps.Building.prototype.onComponentListUpdated,
  })

  return { building, records, tags, presence, population, capital, shape, spawner, pathHolder }
}

function snapshot(h) {
  return {
    owner: h.building._owner,
    selected: h.building._selected,
    tags: Array.from(h.tags).sort(),
    population: {
      current: h.population.current,
      visible: h.population.visible,
      active: h.population.active,
      limit: h.population.limit,
      rate: h.population.rate,
      lastBlockTimestamp: h.population.lastBlockTimestamp,
    },
    capitalVisible: h.capital.visible,
    shapeInteractive: h.shape.interactive,
    spawnerSelfBuilding: h.spawner.selfBuilding === h.building,
    records: h.records,
  }
}

function labelForKey(key, deps) {
  if (key === deps.Population) return "population"
  if (key === deps.CapitalView) return "capital"
  if (key === deps.StateShapeView) return "shape"
  if (key === deps.Spawner) return "spawner"
  if (key === deps.PathHolder) return "pathHolder"
  if (key === deps.BotLogic) return "botLogic"
  if (key && key.__kind) return key.__kind
  return key && key.name ? key.name : String(key)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
