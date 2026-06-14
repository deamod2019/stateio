/**
 * Restored source for Webpack Module #80219.
 *
 * Manages drag-aim arrows for selected source buildings.
 */
"use strict"

const { View } = require("./DisplayFramework")
const { di } = require("./RuntimeCore")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Point } = require("./pixiRuntime")
const { InputManager } = require("./InputManager")
const { CapitalView } = require("./CapitalView")

class ArrowsView extends View {
  constructor(...args) {
    super(...args)
    this._arrows = new Map()
  }

  createArrow(building) {
    const capital = building.get(CapitalView)
    if (capital) {
      const arrow = di.get(TypesGame.views.arrow)
      arrow.position = capital.position.clone()
      this.addChild(arrow)
      this._arrows.set(building.stateId, arrow)
    }
  }

  hideArrow(building) {
    const arrow = this._arrows.get(building.stateId)
    arrow?.parent?.removeChild(arrow)
    this._arrows.delete(building.stateId)
  }

  removeAim() {
    this._priorTarget = null
    this._arrows.forEach((arrow) => arrow.parent?.removeChild(arrow))
    this._arrows.clear()
  }

  setAim(target) {
    this._priorTarget = target
  }

  update(event) {
    if (this._arrows.size > 0) {
      this.setArrows(this._priorTarget || new Point(event.clientX, event.clientY))
    }
  }

  setArrows(target) {
    this._arrows.forEach((arrow) => arrow.setUpDirection(target))
  }
}

injectProperty(ArrowsView, "inputManager", TypesGame.inputManager, InputManager)
markInjectable(ArrowsView)

module.exports = { ArrowsView }
