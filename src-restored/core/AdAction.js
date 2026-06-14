/**
 * Restored source for Webpack Module #45301.
 *
 * Action wrapper around the injected ad manager.
 */
"use strict"

const { Action } = require("./RuntimeCore")
const { AdResponse, TypesAds } = require("./CoreTypes")
const { AdManagerBase } = require("./AdManagerBase")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class AdAction extends Action {
  async execute(data) {
    let placement
    let reward = false
    let preloadNext = true

    if (typeof data === "boolean") {
      reward = data
    } else if (data !== undefined) {
      placement = data.placement
      reward = data.reward
      preloadNext = data.preloadNext
    }

    await this.showAd(placement, reward, preloadNext)
  }

  async showAd(placement, reward = false, preloadNext = true) {
    let response = AdResponse.UNKNOWN

    if (reward) {
      response = await this.ads.showRewardAd(placement || AdManagerBase.config.ids.REWARD, preloadNext)
    } else {
      response = await this.ads.showAd(placement || AdManagerBase.config.ids.INTER, false, preloadNext)
    }

    return response
  }

  async showRewardAd(placement = AdManagerBase.config.ids.REWARD, preloadNext = true) {
    return this.showAd(placement, true, preloadNext)
  }
}

injectProperty(AdAction, "ads", TypesAds.manager, Object)
markInjectable(AdAction)

module.exports = { AdAction }
