"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")

const original = {
  View: require("../src-cjs/25487_View.js").View,
  Mediator: require("../src-cjs/42182_Mediator.js").Mediator,
  bindMediator: require("../src-cjs/38224__mod.js").bindMediator,
  barrel: require("../src-cjs/59795__mod.js"),
}

const restored = {
  View: require("../src-restored/core/View.js").View,
  Mediator: require("../src-restored/core/Mediator.js").Mediator,
  bindMediator: require("../src-restored/core/BindMediator.js").bindMediator,
  barrel: require("../src-restored/core/DisplayFramework.js"),
}

assert.deepEqual(Object.keys(restored.barrel), Object.keys(original.barrel))
assert.equal(restored.barrel.View, restored.View)
assert.equal(restored.barrel.Mediator, restored.Mediator)
assert.equal(restored.barrel.bindMediator, restored.bindMediator)
assert.deepEqual(publicPrototypeMembers(restored.View), publicPrototypeMembers(original.View))
assert.deepEqual(publicPrototypeMembers(restored.Mediator), publicPrototypeMembers(original.Mediator))
assert.equal(typeof restored.bindMediator, typeof original.bindMediator)

const originalResult = withLogHarness(() => ({
  view: runViewScenario(original.View, original.Mediator),
  mediator: runMediatorScenario(original.View, original.Mediator),
  bindMediator: runBindMediatorScenario(original.bindMediator),
}))

const restoredResult = withLogHarness(() => ({
  view: runViewScenario(restored.View, restored.Mediator),
  mediator: runMediatorScenario(restored.View, restored.Mediator),
  bindMediator: runBindMediatorScenario(restored.bindMediator),
}))

assert.deepEqual(restoredResult, originalResult)

console.log(
  JSON.stringify(
    {
      modules: ["View", "Mediator", "bindMediator", "DisplayFramework"],
      scenarios: [
        "view-lifecycle-propagation",
        "mediator-view-listeners",
        "bind-mediator-activation",
        "display-barrel-export",
      ],
      status: "ok",
    },
    null,
    2,
  ),
)

function runViewScenario(View, Mediator) {
  class TestMediator extends Mediator {
    initialize() {
      records.push(["mediator.initialize", normalizeDebugId(this.view.debugId)])
    }

    destroy() {
      records.push(["mediator.destroy"])
      super.destroy()
    }
  }

  const records = []
  const root = new View()
  const childBefore = new View()
  const childAfter = new View()

  childBefore.on(View.ADDED_TO_SCENE, () => records.push(["childBefore.added"]))
  childBefore.on(View.REMOVED_FROM_SCENE, () => records.push(["childBefore.removed"]))
  childAfter.on(View.ADDED_TO_SCENE, () => records.push(["childAfter.added"]))
  childAfter.on(View.REMOVED_FROM_SCENE, () => records.push(["childAfter.removed"]))

  root.mediator = new TestMediator()
  root.addChild(childBefore)
  root.emit(View.ADDED_TO_SCENE)
  root.addChild(childAfter)
  root.removeChild(childAfter)
  root.emit(View.REMOVED_FROM_SCENE)
  root.destroy()

  return {
    statics: [View.ADDED_TO_SCENE, View.REMOVED_FROM_SCENE],
    addedToScene: root.addedToScene,
    childCount: root.children.length,
    records,
  }
}

function runMediatorScenario(View, Mediator) {
  class TestMediator extends Mediator {
    initialize() {
      records.push(["initialize"])
    }
  }

  const records = []
  const view = new View()
  const mediator = new TestMediator()
  const listener = (payload) => records.push(["listener", payload])
  const onceListener = (payload) => records.push(["once", payload])

  let throwMessage = ""
  try {
    mediator.addViewListener("before", listener)
  } catch (error) {
    throwMessage = error.message
  }

  mediator.setView(view)
  mediator.addViewListener("event", listener)
  mediator.addViewListener("event", listener)
  view.emit("event", 1)
  mediator.addViewListenerOnce("event", onceListener)
  view.emit("event", 2)
  view.emit("event", 3)
  mediator.removeViewListener("event", listener)
  mediator.removeViewListener("event", listener)
  mediator.addViewListener("another", listener)
  mediator.removeAllViewListeners()
  mediator.removeViewListeners("missing")
  mediator.bindDebug()
  mediator.unbindDebug()
  mediator.destroy()

  return {
    throwMessage,
    records,
    listenersMap: mediator.viewListenersMap,
    hasViewAfterDestroy: Object.prototype.hasOwnProperty.call(mediator, "view"),
  }
}

function runBindMediatorScenario(bindMediator) {
  function TestMediator() {}
  const records = []
  const mediator = { id: "mediator" }
  const view = {}
  const context = {
    container: {
      bound: false,
      isBound(token) {
        records.push(["isBound", token === TestMediator])
        return this.bound
      },
      bind(token) {
        records.push(["bind", token === TestMediator])
        this.bound = true
        return {
          toSelf() {
            records.push(["toSelf"])
          },
        }
      },
      get(token) {
        records.push(["get", token === TestMediator])
        return mediator
      },
    },
  }

  const result = bindMediator(TestMediator)(context, view)

  return {
    sameView: result === view,
    mediatorAttached: view.mediator === mediator,
    records,
  }
}

function withLogHarness(run) {
  const errors = []
  const traces = []
  const originalError = originalRuntime.log.error
  const originalTrace = originalRuntime.log.trace
  const restoredError = restoredRuntime.log.error
  const restoredTrace = restoredRuntime.log.trace
  const error = (...args) => errors.push(args.map(normalizeLogValue))
  const trace = (...args) => traces.push(args.map(normalizeLogValue))
  originalRuntime.log.error = error
  originalRuntime.log.trace = trace
  restoredRuntime.log.error = error
  restoredRuntime.log.trace = trace

  try {
    const result = run()
    return { ...result, log: { errors, traces } }
  } finally {
    originalRuntime.log.error = originalError
    originalRuntime.log.trace = originalTrace
    restoredRuntime.log.error = restoredError
    restoredRuntime.log.trace = restoredTrace
  }
}

function normalizeLogValue(value) {
  if (typeof value === "function") return "function"
  if (typeof value === "object" && value) return value.constructor?.name === "TestMediator" ? "TestMediator" : "object"
  return String(value).replace(/function\s+\w+/g, "function")
}

function normalizeDebugId(debugId) {
  return debugId.replace(/^v_.+$/, "v_Class")
}

function publicPrototypeMembers(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}
