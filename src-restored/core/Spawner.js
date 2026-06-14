/**
 * Restored source for Webpack Module #52057.
 *
 * Spawner drains population from its self building in burst-sized waves and
 * delegates visual/unit creation to the burst action.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { Entity } = require("./ECSCore")
const { TypesGame } = require("./TypesGame")
const { Population } = require("./Population")

class Spawner extends Entity {
  constructor() {
    super()
    this._spawnRoutine = () => this.spawnRoutine()
  }

  spawnAndSend(amount, targetBuilding) {
    this.stopRoutine()
    this._targetAmount = amount
    this._targetBuilding = targetBuilding
    this.startRoutine()
  }

  spawnRoutine() {
    const amount = Math.min(this._targetAmount, Spawner.UNITS_PER_WAVE)
    const population = this.selfBuilding?.get(Population)

    if (!population) return

    const allocated = population.allocate(amount)
    if (allocated > 0 && this._targetAmount > 0) {
      this._targetAmount -= allocated
      di.get(TypesGame.actions.burst).run({
        spawner: this,
        amount: allocated,
        target: this._targetBuilding,
      })
      this._spawnRoutineTimeout = setTimeout(this._spawnRoutine, 1000 * this.burstDelay)
    }
  }

  get burstDelay() {
    return 0.3
  }

  startRoutine() {
    this.spawnRoutine()
  }

  stopRoutine() {
    clearTimeout(this._spawnRoutineTimeout)
  }
}

Spawner.UNITS_PER_WAVE = 5
Spawner.BURST_WAVES_LEN = 0.75

markInjectable(Spawner)

module.exports = { Spawner }
