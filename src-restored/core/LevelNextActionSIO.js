/**
 * Restored source for Webpack Module #15872.
 *
 * State.io next-level flow: advance within the loaded continent when possible,
 * otherwise recreate the field through the level-start flow and refresh
 * gameplay participants after social context changes.
 */
"use strict"

const core = require("./RuntimeCore")
const {
  TypesUI,
} = require("./CoreTypes")
const { UIEvents } = require("../ui/UIContext")
const { GameState } = require("./GameState")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { SocialEvents } = require("./SocialAppExports")
const { GameModel } = require("./GameModel")
const { DestroyFieldAction } = require("./DestroyFieldAction")
const { LevelNextAction } = require("./LevelNextAction")

class LevelNextActionSIO extends LevelNextAction {
  async gotoNextLevel(waitForContextChange = false) {
    this.levelStart.waitForContextChange = waitForContextChange
    this.model.cookie.syncTime()

    if (this.model.gotoNextLevelStage()) {
      this.model.startStage()
    } else {
      await core.di.get(DestroyFieldAction).run()
      await this.levelStart.run()
    }

    new Promise((resolve) => this.social.once(SocialEvents.CONTEXT_CHANGE, resolve)).then(() => {
      if (this.model.state === GameState.GAMEPLAY) {
        const participants = this.model.getAssociatedUsers()
        this.dispatch(UIEvents.SCREEN_CHANGED, {
          id: TypesUI.screen.GAMEPLAY,
          props: { participants },
        })
      }
    })
  }

  async playNextSolo() {
    return this.gotoNextLevel()
  }
}

injectProperty(LevelNextActionSIO, "model", TypesGame.model, GameModel)
markInjectable(LevelNextActionSIO)

module.exports = { LevelNextActionSIO }
