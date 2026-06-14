/**
 * Webpack Module #25871
 * @exports GameModuleBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GameModuleBase = void 0))
  var i = n(73802),
    r = n(87195),
    o = n(44656),
    a = n(98931),
    s = n(48616),
    u = n(86700),
    l = n(54261)
  n(14107)
  t.GameModuleBase = new u.ContainerModule(function () {
    ;(o.di.load(o.CoreModule, s.AppModule, r.AudioModule, i.AnalyticsModule, a.GameFlowModule),
      o.di.bind("sentryAction").to(l.SetupSentryAction),
      o.di.bind("template.action").toConstantValue(
        new o.LazyAction(function () {
          var e, t
          ;(null === (e = (0, o.lazyGet)("sentryAction")) || void 0 === e || e.run(),
            null === (t = (0, o.lazyGet)("fspMeterAction")) || void 0 === t || t.run())
        }),
      ))
  })
}
