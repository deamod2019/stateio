/**
 * Restored source for Webpack Module #92287.
 *
 * Emits the global pause event with the requested paused state.
 */
"use strict"

const { CommonEvents } = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { Action } = require("./Action")

class PauseAction extends Action {
  async execute(paused = true) {
    this.dispatch(CommonEvents.PAUSE, paused)
  }
}

markInjectable(PauseAction)

module.exports = { PauseAction }
