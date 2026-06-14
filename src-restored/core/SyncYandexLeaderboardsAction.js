/**
 * Restored source for Webpack Module #25556.
 *
 * Authorizes the Yandex user, synchronizes leaderboards, and backfills the
 * global leaderboard when the session score is higher than the synced score.
 */
"use strict"

const { Action } = require("./Action")
const { TypesSocial } = require("./CoreTypes")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class SyncYandexLeaderboardsAction extends Action {
  async execute() {
    let synced = false
    const oldGlobalScore = this.social.me.scoreGlobal

    if (this.social.authorizeUser) {
      const authorized = await this.social.authorizeUser()
      const sessionScore = this.social.me.scoreSession

      if (authorized) {
        await this.social.syncLeaderboards()
        const syncedGlobalScore = this.social.me.scoreGlobal
        const bestKnownScore = Math.max(oldGlobalScore, sessionScore)

        if (bestKnownScore > syncedGlobalScore) {
          const { di } = require("./RuntimeCore")
          await di.get(TypesSocial.leaderboardGlobal).submit(bestKnownScore)
        }

        synced = true
      }
    }

    return synced
  }
}

injectProperty(SyncYandexLeaderboardsAction, "social", TypesSocial.model, Object)
markInjectable(SyncYandexLeaderboardsAction)

module.exports = { SyncYandexLeaderboardsAction }
