/**
 * Restored source for Webpack Module #41976.
 *
 * External global leaderboard adapter backed by the app scores API.
 */
"use strict"

const { EventDispatcher, CommonEvents, lazyGet } = require("./RuntimeCore")
const { TypesSocial, TypesApp } = require("./CoreTypes")
const { log } = require("./RuntimeUtils")
const { lazyInjectProperty, markInjectable } = require("./DecoratorHelpers")

class LeaderboardGlobalExternal extends EventDispatcher {
  constructor(...args) {
    super(...args)
    this.__SYNCED = false
  }

  async sync(limit = 100) {
    limit
    if (this.__SYNCED) return true

    const userId = this.social.me.id
    const friends = this.social.friends.map((friend) => friend.id)
    let response

    try {
      response = await this.appSend("scores/get", { user_id: userId, friends })
    } catch (error) {
      error
      return false
    }

    const knownUsers = this.social.friends.concat(this.social.me)
    for (const userId in response) {
      const user = this.social.getFriendById(userId, knownUsers)
      user?.scores.update(undefined, this.castLeaderboardEntry(response[userId], user))
    }

    this.__SYNCED = true
    this.emit(CommonEvents.UPDATED)
    return true
  }

  async submit(score, extraData) {
    const payload = {
      user_id: this.social.me.id,
      score,
      extData: extraData,
    }

    if (score < this.social.me.scoreGlobal) return false

    this.social.me.scores.update(undefined, this.castLeaderboardEntry(payload, this.social.me))
    await this.appSend("scores/post", payload)
    return true
  }

  async appSend(url, payload) {
    const appModel = lazyGet(TypesApp.model)
    if (appModel) return appModel.post(url, payload)

    log.warn("Failed to send request")
    return undefined
  }

  castLeaderboardEntry(entry, user) {
    if (entry) {
      return {
        getScore() {
          return entry.score
        },
        getFormattedScore() {
          return ""
        },
        getTimestamp() {
          return -1
        },
        getRank() {
          return 0
        },
        getExtraData() {
          return entry.extData
        },
        getPlayer() {
          return user?.rawData
        },
      }
    }
    return undefined
  }
}

lazyInjectProperty(LeaderboardGlobalExternal, "social", TypesSocial.model, Object)
markInjectable(LeaderboardGlobalExternal)

module.exports = { LeaderboardGlobalExternal }
