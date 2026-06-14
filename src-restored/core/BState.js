/**
 * Restored source for Webpack Module #45329.
 *
 * Lightweight battle-state container used by bot simulation.
 */
"use strict"

class BState {
  constructor(buildings, groups, timestamp) {
    this.buildings = buildings
    this.groups = groups
    this.timestamp = timestamp
  }

  clone() {
    return new BState(this.buildings, this.groups, this.timestamp)
  }
}

module.exports = { BState }
