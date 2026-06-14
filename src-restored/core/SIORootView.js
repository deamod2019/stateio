/**
 * Restored source for Webpack Module #69185.
 *
 * State.io root view that owns screen, popup, overlay, spinner, and preload
 * progress containers.
 */
"use strict"

const { Graphics } = require("./pixiRuntime")
const { Types2D } = require("./CoreTypes")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { RootView } = require("./RootView")
const { Spinner } = require("./Spinner")
const { ScreenContainer } = require("./ScreenContainer")
const { Overlay } = require("./Overlay")
const { ProgressBar } = require("./ProgressBar")

class SIORootView extends RootView {
  onAdded() {
    this.progressBar.init({ width: 200, height: 7 })
    this.progressBar.visible = false
    this.overlay.addChild(new Graphics().beginFill(0xd0d0d0).drawRect(0, 0, 10, 10).endFill())
    this.addChild(this.screenContainer)
    this.addChild(this.popupContainer)
    this.addChild(this.overlay)
    this.addChild(this.spinner)
    this.addChild(this.progressBar)
    super.onAdded()
  }

  async goToScreen(screen, animate = true) {
    void animate
    await this.screenContainer.setScreen(screen)
    await this.overlay.unblur()
  }

  freeze() {}

  unfreeze() {}

  onResize() {
    this.spinner.x = 0.5 * (this.size.width - this.spinner.width)
    this.spinner.y = 0.5 * (this.size.height - this.spinner.height)

    ;[this.overlay].forEach((view) => {
      view.width = this.size.width
      view.height = this.size.height
    })

    this.progressBar.x = 0.5 * this.size.width
    this.progressBar.y = 0.75 * this.size.height

    ;[this.screenContainer, this.popupContainer].forEach((container) => {
      container.size = this.size
      container.onResize()
    })
  }
}

injectProperty(SIORootView, "spinner", Types2D.spinner, Spinner)
injectProperty(SIORootView, "popupContainer", Types2D.screenContainer, ScreenContainer)
injectProperty(SIORootView, "screenContainer", Types2D.screenContainer, ScreenContainer)
injectProperty(SIORootView, "overlay", Types2D.overlay, Overlay)
injectProperty(SIORootView, "progressBar", ProgressBar, ProgressBar)
markInjectable(SIORootView)

module.exports = { default: SIORootView, SIORootView }
