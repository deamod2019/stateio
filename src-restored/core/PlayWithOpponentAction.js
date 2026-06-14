/**
 * Restored source for Webpack Module #49295.
 *
 * Generic "play with opponent" flow: request a social opponent session and
 * start a level only after the social popup is accepted.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const { SOCIAL_POPUP } = require("./SocialAppExports")
const { TypesFlow, TypesSocial } = require("./CoreTypes")
const { injectProperty } = require("./DecoratorHelpers")
const { LevelStartAction } = require("./LevelStartAction")

class PlayWithOpponentAction extends Action {
  async execute(opponent) {
    if ((await this.social.playWith(opponent, true)) === SOCIAL_POPUP.ACCEPTED) {
      await this.levelStart.run()
    }
  }
}

injectProperty(PlayWithOpponentAction, "social", TypesSocial.model, Object)
injectProperty(PlayWithOpponentAction, "levelStart", TypesFlow.LevelStart, LevelStartAction)

module.exports = { PlayWithOpponentAction }
