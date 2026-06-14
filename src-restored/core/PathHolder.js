/**
 * Restored source for Webpack Module #85126.
 *
 * Stores generated paths from one building to other target buildings.
 */
"use strict"

class PathHolder {
  constructor() {
    this._cachedWays = new Map()
  }

  addPath(building, path) {
    this._cachedWays.set(building.stateId, path)
  }

  get(building) {
    return this._cachedWays.get(building.stateId)
  }

  getPath(stateId) {
    return this._cachedWays.get(stateId)
  }

  getPathWidth() {
    return PathHolder.MAX_SPAWN_LEN_ONE_DIRECTION
  }

  clearCache() {
    this._cachedWays.clear()
  }
}

PathHolder.MAX_SPAWN_LEN_ONE_DIRECTION = 30

module.exports = { PathHolder }
