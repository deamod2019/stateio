/**
 * Restored source for Webpack Module #42970.
 *
 * Circular masked variant of UserPic with a configurable background color.
 */
"use strict"

const { Graphics } = require("./pixiRuntime")
const { markInjectable } = require("./DecoratorHelpers")
const { UserPic } = require("./UserPic")

class CircleAvatar extends UserPic {
  constructor(...args) {
    super(...args)
    this.circleBg = new Graphics()
    this._bgColor = 0xffffff
  }

  onAdded() {
    super.onAdded()
    const width = this.bg.width
    const height = this.bg.height
    const radius = 0.5 * Math.max(width, height)
    const mask = new Graphics().beginFill(0xffffff).drawCircle(radius, radius, radius).endFill()
    this.bgAndImgCont.addChild(mask)
    this.bgAndImgCont.mask = mask
    this.updateColor()
    this.addChildAt(this.circleBg, 0)
  }

  get bgColor() {
    return this._bgColor
  }

  set bgColor(value) {
    this._bgColor = value
    this.updateColor()
  }

  onImageLoaded() {
    this.bgAndImgCont.width = this.circleBg.width - 20
    this.bgAndImgCont.scale.y = this.bgAndImgCont.scale.x
    this.bgAndImgCont.x = 0.5 * (this.circleBg.width - this.bgAndImgCont.width)
    this.bgAndImgCont.y = 0.5 * (this.circleBg.height - this.bgAndImgCont.height)
  }

  updateColor() {
    const width = this.bg.width
    const height = this.bg.height
    const radius = 0.5 * Math.max(width, height)
    this.circleBg.clear().beginFill(this._bgColor).drawCircle(radius, radius, radius).endFill()
  }
}

markInjectable(CircleAvatar)

module.exports = { CircleAvatar }
