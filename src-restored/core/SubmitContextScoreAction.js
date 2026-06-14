/**
 * Restored source for Webpack Module #6248.
 *
 * Submits the current social-context score after a stage when context play is
 * active.
 */
"use strict"

const {
  defineDecoratedProperty,
  injectProperty,
  markInjectable,
} = require("./DecoratorHelpers")
const { Action } = require("./Action")
const { lazyGet } = require("./RuntimeCore")
const { TypesSocial } = require("./CoreTypes")
const { GameModel } = require("./GameModel")
const { TypesGame } = require("./TypesGame")

class SubmitContextScoreAction extends Action {
  async execute() {
    const model = this.model
    model.meta
    const social = model.social
    const continent = model.currentContinent

    if (social.context_id && !social.inSolo) {
      lazyGet(TypesSocial.leaderboardContext)?.submit(
        social.me.scoreContext + 1,
        continent.getHistory(),
      )
    }

    return undefined
  }
}

injectProperty(SubmitContextScoreAction, "model", TypesGame.model, GameModel)
defineDecoratedProperty(SubmitContextScoreAction, "model")
markInjectable(SubmitContextScoreAction)

module.exports = { SubmitContextScoreAction }
