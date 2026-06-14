/**
 * Webpack Module #9045
 * @exports AdsModuleYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdsModuleYandex = void 0))
  var i = n(86178),
    r = n(86700),
    o = n(65021),
    a = n(68047)
  t.AdsModuleYandex = new r.ContainerModule(function (e, t, n, r) {
    ;(r(i.TypesAds.initAction).to(a.InitAdManagerYandexAction),
      r(i.TypesAds.manager).to(o.AdManagerYandex).inSingletonScope())
  })
}
