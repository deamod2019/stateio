/**
 * Restored source for Webpack Module #44025.
 *
 * SIO-specific start notification image: renders the current continent map and
 * the player's avatar into a 1200x627 Pixi container.
 */
"use strict"

const { Container, Graphics, Sprite, Texture } = require("./pixiRuntime")
const { Types2D } = require("./CoreTypes")
const { TypesGame } = require("./TypesGame")
const { GameModel } = require("./GameModel")
const { RootView } = require("./RootView")
const { GenerateMapSpriteAction } = require("./GenerateMapSpriteAction")
const { loadTexture } = require("./TextureLoader")
const { NotificationAction, NAStart } = require("./NotificationActions")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class NAStartSIO extends NAStart {
  constructor(...args) {
    super(...args)
    this.strategy = "IMMEDIATE"
  }

  async getImage() {
    const continent = this.model.currentContinent
    if (!continent) return super.getImage()

    const mapSprite = await this.createMapAction.run({
      activeStage: continent.stageLevel,
      data: continent.data,
    })
    const container = new Container()
    const background = new Graphics()
      .beginFill(13684944)
      .drawRect(0, 0, NotificationAction.WIDTH_FULL, NotificationAction.HEIGHT_FULL)

    container.addChild(background)

    const scale = this.aspectFactor(mapSprite.width, mapSprite.height, background.width, background.height)
    mapSprite.width *= scale
    mapSprite.height *= scale

    const avatar = await this.avatar(this.social.me.photo)
    avatar.height = 0.8 * NotificationAction.HEIGHT_FULL
    avatar.scale.x = avatar.scale.y
    avatar.x = 0.25 * background.width
    avatar.y = 0.5 * background.height

    mapSprite.x = 0.75 * (background.width - mapSprite.width)
    mapSprite.y = 0.5 * (background.height - mapSprite.height)

    container.addChild(mapSprite, avatar)
    const image = this.rootView.app.renderer.extract.base64(container)
    Texture.removeFromCache(mapSprite.texture)
    return image
  }

  aspectFactor(width, height, targetWidth, targetHeight) {
    return width / height >= targetWidth / targetHeight ? targetWidth / width : targetHeight / height
  }

  async avatar(photo) {
    const radius = 140
    const ring = new Graphics().lineStyle(40, 9034543).drawCircle(0, 0, radius)
    const avatarSprite = new Sprite(await loadTexture(photo))
    avatarSprite.anchor.set(0.5)

    const mask = new Graphics().beginFill(0).drawCircle(0, 0, radius).endFill()
    const container = new Container()
    container.addChild(avatarSprite)
    container.addChild(mask)
    avatarSprite.mask = mask
    container.addChild(ring)
    Texture.removeFromCache(avatarSprite.texture)
    return container
  }
}

injectProperty(NAStartSIO, "model", TypesGame.model, GameModel)
injectProperty(NAStartSIO, "rootView", Types2D.rootView, RootView)
injectProperty(
  NAStartSIO,
  "createMapAction",
  TypesGame.actions.createMap,
  GenerateMapSpriteAction,
)
markInjectable(NAStartSIO)

module.exports = { NAStartSIO }
