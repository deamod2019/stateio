/**
 * Webpack Module #10556
 * @exports AdsModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdsModule = void 0))
  var i = n(86700),
    r = n(86178),
    o = n(73018),
    a = n(64122),
    s = n(45301)
  t.AdsModule = new i.ContainerModule(function (e) {
    ;(e(r.TypesAds.adAction).to(s.AdAction),
      e(r.TypesAds.manager).to(o.AdManagerBase).inSingletonScope(),
      e(r.TypesAds.initAction).to(a.InitAdManagerAction))
  })
}
