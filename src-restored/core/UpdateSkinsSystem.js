/**
 * Restored source for Webpack Module #44802.
 *
 * One-shot system that refreshes capital and state-shape skins after shop
 * selections change.
 */
"use strict"

const { IterativeSystem } = require("./ECSCore")
const { CapitalView } = require("./CapitalView")
const { StateShapeView } = require("./StateShapeView")

class UpdateSkinsSystem extends IterativeSystem {
  constructor() {
    super((entity) => entity.hasAny(CapitalView, StateShapeView))
  }

  updateEntity(entity, delta) {
    entity.updateAllSkins()
  }

  update(delta = 0) {
    super.update(delta)
    this.engine.removeSystem(this)
  }
}

module.exports = { UpdateSkinsSystem }
