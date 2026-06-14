/**
 * Restored source for Webpack Module #43603.
 *
 * External context leaderboard adapter backed by the app scores-context API.
 */
"use strict"

const { EventDispatcher } = require("./RuntimeCore")
const { TypesApp, TypesSocial } = require("./CoreTypes")
const { log } = require("./RuntimeUtils")
const { AppModel } = require("./AppModel")
const {
  injectProperty,
  lazyInjectProperty,
  markInjectable,
} = require("./DecoratorHelpers")

class LeaderboardContextExternal extends EventDispatcher {
  async sync() {
    if (this.social.inSolo) return false

    let response
    try {
      const contextId = this.social.context_id
      response = await this.appModel.post("scores-context/get", { ctx_id: contextId })
    } catch (error) {
      log.debug("failed to fetch", error)
      return false
    }

    const knownUsers = this.social.friends.concat(this.social.me)
    for (const userId in response) {
      const user = this.social.getFriendById(userId, knownUsers)
      if (user) user.scores.update(this.castLeaderboardEntry(response[userId], user))
    }
    return true
  }

  async submit(score, extraData) {
    if (this.social.inSolo) return false

    let response
    try {
      const contextId = this.social.context_id
      const userId = this.social.me.id
      const payload = typeof extraData === "string" ? extraData : JSON.stringify(extraData)
      response = await this.appModel.post("scores-context/post", {
        ctx_id: contextId,
        user_id: userId,
        score,
        extData: payload,
      })
    } catch (error) {
      log.debug("failed to fetch", error)
      return false
    }

    this.social.me.scores.update(this.castLeaderboardEntry(response, this.social.me))
    return true
  }

  castLeaderboardEntry(entry, user) {
    if (entry) {
      return {
        getScore() {
          return entry.score
        },
        getFormattedScore() {
          return `${entry.score}`
        },
        getTimestamp() {
          return -1
        },
        getRank() {},
        getExtraData() {
          return entry.extData
        },
        getPlayer() {
          return user.rawData
        },
      }
    }
    return undefined
  }
}

injectProperty(LeaderboardContextExternal, "appModel", TypesApp.model, AppModel)
lazyInjectProperty(LeaderboardContextExternal, "social", TypesSocial.model, Object)
markInjectable(LeaderboardContextExternal)

module.exports = { LeaderboardContextExternal }
