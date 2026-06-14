/**
 * Restored source for Webpack Module #93710.
 *
 * Root Pixi view that stores the renderer size and exposes a resize hook.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class RootView extends View {
  constructor(...args) {
    super(...args)
    this.size = { width: 0, height: 0 }
  }

  resize(width, height, force = false) {
    void force
    this.size.width = width
    this.size.height = height
    this.onResize()
  }

  onResize() {}
}

markInjectable(RootView)

module.exports = { RootView }
