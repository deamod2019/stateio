/**
 * Restored source for Webpack Module #20119.
 *
 * State.io root mediator that applies the app background and dispatches resize
 * events after the base Pixi renderer resize.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { GameEvents } = require("./GameEvents")
const { RootMediator: BaseRootMediator } = require("./RootMediator")

class RootMediator extends BaseRootMediator {
  getConfig() {
    return {
      ...super.getConfig(),
      backgroundColor: 0xd0d0d0,
    }
  }

  onResize() {
    super.onResize()
    const app = this.view.app
    this.dispatch(GameEvents.RESIZE, {
      width: app.view.clientWidth,
      height: app.view.clientHeight,
    })
  }
}

markInjectable(RootMediator)

module.exports = { RootMediator }
