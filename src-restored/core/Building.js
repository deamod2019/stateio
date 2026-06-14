/**
 * Restored source for Webpack Module #26511.
 *
 * DI wiring: game model plus capital, state-shape, and population component
 * factories.
 */
"use strict"

const { injectToken, markInjectable } = require("./DecoratorHelpers")
const { Entity } = require("./ECSCore")
const { di, lazyGet } = require("./RuntimeCore")
const { TypesGame } = require("./TypesGame")
const { Spawner } = require("./Spawner")
const { Fighter } = require("./Fighter")
const { PlayerType } = require("./PlayerType")
const { PathHolder } = require("./PathHolder")
const { GameColors } = require("./SelectableSkins")
const { color } = require("./MathUtils")
const { TypesSocial } = require("./CoreTypes")
const { Population } = require("./Population")
const { CapitalView } = require("./CapitalView")
const { StateShapeView } = require("./StateShapeView")

function getBotLogicClass() {
  return require("./BotLogic").BotLogic
}

class Building extends Entity {
  constructor() {
    super()
    this._selected = false
    this._pathHolder = new PathHolder()
  }

  init(stateId, stateData) {
    this.addTag(Building.ACTIVE_TAG)
    this._data = stateData
    this._stateId = stateId

    if (!this._spawner) {
      this._spawner = di.get(Spawner)
    }
    this._spawner.selfBuilding = this

    this._population.init(stateData)
    this._capital.init(stateData)
    this._shape.init(stateData, stateId)
    this._shape.interactive = true

    this.addMainComponents()
    this.updatePopulationRateAndLimit()

    return this
  }

  sendTo(targetBuilding) {
    this._spawner.spawnAndSend(this._population.current, targetBuilding)
  }

  setInactive(inactive) {
    if (inactive) {
      this.removeTag(Building.ACTIVE_TAG)
      this.get(Spawner)?.stopRoutine()
      this.removeComponent(PathHolder)
      this.removeComponent(Spawner)
    } else {
      this.addTag(Building.ACTIVE_TAG)
      this.addMainComponents()
    }

    this.updateAllSkins()
    this.onComponentListUpdated()
  }

  toggleActive(ownerValue, animated) {
    const active = isNaN(ownerValue) || this.hasTag(Building.ACTIVE_TAG)
    this._shape.setActive(active, animated)
    this._capital.setActive(active, animated)
    this._population.active = active
  }

  setStartOwner(owner) {
    this.owner = owner
    this._population.current = this.model.meta.getStartPopulation(owner)
    this.updatePopulationRateAndLimit()
  }

  tryOccupy(fighter) {
    const population = this.get(Population)
    const spawner = this.get(Spawner)

    if (!population) return

    population.block()

    if (this._owner === fighter.owner) {
      population.current += fighter.amount
      return
    }

    const capital = this.get(CapitalView)
    capital?.shake(0.3, 0.2)

    if (fighter.owner === PlayerType.First) {
      const vibrationManager = lazyGet(TypesSocial.vibrationManager)
      vibrationManager?.vibrate()
    }

    if (population.remove(fighter.amount) === 0) {
      capital?.occupiedAnimation(0.2)
      population.current += Population.SPAWN_AMOUNT_ON_OCCUPATION
      this.owner = fighter.owner
      spawner.stopRoutine()
      if (this._selected) this.deselect()
    }
  }

  selectAsTarget() {
    const [hex, alpha] = this.isFirstPlayer ? GameColors.aims.allied : GameColors.aims.enemy
    this.showSelection(color.fromHex(hex), alpha)
  }

  selectAsSource() {
    this._selected = true
    const [hex, alpha] = GameColors.aims.allied
    this.showSelection(color.fromHex(hex), alpha)
  }

  showSelection(selectionColor, alpha = 0.5) {
    this.get(CapitalView)?.showSelection(selectionColor, alpha)
  }

  updatePopulationRateAndLimit() {
    const population = this.get(Population)
    if (!population) return

    population.setPopulationLimit(this.model.meta.getBuildingPopulationLimit(this._owner))
    population.setPopulationRate(this.model.meta.getPopulationRate(this._owner))
    this.get(StateShapeView)?.updateWithPopulation(population)
  }

  deselect() {
    this._selected = false
    this.showSelection(Number.NaN)
  }

  get selected() {
    return this._selected
  }

  get isFirstPlayer() {
    return this._owner === PlayerType.First
  }

  get stateId() {
    return this._stateId
  }

  get owner() {
    return this._owner
  }

  set owner(owner) {
    this._owner = owner
    this.addMainComponents()
    this.updateAllSkins()

    switch (owner) {
      case PlayerType.Default:
        ;[Spawner, PathHolder, getBotLogicClass()].forEach((component) => this.remove(component))
        break
      case PlayerType.Neutral:
      case PlayerType.First:
        this.remove(getBotLogicClass())
        break
      default:
        this.add(di.get(TypesGame.botLogic))
        break
    }

    this.onComponentListUpdated()
    this.updatePopulationRateAndLimit()
  }

  onComponentListUpdated() {
    this._population.visible = this.has(Population)
    this._capital.visible = this.has(CapitalView)
  }

  getSnapshot() {
    const now = Date.now()
    const population = this.get(Population)
    const spawner = this.get(Spawner)
    const pathHolder = this.get(PathHolder)

    return {
      Owner: this._owner,
      SpawnRate: this.model.meta.getPopulationRate(this._owner),
      AttackRate: 0,
      AttackRadius: 0,
      Id: this.stateId,
      Position: this._data.statePos.slice(0),
      CurrentPopulation: population?.current || 0,
      SpawnLimit: this.model.meta.getBuildingPopulationLimit(this._owner),
      FighterSpeed: Fighter.NORMAL_SPEED,
      LastActionTimestamp: 0 - (now - (population?.lastBlockTimestamp || 0)),
      BurstDelay: spawner?.burstDelay || 0,
      BurstWidth: pathHolder?.getPathWidth() || 0,
    }
  }

  updateAllSkins() {
    const active = this.hasTag(Building.ACTIVE_TAG)
    this.get(StateShapeView)?.updateSkin(this._owner)
    this.get(CapitalView)?.updateSkin(this._owner, active)
  }

  addMainComponents() {
    const components = [this._capital, this._spawner, this._shape, this._population, this._pathHolder]

    if (!this.hasAll(...components)) {
      components.forEach((component) => this.add(component))
    }
  }

  get data() {
    return this._data
  }

  destroy() {}
}

Building.ACTIVE_TAG = "active"

injectToken(Building, "model", TypesGame.model)
injectToken(Building, "_capital", TypesGame.views.state)
injectToken(Building, "_shape", TypesGame.views.stateShape)
injectToken(Building, "_population", TypesGame.views.population)
markInjectable(Building)

module.exports = { Building }
