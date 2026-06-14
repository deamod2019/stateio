/**
 * Restored compatibility barrel for Webpack Module #89282.
 */
"use strict"

const core = require("./RuntimeCore")
const { CreateFPSMeterAction } = require("./CreateFPSMeterAction")
const { SetupSentryAction } = require("./SetupSentryAction")
const { TypesFlow } = require("./CoreTypes")
const { Settings } = require("./Settings")
const { GameModuleBase } = require("./GameModuleBase")

function startGame() {
  return core.di.get(TypesFlow.boot).run()
}

exports.Settings = Settings
exports.CreateFPSMeterAction = CreateFPSMeterAction
exports.SetupSentryAction = SetupSentryAction
exports.GameModuleBase = GameModuleBase
exports.startGame = startGame
