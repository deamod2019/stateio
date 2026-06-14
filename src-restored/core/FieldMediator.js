/**
 * Restored source for Webpack Module #40470.
 *
 * Mediates field lifecycle, rendering-system registration, and camera focus.
 */
"use strict"

const { gsap } = require("./animationRuntime")
const { Types2D } = require("./CoreTypes")
const { Mediator } = require("./DisplayFramework")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameEvents } = require("./GameEvents")
const { GameState } = require("./GameState")
const { GameConstants } = require("./GameConstants")
const { SIOConstants } = require("./SIOConstants")
const getPathBounds = require("./PathBounds")
const { GameModel } = require("./GameModel")
const { DisplaySystem } = require("./DisplaySystem")

class FieldMediator extends Mediator {
  initialize() {
    if (!this._renderingSystem) this._renderingSystem = new DisplaySystem(this.view)

    this.model.engine.addSystem(this._renderingSystem)
    this.view.alpha = 0

    this.addListener(GameEvents.LEVEL_LOADED, () => {
      this.onStateChanged(this.model.state)
      gsap.to(this.view, { alpha: 1 })
    })
    this.addListener(GameEvents.RESTART_LEVEL, () => this.focusOn(this.model.currentContinent.stageLevel))
    this.addListener(GameEvents.STATE_CHANGED, this.onStateChanged)
    this.addListener(GameEvents.RESIZE, this.onResize)
  }

  onResize() {
    this.onStateChanged(this.model.state)
  }

  onStateChanged(state) {
    switch (state) {
      case GameState.GAMEPLAY:
        this.focusOn(this.model.currentContinent.stageLevel)
        break
      case GameState.LOBBY:
        this.focusOn(NaN, 0)
        break
      case GameState.LOOSE:
      case GameState.WIN_STAGE:
      case GameState.WIN_CONTINENT:
        this.focusOn(NaN)
        break
    }
  }

  getMapBounds(stage, radius = 150) {
    if (isNaN(stage)) {
      const bounds = this.view.getLocalBounds()
      return [bounds.left, bounds.top, bounds.right, bounds.bottom]
    }

    const result = [Infinity, Infinity, -Infinity, -Infinity]
    this.model.currentContinent.parsed.forEach((stateData) => {
      if (stateData.stage !== stage) return

      if (isNaN(radius)) {
        stateData.shapes?.forEach((shape) => {
          const bounds = getPathBounds(shape)
          result[0] = Math.min(result[0], bounds[0])
          result[1] = Math.min(result[1], bounds[1])
          result[2] = Math.max(result[2], bounds[2])
          result[3] = Math.max(result[3], bounds[3])
        })
      } else {
        const [x, y] = stateData.statePos
        result[0] = Math.min(result[0], x - radius)
        result[1] = Math.min(result[1], y - radius)
        result[2] = Math.max(result[2], x + radius)
        result[3] = Math.max(result[3], y + radius)
      }
    })

    return result
  }

  focusOn(stage = 0, duration = 1) {
    const focusHeightFactor = GameConstants.StartScreen.focusHeightFactor
    const topPadding = isNaN(stage) ? 0 : 100
    const { width, height } = this.root.size
    const focusHeight = isNaN(stage) ? height * focusHeightFactor : height
    const [left, top, right, bottom] = this.getMapBounds(stage)
    const paddedTop = top - topPadding
    const mapWidth = right - left
    const mapHeight = bottom + SIOConstants.BANNER_HEIGHT - paddedTop
    const scaleX = width / mapWidth
    const scaleY = focusHeight / mapHeight
    const scale = Math.min(1, Math.min(scaleX, scaleY))
    const scaledWidth = mapWidth * scale
    const scaledHeight = mapHeight * scale
    const scaledLeft = left * scale
    const scaledTop = paddedTop * scale

    gsap.to(this.view.scale, { x: scale, y: scale, duration })
    gsap.to(this.view, {
      x: 0.5 * (width - scaledWidth) - scaledLeft,
      y: 0.5 * (focusHeight - scaledHeight) - scaledTop,
      duration,
    })
    this.model.currentContinent.buildings.forEach((building) => building.toggleActive(stage, duration))
  }

  destroy() {
    this.model.engine.removeSystem(this._renderingSystem)
    super.destroy()
  }
}

injectProperty(FieldMediator, "root", Types2D.rootView, Object)
injectProperty(FieldMediator, "model", TypesGame.model, GameModel)
markInjectable(FieldMediator)

module.exports = { FieldMediator }
