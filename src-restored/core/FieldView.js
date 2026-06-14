/**
 * Restored source for Webpack Module #59310.
 *
 * Owns the field display layers used by gameplay rendering systems.
 */
"use strict"

const { View } = require("./DisplayFramework")
const { Container } = require("./pixiRuntime")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { ArrowsView } = require("./ArrowsView")

class FieldView extends View {
  constructor(...args) {
    super(...args)
    this.labels = new Container()
    this.map = new Container()
    this.capitals = new Container()
    this.fighters = new Container()
    this.shapes = new View()
  }

  onAdded() {
    this.addChild(this.map)
    this.map.addChild(this.shapes)
    this.map.addChild(this.fighters)
    this.map.addChild(this.capitals)
    this.map.addChild(this.labels)
    this.addChild(this.arrows)
    super.onAdded()
  }
}

injectProperty(FieldView, "arrows", TypesGame.views.arrows, ArrowsView)
markInjectable(FieldView)

module.exports = { FieldView }
