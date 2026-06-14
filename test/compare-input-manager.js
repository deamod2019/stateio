"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = {
  InputManagerBase: require("../src-cjs/81717_InputManagerBase.js").InputManagerBase,
  InputManager: require("../src-cjs/83847_InputManager.js").InputManager,
  InputSystem: require("../src-cjs/47572_InputSystem.js").InputSystem,
}

const restored = {
  InputManagerBase: require("../src-restored/core/InputManagerBase.js").InputManagerBase,
  InputManager: require("../src-restored/core/InputManager.js").InputManager,
  InputSystem: require("../src-restored/core/InputSystem.js").InputSystem,
}

assert.deepEqual(
  publicPrototypeNames(restored.InputManagerBase),
  publicPrototypeNames(original.InputManagerBase),
  "InputManagerBase prototype surface differs",
)
assert.deepEqual(
  publicPrototypeNames(restored.InputManager),
  publicPrototypeNames(original.InputManager),
  "InputManager prototype surface differs",
)

assert.deepEqual(exerciseBaseLifecycle(restored), exerciseBaseLifecycle(original))
assert.deepEqual(exercisePointerOutSameTarget(restored), exercisePointerOutSameTarget(original))
assert.deepEqual(exercisePointerOutDifferentTarget(restored), exercisePointerOutDifferentTarget(original))
assert.deepEqual(exerciseInputManager(restored), exerciseInputManager(original))
assert.deepEqual(exerciseMissingInputSystem(restored), exerciseMissingInputSystem(original))

console.log(
  JSON.stringify(
    {
      module: "InputManager",
      files: ["81717_InputManagerBase.js", "83847_InputManager.js"],
      status: "ok",
    },
    null,
    2,
  ),
)

function publicPrototypeNames(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function exerciseBaseLifecycle(deps) {
  const canvas = createCanvas()
  const manager = createRecordingManager(deps)

  assert.equal(manager.init(canvas), manager)
  manager.start()
  manager.start()

  canvas.emit("pointerdown", { clientX: 10, clientY: 20 })
  canvas.emit("pointermove", { clientX: 12, clientY: 22 })
  canvas.emit("pointerup", { clientX: 15, clientY: 25 })
  manager.stop()

  return {
    events: manager.events,
    canvasCalls: canvas.calls,
    started: manager._started,
  }
}

function exercisePointerOutSameTarget(deps) {
  const canvas = createCanvas()
  const manager = createRecordingManager(deps).init(canvas)

  manager.start()
  canvas.emit("pointerdown")
  canvas.emit("pointerout", { target: canvas, currentTarget: canvas })

  return {
    events: manager.events,
    canvasCalls: canvas.calls,
  }
}

function exercisePointerOutDifferentTarget(deps) {
  const canvas = createCanvas()
  const otherTarget = {}
  const manager = createRecordingManager(deps).init(canvas)

  manager.start()
  canvas.emit("pointerdown")
  canvas.emit("pointerout", { target: otherTarget, currentTarget: canvas })

  return {
    events: manager.events,
    canvasCalls: canvas.calls,
  }
}

function exerciseInputManager(deps) {
  const manager = new deps.InputManager()
  const calls = []
  const inputSystem = {
    onCancel(event) {
      calls.push(["inputCancel", event.type])
    },
    onStart(event) {
      calls.push(["inputStart", event.type])
    },
    onDrag(event) {
      calls.push(["inputDrag", event.type])
    },
    onEnd(event) {
      calls.push(["inputEnd", event.type])
    },
  }

  manager.model = {
    cancelTutorial() {
      calls.push(["cancelTutorial"])
    },
    engine: {
      getSystem(systemClass) {
        calls.push(["getSystem", systemClass === deps.InputSystem])
        return inputSystem
      },
    },
  }

  manager.onStart(event("pointerdown"))
  manager.onDrag(event("pointermove"))
  manager.onEnd(event("pointerup"))
  manager.onCancel(event("pointercancel"))

  return calls
}

function exerciseMissingInputSystem(deps) {
  const manager = new deps.InputManager()
  const calls = []

  manager.model = {
    cancelTutorial() {
      calls.push(["cancelTutorial"])
    },
    engine: {
      getSystem(systemClass) {
        calls.push(["getSystem", systemClass === deps.InputSystem])
        return undefined
      },
    },
  }

  manager.onStart(event("pointerdown"))
  manager.onDrag(event("pointermove"))
  manager.onEnd(event("pointerup"))
  manager.onCancel(event("pointercancel"))

  return calls
}

function createRecordingManager(deps) {
  class RecordingInputManager extends deps.InputManagerBase {
    constructor() {
      super()
      this.events = []
    }

    onStart(event) {
      this.events.push(["start", event.type])
    }

    onDrag(event) {
      this.events.push(["drag", event.type])
    }

    onEnd(event) {
      this.events.push(["end", event.type])
    }

    onCancel(event) {
      this.events.push(["cancel", event.type])
    }
  }

  return new RecordingInputManager()
}

function createCanvas() {
  const listeners = new Map()
  const canvas = {
    calls: [],
    addEventListener(type, handler) {
      this.calls.push(["add", type])
      listeners.set(type, handler)
    },
    removeEventListener(type, handler) {
      this.calls.push(["remove", type, listeners.get(type) === handler])
      listeners.delete(type)
    },
    emit(type, overrides = {}) {
      const payload = event(type, {
        target: this,
        currentTarget: this,
        ...overrides,
      })
      const handler = listeners.get(type)
      assert.equal(typeof handler, "function", `missing listener for ${type}`)
      handler(payload)
      return payload
    },
  }

  return canvas
}

function event(type, overrides = {}) {
  return {
    type,
    target: undefined,
    currentTarget: undefined,
    clientX: 0,
    clientY: 0,
    ...overrides,
  }
}
