/**
 * Restored source for Webpack Module #77754.
 *
 * Generic renderer screenshot action. It captures either a supplied display
 * object or the root stage at half scale and returns a WebP data URL.
 */
"use strict"

const { Types2D } = require("./CoreTypes")
const { RootView } = require("./RootView")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Matrix, RenderTexture, Sprite } = require("./pixiRuntime")
const { Action } = require("./Action")

class ScreenshotAction extends Action {
  async execute(image) {
    const renderer = this.root.app.renderer
    if (!image) image = this.root.app.stage

    const renderTexture = RenderTexture.create({
      width: 0.5 * image.width,
      height: 0.5 * image.height,
    })

    renderer.render(image, renderTexture, false, new Matrix(0.5, 0, 0, 0.5))
    return renderer.extract.base64(new Sprite(renderTexture), "image/webp")
  }
}

injectProperty(ScreenshotAction, "root", Types2D.rootView, RootView)
markInjectable(ScreenshotAction)

module.exports = { ScreenshotAction }
