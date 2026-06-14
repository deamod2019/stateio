/**
 * Restored source for Webpack Module #49083.
 *
 * Base Pixi screen view. Concrete screens can override the async transition hooks.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class BaseScreen extends View {
  async fadeIn() {
    return Promise.resolve(undefined)
  }

  async fadeOut() {
    return Promise.resolve(undefined)
  }
}

markInjectable(BaseScreen)

module.exports = { BaseScreen }
