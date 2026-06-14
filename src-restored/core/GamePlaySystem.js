/**
 * Restored source for Webpack Module #93972.
 *
 * Tracks total active population/fighters by owner and ends the stage when the
 * first player wins or loses.
 */
"use strict"

const { di, lazyGet } = require("./RuntimeCore")
const { TypesCore } = require("./CoreTypes")
const { GameEvents } = require("./GameEvents")
const { PlayerType } = require("./PlayerType")
const { TypesGame } = require("./TypesGame")
const { ReactionSystem } = require("./ECSCore")
const { Building } = require("./Building")
const { Population } = require("./Population")
const { FighterEvent } = require("./FighterMovementSystem")

class GamePlayEvent {
  constructor(won = false) {
    this.won = won
  }
}

class GamePlaySystem extends ReactionSystem {
  constructor() {
    super((entity) => entity.has(Population) && entity.hasTag(Building.ACTIVE_TAG))
    this._freeCounts = new Map()
    this._fullAmount = new Map()
    this._isAnyBuilding = new Map()
    this._players = [
      PlayerType.Neutral,
      PlayerType.First,
      PlayerType.Second,
      PlayerType.Third,
      PlayerType.Fourth,
      PlayerType.Fifth,
      PlayerType.Sixth,
      PlayerType.Seventh,
      PlayerType.Eighth,
    ]
    this._fighterEntityCreated = (event) => this.onFighterEnitityHandler(event)
  }

  update(delta = 0) {
    let stageEnded
    let won = false

    for (const player of this._players) {
      this._fullAmount.set(player, this._freeCounts.get(player))
      this._isAnyBuilding.delete(player)
    }

    this.entities.forEach((building) => {
      const population = building.get(Population)
      const count = (this._fullAmount.get(building.owner) || 0) + population.current
      this._fullAmount.set(building.owner, count)
      this._isAnyBuilding.set(building.owner, true)
    })

    if (!stageEnded && !this.isAnyBotAlive()) {
      stageEnded = true
      won = true
    }

    if (!stageEnded && !this.isAlive(PlayerType.First)) {
      stageEnded = true
      won = false
    }

    const items = []
    let totalValue = 0
    this._fullAmount.forEach((count, owner) => {
      if (count !== undefined) {
        items.push({ owner, count })
        totalValue += count
      }
    })

    di.get(TypesCore.dispatcher).emit(GameEvents.STATS_UPDATED, {
      items: items.sort((first, second) => first.owner - second.owner),
      totalValue,
    })

    if (stageEnded) {
      this.dispatch(new GamePlayEvent(won))
      lazyGet(TypesGame.model)?.endStage(won)
    }
  }

  isAlive(owner) {
    return (this._fullAmount.get(owner) || 0) > 0 || this._isAnyBuilding.get(owner)
  }

  isAnyBotAlive() {
    for (const player of this._players) {
      if (player !== PlayerType.Neutral && player !== PlayerType.First && this.isAlive(player)) {
        return true
      }
    }
    return false
  }

  onFighterEnitityHandler(event) {
    const fighter = event.fighter
    let count = this._freeCounts.get(fighter.owner) || 0

    switch (event.type) {
      case FighterEvent.FIGHTER_DIED:
        count--
        break
      case FighterEvent.FIGHTER_CREATED:
        count++
    }

    this._freeCounts.set(fighter.owner, count)
  }

  onAddedToEngine() {
    super.onAddedToEngine()
    this.engine.subscribe(FighterEvent, this._fighterEntityCreated)
  }

  onRemovedFromEngine() {
    this.engine.unsubscribe(FighterEvent, this._fighterEntityCreated)
    this._freeCounts.clear()
    this._fullAmount.clear()
    this._isAnyBuilding.clear()
    super.onRemovedFromEngine()
  }
}

module.exports = { GamePlaySystem, GamePlayEvent }
