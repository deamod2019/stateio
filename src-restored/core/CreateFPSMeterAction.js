/**
 * Restored source for Webpack Module #66920.
 *
 * Creates the optional FPS meter overlay used by the debug startup action.
 */
"use strict"

require("./FPSMeterRuntime")

const { CANVAS_ID } = require("./RuntimeCore")
const { log } = require("./RuntimeUtils")
const { markInjectable } = require("./DecoratorHelpers")
const { Settings } = require("./Settings")
const { Action } = require("./Action")

class CreateFPSMeterAction extends Action {
  async execute(options = Settings.debug.fpsMeter) {
    log.debug("createFPSMeter")

    if (typeof FPSMeter !== "undefined") {
      const canvas = document.getElementById(CANVAS_ID)
      const meterContainer = document.createElement("div")
      document.body.insertBefore(meterContainer, canvas.parentElement)
      const meter = new FPSMeter(meterContainer, options)
      meter.show()

      const tick = function tick() {
        meter.tick()
        requestAnimationFrame(tick)
      }
      tick()
    }

    return undefined
  }
}

markInjectable(CreateFPSMeterAction)

module.exports = { CreateFPSMeterAction }
