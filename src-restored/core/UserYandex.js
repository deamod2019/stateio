/**
 * Restored source for Webpack Module #59503.
 *
 * Yandex SDK player wrapper with injected score store.
 */
"use strict"

const { TypesSocial } = require("./CoreTypes")
const { EventDispatcher } = require("./EventDispatcher")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { ScoreType } = require("./SocialAppExports")

class UserYandex extends EventDispatcher {
  constructor(...args) {
    super(...args)
    this._isNew = false
    this.lbRecords = []
  }

  getLbRecord(leaderboard = "Scores") {
    return this.lbRecords.find((record) => record.lb === leaderboard)
  }

  init(rawData, isNew = false) {
    this.rawData = rawData
    this._isNew = isNew
    return this
  }

  get id() {
    return (
      ((this.rawData.getUniqueID && this.rawData.getUniqueID()) ||
        (this.rawData.getID && this.rawData.getID())) + ""
    )
  }

  get name() {
    return this.rawData.getName && this.rawData.getName() + ""
  }

  get photo() {
    return this.rawData.getPhoto && this.rawData.getPhoto("large") + ""
  }

  get scoreSession() {
    return this._scores.getScore(ScoreType.SESSION) || 0
  }

  set scoreSession(score) {
    this._scores.setScoreSession(score)
  }

  get scoreGlobal() {
    return this._scores.getScore(ScoreType.GLOBAL) || 0
  }

  get scoreContext() {
    return this._scores.getScore(ScoreType.CONTEXT) || 0
  }

  get scores() {
    return this._scores
  }

  get isNew() {
    return this._isNew
  }
}

injectProperty(UserYandex, "_scores", TypesSocial.userScore, Object)
markInjectable(UserYandex)

module.exports = { UserYandex }
