/**
 * Webpack Module #66154
 * @exports SelectableFighterDataSet, SelectableBuildingDataSet, SelectableColorsDataSet, SelectableColorCss, UserSelectableColorsSet, SkinType, GameColors
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.SelectableFighterDataSet =
      t.SelectableBuildingDataSet =
      t.SelectableColorsDataSet =
      t.SelectableColorCss =
      t.UserSelectableColorsSet =
      t.SkinType =
      t.GameColors =
        undefined))
  var r,
    o = n(70655) /* 70655__mod */,
    a = n(36596) /* 36596_PlayerType */,
    s = ["#4BB4F8", "#33698D"],
    u = ["#F53514", "#77160D"]
  ;((t.GameColors = {
    players:
      ((i = {}),
      (i[a.PlayerType.Default] = ["#4BB4F8", "#33698D"]),
      (i[a.PlayerType.First] = s),
      (i[a.PlayerType.Second] = u),
      (i[a.PlayerType.Third] = ["#59D267", "#1E7824"]),
      (i[a.PlayerType.Fourth] = ["#A563F2", "#501E84"]),
      (i[a.PlayerType.Fifth] = ["#EE3B82", "#680443"]),
      (i[a.PlayerType.Sixth] = ["#30CFAF", "#066056"]),
      (i[a.PlayerType.Seventh] = ["#F8AE20", "#895E0B"]),
      (i[a.PlayerType.Eighth] = ["#BAAB2A", "#323B0E"]),
      (i[a.PlayerType.Nine] = ["#DC6CC5", "#5F297D"]),
      (i[a.PlayerType.Neutral] = ["#A2A2A2", "#1C1C1C", "#ffffff"]),
      i),
    aims: { allied: ["#4ab4f9", 0.298], enemy: ["#f43514", 0.298] },
  }),
    (function (e) {
      ;((e.BUILDING = "SkinType.BUILDING"),
        (e.FIGHTER = "SkinType.FIGHTER"),
        (e.COLOR = "SkinType.COLOR"))
    })((r = t.SkinType || (t.SkinType = {}))))
  var l,
    c = function (e, t) {
      return t + e.toString() + ".svg"
    }
  ;(!(function (e) {
    ;((e.BLUE = "UserSelectableColorsSet.BLUE"), (e.RED = "UserSelectableColorsSet.RED"))
  })((l = t.UserSelectableColorsSet || (t.UserSelectableColorsSet = {}))),
    (t.SelectableColorCss = [
      { id: l.BLUE, className: "skins-blue-color-set" },
      { id: l.RED, className: "skins-red-color-set" },
    ]),
    (t.SelectableColorsDataSet = [
      { id: l.BLUE, data: s },
      { id: l.RED, data: u },
    ]),
    (t.SelectableBuildingDataSet = [
      { id: 1, enemyLevelUnlock: 1, playerLevelUnlock: 1 },
      { id: 2, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 3, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 4, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 5, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 6, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 7, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 8, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 9, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 10, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 11, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 12, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 13, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 14, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 15, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 16, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 17, enemyLevelUnlock: 14, playerLevelUnlock: 1 },
      { id: 18, enemyLevelUnlock: 14, playerLevelUnlock: 1 },
      { id: 19, enemyLevelUnlock: 14, playerLevelUnlock: 10 },
      { id: 20, enemyLevelUnlock: 16, playerLevelUnlock: 10 },
      { id: 21, enemyLevelUnlock: 16, playerLevelUnlock: 10 },
      { id: 22, enemyLevelUnlock: 16, playerLevelUnlock: 14 },
      { id: 23, enemyLevelUnlock: 18, playerLevelUnlock: 14 },
      { id: 24, enemyLevelUnlock: 18, playerLevelUnlock: 14 },
      { id: 25, enemyLevelUnlock: 18, playerLevelUnlock: 18 },
      { id: 26, enemyLevelUnlock: 20, playerLevelUnlock: 18 },
      { id: 27, enemyLevelUnlock: 20, playerLevelUnlock: 18 },
      { id: 28, enemyLevelUnlock: 20, playerLevelUnlock: 20 },
      { id: 29, enemyLevelUnlock: 22, playerLevelUnlock: 20 },
      { id: 30, enemyLevelUnlock: 22, playerLevelUnlock: 20 },
      { id: 31, enemyLevelUnlock: 22, playerLevelUnlock: 24 },
      { id: 32, enemyLevelUnlock: 24, playerLevelUnlock: 24 },
      { id: 33, enemyLevelUnlock: 24, playerLevelUnlock: 24 },
    ].map(function (e) {
      return o.__assign(o.__assign({}, e), {
        type: r.BUILDING,
        textureUrl: c(e.id, "buildings/"),
        ui_textureUrl: c(e.id, "buildings-ui/"),
      })
    })),
    (t.SelectableFighterDataSet = [
      { id: 1, enemyLevelUnlock: 1, playerLevelUnlock: 1 },
      { id: 2, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 3, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 4, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 5, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 6, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 7, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 8, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 9, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 10, enemyLevelUnlock: 8, playerLevelUnlock: 1 },
      { id: 11, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 12, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 13, enemyLevelUnlock: 10, playerLevelUnlock: 1 },
      { id: 14, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 15, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 16, enemyLevelUnlock: 12, playerLevelUnlock: 1 },
      { id: 17, enemyLevelUnlock: 14, playerLevelUnlock: 1 },
      { id: 18, enemyLevelUnlock: 14, playerLevelUnlock: 1 },
      { id: 19, enemyLevelUnlock: 14, playerLevelUnlock: 4 },
      { id: 20, enemyLevelUnlock: 16, playerLevelUnlock: 4 },
      { id: 21, enemyLevelUnlock: 16, playerLevelUnlock: 4 },
      { id: 22, enemyLevelUnlock: 16, playerLevelUnlock: 12 },
      { id: 23, enemyLevelUnlock: 18, playerLevelUnlock: 12 },
      { id: 24, enemyLevelUnlock: 18, playerLevelUnlock: 12 },
      { id: 25, enemyLevelUnlock: 18, playerLevelUnlock: 18 },
      { id: 26, enemyLevelUnlock: 20, playerLevelUnlock: 18 },
      { id: 27, enemyLevelUnlock: 20, playerLevelUnlock: 18 },
      { id: 28, enemyLevelUnlock: 20, playerLevelUnlock: 30 },
      { id: 29, enemyLevelUnlock: 30, playerLevelUnlock: 30 },
      { id: 30, enemyLevelUnlock: 40, playerLevelUnlock: 30 },
    ].map(function (e) {
      return o.__assign(o.__assign({}, e), {
        type: r.FIGHTER,
        textureUrl: c(e.id, "fighters/"),
        ui_textureUrl: c(e.id, "fighters-ui/"),
      })
    })))
}
