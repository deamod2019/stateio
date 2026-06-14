/**
 * Webpack Module #37532
 * @exports GameUIModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GameUIModule = undefined))
  var i = n(86700) /* 86700_MetadataReader */,
    r = n(86178) /* 86178__mod */,
    o = n(95622) /* 95622_GamePlayScreen */,
    a = n(96648) /* 96648_StartScreen */,
    s = n(46696) /* 46696_WinStagePopup */,
    u = n(53841) /* 53841_LosePopup */,
    l = n(30107) /* 30107_PopupType */,
    c = n(56532) /* 56532_ConfirmPopup */,
    d = n(56184) /* 56184_GiftPopup */,
    h = n(96126) /* 96126_OfflineEarningsPopup */,
    p = n(2906) /* 2906_LeaderboardScreen */,
    f = n(78199) /* 78199_BattleResultsPopup */,
    _ = n(8189) /* 8189_ShareLevelResultPopup */,
    g = n(47277) /* 47277_SettingsPopup */,
    m = n(76742) /* 76742_ShopScreen */
  t.GameUIModule = new i.ContainerModule(function (e, t, n, i) {
    ;(e(r.TypesUI.screen.GAMEPLAY).toConstantValue(o.GamePlayScreen),
      e(r.TypesUI.screen.HOME).toConstantValue(a.StartScreen),
      e(r.TypesUI.screen.LEADERBOARD).toConstantValue(p.LeaderboardScreen),
      e(r.TypesUI.screen.SHOP).toConstantValue(m.ShopScreen),
      e(l.PopupType.WIN_LEVEL).toConstantValue(s.WinStagePopup),
      e(l.PopupType.WIN_STAGE).toConstantValue(s.WinStagePopup),
      e(l.PopupType.BATTLE_RESULTS).toConstantValue(f.BattleResultsPopup),
      e(l.PopupType.LEVEL_COMPLETED).toConstantValue(_.ShareLevelResultPopup),
      e(l.PopupType.SETTINGS).toConstantValue(g.SettingsPopup),
      e(l.PopupType.LOSE).toConstantValue(u.LosePopup),
      e(l.PopupType.CONFIRM).toConstantValue(c.ConfirmPopup),
      e(l.PopupType.GIFT).toConstantValue(d.GiftPopup),
      e(l.PopupType.OFFLINE_EARNINGS).toConstantValue(h.OfflineEarningsPopup))
  })
}
