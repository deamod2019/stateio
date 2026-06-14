/**
 * Restored source for Webpack Module #66154.
 *
 * Player colors plus the selectable building, fighter, and color-scheme data
 * used by the State.io skin shop and preload pipeline.
 */
"use strict"

const { PlayerType } = require("./PlayerType")

const PLAYER_BLUE_COLORS = ["#4BB4F8", "#33698D"]
const PLAYER_RED_COLORS = ["#F53514", "#77160D"]

const GameColors = {
  players: {
    [PlayerType.Default]: ["#4BB4F8", "#33698D"],
    [PlayerType.First]: PLAYER_BLUE_COLORS,
    [PlayerType.Second]: PLAYER_RED_COLORS,
    [PlayerType.Third]: ["#59D267", "#1E7824"],
    [PlayerType.Fourth]: ["#A563F2", "#501E84"],
    [PlayerType.Fifth]: ["#EE3B82", "#680443"],
    [PlayerType.Sixth]: ["#30CFAF", "#066056"],
    [PlayerType.Seventh]: ["#F8AE20", "#895E0B"],
    [PlayerType.Eighth]: ["#BAAB2A", "#323B0E"],
    [PlayerType.Nine]: ["#DC6CC5", "#5F297D"],
    [PlayerType.Neutral]: ["#A2A2A2", "#1C1C1C", "#ffffff"],
  },
  aims: {
    allied: ["#4ab4f9", 0.298],
    enemy: ["#f43514", 0.298],
  },
}

const SkinType = {
  BUILDING: "SkinType.BUILDING",
  FIGHTER: "SkinType.FIGHTER",
  COLOR: "SkinType.COLOR",
}

const UserSelectableColorsSet = {
  BLUE: "UserSelectableColorsSet.BLUE",
  RED: "UserSelectableColorsSet.RED",
}

const SelectableColorCss = [
  { id: UserSelectableColorsSet.BLUE, className: "skins-blue-color-set" },
  { id: UserSelectableColorsSet.RED, className: "skins-red-color-set" },
]

const SelectableColorsDataSet = [
  { id: UserSelectableColorsSet.BLUE, data: PLAYER_BLUE_COLORS },
  { id: UserSelectableColorsSet.RED, data: PLAYER_RED_COLORS },
]

const BUILDING_UNLOCKS = [
  [1, 1, 1],
  [2, 8, 1],
  [3, 8, 1],
  [4, 8, 1],
  [5, 8, 1],
  [6, 8, 1],
  [7, 8, 1],
  [8, 8, 1],
  [9, 8, 1],
  [10, 8, 1],
  [11, 10, 1],
  [12, 10, 1],
  [13, 10, 1],
  [14, 12, 1],
  [15, 12, 1],
  [16, 12, 1],
  [17, 14, 1],
  [18, 14, 1],
  [19, 14, 10],
  [20, 16, 10],
  [21, 16, 10],
  [22, 16, 14],
  [23, 18, 14],
  [24, 18, 14],
  [25, 18, 18],
  [26, 20, 18],
  [27, 20, 18],
  [28, 20, 20],
  [29, 22, 20],
  [30, 22, 20],
  [31, 22, 24],
  [32, 24, 24],
  [33, 24, 24],
]

const FIGHTER_UNLOCKS = [
  [1, 1, 1],
  [2, 8, 1],
  [3, 8, 1],
  [4, 8, 1],
  [5, 8, 1],
  [6, 8, 1],
  [7, 8, 1],
  [8, 8, 1],
  [9, 8, 1],
  [10, 8, 1],
  [11, 10, 1],
  [12, 10, 1],
  [13, 10, 1],
  [14, 12, 1],
  [15, 12, 1],
  [16, 12, 1],
  [17, 14, 1],
  [18, 14, 1],
  [19, 14, 4],
  [20, 16, 4],
  [21, 16, 4],
  [22, 16, 12],
  [23, 18, 12],
  [24, 18, 12],
  [25, 18, 18],
  [26, 20, 18],
  [27, 20, 18],
  [28, 20, 30],
  [29, 30, 30],
  [30, 40, 30],
]

const SelectableBuildingDataSet = BUILDING_UNLOCKS.map(([id, enemyLevelUnlock, playerLevelUnlock]) =>
  makeSkin(id, enemyLevelUnlock, playerLevelUnlock, SkinType.BUILDING, "buildings"),
)

const SelectableFighterDataSet = FIGHTER_UNLOCKS.map(([id, enemyLevelUnlock, playerLevelUnlock]) =>
  makeSkin(id, enemyLevelUnlock, playerLevelUnlock, SkinType.FIGHTER, "fighters"),
)

function makeSkin(id, enemyLevelUnlock, playerLevelUnlock, type, folder) {
  return {
    id,
    enemyLevelUnlock,
    playerLevelUnlock,
    type,
    textureUrl: `${folder}/${id}.svg`,
    ui_textureUrl: `${folder}-ui/${id}.svg`,
  }
}

module.exports = {
  GameColors,
  SkinType,
  UserSelectableColorsSet,
  SelectableColorCss,
  SelectableColorsDataSet,
  SelectableBuildingDataSet,
  SelectableFighterDataSet,
}
