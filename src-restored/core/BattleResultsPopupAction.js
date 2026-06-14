/**
 * Restored source for Webpack Module #10379.
 *
 * Opens the social battle-results popup, waits for its continuation callback,
 * then logs the selected continuation result.
 */
"use strict"

const { UIEvents } = require("../ui/UIContext")
const { log } = require("./RuntimeUtils")
const { PopupType } = require("./PopupType")
const { TypesGame } = require("./TypesGame")
const { TypesSocial } = require("./CoreTypes")
const { ISocial } = require("./SocialAppExports")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { Action } = require("./Action")

class BattleResultsPopupAction extends Action {
  async execute(win = true) {
    const shared = await new Promise((resolve) => {
      const props = { win, onContinue: resolve }
      this.dispatch(UIEvents.POPUP, { id: PopupType.BATTLE_RESULTS, props })
    })

    log.debug("BattleResultsPopupAction shared", shared)
  }
}

injectProperty(
  BattleResultsPopupAction,
  "model",
  TypesGame.model,
  typeof GameModel !== "undefined" ? GameModel : Object,
)
injectProperty(
  BattleResultsPopupAction,
  "social",
  TypesSocial.model,
  typeof ISocial !== "undefined" ? ISocial : Object,
)
markInjectable(BattleResultsPopupAction)

module.exports = { BattleResultsPopupAction }
