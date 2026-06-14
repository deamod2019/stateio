/**
 * Restored source for Webpack Module #96239.
 *
 * Spatial cell used by FighterMovementSystem to find opposing fighters close
 * enough to collide.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { math } = require("./MathUtils")
const { Fighter } = require("./Fighter")

class PCell {
  constructor() {
    this._owners = []
    this._fighters = new Set()
  }

  add(fighter) {
    if (this._owners.indexOf(fighter.owner) === -1) {
      this._owners.push(fighter.owner)
    }
    this._fighters.add(fighter)
  }

  getCollisions() {
    if (this._owners.length < 2) return []

    const collisions = []
    outer: for (const first of this._fighters) {
      for (const second of this._fighters) {
        if (
          first.owner !== second.owner &&
          math.dist(first.position, second.position) < 2 * Fighter.DEFAULT_SIZE
        ) {
          this._fighters.delete(first)
          collisions.push([first, second])
          continue outer
        }
      }
    }

    this._owners.splice(0, this._owners.length)
    this._fighters.clear()
    return collisions
  }
}

PCell.SIZE = 100

markInjectable(PCell)

module.exports = { PCell }
