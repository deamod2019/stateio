/**
 * Restored source for Webpack Module #16465.
 *
 * State.io screenshot action. It mirrors the generic screenshot action but
 * accepts an options object with an optional image scale and clears the
 * generated render texture from Pixi's cache after extraction.
 */
"use strict"

const { Types2D } = require("./CoreTypes")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Matrix, RenderTexture, Sprite, Texture } = require("./pixiRuntime")
const SIORootView = require("./SIORootView").default
const { Action } = require("./Action")

class ScreenShotActionSIO extends Action {
  async execute(payload) {
    let { image } = payload
    const { imageScale = 0.5 } = payload
    const renderer = this.root.app.renderer

    if (!image) image = this.root.app.stage

    const renderTexture = RenderTexture.create({
      width: image.width * imageScale,
      height: image.height * imageScale,
    })

    renderer.render(image, renderTexture, false, new Matrix(imageScale, 0, 0, imageScale))
    const sprite = new Sprite(renderTexture)
    const screenshot = renderer.extract.base64(sprite, "image/webp")
    Texture.removeFromCache(renderTexture)
    return screenshot
  }
}

injectProperty(ScreenShotActionSIO, "root", Types2D.rootView, SIORootView)
markInjectable(ScreenShotActionSIO)

module.exports = { ScreenShotActionSIO }
