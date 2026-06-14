/**
 * Restored source for Webpack Module #44046.
 *
 * Opens the home screen when the UI screen binding is present, otherwise
 * falls back to the gameplay screen.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { TypesUI } = require("./CoreTypes")
const { markInjectable } = require("./DecoratorHelpers")
const { Action } = require("./Action")

class StartScreenAction extends Action {
  async execute() {
    if (di.isBound(TypesUI.screen.HOME)) {
      this.dispatch(TypesUI.events.SCREEN_CHANGED, { id: TypesUI.screen.HOME })
    } else {
      this.dispatch(TypesUI.events.SCREEN_CHANGED, { id: TypesUI.screen.GAMEPLAY })
    }
  }
}

markInjectable(StartScreenAction)

module.exports = { StartScreenAction }
