"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { Point, Ticker } = require("../src-cjs/6538_SIDES.js")

let currentService = null
const originalContainerEnv = {
  oldGet: core.di.get,
  oldIsBound: core.di.isBound,
  restoredGet: restoredCore.di.get,
  restoredIsBound: restoredCore.di.isBound,
}

core.di.get = restoredCore.di.get = function getFromTestContainer() {
  return currentService
}
core.di.isBound = restoredCore.di.isBound = function isBoundInTestContainer() {
  return currentService !== null
}

const originalDeps = {
  InputSystem: require("../src-cjs/47572_InputSystem.js").InputSystem,
  distanceBetweenPoints: require("../src-cjs/47572_InputSystem.js").distanceBetweenPoints,
  CapitalView: OriginalCapitalView,
}

const restoredDeps = {
  ...require("../src-restored/core/InputSystem.js"),
  CapitalView: RestoredCapitalView,
}

assert.equal(restoredDeps.InputSystem._multiselectDistanceMax, originalDeps.InputSystem._multiselectDistanceMax)
assert.equal(restoredDeps.InputSystem._timeForMultiselectAdding, originalDeps.InputSystem._timeForMultiselectAdding)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.InputSystem),
  publicPrototypeMembers(originalDeps.InputSystem),
  "restored InputSystem public prototype differs",
)
assert.equal(
  restoredDeps.distanceBetweenPoints({ x: 0, y: 0 }, { x: 3, y: 4 }),
  originalDeps.distanceBetweenPoints({ x: 0, y: 0 }, { x: 3, y: 4 }),
)

compareScenario("start on owned building selects source", (deps) => {
  const h = makeHarness(deps)
  h.system.onStart(pointer(0, 0))
  return snapshot(h)
})

compareScenario("drag selects target and end sends population", (deps) => {
  const h = makeHarness(deps)
  h.system.onStart(pointer(0, 0))
  h.system.onDrag(pointer(100, 0))
  h.system.onEnd(pointer(100, 0))
  return snapshot(h)
})

compareScenario("cancel removes aim and clears sources", (deps) => {
  const h = makeHarness(deps)
  h.system.onStart(pointer(0, 0))
  h.system.onCancel(pointer(0, 0))
  return snapshot(h)
})

compareScenario("drag away emits null aim", (deps) => {
  const h = makeHarness(deps)
  h.system.onStart(pointer(0, 0))
  h.system.query._entities.length = 0
  h.system.onDrag(pointer(300, 300))
  return snapshot(h)
})

compareScenario("multiselect adds owned building", (deps) => {
  const h = makeHarness(deps)
  Ticker.shared.deltaMS = 300
  h.system.onStart(pointer(0, 0))
  h.system.onDrag(pointer(60, 0))
  h.system.onDrag(pointer(60, 0))
  return snapshot(h)
})

compareScenario("multiselect removes selected building", (deps) => {
  const h = makeHarness(deps)
  Ticker.shared.deltaMS = 300
  h.system.onStart(pointer(0, 0))
  h.system.onDrag(pointer(60, 0))
  h.system.onDrag(pointer(60, 0))
  h.system.onDrag(pointer(60, 0))
  return snapshot(h)
})

console.log(
  JSON.stringify(
    {
      module: "InputSystem",
      prototype: publicPrototypeMembers(restoredDeps.InputSystem),
      scenarios: 6,
      status: "ok",
    },
    null,
    2,
  ),
)
restoreContainers()

function compareScenario(name, run) {
  const realDeltaMS = Ticker.shared.deltaMS
  try {
    Ticker.shared.deltaMS = 16.666666666666668
    const originalResult = normalize(run(originalDeps))

    Ticker.shared.deltaMS = 16.666666666666668
    const restoredResult = normalize(run(restoredDeps))

    assert.deepEqual(restoredResult, originalResult, name)
  } finally {
    Ticker.shared.deltaMS = realDeltaMS
    currentService = null
  }
}

function makeHarness(deps) {
  const records = []
  const service = {
    emit(event, payload) {
      records.push(["emit", event, payload && payload.__id ? payload.__id : normalizePoint(payload)])
    },
    vibrate() {
      records.push(["vibrate"])
    },
  }
  currentService = service

  const system = new deps.InputSystem()
  const buildings = [
    makeBuilding(deps, "source-a", 0, 0, true, records),
    makeBuilding(deps, "source-b", 60, 0, true, records),
    makeBuilding(deps, "enemy", 100, 0, false, records),
  ]
  system.query._entities = buildings

  return { system, records, buildings }
}

function makeBuilding(deps, id, x, y, isFirstPlayer, records) {
  const building = {
    __id: id,
    isFirstPlayer,
    selected: false,
    get(key) {
      if (key !== deps.CapitalView) return undefined
      return {
        toLocal(point) {
          return new Point(point.x - x, point.y - y)
        },
        toGlobal() {
          return new Point(x, y)
        },
      }
    },
    selectAsSource() {
      this.selected = true
      records.push(["selectSource", id])
    },
    selectAsTarget() {
      records.push(["selectTarget", id])
    },
    deselect() {
      this.selected = false
      records.push(["deselect", id])
    },
    sendTo(target) {
      records.push(["sendTo", id, target.__id])
    },
  }
  return building
}

function snapshot(h) {
  return {
    selectedIds: Array.from(h.system._selected).map((building) => building.__id).sort(),
    lastTarget: h.system._lastSelectedTargetBuilding && h.system._lastSelectedTargetBuilding.__id,
    touchStarted: h.system._isTouchStartedOnBuilding,
    wasInteracted: h.system._wasBuildingInteracted,
    multiselectTimer: h.system._multiselectTimer,
    buildingSelectedFlags: h.buildings.map((building) => [building.__id, building.selected]),
    records: h.records,
  }
}

function pointer(x, y) {
  return { clientX: x, clientY: y }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => normalizePoint(item)))
}

function normalizePoint(item) {
  if (item && typeof item.x === "number" && typeof item.y === "number") {
    return { x: item.x, y: item.y }
  }
  if (typeof item === "number" && Number.isNaN(item)) return "NaN"
  return item
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
