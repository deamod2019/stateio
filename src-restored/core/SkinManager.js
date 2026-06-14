/**
 * Restored source for Webpack Module #60079.
 *
 * Keeps selected/randomized building and fighter skins plus player color sets.
 */
"use strict"

const { Random } = require("./RuntimeUtils")
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { CookieModel } = require("./CookieModel")
const { PlayerType } = require("./PlayerType")
const {
  GameColors,
  SelectableBuildingDataSet,
  SelectableFighterDataSet,
  SelectableColorsDataSet,
  UserSelectableColorsSet,
  SkinType,
} = require("./SelectableSkins")

class SkinManager {
  constructor() {
    this.fighters = new Map()
    this.buildings = new Map()
  }

  fillSkins() {
    const absoluteLevelNum = this.cookies.absoluteLevelNum
    const defaultBuilding = SelectableBuildingDataSet[0]
    const defaultFighter = SelectableFighterDataSet[0]
    const selectedFighter = SelectableFighterDataSet.filter(
      (skin) => skin.id === this.cookies.selected_fighter_id,
    )[0]
    const selectedBuilding = SelectableBuildingDataSet.filter(
      (skin) => skin.id === this.cookies.selected_building_id,
    )[0]

    this.fighters.set(PlayerType.First, (selectedFighter || defaultFighter).textureUrl)
    this.buildings.set(PlayerType.First, (selectedBuilding || defaultBuilding).textureUrl)
    this.buildings.set(PlayerType.Neutral, defaultBuilding.textureUrl)

    Object.keys(PlayerType).forEach((key, index) => {
      if (index === PlayerType.First || index === PlayerType.Neutral) return

      if (absoluteLevelNum <= 5) {
        this.fighters.set(index, defaultFighter.textureUrl)
        this.buildings.set(index, defaultBuilding.textureUrl)
      } else {
        this.fighters.set(index, Random.from(SelectableFighterDataSet).textureUrl)
        this.buildings.set(index, Random.from(SelectableBuildingDataSet).textureUrl)
      }
    })
  }

  clearSkins() {
    this.fighters.clear()
    this.buildings.clear()
  }

  getGift() {
    const absoluteLevelNum = this.cookies.absoluteLevelNum
    const userFighters = this.cookies.getUserFighterSet()
    const userBuildings = this.cookies.getUserBuildingSet()
    const available = SelectableFighterDataSet.concat(SelectableBuildingDataSet).filter((skin) => {
      if (skin.playerLevelUnlock <= absoluteLevelNum) {
        if (skin.type === SkinType.FIGHTER) return !userFighters.includes(skin.id)
        if (skin.type === SkinType.BUILDING) return !userBuildings.includes(skin.id)
      }
      return false
    })

    return Random.from(available)
  }

  updateSkins() {
    this.clearSkins()
    this.fillSkins()
  }

  get selectedColorSet() {
    return SelectableColorsDataSet.filter(
      (colorSet) => colorSet.id === this.cookies.selected_color_set_id,
    ).map((colorSet) => ({
      ...colorSet,
      selected: true,
      stored: true,
    }))[0]
  }

  getBuildingTextureBy(owner) {
    return this.buildings.get(owner)
  }

  getFighterTextureBy(owner) {
    return this.fighters.get(owner)
  }

  getColorBy(owner) {
    let colors = GameColors.players[owner]

    if (owner === PlayerType.First) {
      if (this.selectedColorSet?.data) colors = this.selectedColorSet.data
    } else if (owner === PlayerType.Second && this.selectedColorSet?.id) {
      let selectable = SelectableColorsDataSet.filter(
        (colorSet) => colorSet.id === UserSelectableColorsSet.BLUE,
      )
      if (this.selectedColorSet.id === UserSelectableColorsSet.BLUE) {
        selectable = SelectableColorsDataSet.filter(
          (colorSet) => colorSet.id === UserSelectableColorsSet.RED,
        )
      }
      if (selectable.length) colors = selectable[0].data
    }

    return colors
  }

  get availableBuildings() {
    return this.selectFrom(
      SelectableBuildingDataSet,
      this.cookies.getUserBuildingSet(),
      this.cookies.selected_building_id,
    )
  }

  get availableFighters() {
    return this.selectFrom(
      SelectableFighterDataSet,
      this.cookies.getUserFighterSet(),
      this.cookies.selected_fighter_id,
    )
  }

  selectFrom(dataSet, ownedIds, selectedId) {
    return dataSet
      .filter(
        (skin) =>
          this.cookies.absoluteLevelNum >= skin.enemyLevelUnlock || ownedIds.indexOf(skin.id) !== -1,
      )
      .map((skin) => {
        const selected = skin.id === selectedId
        const stored = ownedIds.indexOf(skin.id) !== -1
        return {
          ...skin,
          selected,
          stored,
        }
      })
  }
}

injectProperty(SkinManager, "cookies", TypesGame.cookieModel, CookieModel)
markInjectable(SkinManager)

module.exports = { SkinManager }
