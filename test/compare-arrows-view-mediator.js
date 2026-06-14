"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { Point } = require("../src-cjs/6538_SIDES.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { ArrowView: OriginalArrowView } = require("../src-cjs/10910_ArrowView.js")
const { ArrowView: RestoredArrowView } = require("../src-restored/core/ArrowView.js")
const { ArrowsView: OriginalArrowsView } = require("../src-cjs/80219_ArrowsView.js")
const { ArrowsView: RestoredArrowsView } = require("../src-restored/core/ArrowsView.js")
const { ArrowsMediator: OriginalArrowsMediator } = require("../src-cjs/15006_ArrowsMediator.js")
const { ArrowsMediator: RestoredArrowsMediator } = require("../src-restored/core/ArrowsMediator.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { FieldView: RestoredFieldView } = require("../src-restored/core/FieldView.js")

const originalDeps = {
  ArrowView: OriginalArrowView,
  ArrowsView: OriginalArrowsView,
  ArrowsMediator: OriginalArrowsMediator,
  CapitalView: OriginalCapitalView,
}
const restoredDeps = {
  ArrowView: RestoredArrowView,
  ArrowsView: RestoredArrowsView,
  ArrowsMediator: RestoredArrowsMediator,
  CapitalView: RestoredCapitalView,
}

let currentHarness = null
const realDiGet = core.di.get
const realRestoredDiGet = restoredCore.di.get

assert.deepEqual(publicPrototypeMembers(restoredDeps.ArrowView), publicPrototypeMembers(originalDeps.ArrowView))
assert.deepEqual(publicPrototypeMembers(restoredDeps.ArrowsView), publicPrototypeMembers(originalDeps.ArrowsView))
assert.deepEqual(publicPrototypeMembers(restoredDeps.ArrowsMediator), publicPrototypeMembers(originalDeps.ArrowsMediator))
assert.equal(
  Reflect.getMetadata("design:type", RestoredFieldView.prototype, "arrows"),
  RestoredArrowsView,
)

try {
  compareScenario("ArrowView onAdded and direction geometry", (deps) => {
    const arrow = new deps.ArrowView()
    arrow.onAdded()
    arrow.toLocal = () => new Point(3, 4)
    arrow.setUpDirection(new Point(30, 40))
    return {
      rootChildren: arrow.children.length,
      arrowChildren: arrow.arrowCont.children.length,
      graphicsX: arrow.graphics.x,
      visible: arrow.visible,
      tipY: arrow.arrowTip.y,
      graphicsHeight: arrow.graphics.height,
      rotation: arrow.arrowCont.rotation,
    }
  })

  compareScenario("ArrowsView creates updates hides and removes arrows", (deps) => {
    const h = makeArrowsHarness(deps)
    const sourceA = makeBuilding(deps, "a", 10, 20)
    const sourceB = makeBuilding(deps, "b", 30, 40)
    const noCapital = {
      stateId: "none",
      get() {
        return undefined
      },
    }

    h.view.createArrow(sourceA)
    h.view.createArrow(noCapital)
    h.view.update({ clientX: 100, clientY: 200 })
    h.view.setAim(new Point(7, 8))
    h.view.update({ clientX: 300, clientY: 400 })
    h.view.createArrow(sourceB)
    h.view.setArrows(new Point(9, 10))
    h.view.hideArrow(sourceA)
    h.view.removeAim()
    return snapshotArrows(h)
  })

  compareScenario("ArrowsMediator registers AIM event handlers", (deps) => {
    const h = makeMediatorHarness(deps)
    h.mediator.initialize()
    const payload = { id: "payload" }
    h.listeners.find((listener) => listener.event === GameEvents.AIM_UPDATE).handler(payload)
    h.listeners.find((listener) => listener.event === GameEvents.AIM_CREATE).handler(payload)
    h.listeners.find((listener) => listener.event === GameEvents.AIM_REMOVE).handler()
    h.listeners.find((listener) => listener.event === GameEvents.AIM_SET).handler(payload)
    h.listeners.find((listener) => listener.event === GameEvents.AIM_HIDE).handler(payload)
    return h.records
  })
} finally {
  core.di.get = realDiGet
  restoredCore.di.get = realRestoredDiGet
  currentHarness = null
}

console.log(
  JSON.stringify(
    {
      module: "ArrowsViewMediator",
      arrowPrototype: publicPrototypeMembers(restoredDeps.ArrowView),
      arrowsPrototype: publicPrototypeMembers(restoredDeps.ArrowsView),
      mediatorPrototype: publicPrototypeMembers(restoredDeps.ArrowsMediator),
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  currentHarness = null
  core.di.get = function getFromTestContainer(token) {
    if (token === TypesGame.views.arrow) return currentHarness.makeArrow()
    return realDiGet.call(core.di, token)
  }
  const originalResult = normalize(run(originalDeps))
  currentHarness = null
  restoredCore.di.get = function getFromRestoredTestContainer(token) {
    if (token === TypesGame.views.arrow) return currentHarness.makeArrow()
    return realRestoredDiGet.call(restoredCore.di, token)
  }
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeArrowsHarness(deps) {
  const records = []
  const view = new deps.ArrowsView()
  let index = 0
  currentHarness = {
    deps,
    records,
    view,
    arrows: [],
    makeArrow() {
      const arrow = new deps.ArrowView()
      arrow.__id = `arrow-${++index}`
      arrow.setUpDirection = function setUpDirection(target) {
        records.push(["arrow.setUpDirection", this.__id, normalizePoint(target)])
      }
      currentHarness.arrows.push(arrow)
      return arrow
    },
  }
  return currentHarness
}

function makeBuilding(deps, stateId, x, y) {
  return {
    stateId,
    get(token) {
      if (token !== deps.CapitalView) return undefined
      return {
        position: new Point(x, y),
      }
    },
  }
}

function snapshotArrows(h) {
  return {
    arrowsSize: h.view._arrows.size,
    priorTarget: h.view._priorTarget && normalizePoint(h.view._priorTarget),
    viewChildren: h.view.children.map((child) => child.__id),
    arrowParents: h.arrows.map((arrow) => [arrow.__id, !!arrow.parent]),
    arrowPositions: h.arrows.map((arrow) => [arrow.__id, normalizePoint(arrow.position)]),
    records: h.records,
  }
}

function makeMediatorHarness(deps) {
  const records = []
  const listeners = []
  const mediator = new deps.ArrowsMediator()
  mediator.view = {
    update(payload) {
      records.push(["view.update", payload.id])
    },
    createArrow(payload) {
      records.push(["view.createArrow", payload.id])
    },
    removeAim() {
      records.push(["view.removeAim"])
    },
    setAim(payload) {
      records.push(["view.setAim", payload.id])
    },
    hideArrow(payload) {
      records.push(["view.hideArrow", payload.id])
    },
  }
  mediator.addListener = function addListener(event, handler) {
    listeners.push({ event, handler })
    records.push(["addListener", event])
  }
  return { records, listeners, mediator }
}

function normalizePoint(point) {
  if (!point) return point
  return { x: point.x, y: point.y }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number") return Math.round(item * 1e9) / 1e9
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
