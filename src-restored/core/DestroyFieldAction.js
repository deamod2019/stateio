/**
 * Restored source for Webpack Module #196.
 *
 * Removes the current field view/entity instance from its parent and DI scope.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { TypesGame } = require("./TypesGame")
const { Action } = require("./Action")

class DestroyFieldAction extends Action {
  async execute() {
    if (di.isBound(TypesGame.views.fieldInstance)) {
      const field = di.get(TypesGame.views.fieldInstance)
      field?.parent.removeChild(field)
      di.unbind(TypesGame.views.fieldInstance)
    }
  }
}

markInjectable(DestroyFieldAction)

module.exports = { DestroyFieldAction }
