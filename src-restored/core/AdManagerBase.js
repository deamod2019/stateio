/**
 * Restored source for Webpack Module #73018.
 *
 * Base ad manager with default unsupported responses, preload no-ops, throttling
 * helper, and shared ad lifecycle event dispatch.
 */
"use strict"

const { GlobalEventProvider } = require("./RuntimeCore")
const { log } = require("./RuntimeUtils")
const { AdEvents, AdResponse } = require("./CoreTypes")

class AdManagerBase extends GlobalEventProvider {
  static needToThrottleAd(config) {
    const showFirstAt = config.systemStart + config.showFirstDelay
    const now = Date.now()
    if (now < showFirstAt) {
      log.trace(`needToThrottleAdd until ${showFirstAt - now}`)
      return true
    }

    if (config.lastShow) {
      const showNextAt = config.lastShow + config.showNextDelay
      if (now < showNextAt) {
        log.trace(`needToThrottleAdd until ${showNextAt - now}`)
        return true
      }
    }

    return false
  }

  async showAd(placement, reward = false, preloadNext = true) {
    void placement
    void reward
    void preloadNext
    return AdResponse.NOT_SUPPORTED
  }

  async showRewardAd(placement, preloadNext = true) {
    void placement
    void preloadNext
    return AdResponse.NOT_SUPPORTED
  }

  async preloadNextInter(placement) {
    void placement
  }

  async preloadNextReward(placement) {
    void placement
  }

  onAdStarted(payload) {
    this.dispatch(AdEvents.STARTED, payload)
  }

  onAdEnded(payload) {
    this.dispatch(AdEvents.ENDED, payload)
  }
}

AdManagerBase.config = {
  ids: { INTER: "", BANNER: "", REWARD: "" },
  throttling: {
    interstitial: {
      systemStart: Date.now(),
      showFirstDelay: 20000,
      showNextDelay: 60000,
      lastShow: 0,
    },
  },
  interstitialsDisabled: false,
}

module.exports = { AdManagerBase }
