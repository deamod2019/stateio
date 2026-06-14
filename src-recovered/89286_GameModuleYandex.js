/**
 * Webpack Module #89286
 * @exports GameModuleYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GameModuleYandex = void 0))
  var i = n(44656),
    r = n(86178),
    o = n(86700),
    a = n(14562),
    s = n(9045),
    u = n(90190),
    l = n(48616),
    c = n(5962)
  t.GameModuleYandex = new o.ContainerModule(function () {
    ;(i.di.load(l.AdsModule),
      i.di.load(s.AdsModuleYandex, a.SocialModuleYandex, c.CrossPromoModule),
      i.di.bind(r.TypesApp.authAction).to(u.AuthYandexAction))
  })
}
