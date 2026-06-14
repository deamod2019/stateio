/**
 * Webpack Module #25871
 * @exports GameModuleBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GameModuleBase = undefined))
  var i = n(73802) /* 73802__mod */,
    r = n(87195) /* 87195__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(98931) /* 98931__mod */,
    s = n(48616) /* 48616__mod */,
    u = n(86700) /* 86700_MetadataReader */,
    l = n(54261) /* 54261_SetupSentryAction */
  n(14107) /* 14107_DebugModule */
  t.GameModuleBase = new u.ContainerModule(function () {
    ;(o.di.load(o.CoreModule, s.AppModule, r.AudioModule, i.AnalyticsModule, a.GameFlowModule),
      o.di.bind("sentryAction").to(l.SetupSentryAction),
      o.di.bind("template.action").toConstantValue(
        new o.LazyAction(function () {
          var e, t
          ;(null === (e = (0, o.lazyGet)("sentryAction")) || undefined === e || e.run(),
            null === (t = (0, o.lazyGet)("fspMeterAction")) || undefined === t || t.run())
        }),
      ))
  })
}
