/**
 * Webpack Module #74981
 * @exports AnalyticsModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AnalyticsModule = void 0))
  var i = n(86700),
    r = n(86178),
    o = n(53373)
  t.AnalyticsModule = new i.ContainerModule(function (e) {
    e(r.TypesAnalytics.tracker).to(o.AnalyticsTracker).inSingletonScope()
  })
}
