/**
 * Restored compatibility barrel for Webpack Module #73802.
 */
"use strict"

Object.assign(
  exports,
  require("./AnalyticsModule"),
  require("./AnalyticsProvidersExports"),
)
