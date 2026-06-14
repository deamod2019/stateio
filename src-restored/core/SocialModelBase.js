/**
 * Restored source for Webpack Module #38889.
 *
 * Base social model with no-op platform defaults.
 */
"use strict"

const { EventDispatcher } = require("./EventDispatcher")
const { TypesSocial } = require("./CoreTypes")
const {
  deferredLazyInjectProperty,
  injectProperty,
  markInjectable,
} = require("./DecoratorHelpers")
const { SessionData } = require("./CookieDataLocalStorage")
const { SOCIAL_POPUP } = require("./SocialAppExports")

class SocialModelBase extends EventDispatcher {
  constructor() {
    super()
    this.session = new SessionData()
    this.showPauseOverlay = false
  }

  async startGameAsync() {}

  getFriendById(id, fallback) {}

  async init(config) {}

  async playSolo() {}

  async playOffline(mode = "default") {
    return SOCIAL_POPUP.FAILED
  }

  async playWith(user, showPopup = false) {
    return SOCIAL_POPUP.FAILED
  }

  async notify(message) {
    return false
  }

  async showShortcutPopup() {
    return false
  }

  async showBotPopup(user) {
    return false
  }

  async share(payload) {
    return false
  }

  async switchGame(game, options) {}

  async invite(payload, showPopup = false) {
    return SOCIAL_POPUP.FAILED
  }

  getRandomChallenger(excluded = []) {}

  getRandomOpponent() {}

  async syncLeaderboards() {}

  postSessionScore(score) {}

  get me() {
    return this.nobody
  }

  get opponent() {}

  get contextPlayers() {
    return []
  }

  get inSolo() {
    return true
  }

  get inGroup() {
    return false
  }

  get friends() {
    return []
  }

  get socialPlatform() {
    return "web"
  }
}

injectProperty(SocialModelBase, "cookie", TypesSocial.cookie, Object)
injectProperty(SocialModelBase, "payments", TypesSocial.payments, Object)
deferredLazyInjectProperty(SocialModelBase, "nobody", TypesSocial.dummyUser, Object)
markInjectable(SocialModelBase)

module.exports = { SocialModelBase }
