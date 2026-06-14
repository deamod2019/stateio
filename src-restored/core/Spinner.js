/**
 * Restored source for Webpack Module #68878.
 *
 * Delayed fade-in spinner sprite with manual interval-style rotation.
 */
"use strict"

const { gsap, Sine } = require("./animationRuntime")
const { Sprite } = require("./pixiRuntime")
const { lazyInjectProperty, markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class Spinner extends View {
  constructor(...args) {
    super(...args)
    this.spinning = false
  }

  onAdded() {
    this.graphics.scale.set(0.7)
    this.graphics.anchor.set(0.5)
    this.graphics.visible = false
    this.addChild(this.graphics)
    super.onAdded()
  }

  show() {
    this.graphics.visible = true
    clearTimeout(this.timeout)
    gsap.killTweensOf(this.graphics)
    gsap.fromTo(
      this.graphics,
      { alpha: 0 },
      { alpha: 1, duration: 0.5, delay: 1, ease: Sine.easeOut },
    )
    this.spinning = true
    this.spin()
  }

  hide() {
    if (!this.spinning) return

    gsap.killTweensOf(this.graphics)
    gsap.to(this.graphics, {
      alpha: 0,
      duration: 0.2,
      ease: Sine.easeIn,
      onComplete: () => {
        this.spinning = false
        this.graphics.visible = false
        clearTimeout(this.timeout)
      },
    })
  }

  spin() {
    if (!this.spinning) return

    this.graphics.rotation += Math.PI / 6.5
    this.timeout = setTimeout(() => this.spin(), 100)
  }
}

lazyInjectProperty(Spinner, "graphics", "spinner.svg", Sprite)
markInjectable(Spinner)

module.exports = { Spinner }
