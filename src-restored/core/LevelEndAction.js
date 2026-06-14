/**
 * Restored source for Webpack Module #61201.
 *
 * Generic level-end flow: determine win state, submit scores, optionally show
 * ads, send finish push, show the end screen, and track win/loss status.
 */
"use strict"

const core = require("./RuntimeCore")
const {
  TypesAnalytics,
  TypesFlow,
  TypesNotification,
  TypesSocial,
} = require("./CoreTypes")
const { markInjectable } = require("./DecoratorHelpers")
const { SocialFlowAction } = require("./SocialFlowAction")

class LevelEndAction extends SocialFlowAction {
  constructor(...args) {
    super(...args)
    this.TRACK_EVENT = "level_end"
  }

  async beforeLaunch() {
    this._won = this.isWon()
    this.tryToShowBanner()
    await Promise.all([this.submitScore(), this.showAdIfNeeded()])
  }

  async launch() {
    this.sendPush(TypesNotification.finish, { isWon: this._won })
    await core.lazyGet(TypesFlow.UI.endScreenAction)?.run(this._won)
  }

  async submitScore() {
    this.social.postSessionScore()
    this.leaderboardGlobal?.submit(this.social.me.scoreSession).then()
    if (this.social.me.scoreSession > this.social.me.scoreGlobal) {
      core.lazyGet(TypesFlow.share)?.run()
    }
    if (!this.social.inSolo) {
      await this.leaderboardContext?.submit(this.social.me.scoreSession)
    }
  }

  needToShowAD() {
    return false
  }

  isWon() {
    if (typeof this.data === "boolean") return this.data
    if (this.social.inSolo) return this.social.me.scoreSession > this.social.me.scoreGlobal
    if (this.social.inBlindContext) return true
    if (this.social.inGroup) {
      const [topPlayer] = this.social.contextPlayers.sort(
        (left, right) => right.scoreContext - left.scoreContext,
      )
      if (topPlayer) {
        return (
          Math.max(this.social.me.scoreContext, this.social.me.scoreSession) >=
          topPlayer.scoreContext
        )
      }
    }
    return !!(
      this.social.opponent &&
      this.social.me.scoreSession > this.social.opponent.scoreContext
    )
  }

  get leaderboardContext() {
    return core.lazyGet(TypesSocial.leaderboardContext)
  }

  get leaderboardGlobal() {
    return core.lazyGet(TypesSocial.leaderboardGlobal)
  }

  track() {
    core.lazyGet(TypesAnalytics.tracker)?.track(this.TRACK_EVENT, 1, {
      status: this.isWon() ? "won" : "loose",
    })
  }
}

markInjectable(LevelEndAction)

module.exports = { LevelEndAction }
