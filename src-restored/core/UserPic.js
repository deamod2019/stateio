/**
 * Restored source for Webpack Module #78001.
 *
 * Pixi view that displays a user's photo over a square placeholder background.
 */
"use strict"

const { Container, Graphics, Sprite } = require("./pixiRuntime")
const textures = require("./TextureLoader")
const { applyClassMetadata, markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class UserPic extends View {
  constructor() {
    super()
    this.bgAndImgCont = new Container()
    this.bg = new Graphics().beginFill(0xefefef).drawRect(0, 0, 10, 10).endFill()
    this.bg.width = 320
    this.bg.height = 320
    this.bgAndImgCont.addChild(this.bg)
    this.addChild(this.bgAndImgCont)
  }

  get user() {
    return this._user
  }

  set user(value) {
    this._user = value
    this._updateInternal()
  }

  async _updateInternal() {
    if (this._sprite) {
      this.bgAndImgCont.removeChild(this._sprite)
      delete this._sprite
    }

    if (this._user) {
      const texture = await textures.loadTexture(this._user.photo)
      texture.textureCacheIds[0] = `user-photo-${this._user.id}`
      this._sprite = new Sprite(texture)
      this.bgAndImgCont.addChild(this._sprite)
      this._sprite.width = this.bg.width
      this._sprite.height = this.bg.height
      this.onImageLoaded()
    }
  }

  onImageLoaded() {}

  get sprite() {
    return this._sprite
  }
}

markInjectable(UserPic)
applyClassMetadata(UserPic, "design:paramtypes", [])

module.exports = { UserPic }
