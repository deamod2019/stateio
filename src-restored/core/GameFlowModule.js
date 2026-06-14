/**
 * Restored source for Webpack Module #44367.
 *
 * Base flow DI bindings. Boot remains on the CJS layer for now, while the
 * already restored flow actions are wired through src-restored.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { BootAction } = require("./BootAction")
const { TypesFlow } = require("./CoreTypes")
const { LevelStartAction } = require("./LevelStartAction")
const { LevelEndAction } = require("./LevelEndAction")
const { LevelNextAction } = require("./LevelNextAction")
const { LevelRestartAction } = require("./LevelRestartAction")
const { PlayWithOpponentAction } = require("./PlayWithOpponentAction")

const GameFlowModule = new ContainerModule((bind) => {
  bind(TypesFlow.boot).to(BootAction)
  bind(TypesFlow.LevelStart).to(LevelStartAction)
  bind(TypesFlow.LevelEnd).to(LevelEndAction)
  bind(TypesFlow.LevelNext).to(LevelNextAction)
  bind(TypesFlow.LevelRestart).to(LevelRestartAction)
  bind(TypesFlow.PlayWith).to(PlayWithOpponentAction)
})

module.exports = { GameFlowModule }
