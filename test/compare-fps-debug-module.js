"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")

const original = {
  CreateFPSMeterAction: require("../src-cjs/66920_CreateFPSMeterAction.js").CreateFPSMeterAction,
  DebugModule: require("../src-cjs/14107_DebugModule.js").DebugModule,
}
const restored = {
  CreateFPSMeterAction: require("../src-restored/core/CreateFPSMeterAction.js").CreateFPSMeterAction,
  DebugModule: require("../src-restored/core/DebugModule.js").DebugModule,
}

const originalEnv = {
  FPSMeter: globalThis.FPSMeter,
  requestAnimationFrame: globalThis.requestAnimationFrame,
  document: globalThis.document,
  originalLogDebug: originalRuntime.log.debug,
  restoredLogDebug: restoredRuntime.log.debug,
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
}).finally(restoreEnvironment)

async function main() {
  assert.deepEqual(
    recordDebugBindings(restored.DebugModule),
    recordDebugBindings(original.DebugModule),
    "DebugModule binding topology differs",
  )

  assert.equal(
    recordDebugTarget(restored.DebugModule, restoredCore),
    restored.CreateFPSMeterAction,
    "DebugModule should bind restored CreateFPSMeterAction",
  )

  const scenarios = [
    ["default options with FPSMeter", undefined, true],
    ["custom options with FPSMeter", { theme: "dark", heat: 5 }, true],
    ["default options without FPSMeter", undefined, false],
  ]

  for (const [name, options, hasMeter] of scenarios) {
    assert.deepEqual(
      await exerciseAction(restored.CreateFPSMeterAction, options, hasMeter),
      await exerciseAction(original.CreateFPSMeterAction, options, hasMeter),
      name,
    )
  }

  console.log(
    JSON.stringify(
      {
        modules: ["CreateFPSMeterAction", "DebugModule"],
        scenarios: scenarios.length,
        status: "ok",
      },
      null,
      2,
    ),
  )
}

async function exerciseAction(ActionClass, options, hasMeter) {
  const records = []
  const runtime = ActionClass === restored.CreateFPSMeterAction ? restoredRuntime : originalRuntime
  installHarness(records, hasMeter, runtime)

  const action = new ActionClass()
  const result = await action.execute(options)
  return { result, records }
}

function installHarness(records, hasMeter, runtime) {
  const canvasParent = { id: "canvas-parent" }
  const canvas = { id: core.CANVAS_ID, parentElement: canvasParent }
  const meterContainer = { id: "meter-container" }

  globalThis.document = {
    body: {
      insertBefore(node, before) {
        records.push(["insertBefore", node.id, before.id])
      },
    },
    createElement(tagName) {
      records.push(["createElement", tagName])
      return meterContainer
    },
    getElementById(id) {
      records.push(["getElementById", id])
      return canvas
    },
  }

  globalThis.requestAnimationFrame = (callback) => {
    records.push(["requestAnimationFrame", typeof callback])
    return 1
  }

  runtime.log.debug = (...args) => {
    records.push(["log.debug", ...args])
  }

  if (hasMeter) {
    globalThis.FPSMeter = class FPSMeter {
      constructor(node, options) {
        records.push(["FPSMeter.constructor", node.id, clone(options)])
      }

      show() {
        records.push(["FPSMeter.show"])
        return this
      }

      tick() {
        records.push(["FPSMeter.tick"])
      }
    }
  } else {
    delete globalThis.FPSMeter
  }
}

function recordDebugBindings(debugModule) {
  const records = []
  debugModule.registry(() => ({
    to(target) {
      records.push(["to", typeof target])
      return this
    },
  }))
  return records
}

function recordDebugTarget(debugModule, runtimeCore = core) {
  let boundTarget = null
  const originalBind = runtimeCore.di.bind
  runtimeCore.di.bind = () => ({
    to(target) {
      boundTarget = target
      return this
    },
  })

  try {
    debugModule.registry()
  } finally {
    runtimeCore.di.bind = originalBind
  }

  return boundTarget
}

function restoreEnvironment() {
  if (originalEnv.FPSMeter === undefined) {
    delete globalThis.FPSMeter
  } else {
    globalThis.FPSMeter = originalEnv.FPSMeter
  }
  globalThis.requestAnimationFrame = originalEnv.requestAnimationFrame
  globalThis.document = originalEnv.document
  originalRuntime.log.debug = originalEnv.originalLogDebug
  restoredRuntime.log.debug = originalEnv.restoredLogDebug
}

function clone(value) {
  if (value === undefined) return undefined
  return JSON.parse(JSON.stringify(value))
}
