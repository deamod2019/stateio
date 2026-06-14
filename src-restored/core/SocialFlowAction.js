/**
 * Restored source for Webpack Module #3057.
 *
 * Base flow action for social/gameplay transitions: optional ad display,
 * launch hook execution, push dispatch helpers, banner display, and tracking.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const {
  TypesAds,
  TypesAnalytics,
  TypesCore,
  TypesSocial,
} = require("./CoreTypes")
const { AdAction } = require("./SocialAppExports")
const { log } = require("./RuntimeUtils")
const {
  injectProperty,
  lazyInjectProperty,
  markInjectable,
} = require("./DecoratorHelpers")

class SocialFlowAction extends Action {
  async execute(data) {
    log.debug("#gameflow", this)
    await this.beforeLaunch()
    await this.launch(data)
    await this.afterLaunch()
  }

  async beforeLaunch() {
    await this.showAdIfNeeded()
  }

  async afterLaunch() {
    if (this.TRACK_EVENT) this.track()
  }

  async showAdIfNeeded() {
    if (this.needToShowAD()) await this.showAd()
  }

  sendPush(token, data) {
    this.sendPushAsync(token, data).then()
  }

  async sendPushAsync(token, data) {
    await core.lazyGet(token)?.run(data)
  }

  async showAd() {
    await this.adAction.run()
  }

  needToShowAD() {
    return true
  }

  tryToShowBanner() {
    if (this.gameConfig.useBannerAd) this.adManager.showBanner?.()
  }

  track() {
    core.lazyGet(TypesAnalytics.tracker)?.track(
      `${this.social.session.ftue ? "ftue_" : ""}${this.TRACK_EVENT}`,
    )
  }
}

injectProperty(SocialFlowAction, "social", TypesSocial.model, Object)
injectProperty(SocialFlowAction, "adAction", TypesAds.adAction, AdAction)
lazyInjectProperty(SocialFlowAction, "gameConfig", TypesCore.gameConfig, Object)
lazyInjectProperty(SocialFlowAction, "adManager", TypesAds.manager, Object)
markInjectable(SocialFlowAction)

module.exports = { SocialFlowAction }
