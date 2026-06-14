/**
 * Restored source for Webpack Module #63895.
 *
 * Yandex social platform model: resolves SDK state, user authorization,
 * locale, leaderboards, and game-switch behavior.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { Localize } = require("./Localize")
const { TypesApp, TypesSocial } = require("./CoreTypes")
const { ScoreType } = require("./SocialAppExports")
const { log } = require("./RuntimeUtils")
const { SocialModelBase } = require("./SocialModelBase")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class SocialModelYandex extends SocialModelBase {
  constructor() {
    super()
    this._userAuthorized = false
    this._friends = []
    this.leaderboards = []
    this._locale = "en_US"
    this._tld = "com"
  }

  async startGameAsync() {
    const yasdk = this.pageModel.bus?.params.yasdk
    this._yasdk = yasdk
    this._locale = this._determinateLocale()
    Localize.defaultLocale = this._locale
    await this.updateUserData(false)
  }

  async init(config) {
    this.leaderboards.push(this._leaderboardGlobal)
    this.leaderboards.push(this._leaderboardContext)

    const cookieData = this.cookie.get(["session"].concat(config?.cookies || []))
    const sessionData = this.session.init((await cookieData).session)
    this.cookie.save("session", sessionData)
    await this.payments.init({ yasdk: this._yasdk })
  }

  get me() {
    return this._me
  }

  async updateUserData(scopes = false) {
    let player
    let authorizationChanged = false

    try {
      player = await this._yasdk.getPlayer({ scopes })
      const authorized = player.getMode() !== "lite"
      if (this._userAuthorized !== authorized) {
        this._userAuthorized = authorized
        authorizationChanged = true
      }
    } catch (error) {
      log.warn(error)
    }

    if (!this._me) this._me = di.get(TypesSocial.user)
    this._me.init(player || di.get(TypesSocial.dummyUser))
    this.cookie.init(player)
    if (authorizationChanged) this.emit("AUTHORIZATION_STATE_CHANGED")
  }

  async authorizeUser() {
    if (!this._userAuthorized) {
      try {
        await this._yasdk.auth.openAuthDialog()
        await this.updateUserData(true)
      } catch (error) {
        log.warn(error)
      }
    }

    return this._userAuthorized
  }

  async postSessionScore(score) {
    return undefined
  }

  get friends() {
    return this._friends
  }

  getFriendById(id, friends) {
    friends = friends || this._friends
    if (id === this._me.id) return this._me

    for (const friend of friends) {
      if (friend.id === id) return friend
    }
  }

  get socialPlatform() {
    return "ya"
  }

  get userAuthorized() {
    return this._userAuthorized
  }

  async syncLeaderboards() {
    if (!this.userAuthorized) {
      await this._leaderboardContext.sync()
      return
    }

    await this._leaderboardContext.sync()
    const oldScore = this.me.scoreGlobal
    const oldExtra = this.me.scores?.getEntry(ScoreType.GLOBAL)?.getExtraData()

    await this._leaderboardGlobal.sync()
    const newScore = this.me.scoreGlobal
    const newExtra = this.me.scores?.getEntry(ScoreType.GLOBAL)?.getExtraData()

    if (oldScore > newScore) {
      if (oldExtra) await this._leaderboardGlobal.submit(oldScore, oldExtra)
      else await this._leaderboardGlobal.submit(oldScore)
    } else if (newScore > oldScore) {
      if (newExtra) await this._leaderboardContext.submit(newScore, newExtra)
      else await this._leaderboardContext.submit(newScore)
    }
  }

  get sdk() {
    return this._yasdk
  }

  _determinateLocale() {
    let locale = "en_US"
    const i18n = this._yasdk?.environment?.i18n

    if (i18n) {
      const { lang, tld } = i18n
      this._tld = tld || this._tld

      switch (lang) {
        case "ru":
        case "be":
        case "kk":
        case "uk":
        case "uz":
          locale = "ru_RU"
          break
        case "tr":
          locale = "tr_TR"
          break
        case "es":
          locale = "es_ES"
          break
        case "pt":
          locale = "pt_BR"
          break
        case "hi":
          locale = "hi_IN"
          break
        case "ar":
          locale = "ar_AR"
          break
        case "ja":
          locale = "ja_JP"
          break
        case "fr":
          locale = "fr_FR"
          break
        case "id":
          locale = "id_ID"
          break
        case "de":
          locale = "de_DE"
          break
        case "it":
          locale = "it_IT"
          break
        case "zh":
          locale = "zh_CN"
          break
      }
    }

    return locale
  }

  get locale() {
    return this._locale
  }

  get tld() {
    return this._tld
  }

  async switchGame(appId, options) {
    window.open(`//yandex.${this.tld}/games/app/${appId}`)
  }
}

injectProperty(SocialModelYandex, "pageModel", TypesApp.pageModel, Object)
injectProperty(SocialModelYandex, "_leaderboardGlobal", TypesSocial.leaderboardGlobal, Object)
injectProperty(SocialModelYandex, "_leaderboardContext", TypesSocial.leaderboardContext, Object)
markInjectable(SocialModelYandex)

module.exports = { SocialModelYandex }
