/**
 * Restored source for Webpack Module #15850.
 *
 * Initializes the app backend model, tracks the launch entry point, and starts
 * the configured platform authorization action.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const {
  TypesAnalytics,
  TypesApp,
  TypesCore,
  TypesSocial,
} = require("./CoreTypes")
const { log } = require("./RuntimeUtils")
const { AppModel } = require("./AppModel")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class LoginAction extends Action {
  async execute() {
    const firebaseConfig = this.gameConfig.firebase

    if (!firebaseConfig) {
      log.warn("Firebase analytics is not configured")
      return undefined
    }

    await this.model.init({
      appId: this.gameConfig.id,
      firebase: firebaseConfig,
      host: this.gameConfig.backend?.host,
      provider: this.social.socialPlatform,
    })

    this.trackEntryPoint()
    core.lazyRun(TypesApp.authAction)
    return undefined
  }

  trackEntryPoint(data) {
    const tracker = core.lazyGet(TypesAnalytics.tracker)

    if (data?.ref) {
      const eventName = `game_entry_${data.ref.source}`
      tracker.track(this.social.session.ftue ? `ftue_${eventName}` : eventName, data.ref)
    } else {
      tracker.track(this.social.session.ftue ? "ftue_game_entry" : "game_entry")
    }
  }
}

injectProperty(LoginAction, "model", TypesApp.model, AppModel)
injectProperty(LoginAction, "social", TypesSocial.model, Object)
injectProperty(LoginAction, "gameConfig", TypesCore.gameConfig, Object)
injectProperty(LoginAction, "analytics", TypesAnalytics.tracker, Object)
markInjectable(LoginAction)

module.exports = { LoginAction }
