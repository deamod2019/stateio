/**
 * Restored source for Webpack Module #99794.
 *
 * Tracks page preload progress and forwards browser focus/visibility changes to
 * the social pause action.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { GlobalEventProvider } = require("./GlobalEventProvider")
const { markInjectable } = require("./DecoratorHelpers")
const { TypesSocial } = require("./CoreTypes")
const { WaitAction } = require("./WaitAction")

class PageModel extends GlobalEventProvider {
  constructor() {
    super()
    this._assetsProgress = 0
    this._gameStartedAtProgress = NaN
    this._windowFocusHandler = (event) => this.windowFocusHandler(event)
    this._documentVisibilityHandler = this.documentVisibilityHandler.bind(this)
    this._windowBlured = document.hidden || !document.hasFocus()

    ;["blur", "focus"].forEach((eventName) => {
      window.addEventListener(eventName, this._windowFocusHandler)
    })
    document.addEventListener("visibilitychange", this._documentVisibilityHandler)
  }

  get assetsProgress() {
    return this._assetsProgress
  }

  set assetsProgress(progress) {
    if (!this.bus) return

    if (isNaN(this._gameStartedAtProgress)) {
      this._gameStartedAtProgress = this.bus.loaded || 0
      if (typeof gsap !== "undefined") gsap.killTweensOf(this.bus)
    }

    this._assetsProgress = progress
    this.bus.loaded = this._gameStartedAtProgress + (100 - this._gameStartedAtProgress) * progress
  }

  async isBusReadyAsync() {
    while (!this.bus?.ready) {
      await WaitAction.ms(10)
    }
  }

  get bus() {
    return window.__diffbus
  }

  windowFocusHandler(event) {
    switch (event.type) {
      case "focus":
        this.windowBlured = false
        break
      case "blur":
        this.windowBlured = true
        break
    }
  }

  documentVisibilityHandler() {
    this.windowBlured = document.hidden ? true : false
  }

  get windowBlured() {
    return this._windowBlured
  }

  set windowBlured(value) {
    if (this._windowBlured !== value) {
      this._windowBlured = value
      this.callPagePauseAction(this._windowBlured)
    }
  }

  callPagePauseAction(paused) {
    lazyGet(TypesSocial.pauseAction)?.run(paused)
  }

  destroy() {
    ;["blur", "focus"].forEach((eventName) => {
      window.removeEventListener(eventName, this._windowFocusHandler)
    })
    document.removeEventListener("visibilitychange", this._documentVisibilityHandler)
    super.destroy()
  }
}

markInjectable(PageModel)

module.exports = { PageModel }
