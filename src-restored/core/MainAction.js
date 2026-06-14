/**
 * Restored source for Webpack Module #57165.
 *
 * Main launch action: initializes vibration, syncs cookie state, waits for
 * leaderboard sync only when needed, refreshes skins, then starts the level.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { CookieModel } = require("./CookieModel")
const { TypesGame } = require("./TypesGame")
const { TypesFlow, TypesSocial } = require("./CoreTypes")
const { GameModel } = require("./GameModel")
const { LevelStartActionSIO } = require("./LevelStartActionSIO")
const { SocialFlowAction } = require("./SocialFlowAction")

class MainAction extends SocialFlowAction {
  async launch() {
    const leaderboardsSync = this.social.syncLeaderboards()

    lazyGet(TypesSocial.vibrationManager)?.init()

    await this.cookies.sync()
    if (!this.social.inSolo) {
      await leaderboardsSync
    }

    lazyGet(TypesGame.skinManager)?.updateSkins()
    await this.levelStart.run()
  }
}

injectProperty(MainAction, "model", TypesGame.model, GameModel)
injectProperty(MainAction, "levelStart", TypesFlow.LevelStart, LevelStartActionSIO)
injectProperty(MainAction, "cookies", TypesGame.cookieModel, CookieModel)
markInjectable(MainAction)

module.exports = { MainAction }
