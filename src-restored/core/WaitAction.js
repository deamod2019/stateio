/**
 * Restored source for Webpack Module #71794.
 *
 * Small timing action used by UI transitions and delayed flow steps.
 */
"use strict"

const { Action } = require("./Action")
const { markInjectable } = require("./DecoratorHelpers")

class WaitAction extends Action {
  async execute(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  static async ms(milliseconds) {
    return new WaitAction().run(milliseconds)
  }

  static async sec(seconds = 1) {
    return new WaitAction().run(1000 * seconds)
  }

  static async frame(frames = 1) {
    while (--frames >= 0) {
      await new Promise((resolve) => requestAnimationFrame(resolve))
    }
  }
}

markInjectable(WaitAction)

module.exports = { WaitAction }
