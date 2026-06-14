/**
 * Restored source for Webpack Module #53351.
 *
 * Renders and animates a building capital marker.
 */
"use strict"

const { View } = require("./DisplayFramework")
const { Random } = require("./RuntimeUtils")
const { PlayerType } = require("./PlayerType")
const { gsap } = require("./animationRuntime")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { color } = require("./MathUtils")
const { Graphics, Sprite, utils } = require("./pixiRuntime")
const { TypesGame } = require("./TypesGame")
const { SpritesPool } = require("./SpritesPool")
const { CookieModel } = require("./CookieModel")
const { SkinManager } = require("./SkinManager")

function createCircle(radius = 20) {
  return new Graphics().beginFill(0xffffff).drawCircle(0, 0, radius).endFill()
}

class CapitalView extends View {
  constructor(...args) {
    super(...args)
    this._radius = 20
    this._active = true
  }

  init(stateData) {
    this._radius = stateData.stateRadius
    this.position.set(...stateData.statePos)
  }

  initBaseGraphics() {
    let id = `base${this._radius}`
    let displayObject
    const textureUrl = this.cookies.selectedBuilding?.textureUrl
    const targetSize = 2 * this._radius

    if (textureUrl) {
      displayObject = new Sprite(utils.TextureCache[textureUrl])
      if (displayObject) {
        const scale = targetSize / Math.max(displayObject.getBounds().height, displayObject.getBounds().width)
        displayObject.scale.set(scale)
        displayObject.anchor.set(0.5)
        id = textureUrl
      }
    } else {
      displayObject = createCircle(this._radius)
    }

    return {
      id,
      obj: displayObject,
    }
  }

  occupiedAnimation(duration = 0.5) {
    gsap.killTweensOf(this.base.scale)
    gsap.fromTo(this.base.scale, { x: 1.5, y: 1.5 }, { x: 1, y: 1, duration })
  }

  shake(duration, factor) {
    if (gsap.isTweening(this.base)) return

    const xRange = this.base.width * factor
    const yRange = this.base.height * factor
    const x = Random.rangeFloat(-xRange, xRange)
    const y = Random.rangeFloat(-yRange, yRange)

    gsap.fromTo(
      this.base.position,
      { x, y },
      { x: 0, y: 0, ease: "elastic.out", duration },
    )
  }

  showSelection(selectionColor, alpha = 0.5) {
    gsap.killTweensOf(this)

    if (!this.selection) {
      this.selection = this.spritesPool.fromDisplayObject(`base_selection${this._radius}`, () =>
        createCircle(2 * this._radius),
      )
      this.selection.anchor.set(0.5)
      this.selection.alpha = 0
      this.addChildAt(this.selection, 0)
    }

    if (selectionColor) {
      this.selection.tint = selectionColor
      gsap.to(this.selection, { alpha })
    } else {
      gsap.to(this.selection, { alpha: 0 })
    }
  }

  updateSkin(owner = PlayerType.Default, active = true) {
    const [, shade] = this.skinManager.getColorBy(owner)
    const texture = this.skinManager.getBuildingTextureBy(active ? owner : PlayerType.Neutral)

    if (this.base) this.removeChild(this.base)

    this.base = this.spritesPool.fromDisplayObject(texture, () => {
      const sprite = new Sprite(utils.TextureCache[texture])
      const bounds = sprite.getBounds()
      const scale = (2 * this._radius) / Math.max(bounds.height, bounds.width)
      sprite.anchor.set(0.5)
      sprite.scale.set(scale)
      return sprite
    })
    this.base.anchor.set(0.5)
    this.addChild(this.base)
    this.base.tint = owner === PlayerType.Neutral ? 0xffffff : color.fromHex(shade)
  }

  setActive(active, duration) {
    this._active = active
    gsap.killTweensOf(this, "alpha")
    gsap.to(this, { alpha: this._active ? 1 : 0.25, duration })
  }
}

injectProperty(CapitalView, "spritesPool", TypesGame.spritesPool, SpritesPool)
injectProperty(CapitalView, "cookies", TypesGame.cookieModel, CookieModel)
injectProperty(CapitalView, "skinManager", TypesGame.skinManager, SkinManager)
markInjectable(CapitalView)

module.exports = { CapitalView }
