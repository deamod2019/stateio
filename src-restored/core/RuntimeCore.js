/**
 * Restored source for Webpack Module #44656.
 *
 * Core runtime barrel with restored action classes, constants, core module,
 * and dependency-injection helpers.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { di, lazyGet, lazyInject, lazyRun } = require("./RuntimeContainer")
const { TypesCore } = require("./TypesCore")
const { EventDispatcher } = require("./EventDispatcher")
const { GlobalEventProvider } = require("./GlobalEventProvider")
const { Action } = require("./Action")
const { LazyAction } = require("./LazyAction")
const { ParallelAction } = require("./ParallelAction")
const { SequenceAction } = require("./SequenceAction")
const { WaitAction } = require("./WaitAction")

const CommonEvents = {
  UPDATED: "updated",
  PAUSE: "pause",
}

const CANVAS_ID = "game-canvas"
const GAME_SCRIPT_ORIGIN = getGameScriptOrigin()
const IS_ODR_BUILD = false
const ODR_BUILD_ORIGIN = ""

const CoreModule = new ContainerModule((bind) => {
  bind(TypesCore.gameConfig).toConstantValue({ id: "unset", sid: "unset" })
  bind(TypesCore.dispatcher).to(EventDispatcher).inSingletonScope()
  bind(TypesCore.eventProvider).to(GlobalEventProvider)
})

function getGameScriptOrigin() {
  const documentRef = globalThis.window?.document
  const scripts = documentRef?.getElementsByTagName?.("script")
  const script = Array.from(scripts || [])
    .filter((item) => item.src.indexOf("firebaseapp.com") !== -1)
    .filter((item) => item.src.indexOf("main.js"))
    .map((item) => item.src)[0]

  return script ? script.substr(0, script.lastIndexOf("/") + 1) : ""
}

module.exports = {
  Action,
  CANVAS_ID,
  CommonEvents,
  CoreModule,
  EventDispatcher,
  GAME_SCRIPT_ORIGIN,
  GlobalEventProvider,
  IS_ODR_BUILD,
  LazyAction,
  ODR_BUILD_ORIGIN,
  ParallelAction,
  SequenceAction,
  WaitAction,
  di,
  lazyGet,
  lazyInject,
  lazyRun,
}
