/**
 * Restored source for Webpack Module #83042.
 *
 * State.io restart flow: reset current level UI/model state, then execute the
 * generic restart flow.
 */
"use strict"

const { Types2D } = require("./CoreTypes")
const { InputManager } = require("./InputManager")
const RootView = require("./SIORootView").default
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { LevelRestartAction } = require("./LevelRestartAction")

class LevelRestartActionSIO extends LevelRestartAction {
  async launch(data) {
    this.root.progressBar.hide()
    this.root.overlay.unblur()
    this.model.restartLevel()
    await super.launch()
  }
}

injectProperty(LevelRestartActionSIO, "root", Types2D.rootView, RootView)
injectProperty(LevelRestartActionSIO, "model", TypesGame.model, GameModel)
injectProperty(LevelRestartActionSIO, "inputManager", TypesGame.inputManager, InputManager)
markInjectable(LevelRestartActionSIO)

module.exports = { LevelRestartActionSIO }
