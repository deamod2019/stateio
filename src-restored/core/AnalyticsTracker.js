/**
 * Restored source for Webpack Module #53373.
 *
 * Fan-out analytics tracker with lightweight value/payload normalization.
 */
"use strict"

const core = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { TypesCore } = require("./CoreTypes")

class AnalyticsTracker {
  constructor() {
    this.providers = new Set()
    this._useFb = true
  }

  init() {
    const analyticsConfig = core.di.get(TypesCore.gameConfig).analytics
    if (analyticsConfig) {
      const useFb = analyticsConfig.fb
      analyticsConfig.firebase
      if (typeof useFb === "boolean") {
        this._useFb = useFb
      }
    }
  }

  addProvider(provider) {
    this.providers.add(provider)
  }

  removeProvider(provider) {
    this.providers.delete(provider)
  }

  track(...args) {
    let [eventName, value, data] = args
    if (typeof value === "object") {
      data = value
      value = 0
    }
    if (!value) value = 0

    if (eventName) {
      this.providers.forEach((provider) => provider.track(eventName, value, data))
    }
  }
}

markInjectable(AnalyticsTracker)

module.exports = { AnalyticsTracker }
