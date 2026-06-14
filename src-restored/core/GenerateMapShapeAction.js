/**
 * Restored source for Webpack Module #48115.
 *
 * Renders one or more SVG path shapes into a positioned Pixi sprite.
 */
"use strict"

const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const getPathBounds = require("./PathBounds")
const { SCALE_MODES, Sprite, Texture } = require("./pixiRuntime")
const { Types2D } = require("./CoreTypes")
const { RootView } = require("./RootView")
const { SpritesPool } = require("./SpritesPool")
const { TypesGame } = require("./TypesGame")
const { Action } = require("./Action")

class GenerateMapShapeAction extends Action {
  async execute(payload) {
    const shapes = payload.shapes
    const keepCache = payload.keepCache === undefined || payload.keepCache

    if (!shapes?.length) return new Sprite(Texture.EMPTY)

    let minX = Infinity
    let minY = Infinity
    const positions = []

    const sprites = await Promise.all(
      shapes.map(async (shape, index) => {
        const [x, y] = getPathBounds(shape)
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        const sprite = await this.spritesPool.createShape(
          `${payload.id}${index > 0 ? index : ""}`,
          shape,
          keepCache,
        )
        positions.push([x, y])
        return sprite
      }) || [],
    )

    const container = new Sprite()
    sprites.forEach((sprite, index) => {
      const [x, y] = positions[index]
      sprite.position.set(x - minX, y - minY)
      container.addChild(sprite)
    })

    const texture = this.rootView.app.renderer.generateTexture(
      container,
      SCALE_MODES.LINEAR,
      window.devicePixelRatio,
    )
    const output = new Sprite(texture)
    output.position.set(minX, minY)

    if (!keepCache) {
      sprites.forEach((sprite) => Texture.removeFromCache(sprite.texture))
    }
    Texture.removeFromCache(texture)
    return output
  }
}

injectProperty(GenerateMapShapeAction, "rootView", Types2D.rootView, RootView)
injectProperty(GenerateMapShapeAction, "spritesPool", TypesGame.spritesPool, SpritesPool)
markInjectable(GenerateMapShapeAction)

module.exports = { GenerateMapShapeAction }
