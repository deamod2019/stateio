/**
 * Restored source for Webpack Module #51779.
 *
 * Starts gameplay from the start screen after the social bot popup and advances
 * through the level-next flow.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { TypesFlow, TypesSocial } = require("./CoreTypes")
const { ISocial } = require("./SocialAppExports")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { LevelNextActionSIO } = require("./LevelNextActionSIO")
const { Action } = require("./Action")

class StartGameAction extends Action {
  async execute() {
    await this.social.showBotPopup()
    await this.levelNext.run()
    lazyGet(TypesGame.actions.bannerControllerGameDistribution)
  }
}

injectProperty(StartGameAction, "model", TypesGame.model, GameModel)
injectProperty(
  StartGameAction,
  "social",
  TypesSocial.model,
  typeof ISocial !== "undefined" ? ISocial : Object,
)
injectProperty(
  StartGameAction,
  "levelNext",
  TypesFlow.LevelNext,
  typeof LevelNextActionSIO !== "undefined" ? LevelNextActionSIO : Object,
)
markInjectable(StartGameAction)

module.exports = { StartGameAction }
