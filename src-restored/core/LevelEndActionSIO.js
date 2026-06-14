/**
 * Restored source for Webpack Module #24294.
 *
 * State.io level-end flow: platform counters, tournament score/update hooks,
 * win/lose popup sequence, next-level transition, and asset cleanup.
 */
"use strict"

const core = require("./RuntimeCore")
const { TypesFlow } = require("./CoreTypes")
const { UIEvents } = require("../ui/UIContext")
const { PopupType } = require("./PopupType")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { SpritesPool } = require("./SpritesPool")
const { GameState } = require("./GameState")
const { SIOConstants } = require("./SIOConstants")
const { Action } = require("./Action")
const { GameModel } = require("./GameModel")
const { LevelEndAction } = require("./LevelEndAction")

class LevelEndActionSIO extends LevelEndAction {
  async launch(won = false) {
    const model = this.model
    const meta = model.meta
    model.cookie.absoluteTryNum += 1
    SIOConstants.REWARD_AD_PLAYED.delete("boosters")

    await core.di.get(TypesGame.actions.tournamentPostScore)?.run()

    if (won) {
      this.model.cookie.absoluteLevelNum += 1
      if (this.social.inSolo) {
        await this.popupWin()
        await this.popupLevelComplete()
        await this.popupGift()
        await this.levelNext.run()
        this.model.state = GameState.LOBBY
      } else {
        await this.popupBattleResults()
        await this.popupLevelComplete()
        await this.updateTournament()
        await this.social.playSolo()
        await this.levelNext.run()
        this.model.state = GameState.LOBBY
      }
    } else {
      this.dispatch(UIEvents.POPUP, {
        id: PopupType.LOSE,
        props: { coins: meta.getReward() * meta.loseMultiplier },
      })
    }

    this.assets.purge()
  }

  async popupGift() {
    await core.di.get(TypesGame.actions.giftPopup)?.run()
  }

  async updateTournament() {
    return core.di.get(TypesGame.actions.tournamentReShare).run()
  }

  async createTournament() {
    return core.di.get(TypesGame.actions.tournamentCreate).run()
  }

  async popupWin() {
    await core.di.get(TypesGame.actions.winPopup)?.run({ id: PopupType.WIN_LEVEL })
  }

  async popupLevelComplete() {
    await core.di.get(TypesGame.actions.levelCompletePopup)?.run()
  }

  async popupBattleResults() {
    await core.di.get(TypesGame.actions.battleResultsPopup)?.run(this.data)
  }

  async submitScore() {
    const continent = this.model.currentContinent
    this.social.me.scoreSession = continent.getTotalScore()
    if (this.social.inSolo) {
      this.leaderboardGlobal?.submit(this.model.absoluteLevelNum, {
        continent: continent.data.id,
      })
    }
  }

  needToShowAD() {
    return false
  }
}

injectProperty(LevelEndActionSIO, "model", TypesGame.model, GameModel)
injectProperty(LevelEndActionSIO, "assets", TypesGame.spritesPool, SpritesPool)
injectProperty(LevelEndActionSIO, "levelNext", TypesFlow.LevelNext, Action)
markInjectable(LevelEndActionSIO)

module.exports = { LevelEndActionSIO }
