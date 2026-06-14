/**
 * Restored source for Webpack Module #23004.
 */
"use strict"

const firebaseAnalytics = require("./FirebaseAnalyticsRuntime")
const { markInjectable } = require("./DecoratorHelpers")

class FirebaseAnalyticsProvider {
  init(app) {
    firebaseAnalytics.isSupported().then((supported) => {
      if (supported) {
        this.firebaseAnalytics = firebaseAnalytics.getAnalytics(app)
      }
    })
  }

  track(eventName, value, data) {
    this.logEvent(eventName, { value, ...data })
  }

  logEvent(eventName, data) {
    if (this.firebaseAnalytics) {
      firebaseAnalytics.logEvent(this.firebaseAnalytics, eventName, data)
    }
  }
}

markInjectable(FirebaseAnalyticsProvider)

module.exports = { FirebaseAnalyticsProvider }
