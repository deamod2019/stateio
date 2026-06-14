/**
 * Restored source for Webpack Module #11073.
 *
 * Creates or reuses building entities for a continent stage, assigns their
 * initial owners, marks inactive stages, and emits LEVEL_LOADED after shape
 * initialization promises settle.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { System } = require("./ECSCore")
const { PlayerType } = require("./PlayerType")
const { TypesCore } = require("./CoreTypes")
const { GameEvents } = require("./GameEvents")
const { StateShapeView } = require("./StateShapeView")

class InitStageSystem extends System {
  constructor(currentContinent, stageLevel) {
    super()
    this.currentContinent = currentContinent
    this.stageLevel = stageLevel
  }

  onAddedToEngine() {
    super.onAddedToEngine()

    const promises = []
    this.currentContinent.parsed.forEach((stateData, stateId) => {
      const building = this.currentContinent.getOrCreateBuildingEntity(stateId, stateData)
      this.engine.addEntity(building)

      const stageOffset = this.stageLevel - stateData.stage
      if (stageOffset === 0) {
        building.setStartOwner(stateData.startOwner)
      } else if (stageOffset > 0) {
        building.setStartOwner(PlayerType.First)
      } else {
        building.setStartOwner(PlayerType.Neutral)
      }

      building.setInactive(stageOffset !== 0)
      promises.push(building.get(StateShapeView)?.initialPromise)
    })

    Promise.all(promises).then(() => {
      lazyGet(TypesCore.dispatcher)?.emit(GameEvents.LEVEL_LOADED)
    })

    this.engine.removeSystem(this)
  }
}

module.exports = { InitStageSystem }
