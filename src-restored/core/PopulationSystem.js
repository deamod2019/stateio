/**
 * Restored source for Webpack Module #28300.
 *
 * PopulationSystem advances active buildings' population counters and pushes
 * the updated values into their shape views each frame.
 */
"use strict"

const { IterativeSystem } = require("./ECSCore")
const { Building } = require("./Building")
const { Population } = require("./Population")
const { StateShapeView } = require("./StateShapeView")

class PopulationSystem extends IterativeSystem {
  constructor() {
    super((entity) => entity.hasAll(Population, StateShapeView) && entity.hasTag(Building.ACTIVE_TAG))
    this.entityAdded = function entityAdded(entity) {}
  }

  updateEntity(entity, delta) {
    const population = entity.get(Population)
    population.tryPopulate(delta)
    entity.get(StateShapeView).updateWithPopulation(population)
  }
}

module.exports = { PopulationSystem }
