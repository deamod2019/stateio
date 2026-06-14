/**
 * Restored source for Webpack Module #71554.
 *
 * Stops active spawner routines and removes itself after end-of-stage cleanup.
 */
"use strict"

const { ReactionSystem } = require("./ECSCore")
const { Spawner } = require("./Spawner")
const { FighterGroupsSystem } = require("./FighterGroupsSystem")

class LevelEndSystem extends ReactionSystem {
  constructor() {
    super((entity) => entity.has(Spawner))
    FighterGroupsSystem.Clear()
  }

  update() {
    this.entities.forEach((entity) => entity.get(Spawner)?.stopRoutine())
    this.engine.removeSystem(this)
  }
}

module.exports = { LevelEndSystem }
