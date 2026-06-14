/**
 * Restored source for Webpack Module #74981.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { TypesAnalytics } = require("./CoreTypes")
const { AnalyticsTracker } = require("./AnalyticsTracker")

const AnalyticsModule = new ContainerModule((bind) => {
  bind(TypesAnalytics.tracker).to(AnalyticsTracker).inSingletonScope()
})

module.exports = { AnalyticsModule }
