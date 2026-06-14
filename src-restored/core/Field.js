/**
 * Restored source for Webpack Module #26903.
 *
 * Field is the ECS entity representing the active play field instance.
 */
"use strict"

const { Entity } = require("./ECSCore")
const { markInjectable } = require("./DecoratorHelpers")

class Field extends Entity {
  init(fieldData) {
    this._fieldId = fieldData.data.id
    return this
  }
}

markInjectable(Field)

module.exports = { Field }
