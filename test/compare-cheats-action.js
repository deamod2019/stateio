"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const original = require("../src-cjs/85162_CheatsAction.js")
const restored = require("../src-restored/core/CheatsAction.js")

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored), Object.keys(original), "CheatsAction exports differ")
    assert.deepEqual(
      publicPrototypeMembers(restored.CheatsAction),
      publicPrototypeMembers(original.CheatsAction),
      "CheatsAction prototype differs",
    )

    assert.deepEqual(
      await exercise(restored.CheatsAction, { hasCanvas: false, callbacks: 3 }),
      await exercise(original.CheatsAction, { hasCanvas: false, callbacks: 3 }),
      "missing canvas behavior differs",
    )
    assert.deepEqual(
      await exercise(restored.CheatsAction, { hasCanvas: true, callbacks: 3 }),
      await exercise(original.CheatsAction, { hasCanvas: true, callbacks: 3 }),
      "full callback behavior differs",
    )
    assert.deepEqual(
      await exercise(restored.CheatsAction, { hasCanvas: true, callbacks: 1 }),
      await exercise(original.CheatsAction, { hasCanvas: true, callbacks: 1 }),
      "fallback callback behavior differs",
    )

    console.log(
      JSON.stringify(
        {
          module: "CheatsAction",
          scenarios: 3,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

async function exercise(CheatsAction, options) {
  const records = []
  const handlers = {}
  const canvasHandlers = {}
  const canvas = {
    addEventListener(eventName, handler) {
      records.push(["canvas.addEventListener", eventName, typeof handler])
      canvasHandlers[eventName] = handler
    },
  }

  const originalGetElementById = document.getElementById
  const originalDocumentAddEventListener = document.addEventListener

  document.getElementById = (id) => {
    records.push(["document.getElementById", id])
    return options.hasCanvas ? canvas : null
  }
  document.addEventListener = (eventName, handler) => {
    records.push(["document.addEventListener", eventName, typeof handler])
    handlers[eventName] = handler
  }

  const callbacks = [
    () => records.push(["callback", "first"]),
    () => records.push(["callback", "second"]),
    () => records.push(["callback", "third"]),
  ].slice(0, options.callbacks)

  try {
    const action = new CheatsAction()
    const executeResult = await action.execute(callbacks)

    if (options.hasCanvas) {
      handlers.touchstart({ touches: { length: 1 } })
      handlers.touchstart({ touches: { length: 2 } })
      handlers.touchstart({ touches: { length: 3 } })
      handlers.touchstart({ touches: { length: 4 } })
      handlers.touchstart({})

      const pointerResults = [
        canvasHandlers.pointerdown({ shiftKey: false, altKey: false }),
        canvasHandlers.pointerdown({ shiftKey: true, altKey: false }),
        canvasHandlers.pointerdown({ shiftKey: false, altKey: true }),
        canvasHandlers.pointerdown({ shiftKey: true, altKey: true }),
      ]
      records.push(["pointerResults", normalize(pointerResults)])
    }

    return normalize({ executeResult, records })
  } finally {
    document.getElementById = originalGetElementById
    document.addEventListener = originalDocumentAddEventListener
  }
}

function publicPrototypeMembers(constructor) {
  return Object.getOwnPropertyNames(constructor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}

function installLocalReflectDecorate() {
  Reflect.decorate ??= function decorate(decorators, target, propertyKey, descriptor) {
    let result = descriptor ?? target
    for (let index = decorators.length - 1; index >= 0; index -= 1) {
      const decorator = decorators[index]
      const decorated =
        propertyKey === undefined
          ? decorator(result)
          : decorator(target, propertyKey, result)
      if (decorated !== undefined && decorated !== null) result = decorated
    }
    return result
  }
}
