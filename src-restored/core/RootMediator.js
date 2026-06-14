/**
 * Restored source for Webpack Module #65743.
 *
 * Mediator that creates the Pixi application for the root view and mirrors
 * canvas size changes into the renderer and root view.
 */
"use strict"

const { CANVAS_ID } = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { Application } = require("./pixiRuntime")
const { Mediator } = require("./DisplayFramework")
const { RootView } = require("./RootView")

class RootMediator extends Mediator {
  initialize() {
    this.view.app = new Application(this.getConfig())
    window.addEventListener("resize", () => this.onResize())
    this.view.app.stage.addChild(this.view)
    this.onResize()
  }

  getConfig() {
    return {
      resolution: window.devicePixelRatio,
      view: document.getElementById(CANVAS_ID),
      backgroundColor: RootView.BACKGROUND_COLOR,
      antialias: true,
      legacy: true,
    }
  }

  onResize() {
    const app = this.view.app
    const view = app.view
    const width = view.clientWidth
    const height = view.clientHeight
    app.renderer.resize(width, height)
    this.view.resize(width, height)
  }
}

markInjectable(RootMediator)

module.exports = { RootMediator }
