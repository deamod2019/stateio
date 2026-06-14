/**
 * Restored source for Webpack Module #26630.
 *
 * Population counter display and growth state for a building.
 */
"use strict"

const { View } = require("./DisplayFramework")
const { BitmapText } = require("./pixiRuntime")
const { markInjectable } = require("./DecoratorHelpers")

class Population extends View {
  constructor() {
    super()

    this._active = true
    this._populationSpeed = 1.5
    this._populationLimit = 60
    this._rate = 1000
    this._lastSpawnTimestamp = -1
    this._lastBlockTimestamp = -1
    this._current = 0

    this.updateLabel = () => {
      this._label.text = `${this._current}`
      this._label.x = -0.5 * this._label.width
    }
  }

  setPopulationLimit(limit) {
    this._populationLimit = limit
  }

  setPopulationRate(speed) {
    this._populationSpeed = speed
    this._rate = 1 / speed
  }

  get lastBlockTimestamp() {
    return this._lastBlockTimestamp
  }

  get active() {
    return this._active
  }

  set active(value) {
    this._active = value
    this.alpha = this._active ? 1 : 0.25
    this._label.visible = this._active
  }

  init(stateData) {
    this._label = new BitmapText("-", { fontName: "Helvetica" })
    this._label.y = stateData.stateRadius
    this.position.set(...stateData.statePos)
    this.addChild(this._label)
    this.updateLabel()
  }

  block() {
    this._lastBlockTimestamp = Date.now()
  }

  allocate(amount) {
    const nextCurrent = Math.max(this.current - amount, 0)
    const allocated = Math.max(this.current - nextCurrent, 0)

    this.current = nextCurrent
    if (allocated > 0) this.block()

    return allocated
  }

  remove(amount) {
    const previousCurrent = this.current
    const nextCurrent = Math.max(previousCurrent - amount, 0)
    const removed = Math.max(previousCurrent - nextCurrent, 0)

    this.current = nextCurrent

    return removed
  }

  tryPopulate(deltaSeconds = 0) {
    const now = Date.now()

    if (this._lastSpawnTimestamp === -1) {
      this._lastSpawnTimestamp = now
    }

    const elapsedSeconds = (now - this._lastSpawnTimestamp) / 1000
    if (elapsedSeconds >= this._rate) {
      const blockElapsed = now - this._lastBlockTimestamp

      if (
        this._current < this._populationLimit &&
        blockElapsed >= 1000 * Population.BLOCK_POPULATION_SECONDS
      ) {
        this.current += 1
      }

      const remainderSeconds = elapsedSeconds - this._rate
      this._lastSpawnTimestamp = now - remainderSeconds
    }
  }

  get current() {
    return this._current
  }

  set current(value) {
    this._current = value
    this.updateLabel()
  }

  get cap() {
    return this._populationLimit
  }
}

Population.BLOCK_POPULATION_SECONDS = 0.5
Population.SPAWN_AMOUNT_ON_OCCUPATION = 0

markInjectable(Population)

module.exports = { Population }
