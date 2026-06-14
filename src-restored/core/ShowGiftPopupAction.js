/**
 * Restored source for Webpack Module #97586.
 *
 * Opens the gift popup, including the current continent progress and optional
 * skin gift reward, then waits for the popup continuation callback.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { UIEvents } = require("../ui/UIContext")
const { log } = require("./RuntimeUtils")
const { PopupType } = require("./PopupType")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { Action } = require("./Action")

class ShowGiftPopupAction extends Action {
  async execute() {
    const giftWasCollected = await new Promise((resolve) => {
      const props = {
        captured: this.model.currentContinent.stageLevel,
        total: this.model.currentContinent.totalStages,
        reward: lazyGet(TypesGame.skinManager)?.getGift(),
        onContinue: resolve,
      }

      this.dispatch(UIEvents.POPUP, { id: PopupType.GIFT, props })
    })

    log.debug("giftWasCollected", giftWasCollected)
  }
}

injectProperty(
  ShowGiftPopupAction,
  "model",
  TypesGame.model,
  typeof GameModel !== "undefined" ? GameModel : Object,
)
markInjectable(ShowGiftPopupAction)

module.exports = { ShowGiftPopupAction }
