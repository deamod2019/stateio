/**
 * Restored source for Webpack Module #14107.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { ContainerModule } = require("./diRuntime")
const { CreateFPSMeterAction } = require("./CreateFPSMeterAction")

const DebugModule = new ContainerModule(() => {
  di.bind("fspMeterAction").to(CreateFPSMeterAction)
})

module.exports = { DebugModule }
