/**
 * Restored source for Webpack Module #6846.
 *
 * Pixi container that swaps the current screen and coordinates fade transitions.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class ScreenContainer extends View {
  constructor(...args) {
    super(...args)
    this.size = {}
  }

  get screen() {
    return this._screen
  }

  async setScreen(screen) {
    const previousScreen = this._screen
    this._screen = screen

    if (this._screen) this.addChild(this._screen)
    this.onResize()

    await Promise.all([
      previousScreen?.fadeOut && previousScreen.fadeOut(),
      screen?.fadeIn && screen.fadeIn(),
    ]).then(() => {
      if (previousScreen) this.removeChild(previousScreen)
    })
  }

  onResize() {
    if (this._screen?.resize) {
      this._screen.resize(this.size.width, this.size.height)
    }
  }
}

markInjectable(ScreenContainer)

module.exports = { ScreenContainer }
