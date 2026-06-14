/**
 * Restored source for Webpack Module #11470.
 *
 * Builds a rendered map preview sprite from stage/state shape data.
 */
"use strict"

const { Action } = require("./Action")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Graphics, RenderTexture, Sprite, Texture } = require("./pixiRuntime")
const { Types2D } = require("./CoreTypes")
const { RootView } = require("./RootView")
const { TypesGame } = require("./TypesGame")
const { color } = require("./MathUtils")
const { PlayerType } = require("./PlayerType")
const { SpritesPool } = require("./SpritesPool")
const { CookieModel } = require("./CookieModel")
const { log } = require("./RuntimeUtils")
const { SkinManager } = require("./SkinManager")
const { GenerateMapShapeAction } = require("./GenerateMapShapeAction")

class GenerateMapSpriteAction extends Action {
  async execute(payload) {
    const promises = []
    payload.data.stages.forEach((stage, stageIndex) => {
      stage.states.map(async (state) => {
        const id = `sprite-${payload.data.id}-${state.id}`
        const colors = this.getPlayerColor(stageIndex)
        promises.push(this.createStateSprite(id, state, colors))
      })
    })

    const sprites = await Promise.all(promises)
    return this.mergeSprites(sprites, payload.area)
  }

  fit(sprite, area) {
    const factor = this.aspectFactor(sprite.width, sprite.height, area.width, area.height)
    sprite.width *= factor
    sprite.height *= factor
  }

  aspectFactor(width, height, targetWidth, targetHeight) {
    return width / height >= targetWidth / targetHeight ? targetWidth / width : targetHeight / height
  }

  mergeSprites(sprites, area) {
    const container = new Sprite()
    container.addChild(...sprites)

    if (area) {
      this.fit(container, area)
      log.debug("mergeSprites", area.width, area.height)
    } else {
      area = container.getLocalBounds()
    }

    const renderTexture = RenderTexture.create({ width: area.width, height: area.height })
    this.rootView.app.renderer.render(container, renderTexture)
    const sprite = new Sprite(renderTexture)
    Texture.removeFromCache(renderTexture)
    return sprite
  }

  async createStateSprite(id, state, colors) {
    const shapeSprite = await this.createMapPart.run({ id, shapes: state.shapes })
    const stateSprite = new Sprite()
    const radius = state.radius || 20
    const base = this.spritesPool.fromDisplayObject(`base${radius}-static`, () =>
      new Graphics().beginFill(0xffffff).drawCircle(0, 0, radius).endFill(),
    )
    base.anchor.set(0.5)
    base.position.set(state.x, state.y)

    const [baseColor, shadeColor, fallbackColor] = colors
    shapeSprite.tint = color.fromHex(baseColor)
    base.tint = color.fromHex(fallbackColor || shadeColor)
    stateSprite.addChild(shapeSprite)
    stateSprite.addChild(base)
    return stateSprite
  }

  getPlayerColor(stageIndex = 0) {
    return stageIndex <= this.data?.activeStage
      ? this.skinManager.getColorBy(PlayerType.First)
      : this.skinManager.getColorBy(PlayerType.Neutral)
  }
}

injectProperty(GenerateMapSpriteAction, "cookies", TypesGame.cookieModel, CookieModel)
injectProperty(GenerateMapSpriteAction, "skinManager", TypesGame.skinManager, SkinManager)
injectProperty(GenerateMapSpriteAction, "rootView", Types2D.rootView, RootView)
injectProperty(GenerateMapSpriteAction, "spritesPool", TypesGame.spritesPool, SpritesPool)
injectProperty(
  GenerateMapSpriteAction,
  "createMapPart",
  TypesGame.actions.createMapPart,
  GenerateMapShapeAction,
)
markInjectable(GenerateMapSpriteAction)

module.exports = { GenerateMapSpriteAction }
