/**
 * Restored source for Webpack Module #97907.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")

class GTAGAnalyticsProvider {
  track(eventName, value, data) {
    gtag && gtag("event", eventName, data)
  }
}

markInjectable(GTAGAnalyticsProvider)

module.exports = { GTAGAnalyticsProvider }
