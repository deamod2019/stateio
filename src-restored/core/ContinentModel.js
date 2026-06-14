/**
 * Restored source for Webpack Module #36637.
 *
 * ContinentModel owns parsed continent stage data, lazily-created Building
 * entities, stage scoring, and history/lifecycle state for the current level.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { GlobalEventProvider } = require("./GlobalEventProvider")
const { log } = require("./RuntimeUtils")
const { markInjectable } = require("./DecoratorHelpers")
const { PlayerType } = require("./PlayerType")
const { TimeTrack } = require("./TimeTrack")
const { getOwnerGenerator } = require("./MathUtils")
const { Building } = require("./Building")
const { Population } = require("./Population")
const { FighterGroupsSystem } = require("./FighterGroupsSystem")

class ContinentModel extends GlobalEventProvider {
  constructor(...args) {
    super(...args)
    this.parsed = new Map()
    this.buildings = new Map()
    this._stageScores = []
    this._stageLevel = 0
    this.time = new TimeTrack(1000)
  }

  get data() {
    return this._data
  }

  init(data) {
    this._data = data

    for (let stageIndex = 0; stageIndex < this._data.stages.length; stageIndex++) {
      const ownerGenerator = getOwnerGenerator()

      this._data.stages[stageIndex].states.forEach((state) => {
        parseState(this, data.id, state, stageIndex, ownerGenerator)
      })
    }

    this._stageScores = this._data.stages.map(() => 0)
    return this
  }

  captureStage() {
    this.time.stop()
    this._stageScores[this._stageLevel] = this.getStageScore()
    this._stageLevel++
  }

  get isFinished() {
    return this._stageLevel > this._data.stages.length - 1
  }

  get stageLevel() {
    return this._stageLevel
  }

  set stageLevel(value) {
    this._stageLevel = value
  }

  get totalStages() {
    return this._data.stages.length
  }

  getOrCreateBuildingEntity(id, stateData) {
    if (!this.buildings.has(id)) {
      this.buildings.set(id, di.get(Building).init(id, stateData))
    }

    return this.buildings.get(id)
  }

  getTotalScore() {
    return this._stageScores.reduce((total, score) => total + score)
  }

  getStageScore() {
    const elapsedSeconds = 0.001 * this.time.getTotalTime()
    let firstPlayerForce = 0
    let firstPlayerBuildingCount = 0

    this.buildings.forEach((building) => {
      if (building.owner === PlayerType.First) {
        firstPlayerBuildingCount++
        firstPlayerForce += building.get(Population)?.current || 0
      }
    })

    for (const group of FighterGroupsSystem.GetActiveGroups()) {
      if (group.Owner === PlayerType.First) {
        firstPlayerForce += group.Amount
      }
    }

    const score = (firstPlayerBuildingCount * firstPlayerForce) / elapsedSeconds
    return Math.round(score)
  }

  getHistory() {
    return {
      l: this.data.id,
      c: this.stageLevel,
      s: this._stageScores,
    }
  }

  dispose() {
    this.buildings.forEach((building) => building.destroy())
    this.buildings.clear()
    this.parsed.clear()
    this.time.stop()
  }
}

markInjectable(ContinentModel)

module.exports = { ContinentModel }

function parseState(model, continentId, state, stage = 0, ownerGenerator) {
  const shapes = state.shapes
  if (!shapes) {
    log.warn("Failed to parse", state.id)
    return
  }

  model.parsed.set(`${continentId}-${state.id}`, {
    stage,
    shapes,
    shapePos: [NaN, NaN],
    statePos: [state.x, state.y],
    stateRadius: state.radius || 40,
    startOwner: ownerGenerator(state.fillColor),
  })
}
