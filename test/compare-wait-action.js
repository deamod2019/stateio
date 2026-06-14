"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const original = require("../src-cjs/71794_WaitAction.js")
const restored = require("../src-restored/core/WaitAction.js")

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored), Object.keys(original), "WaitAction exports differ")
    assert.deepEqual(
      publicPrototypeMembers(restored.WaitAction),
      publicPrototypeMembers(original.WaitAction),
      "WaitAction prototype differs",
    )
    assert.deepEqual(
      ownStaticMembers(restored.WaitAction),
      ownStaticMembers(original.WaitAction),
      "WaitAction static members differ",
    )

    assert.deepEqual(await exercise(restored.WaitAction), await exercise(original.WaitAction))

    console.log(
      JSON.stringify(
        {
          module: "WaitAction",
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

async function exercise(WaitAction) {
  const records = []
  const originalSetTimeout = global.setTimeout
  const originalRequestAnimationFrame = global.requestAnimationFrame

  global.setTimeout = (callback, delay) => {
    records.push(["setTimeout", delay])
    callback()
    return 1
  }
  global.requestAnimationFrame = (callback) => {
    records.push(["requestAnimationFrame"])
    callback()
    return 1
  }

  try {
    const action = new WaitAction()
    const executeResult = await action.execute(25)
    const runResult = await action.run(30)
    const msResult = await WaitAction.ms(35)
    const secDefaultResult = await WaitAction.sec()
    const secCustomResult = await WaitAction.sec(2)
    const frameDefaultResult = await WaitAction.frame()
    const frameCustomResult = await WaitAction.frame(2)

    return {
      executeResult,
      runResult,
      msResult,
      secDefaultResult,
      secCustomResult,
      frameDefaultResult,
      frameCustomResult,
      records,
    }
  } finally {
    global.setTimeout = originalSetTimeout
    global.requestAnimationFrame = originalRequestAnimationFrame
  }
}

function publicPrototypeMembers(value) {
  return Object.getOwnPropertyNames(value.prototype).filter((name) => name !== "constructor")
}

function ownStaticMembers(value) {
  return Object.getOwnPropertyNames(value).filter(
    (name) => !["length", "name", "prototype"].includes(name),
  )
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
