/**
 * Restored compatibility barrel for Webpack Module #32455.
 */
"use strict"

Object.assign(
  exports,
  require("./FirebaseAnalyticsProvider"),
  require("./GTAGAnalyticsProvider"),
)
