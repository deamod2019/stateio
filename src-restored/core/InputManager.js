/**
 * Restored source for Webpack Module #83847.
 *
 * Game-level input manager that forwards canvas pointer gestures into the
 * active InputSystem.
 */
"use strict"

const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesGame } = require("./TypesGame")
const { InputManagerBase } = require("./InputManagerBase")
const { GameModel } = require("./GameModel")
const { InputSystem } = require("./InputSystem")

class InputManager extends InputManagerBase {
  onCancel(event) {
    this.inputSystem?.onCancel(event)
  }

  onStart(event) {
    this.model.cancelTutorial()
    this.inputSystem?.onStart(event)
  }

  onDrag(event) {
    this.inputSystem?.onDrag(event)
  }

  onEnd(event) {
    this.inputSystem?.onEnd(event)
  }

  get inputSystem() {
    return this.model.engine.getSystem(InputSystem)
  }
}

injectProperty(InputManager, "model", TypesGame.model, typeof GameModel !== "undefined" ? GameModel : Object)
markInjectable(InputManager)

module.exports = { InputManager }
