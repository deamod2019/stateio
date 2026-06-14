/**
 * Webpack Module #55937
 * @exports GameModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GameModule = void 0))
  n(70655)
  var i = n(55132),
    r = n(44656),
    o = n(86178),
    a = n(83430),
    s = n(44025),
    u = (n(93533), n(94766)),
    l = n(37532),
    c = n(86700),
    d = n(57165),
    h = n(59201)
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
