/**
 * Restored source for Webpack Module #35567.
 *
 * Routes the end-of-level UI to leaderboard, win, or game-over screens based on
 * social session state and the win flag.
 */
"use strict"

const { TypesFlow, TypesSocial, TypesUI } = require("./CoreTypes")
const { ScoreType } = require("./SocialAppExports")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Action } = require("./Action")

class EndScreenAction extends Action {
  async execute(won = false) {
    if (this.social.inGroup) {
      this.dispatch(TypesUI.events.SCREEN_CHANGED, {
        id: TypesUI.screen.LEADERBOARD,
        props: {
          users: this.social.contextPlayers,
          scoreType: ScoreType.CONTEXT,
          overlay: false,
          onClose: () => this.levelStart.run(),
        },
      })
      return
    }

    if (won) {
      this.dispatch(TypesUI.events.SCREEN_CHANGED, {
        id: TypesUI.screen.WIN,
        props: {
          opponent: this.social.opponent,
          nextMatch: this.social.getRandomOpponent(),
        },
      })
      return
    }

    this.dispatch(TypesUI.events.SCREEN_CHANGED, {
      id: TypesUI.screen.GAME_OVER,
      props: {
        opponent: this.social.opponent,
        nextMatch: this.social.inSolo ? this.social.getRandomOpponent() : undefined,
      },
    })
  }
}

injectProperty(EndScreenAction, "social", TypesSocial.model, Object)
injectProperty(EndScreenAction, "levelStart", TypesFlow.LevelStart, Action)
markInjectable(EndScreenAction)

module.exports = { EndScreenAction }
