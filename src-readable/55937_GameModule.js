/**
 * Webpack Module #55937
 * @exports GameModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GameModule = undefined))
  n(70655) /* 70655__mod */
  var i = n(55132) /* 55132__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(83430) /* 83430_InversifyContext */,
    s = n(44025) /* 44025_NAStartSIO */,
    u = (n(93533) /* 93533_ShareActionOk */, n(94766) /* 94766_SIOPreloadAssetsAction */),
    l = n(37532) /* 37532_GameUIModule */,
    c = n(86700) /* 86700_MetadataReader */,
    d = n(57165) /* 57165_MainAction */,
    h = n(59201) /* 59201_CoreGameModule */
  t.GameModule = new c.ContainerModule(function (e, t, n, c) {
    ;(r.di.load(i.PIXIUIModule),
      r.di.load(a.HTMLUIModule),
      r.di.load(h.CoreGameModule),
      r.di.load(l.GameUIModule),
      n(o.TypesNotification.start) && c(o.TypesNotification.start).to(s.NAStartSIO),
      e(o.TypesFlow.assetsPreload).to(u.SIOPreloadAssetsAction),
      e(o.TypesFlow.mainAction).to(d.MainAction))
  })
}
