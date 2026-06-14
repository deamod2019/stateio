/**
 * Webpack Module #89286
 * @exports GameModuleYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GameModuleYandex = undefined))
  var i = n(44656) /* 44656__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(14562) /* 14562_SocialModuleYandex */,
    s = n(9045) /* 9045_AdsModuleYandex */,
    u = n(90190) /* 90190_AuthYandexAction */,
    l = n(48616) /* 48616__mod */,
    c = n(5962) /* 5962__mod */
  t.GameModuleYandex = new o.ContainerModule(function () {
    ;(i.di.load(l.AdsModule),
      i.di.load(s.AdsModuleYandex, a.SocialModuleYandex, c.CrossPromoModule),
      i.di.bind(r.TypesApp.authAction).to(u.AuthYandexAction))
  })
}
