/**
 * Restored source for Webpack Module #72063.
 *
 * BotsSystem initializes BotLogic components, advances their decisions, and
 * converts simulated bot commands back to live building entities.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { Random } = require("./RuntimeUtils")
const { math } = require("./MathUtils")
const { DecisionType } = require("./DecisionType")
const {
  BotPreset0Vegetable,
  BotPreset1Easy,
  BotPreset2Medium,
  BotPreset3UpperMedium,
  BotPreset4Hard,
  BotPreset6FinalAgressive,
} = require("./BotPresets")
const { TypesGame } = require("./TypesGame")
const { IterativeSystem } = require("./ECSCore")
const { BotLogic } = require("./BotLogic")
const { GamePlayEvent } = require("./GamePlaySystem")

class BotsSystem extends IterativeSystem {
  constructor() {
    super((entity) => entity.has(BotLogic))

    this._presets = [
      [3, 0, [[BotPreset1Easy, 1]]],
      [2, 1, [[BotPreset2Medium, 1]]],
      [3, 1, [[BotPreset3UpperMedium, 1]]],
      [3, 1, [[BotPreset4Hard, 1]]],
      [3, 1, [[BotPreset6FinalAgressive, 1]]],
    ]
    this._startBot = BotPreset0Vegetable
    this._lowLevelPresetEveryFights = 3
    this._gameplayEventHandler = this.gameplayEventHandler.bind(this)
    this.entityAdded = (snapshot) => {
      snapshot.current.get(BotLogic).init(this.selectPreset())
    }
  }

  updateEntity(entity, delta) {
    const bot = entity.get(BotLogic)
    if (!bot) return

    if (!bot.initialized) bot.init(this.selectPreset())
    const decision = bot.decide(entity)
    if (decision) bot.executeDecision(this.convertToDecision(decision))
  }

  convertToDecision(decision) {
    const model = di.get(TypesGame.model)
    const getBuilding = (id) => model.currentContinent.buildings.get(id)

    if (decision.Type === DecisionType.Move) {
      const objects = []
      for (const object of decision.Objects) {
        objects.push(getBuilding(object.Id))
      }
      return {
        Type: DecisionType.Move,
        Subject: getBuilding(decision.Subject.Id),
        Objects: objects,
      }
    }

    return { Type: DecisionType.Wait, Objects: [], Subject: {} }
  }

  selectPreset() {
    if (this.model.currentContinent.stageLevel === 0) return this._startBot

    if (this.isLowLevelFight) {
      this.getPrevLevel(this.cookie.botLevel)
      return this.selectRandom(this._presets[0][2])
    }

    return this.selectRandom(this._presets[this.cookie.botLevel][2])
  }

  getPrevLevel(level) {
    return math.clamp(level - 1, 0, this._presets.length - 1)
  }

  selectRandom(weightedPresets) {
    return Random.from(weightedPresets)[0]
  }

  get isLowLevelFight() {
    return this.cookie.fightsPassed % this._lowLevelPresetEveryFights === 1 && this.cookie.botLevel > 0
  }

  gameplayEventHandler() {}

  onAddedToEngine() {
    super.onAddedToEngine()
    this.cookie = di.get(TypesGame.cookieModel)
    this.model = di.get(TypesGame.model)
    this.engine.subscribe(GamePlayEvent, this._gameplayEventHandler)
  }

  onRemovedFromEngine() {
    this.entities.forEach((entity) => entity.get(BotLogic)?.terminate())
    this.engine.unsubscribe(GamePlayEvent, this._gameplayEventHandler)
    super.onRemovedFromEngine()
  }
}

module.exports = { BotsSystem }
