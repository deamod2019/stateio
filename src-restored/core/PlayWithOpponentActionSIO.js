/**
 * Restored source for Webpack Module #65897.
 *
 * State.io platform variant: a confirmed opponent session starts the level and
 * immediately enters the stage after the level-start flow completes.
 */
"use strict"

const { SOCIAL_POPUP } = require("./SocialAppExports")
const { TypesGame } = require("./TypesGame")
const { injectProperty } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { PlayWithOpponentAction } = require("./PlayWithOpponentAction")

class PlayWithOpponentActionSIO extends PlayWithOpponentAction {
  async execute(opponent) {
    if ((await this.social.playWith(opponent, false)) === SOCIAL_POPUP.ACCEPTED) {
      await this.levelStart.run()
      this.model.startStage()
    }
  }
}

injectProperty(PlayWithOpponentActionSIO, "model", TypesGame.model, GameModel)

module.exports = { PlayWithOpponentActionSIO }
