"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeCore.js")
const { TypesFlow } = require("../src-cjs/86178__mod.js")
const original = {
  GameFlowExports: require("../src-cjs/98931__mod.js"),
  GameFlowModule: require("../src-cjs/44367_GameFlowModule.js").GameFlowModule,
  GameModuleBase: require("../src-cjs/25871_GameModuleBase.js").GameModuleBase,
  GameExports: require("../src-cjs/89282__mod.js"),
}
const restored = {
  GameFlowExports: require("../src-restored/core/GameFlowExports.js"),
  GameFlowModule: require("../src-restored/core/GameFlowModule.js").GameFlowModule,
  GameModuleBase: require("../src-restored/core/GameModuleBase.js").GameModuleBase,
  GameExports: require("../src-restored/core/GameExports.js"),
}
const { BootAction } = require("../src-restored/core/BootAction.js")
const { AnalyticsModule } = require("../src-restored/core/AnalyticsModule.js")
const { SetupSentryAction } = require("../src-restored/core/SetupSentryAction.js")
const { CreateFPSMeterAction } = require("../src-restored/core/CreateFPSMeterAction.js")

const originalEnv = {
  diLoad: core.di.load,
  diBind: core.di.bind,
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiLoad: restoredRuntime.di.load,
  restoredDiBind: restoredRuntime.di.bind,
  restoredDiGet: restoredRuntime.di.get,
  restoredDiIsBound: restoredRuntime.di.isBound,
}

try {
  assert.deepEqual(
    Object.keys(restored.GameFlowExports),
    Object.keys(original.GameFlowExports),
    "GameFlowExports key order differs",
  )
  assert.deepEqual(
    Object.keys(restored.GameExports),
    Object.keys(original.GameExports),
    "GameExports key order differs",
  )

  const originalFlowBindings = recordContainerBindings(original.GameFlowModule)
  const restoredFlowBindings = recordContainerBindings(restored.GameFlowModule)
  assert.deepEqual(restoredFlowBindings.records, originalFlowBindings.records, "GameFlowModule topology differs")

  assert.equal(restoredFlowBindings.targets.get(TypesFlow.boot), BootAction)
  const originalBase = exerciseGameModuleBase(original.GameModuleBase, core)
  const restoredBase = exerciseGameModuleBase(restored.GameModuleBase, restoredRuntime)
  assert.deepEqual(restoredBase.records, originalBase.records, "GameModuleBase topology differs")
  assert(restoredBase.loadedModules.includes(AnalyticsModule), "GameModuleBase should load restored AnalyticsModule")
  assert(restoredBase.boundTargets.includes(SetupSentryAction), "GameModuleBase should bind restored SetupSentryAction")
  assert(restoredBase.lazyAction instanceof restoredRuntime.LazyAction, "GameModuleBase should bind restored LazyAction")

  assert.equal(restored.GameFlowExports.BootAction, BootAction)
  assert.equal(restoredFlowBindings.targets.get(TypesFlow.LevelStart), restored.GameFlowExports.LevelStartAction)
  assert.equal(restoredFlowBindings.targets.get(TypesFlow.LevelEnd), restored.GameFlowExports.LevelEndAction)
  assert.equal(restoredFlowBindings.targets.get(TypesFlow.LevelNext), restored.GameFlowExports.LevelNextAction)
  assert.equal(restoredFlowBindings.targets.get(TypesFlow.LevelRestart), restored.GameFlowExports.LevelRestartAction)
  assert.equal(restoredFlowBindings.targets.get(TypesFlow.PlayWith), restored.GameFlowExports.PlayWithOpponentAction)
  assert.equal(restored.GameExports.Settings, require("../src-restored/core/Settings.js").Settings)
  assert.equal(restored.GameExports.GameModuleBase, restored.GameModuleBase)
  assert.equal(restored.GameExports.SetupSentryAction, SetupSentryAction)
  assert.equal(restored.GameExports.CreateFPSMeterAction, CreateFPSMeterAction)

  assert.deepEqual(
    exerciseStartGame(restored.GameExports, restoredRuntime),
    exerciseStartGame(original.GameExports, core),
  )
  assert.deepEqual(
    exerciseLazyAction(restoredBase.lazyAction, restoredRuntime),
    exerciseLazyAction(originalBase.lazyAction, core),
  )

  console.log(
    JSON.stringify(
      {
        modules: ["GameFlowModule", "GameFlowExports", "GameModuleBase", "GameExports"],
        flowBindings: restoredFlowBindings.records.length,
        baseEvents: restoredBase.records.length,
        status: "ok",
      },
      null,
      2,
    ),
  )
} catch (error) {
  console.error(error)
  process.exitCode = 1
} finally {
  restoreEnvironment()
}

function recordContainerBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry((token) => {
    records.push(["bind", tokenLabel(token)])
    return makeBindSyntax(records, targets, token)
  })

  return { records, targets }
}

function exerciseGameModuleBase(containerModule, runtime) {
  const records = []
  let lazyAction = null
  let loadedModules = []
  const boundTargets = []
  patchDiForGameModuleBase(runtime, records, (value) => {
    lazyAction = value
  }, (modules) => {
    loadedModules = modules
  }, (target) => {
    boundTargets.push(target)
  })

  containerModule.registry()

  return { records, lazyAction, loadedModules, boundTargets }
}

function patchDiForGameModuleBase(runtime, records, captureConstantValue, captureLoadedModules, captureBoundTarget) {
  runtime.di.load = function load(...modules) {
    records.push(["di.load", modules.length])
    captureLoadedModules(modules)
  }
  runtime.di.bind = function bind(token) {
    records.push(["di.bind", token])
    return {
      to(target) {
        records.push(["to", typeof target])
        captureBoundTarget(target)
        return this
      },
      toConstantValue(value) {
        records.push(["toConstantValue", value instanceof core.LazyAction || value instanceof restoredRuntime.LazyAction])
        captureConstantValue(value)
        return this
      },
    }
  }
}

function exerciseStartGame(exportsObject, runtime) {
  const records = []
  runtime.di.get = function get(token) {
    records.push(["di.get", tokenLabel(token)])
    return {
      run() {
        records.push(["boot.run"])
        return "boot-result"
      },
    }
  }

  return {
    result: exportsObject.startGame(),
    records,
  }
}

function exerciseLazyAction(lazyAction, runtime) {
  const records = []
  runtime.di.isBound = () => true
  runtime.di.get = function get(token) {
    records.push(["di.get", token])
    return {
      run() {
        records.push(["run", token])
      },
    }
  }

  lazyAction.run()
  return records
}

function makeBindSyntax(records, targets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
  }

  return syntax
}

function restoreEnvironment() {
  core.di.load = originalEnv.diLoad
  core.di.bind = originalEnv.diBind
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredRuntime.di.load = originalEnv.restoredDiLoad
  restoredRuntime.di.bind = originalEnv.restoredDiBind
  restoredRuntime.di.get = originalEnv.restoredDiGet
  restoredRuntime.di.isBound = originalEnv.restoredDiIsBound
}

function tokenLabel(token) {
  for (const [name, value] of Object.entries(TypesFlow)) {
    if (token === value) return `TypesFlow.${name}`
  }
  return String(token)
}
