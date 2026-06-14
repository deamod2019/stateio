/**
 * Restored source for Webpack Module #97954.
 *
 * Yandex global leaderboard adapter.
 */
"use strict"

const { EventDispatcher, CommonEvents, di } = require("./RuntimeCore")
const { TypesSocial } = require("./CoreTypes")
const { lazyInjectProperty, markInjectable } = require("./DecoratorHelpers")

const PREFIX = "Scores"

class LeaderboardGlobalYandex extends EventDispatcher {
  async sync() {
    this._lb = await this.social.sdk.getLeaderboards()
    window.lb = this._lb

    if (!(await this.social.sdk.isAvailableMethod("leaderboards.getLeaderboardEntries"))) {
      return false
    }

    let entries
    try {
      entries = await this._lb.getLeaderboardEntries(PREFIX, { includeUser: true })
    } catch (error) {
      console.warn("failed to initialize leaderboard", error)
      return false
    }

    this.social.friends.splice(0, Number.MAX_SAFE_INTEGER)
    entries.entries.forEach((entry) => {
      if (entry.player.uniqueID === this.social.me.id) {
        this.social.me.scores.update(undefined, this.castLeaderboardEntry(entry, this.social.me))
      } else {
        const user = di.get(TypesSocial.user)
        const resolved = Promise.resolve.bind(Promise)
        const id = entry.player.uniqueID
        const rawData = {
          signature: "",
          getName() {
            return entry.player.publicName
          },
          getPhoto: entry.player.getAvatarSrc,
          getID() {
            return id
          },
          getUniqueID() {
            return id
          },
          setData: resolved,
          getData: resolved,
          setStats: resolved,
          getStats: resolved,
          incrementStats: resolved,
          getMode() {
            return ""
          },
        }

        user.init(rawData)
        user.scores.update(undefined, this.castLeaderboardEntry(entry, user))
        this.social.friends.push(user)
      }
    })
    this.emit(CommonEvents.UPDATED)
    return true
  }

  async syncUserEntry() {
    if (this._lb && (await this.social.sdk.isAvailableMethod("leaderboards.getLeaderboardPlayerEntry"))) {
      const entry = await this._lb.getLeaderboardPlayerEntry(PREFIX)
      if (entry) this.social.me.scores.update(undefined, this.castLeaderboardEntry(entry, this.social.me))
    }
  }

  castLeaderboardEntry(entry, user) {
    if (entry) {
      this.updateUserLbRecords(PREFIX, user, entry)
      return {
        getScore() {
          return entry.score
        },
        getFormattedScore() {
          return entry.formattedScore
        },
        getTimestamp() {
          return -1
        },
        getRank() {
          return entry.rank
        },
        getExtraData() {
          return entry.extraData
        },
        getPlayer() {
          return user.rawData || entry.player
        },
      }
    }
    return undefined
  }

  async submit(score, extraData) {
    if (score < this.social.me.scoreGlobal) return false

    if ((await this.social.sdk.isAvailableMethod("leaderboards.setLeaderboardScore")) && this._lb) {
      const payload = typeof extraData === "string" ? extraData : JSON.stringify(extraData)
      await this._lb.setLeaderboardScore(PREFIX, score, payload)
      this.syncUserEntry()
    }

    return false
  }

  updateUserLbRecords(leaderboard, user, entry) {
    let record = user.lbRecords.find((item) => item.lb === leaderboard)
    if (record) {
      record.score = entry.score
      record.rank = entry.rank
      record.extraData = entry.extraData
    } else {
      record = {
        lb: leaderboard,
        score: entry.score,
        rank: entry.rank,
        extraData: entry.extraData,
      }
      user.lbRecords.push(record)
    }
  }
}

LeaderboardGlobalYandex.PREFIX = PREFIX
lazyInjectProperty(LeaderboardGlobalYandex, "social", TypesSocial.model, Object)
markInjectable(LeaderboardGlobalYandex)

module.exports = { LeaderboardGlobalYandex, PREFIX }
