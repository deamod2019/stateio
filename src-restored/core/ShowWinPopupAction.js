/**
 * Restored source for Webpack Module #47665.
 *
 * Opens the win popup, waits for the popup continuation callback, then logs the
 * reward collection result.
 */
"use strict"

const { UIEvents } = require("../ui/UIContext")
const { log } = require("./RuntimeUtils")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { Action } = require("./Action")

class ShowWinPopupAction extends Action {
  async execute(data) {
    const rewardCollected = await new Promise((resolve) => {
      const props = {
        coins: this.model.meta.getReward(),
        scoreStage: this.model.currentContinent?.getStageScore() || 0,
        onContinue: resolve,
        showRewardAd: this.model.offerX3(),
        ...data.props,
      }

      this.dispatch(UIEvents.POPUP, { id: data.id, props })
    })

    log.debug("win reward collected", rewardCollected)
  }
}

injectProperty(
  ShowWinPopupAction,
  "model",
  TypesGame.model,
  typeof GameModel !== "undefined" ? GameModel : Object,
)
markInjectable(ShowWinPopupAction)

module.exports = { ShowWinPopupAction }
