/**
 * Restored source for Webpack Module #56212.
 *
 * Thin rounded Pixi progress bar used by the 2D layer.
 */
"use strict"

const { gsap, Sine } = require("./animationRuntime")
const { Graphics, LINE_CAP } = require("./pixiRuntime")
const { markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class ProgressBar extends View {
  constructor(...args) {
    super(...args)
    this._progress = 0
    this.fg = new Graphics()
    this.bg = new Graphics()
    this._barWidth = 0
    this._config = { width: 150, height: 3 }
  }

  init(config) {
    this._config = config
    this.bg
      .clear()
      .lineTextureStyle({
        cap: LINE_CAP.ROUND,
        width: this._config.height,
        color: 0xffffff,
        alpha: 0.3,
      })
      .lineTo(this._config.width, 0)

    this.barWidth = config.width
  }

  onAdded() {
    this.addChild(this.bg, this.fg)
    super.onAdded()
  }

  show(delay = 1) {
    this.visible = true
    gsap.killTweensOf(this.fg)
    gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.5, delay, ease: Sine.easeOut })
  }

  hide() {
    gsap.to(this, {
      duration: 0.5,
      alpha: 0,
      onComplete: () => {
        this.visible = false
      },
    })
  }

  get progress() {
    return this._progress
  }

  set progress(value) {
    this._progress = value
    gsap.killTweensOf(this.fg)
    gsap.to(this, { duration: 0.1, barWidth: this._config.width * this._progress })
  }

  get barWidth() {
    return this._barWidth
  }

  set barWidth(value) {
    this._barWidth = value
    this.fg
      .clear()
      .lineTextureStyle({
        cap: LINE_CAP.ROUND,
        width: 0.8 * this._config.height,
        color: 0xffffff,
      })
      .lineTo(this._barWidth, 0)
  }
}

markInjectable(ProgressBar)

module.exports = { ProgressBar }
