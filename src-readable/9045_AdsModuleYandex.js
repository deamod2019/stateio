/**
 * Webpack Module #9045
 * @exports AdsModuleYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AdsModuleYandex = undefined))
  var i = n(86178) /* 86178__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(65021) /* 65021_AdManagerYandex */,
    a = n(68047) /* 68047_InitAdManagerYandexAction */
  t.AdsModuleYandex = new r.ContainerModule(function (e, t, n, r) {
    ;(r(i.TypesAds.initAction).to(a.InitAdManagerYandexAction),
      r(i.TypesAds.manager).to(o.AdManagerYandex).inSingletonScope())
  })
}
