/**
 * Restored source for Webpack Module #36356.
 *
 * Gameplay economy facade over MetaConfig and player cookie progress.
 */
"use strict"

const { lazyInjectProperty, markInjectable } = require("./DecoratorHelpers")
const { GlobalEventProvider } = require("./RuntimeCore")
const { PlayerType } = require("./PlayerType")
const { TypesGame } = require("./TypesGame")
const { CookieModel } = require("./CookieModel")
const { MetaConfig } = require("./MetaConfig")

class MetaModel extends GlobalEventProvider {
  constructor(...args) {
    super(...args)
    this._metaConfig = new MetaConfig()
    this.loseMultiplier = 0.2
  }

  getReward(level = this.cookie.absoluteLevelNum) {
    return this._metaConfig.GetLevelFinishReward(level)
  }

  getBuildingPopulationLimit(owner) {
    return owner == PlayerType.Neutral
      ? this._metaConfig.GetNeutralCap(this.cookie.absoluteLevelNum)
      : this._metaConfig.GetCommonCap(this.cookie.absoluteLevelNum)
  }

  getPopulationRate(owner) {
    return owner == PlayerType.Neutral
      ? this._metaConfig.GetNeutralRate(this.cookie.absoluteLevelNum)
      : owner == PlayerType.First
        ? this.getPlayerGenerationRate(this.cookie.playerSpawnLevel)
        : this.getBotGenerationRate(this.cookie.absoluteLevelNum)
  }

  getPlayerGenerationRate(level) {
    return this._metaConfig.GetGenerationSpeed(level)
  }

  getBotGenerationRate(level) {
    const cappedLevel = this._metaConfig.GetBotUpgradeLevelsCap(level)
    return this._metaConfig.GetGenerationSpeed(cappedLevel)
  }

  getStartPopulation(owner) {
    switch (owner) {
      case PlayerType.Neutral:
        return this._metaConfig.GetNeutralStartPopulation(this.cookie.absoluteLevelNum)
      case PlayerType.First:
        return this.getPlayerStartPopulation(this.cookie.playerStartPopulation)
    }
    return this.getBotStartPopulation(this.cookie.absoluteLevelNum)
  }

  getPlayerStartPopulation(level) {
    return this._metaConfig.GetStartPopulation(level)
  }

  getBotStartPopulation(level) {
    const cappedLevel = this._metaConfig.GetBotUpgradeLevelsCap(level)
    return this._metaConfig.GetStartPopulation(cappedLevel)
  }

  getStartPopulationCost() {
    return this._metaConfig.GetBoosterCost(this.cookie.playerStartPopulation)
  }

  getPopulationRateCost() {
    return this._metaConfig.GetBoosterCost(this.cookie.playerSpawnLevel)
  }

  getOfflineEarningCost() {
    return this._metaConfig.GetBoosterCost(this.cookie.playerOfflineLevel)
  }

  getNextStartPopulation(owner) {
    return owner == PlayerType.Neutral
      ? this._metaConfig.GetNeutralStartPopulation(this.cookie.playerStartPopulation + 1)
      : owner == PlayerType.First
        ? this.getPlayerStartPopulation(this.cookie.playerStartPopulation + 1)
        : this.getBotStartPopulation(this.cookie.absoluteLevelNum + 1)
  }

  getNextPopulationRate(owner) {
    return owner == PlayerType.Neutral
      ? this._metaConfig.GetNeutralRate(this.cookie.playerStartPopulation + 1)
      : owner == PlayerType.First
        ? this.getPlayerGenerationRate(this.cookie.playerSpawnLevel + 1)
        : this.getBotGenerationRate(this.cookie.absoluteLevelNum + 1)
  }

  getNextOfflineEarning() {
    return this._metaConfig.GetOfflineEarning(this.cookie.playerOfflineLevel + 1)
  }

  getOfflineEarning() {
    return this._metaConfig.GetOfflineEarning(this.cookie.playerOfflineLevel)
  }

  increaseStartPopulation() {
    const cost = this._metaConfig.GetBoosterCost(this.cookie.playerStartPopulation)
    if (this.cookie.isEnoughCoins(cost)) {
      this.cookie.playerStartPopulation++
      this.cookie.spendCoins(cost)
      this.upgraded()
    }
  }

  increaseStartPopulationFree() {
    this.cookie.playerStartPopulation++
    this.upgradedForFree()
    this.upgraded()
  }

  increaseSpawn() {
    const cost = this._metaConfig.GetBoosterCost(this.cookie.playerSpawnLevel)
    if (this.cookie.isEnoughCoins(cost)) {
      this.cookie.playerSpawnLevel++
      this.cookie.spendCoins(cost)
      this.upgraded()
    }
  }

  increaseSpawnFree() {
    this.cookie.playerSpawnLevel++
    this.upgradedForFree()
    this.upgraded()
  }

  increaseOffline() {
    const cost = this._metaConfig.GetBoosterCost(this.cookie.playerOfflineLevel)
    if (this.cookie.isEnoughCoins(cost)) {
      this.cookie.playerOfflineLevel++
      this.cookie.spendCoins(cost)
      this.upgraded()
    }
  }

  increaseOfflineFree() {
    this.cookie.playerOfflineLevel++
    this.upgradedForFree()
    this.upgraded()
  }

  upgradedForFree() {}

  upgraded() {}

  getPlayerGenerationRateValue(level) {
    return this._metaConfig.GetGenerationSpeed(level)
  }
}

lazyInjectProperty(MetaModel, "cookie", TypesGame.cookieModel, CookieModel)
markInjectable(MetaModel)

module.exports = { MetaModel }
