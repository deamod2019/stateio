/**
 * Restored source for Webpack Module #37532.
 *
 * Game UI binding module. The binding topology mirrors the original module,
 * while selected popup targets are wired to restored views.
 */
"use strict"

const { ContainerModule } = require("../core/diRuntime")
const { TypesUI } = require("../core/CoreTypes")
const { PopupType } = require("../core/PopupType")
const { ConfirmPopup } = require("./ConfirmPopup")
const { GiftPopup } = require("./GiftPopup")
const { OfflineEarningsPopup } = require("./OfflineEarningsPopup")
const { LeaderboardScreen } = require("./LeaderboardScreen")
const { SettingsPopup } = require("./SettingsPopup")
const { ShopScreen } = require("./ShopScreen")
const { GamePlayScreen } = require("./GamePlayScreen")
const { StartScreen } = require("./StartScreen")
const { WinStagePopup } = require("./WinStagePopup")
const { LosePopup } = require("./LosePopup")
const { BattleResultsPopup } = require("./BattleResultsPopup")
const { ShareLevelResultPopup } = require("./ShareLevelResultPopup")

const GameUIModule = new ContainerModule((bind) => {
  bind(TypesUI.screen.GAMEPLAY).toConstantValue(GamePlayScreen)
  bind(TypesUI.screen.HOME).toConstantValue(StartScreen)
  bind(TypesUI.screen.LEADERBOARD).toConstantValue(LeaderboardScreen)
  bind(TypesUI.screen.SHOP).toConstantValue(ShopScreen)
  bind(PopupType.WIN_LEVEL).toConstantValue(WinStagePopup)
  bind(PopupType.WIN_STAGE).toConstantValue(WinStagePopup)
  bind(PopupType.BATTLE_RESULTS).toConstantValue(BattleResultsPopup)
  bind(PopupType.LEVEL_COMPLETED).toConstantValue(ShareLevelResultPopup)
  bind(PopupType.SETTINGS).toConstantValue(SettingsPopup)
  bind(PopupType.LOSE).toConstantValue(LosePopup)
  bind(PopupType.CONFIRM).toConstantValue(ConfirmPopup)
  bind(PopupType.GIFT).toConstantValue(GiftPopup)
  bind(PopupType.OFFLINE_EARNINGS).toConstantValue(OfflineEarningsPopup)
})

module.exports = { GameUIModule }
