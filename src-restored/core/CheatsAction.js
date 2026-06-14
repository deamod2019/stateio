/**
 * Restored source for Webpack Module #85162.
 *
 * Debug cheat action that binds touch/pointer shortcuts to supplied callbacks.
 */
"use strict"

const { CANVAS_ID } = require("./RuntimeCore")
const { Action } = require("./Action")
const { markInjectable } = require("./DecoratorHelpers")

class CheatsAction extends Action {
  async execute(callbacks) {
    const canvas = document.getElementById(CANVAS_ID)
    const [first, secondInput, thirdInput] = callbacks
    const second = secondInput || first
    const third = thirdInput || second || first

    if (canvas) {
      document.addEventListener("touchstart", (event) => {
        switch (event?.touches?.length) {
          case 2:
            first()
            break
          case 3:
            second()
            break
          case 4:
            third()
            break
        }
      })

      canvas.addEventListener("pointerdown", (event) => {
        return event.shiftKey && event.altKey
          ? third()
          : event.altKey
            ? second()
            : event.shiftKey
              ? first()
              : undefined
      })
    }
  }
}

markInjectable(CheatsAction)

module.exports = { CheatsAction }
