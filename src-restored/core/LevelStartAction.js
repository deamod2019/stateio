/**
 * Restored source for Webpack Module #19474.
 *
 * Generic level-start flow action. The SIO platform subclass extends this
 * with State.io level loading and field setup.
 */
"use strict"

const core = require("./RuntimeCore")
const {
  TypesFlow,
  TypesNotification,
} = require("./CoreTypes")
const { SocialEvents } = require("./SocialAppExports")
const { markInjectable } = require("./DecoratorHelpers")
const { SocialFlowAction } = require("./SocialFlowAction")

class LevelStartAction extends SocialFlowAction {
  constructor(...args) {
    super(...args)
    this.TRACK_EVENT = "level_start"
    this.waitForContextChange = false
  }

  async launch(data) {
    this.social.me.scoreSession = 0
    this.tryToShowBanner()
    await core.lazyGet(TypesFlow.UI.startScreenAction)?.run()
  }

  async beforeLaunch() {
    this._contextChangePromise = this.waitForContextChange
      ? new Promise((resolve) => this.social.once(SocialEvents.CONTEXT_CHANGE, resolve))
      : Promise.resolve()

    await Promise.all([
      (async () => {
        await this._contextChangePromise
        this.sendPush(TypesNotification.start)
      })(),
      super.beforeLaunch(),
    ])
  }
}

markInjectable(LevelStartAction)

module.exports = { LevelStartAction }
