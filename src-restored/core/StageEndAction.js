/**
 * Restored source for Webpack Module #12079.
 *
 * Handles end-of-stage rewards/popups for solo and social gameplay before
 * moving into the next level flow.
 */
"use strict"

const core = require("./RuntimeCore")
const { TypesFlow } = require("./CoreTypes")
const { UIEvents } = require("../ui/UIContext")
const { PopupType } = require("./PopupType")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { Action } = require("./Action")
const { SocialFlowAction } = require("./SocialFlowAction")

class StageEndAction extends SocialFlowAction {
  async launch(win = false) {
    const model = this.model
    const { meta, cookie, social, currentContinent } = model

    cookie.absoluteTryNum++
    this.social.me.scoreSession = Math.round(currentContinent.getTotalScore())

    await core.di.get(TypesGame.actions.tournamentPostScore)?.run()

    if (social.inSolo) {
      if (win) {
        await this.winSolo()
      } else {
        this.dispatch(UIEvents.POPUP, {
          id: PopupType.LOSE,
          props: { coins: meta.getReward() * meta.loseMultiplier },
        })
      }
    } else {
      await core.di.get(TypesGame.actions.battleResultsPopup)?.run(win)
      await this.levelNext.run()
    }
  }

  async winSolo() {
    await core.di.get(TypesGame.actions.winPopup)?.run({
      id: PopupType.WIN_STAGE,
      props: { showRewardAd: this.model.offerX3() },
    })
    await core.di.get(TypesGame.actions.giftPopup)?.run()
    await this.levelNext.run()
  }

  needToShowAD() {
    return false
  }
}

injectProperty(StageEndAction, "model", TypesGame.model, GameModel)
injectProperty(StageEndAction, "levelNext", TypesFlow.LevelNext, Action)
markInjectable(StageEndAction)

module.exports = { StageEndAction }
