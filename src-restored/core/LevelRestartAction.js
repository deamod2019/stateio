/**
 * Restored source for Webpack Module #56403.
 *
 * Generic restart flow action: optional restart ad gate, score reset, start
 * screen dispatch, and restart timestamp refresh.
 */
"use strict"

const core = require("./RuntimeCore")
const { TypesFlow } = require("./CoreTypes")
const { markInjectable } = require("./DecoratorHelpers")
const { SocialFlowAction } = require("./SocialFlowAction")

class LevelRestartAction extends SocialFlowAction {
  constructor(...args) {
    super(...args)
    this.TRACK_EVENT = "level_restart"
    this.SHOW_AD_INTERVAL = 10
  }

  needToShowAD() {
    return Date.now() - LevelRestartAction.LAST_RESTART < 1000 * this.SHOW_AD_INTERVAL
  }

  async launch(data) {
    this.social.me.scoreSession = 0
    await core.lazyGet(TypesFlow.UI.startScreenAction)?.run()
    LevelRestartAction.LAST_RESTART = Date.now()
  }
}

LevelRestartAction.LAST_RESTART = Date.now()
markInjectable(LevelRestartAction)

module.exports = { LevelRestartAction }
