/**
 * Restored source for Webpack Module #10274.
 *
 * Generic next-level flow action, including opponent replay handling, free solo
 * fallback attempts, and deferred level-start execution.
 */
"use strict"

const { SOCIAL_POPUP } = require("./SocialAppExports")
const { TypesFlow } = require("./CoreTypes")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { SocialFlowAction } = require("./SocialFlowAction")
const { LevelStartAction } = require("./LevelStartAction")

class LevelNextAction extends SocialFlowAction {
  constructor() {
    super()
    this.TRACK_EVENT = "level_next"
    this.onFailed = () => {
      throw new Error("Something went wrong")
    }
  }

  async launch(opponent) {
    if (!opponent) {
      LevelNextAction.FREE_SOLO_ATTEMPTS -= 1
      return this.playNextSolo()
    }

    if (opponent === this.social.opponent) return this.gotoNextLevel()

    switch (await this.social.playWith(opponent, true)) {
      case SOCIAL_POPUP.ACCEPTED:
        return this.gotoNextLevel(true)
      case SOCIAL_POPUP.CANCELLED:
        if (LevelNextAction.FREE_SOLO_ATTEMPTS > 0) {
          LevelNextAction.FREE_SOLO_ATTEMPTS -= 1
          return this.playNextSolo()
        }
        break
    }
  }

  async playNextSolo() {
    await Promise.all([this.social.playSolo(), this.gotoNextLevel()])
  }

  async gotoNextLevel(waitForContextChange = false) {
    this.levelStart.waitForContextChange = waitForContextChange
    await this.levelStart.run()
  }

  needToShowAD() {
    return false
  }
}

LevelNextAction.FREE_SOLO_ATTEMPTS = Number.MAX_SAFE_INTEGER
injectProperty(LevelNextAction, "levelStart", TypesFlow.LevelStart, LevelStartAction)
markInjectable(LevelNextAction)

module.exports = { LevelNextAction }
