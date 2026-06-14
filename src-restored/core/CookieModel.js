/**
 * Restored source for Webpack Module #56792.
 *
 * Gameplay persistence model for coins, level progress, boosters, context
 * history, selected skins, and unlocked user-owned cosmetics.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { di } = require("./RuntimeCore")
const { TypesCore } = require("./CoreTypes")
const { log } = require("./RuntimeUtils")
const { SIOConstants } = require("./SIOConstants")
const { GameEvents } = require("./GameEvents")
const { CookieModelBase } = require("./CookieModelBase")
const {
  GameColors,
  SelectableBuildingDataSet,
  SelectableColorsDataSet,
  SelectableFighterDataSet,
  UserSelectableColorsSet,
} = require("./SelectableSkins")
const { PlayerType } = require("./PlayerType")

const CookieModelKey = {
  coins: "coins",
  bot_level: "bot_level",
  fights_passed: "fights_passed",
  wins: "wins",
  loses: "loses",
  absoluteTryNum: "absoluteTryNum",
  absoluteLevelNum: "absoluteLevelNum",
  localLevelNum: "localLevelNum",
  currentStage: "currentStage",
  playerOfflineLevel: "playerOfflineLevel",
  playerSpawnLevel: "playerSpawnLevel",
  playerStartPopulation: "playerStartPopulation",
  lastLaunch: "lastLaunch",
  timeDiff: "timeDiff",
  ctx_history: "ctx_history",
  selected_color_set_id: "selected_color_set_id",
  selected_building_id: "selected_building_id",
  selected_fighter_id: "selected_fighter_id",
  user_buildings_set: "user_buildings_set",
  user_fighter_set: "user_fighter_set",
}

class CookieModel extends CookieModelBase {
  getDefaultStore() {
    return {
      [CookieModelKey.coins]: 0,
      [CookieModelKey.bot_level]: 0,
      [CookieModelKey.fights_passed]: 0,
      [CookieModelKey.wins]: 0,
      [CookieModelKey.loses]: 0,
      [CookieModelKey.absoluteTryNum]: 0,
      [CookieModelKey.absoluteLevelNum]: 1,
      [CookieModelKey.localLevelNum]: 1,
      [CookieModelKey.currentStage]: 0,
      [CookieModelKey.playerOfflineLevel]: 1,
      [CookieModelKey.playerSpawnLevel]: 1,
      [CookieModelKey.playerStartPopulation]: 1,
      [CookieModelKey.lastLaunch]: 0,
      [CookieModelKey.timeDiff]: 0,
      [CookieModelKey.ctx_history]: "{}",
      [CookieModelKey.selected_color_set_id]: UserSelectableColorsSet.BLUE,
      [CookieModelKey.selected_building_id]: 1,
      [CookieModelKey.selected_fighter_id]: 1,
      [CookieModelKey.user_buildings_set]: "[1]",
      [CookieModelKey.user_fighter_set]: "[1]",
    }
  }

  get playerOfflineLevel() {
    return this.get(CookieModelKey.playerOfflineLevel)
  }

  set playerOfflineLevel(value) {
    this.set(CookieModelKey.playerOfflineLevel, value)
  }

  get playerSpawnLevel() {
    return this.get(CookieModelKey.playerSpawnLevel)
  }

  set playerSpawnLevel(value) {
    this.set(CookieModelKey.playerSpawnLevel, value)
  }

  get absoluteLevelNum() {
    return this.get(CookieModelKey.absoluteLevelNum)
  }

  set absoluteLevelNum(value) {
    this.set(CookieModelKey.absoluteLevelNum, value)
  }

  get absoluteTryNum() {
    return this.get(CookieModelKey.absoluteTryNum)
  }

  set absoluteTryNum(value) {
    this.set(CookieModelKey.absoluteTryNum, value)
  }

  get coins() {
    return 1 * this.get(CookieModelKey.coins)
  }

  set coins(value) {
    this.set(CookieModelKey.coins, value)
    di.get(TypesCore.dispatcher).emit(GameEvents.COINS_UPDATED, { coins: this.coins })
  }

  get playerStartPopulation() {
    return this.get(CookieModelKey.playerStartPopulation)
  }

  set playerStartPopulation(value) {
    this.set(CookieModelKey.playerStartPopulation, value)
  }

  get currentStage() {
    return this.get(CookieModelKey.currentStage)
  }

  set currentStage(value) {
    this.set(CookieModelKey.currentStage, value)
  }

  isEnoughCoins(value) {
    return this.coins - value >= 0
  }

  get fightsPassed() {
    return this.get(CookieModelKey.fights_passed)
  }

  get botLevel() {
    return this.get(CookieModelKey.bot_level)
  }

  spendCoins(value) {
    this.coins -= value
  }

  get lastLaunch() {
    return this.get(CookieModelKey.lastLaunch)
  }

  set lastLaunch(value) {
    this.set(CookieModelKey.lastLaunch, value)
  }

  get timeDiff() {
    return this.get(CookieModelKey.timeDiff)
  }

  set timeDiff(value) {
    this.set(CookieModelKey.timeDiff, value)
  }

  async sync() {
    await super.sync()
    this.syncTime()
  }

  syncTime() {
    const isNotSolo = !this.social.inSolo
    const now = Date.now()

    if (this.lastLaunch === 0) this.lastLaunch = now
    if (!isNotSolo) this.timeDiff = now - this.lastLaunch
    if (this.timeDiff >= SIOConstants.MAX_REWARD_CAP_IN_MS) {
      this.timeDiff = SIOConstants.MAX_REWARD_CAP_IN_MS
    }
    if (!isNotSolo) this.lastLaunch = now
  }

  getContextHistory(key) {
    const raw = this.get(CookieModelKey.ctx_history)
    let history = {}
    try {
      history = JSON.parse(raw)
    } catch (error) {
      log.warn("Failed to load ctx history", raw)
    }
    const length = history[key].length
    return history[key][length - 1]
  }

  getContextHistories() {
    const raw = this.get(CookieModelKey.ctx_history)
    let history = {}
    try {
      history = JSON.parse(raw)
    } catch (error) {
      log.warn("Failed to load ctx history", raw)
    }
    return history
  }

  setContextHistory(key, value) {
    const raw = this.get(CookieModelKey.ctx_history)
    let history = {}
    try {
      history = JSON.parse(raw)
    } catch (error) {
      log.warn("Failed to load ctx history")
    }

    if (history) {
      const items = history[key]
      if (value.c >= value.s.length - 1) {
        if (items.length >= 3) items.shift()
        items.push(value)
      }
    }

    this.set(CookieModelKey.ctx_history, JSON.stringify(history))
  }

  get selectedColorSet() {
    const selectedId = this.get(CookieModelKey.selected_color_set_id)
    return SelectableColorsDataSet.filter((item) => item.id === selectedId).map((item) => ({
      ...item,
      selected: true,
      stored: true,
    }))[0]
  }

  get selectedBuilding() {
    const selectedId = this.get(CookieModelKey.selected_building_id)
    return SelectableBuildingDataSet.filter((item) => item.id === selectedId).map((item) => ({
      ...item,
      selected: true,
      stored: true,
    }))[0]
  }

  get selectedFighter() {
    const selectedId = this.get(CookieModelKey.selected_fighter_id)
    return SelectableFighterDataSet.filter((item) => item.id === selectedId).map((item) => ({
      ...item,
      selected: true,
      stored: true,
    }))[0]
  }

  get user_buildings_set() {
    return this.get(CookieModelKey.user_buildings_set)
  }

  getUserBuildingSet() {
    let items = []
    try {
      items = items.concat(
        Array.isArray(this.user_buildings_set)
          ? this.user_buildings_set
          : JSON.parse(this.user_buildings_set),
      )
    } catch (error) {
      log.warn("Failed to load user stored buildings")
    }
    return items
  }

  getUserFighterSet() {
    let items = []
    try {
      items = items.concat(
        Array.isArray(this.user_fighter_set)
          ? this.user_fighter_set
          : JSON.parse(this.user_fighter_set),
      )
    } catch (error) {
      log.warn("Failed to load user stored fighters")
    }
    return items
  }

  get user_fighter_set() {
    return this.get(CookieModelKey.user_fighter_set)
  }

  get availableColors() {
    return SelectableColorsDataSet.map((item) => {
      const selected = item.id === this.get(CookieModelKey.selected_color_set_id)
      return { ...item, stored: true, selected }
    })
  }

  addUserBuilding(id) {
    this.addUserSet(id, CookieModelKey.user_buildings_set)
  }

  addUserFighter(id) {
    this.addUserSet(id, CookieModelKey.user_fighter_set)
  }

  addUserSet(id, key) {
    const raw = this.get(key)
    try {
      const items = [].concat(Array.isArray(raw) ? raw : JSON.parse(raw))
      if (items.indexOf(id) === -1) items.push(id)
      this.set(key, JSON.stringify(items))
    } catch (error) {
      log.warn("Failed to load user stored fighters")
    }
  }

  get selected_color_set_id() {
    return this.get(CookieModelKey.selected_color_set_id)
  }

  set selected_color_set_id(value) {
    if (value !== this.get(CookieModelKey.selected_color_set_id)) {
      this.set(CookieModelKey.selected_color_set_id, value)
      this.onUserSelectableKeyChanged()
    }
  }

  get selected_building_id() {
    return 1 * this.get(CookieModelKey.selected_building_id)
  }

  set selected_building_id(value) {
    if (value !== this.get(CookieModelKey.selected_building_id)) {
      this.set(CookieModelKey.selected_building_id, value)
      this.onUserSelectableKeyChanged()
    }
  }

  get selected_fighter_id() {
    return 1 * this.get(CookieModelKey.selected_fighter_id)
  }

  set selected_fighter_id(value) {
    if (value !== this.get(CookieModelKey.selected_fighter_id)) {
      this.set(CookieModelKey.selected_fighter_id, value)
      this.onUserSelectableKeyChanged()
    }
  }

  onUserSelectableKeyChanged() {
    di.get(TypesCore.dispatcher).emit(GameEvents.SELECTABLE_ITEM_CHANGED)
  }

  getColorByPlayerType(playerType) {
    let colors = GameColors.players[playerType]

    if (playerType === PlayerType.First) {
      if (this.selectedColorSet?.data) colors = this.selectedColorSet.data
    } else if (playerType === PlayerType.Second && this.selectedColorSet?.id) {
      let data = SelectableColorsDataSet.filter(
        (item) => item.id === UserSelectableColorsSet.BLUE,
      )
      if (this.selectedColorSet.id === UserSelectableColorsSet.BLUE) {
        data = SelectableColorsDataSet.filter((item) => item.id === UserSelectableColorsSet.RED)
      }
      if (data.length) colors = data[0].data
    }

    return colors
  }

  get(key) {
    let value = super.get(key)
    if (value === undefined || value === "undefined") value = this.getDefaultStore()[key]
    return value
  }
}

markInjectable(CookieModel)

module.exports = { CookieModelKey, CookieModel }
