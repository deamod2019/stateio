/**
 * Webpack Module #37532
 * @exports GameUIModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GameUIModule = void 0))
  var i = n(86700),
    r = n(86178),
    o = n(95622),
    a = n(96648),
    s = n(46696),
    u = n(53841),
    l = n(30107),
    c = n(56532),
    d = n(56184),
    h = n(96126),
    p = n(2906),
    f = n(78199),
    _ = n(8189),
    g = n(47277),
    m = n(76742)
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
