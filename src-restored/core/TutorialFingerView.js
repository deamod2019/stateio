/**
 * Restored source for Webpack Module #51006.
 *
 * Displays and animates the gameplay tutorial finger.
 */
"use strict"

const { gsap } = require("./animationRuntime")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Sprite } = require("./pixiRuntime")
const { View } = require("./DisplayFramework")
const { WaitAction } = require("./WaitAction")

class TutorialFingerView extends View {
  onAdded() {
    this.sprite.anchor.set(0.5, 20 / this.sprite.height)
    this.sprite.position.set(0, 0)
    this.addChild(this.sprite)
    super.onAdded()
  }

  async hold(duration = 0.5) {
    this.cancelTweens()
    const offset = 0.4 * this.sprite.width
    const rotation = -Math.tan(offset / this.sprite.height)

    await new Promise((resolve) => {
      gsap
        .timeline()
        .to(this.sprite, { y: 0.9 * offset, duration, rotation })
        .to(this.sprite.scale, { x: 0.9, y: 0.9, duration, onComplete: resolve }, 0)
    })
  }

  async release(duration = 0.5) {
    this.cancelTweens()

    await new Promise((resolve) => {
      gsap
        .timeline()
        .to(this.sprite, { x: 0, y: 0, duration, rotation: 0 })
        .to(this.sprite.scale, { x: 1, y: 1, duration, onComplete: resolve }, 0)
    })
  }

  cancelTweens() {
    gsap.killTweensOf(this.sprite)
    gsap.killTweensOf(this.sprite.scale)
  }

  async tap(delay = 200) {
    await this.hold()
    await WaitAction.ms(delay)
    await this.release()
  }
}

injectProperty(TutorialFingerView, "sprite", "finger.svg", Sprite)
markInjectable(TutorialFingerView)

module.exports = { TutorialFingerView }
