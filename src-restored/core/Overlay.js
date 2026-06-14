/**
 * Restored source for Webpack Module #41099.
 *
 * Full-screen overlay view with GSAP-backed blur/unblur fade transitions.
 */
"use strict"

const gsapCss = require("./CssAnimationRuntime").default
const { markInjectable } = require("./DecoratorHelpers")
const { View } = require("./DisplayFramework")

class Overlay extends View {
  constructor(...args) {
    super(...args)
    this._blured = false
  }

  onAdded() {
    super.onAdded()
    this.renderable = false
  }

  async blur(duration = 0.3) {
    if (this._blured) return

    if (this.blurTween && this.blurTween.isActive()) {
      await this.blurTween.then()
      return
    }

    this.setBlured(true)
    await new Promise((resolve) => {
      this.alpha = 0
      this.renderable = true
      this.blurTween = gsapCss.to(this, {
        duration,
        alpha: 1,
        onComplete: resolve,
        ease: "sine.out",
      })
    })
  }

  async unblur(duration = 0.5) {
    if (this.unblurTween && this.unblurTween.isActive()) {
      await this.unblurTween.then()
      return
    }

    this.setBlured(false)
    await new Promise((resolve) => {
      this.unblurTween = gsapCss.to(this, {
        duration,
        alpha: 0,
        onComplete: () => {
          this.renderable = false
          resolve()
        },
        ease: "sine.in",
      })
    })
  }

  setBlured(value) {
    this._blured = value
    this.interactive = this._blured
  }
}

markInjectable(Overlay)

module.exports = { Overlay }
