/**
 * Restored source for Webpack Module #91585.
 *
 * Renders a territory shape sprite and tints it by owner/population fill.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { Random } = require("./RuntimeUtils")
const { color } = require("./MathUtils")
const { gsap } = require("./animationRuntime")
const { Container } = require("./pixiRuntime")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { SkinManager } = require("./SkinManager")

class StateShapeView extends Container {
  constructor(...args) {
    super(...args)
    this._container = new Container()
    this._color = 0
    this._baseColorMin = 0x00ff00
    this._baseColorMax = 0xff0000
    this._fill = 1
    this._initialPromise = Promise.resolve()
    this._active = true
  }

  get initialPromise() {
    return this._initialPromise
  }

  async init(stateData, stateId = Random.UUID()) {
    this.addChild(this._container)
    this._initialPromise = (async () => {
      this._shapesSprite = await di
        .get(TypesGame.actions.createMapPart)
        .run({ id: `field-${stateId}`, shapes: stateData.shapes || [] })
      this._shapesSprite.tint = this._color
      this._container.addChild(this._shapesSprite)
    })()
  }

  updateSkin(owner) {
    const [baseColor] = this.skinManager.getColorBy(owner)
    this._baseColorMax = color.fromHex(baseColor)
    this._baseColorMin = color.lerp(0xffffff, this._baseColorMax, 0.4)
    this.updateFill()
  }

  updateWithPopulation(population, animated = false) {
    if (gsap.isTweening(this)) gsap.killTweensOf(this, "fill")

    if (animated) {
      gsap.to(this, { fill: Math.min(1, population.current / population.cap) })
    } else {
      this._fill = Math.min(1, population.current / population.cap)
      this.updateFill()
    }
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this.updateFill()
  }

  updateFill() {
    this.color = color.lerp(this._baseColorMin, this._baseColorMax, this._fill)
  }

  set color(value) {
    this._color = value
    if (this._shapesSprite) this._shapesSprite.tint = this._color
  }

  get baseColorMax() {
    return this._baseColorMax
  }

  setActive(active, duration) {
    this._active = active
    gsap.killTweensOf(this, "alpha")
    gsap.to(this, { alpha: this._active ? 1 : 0.25, duration })
  }
}

injectProperty(StateShapeView, "skinManager", TypesGame.skinManager, SkinManager)
markInjectable(StateShapeView)

module.exports = { StateShapeView }
