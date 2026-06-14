/**
 * Webpack Module #74981
 * @exports AnalyticsModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AnalyticsModule = undefined))
  var i = n(86700) /* 86700_MetadataReader */,
    r = n(86178) /* 86178__mod */,
    o = n(53373) /* 53373_AnalyticsTracker */
  t.AnalyticsModule = new i.ContainerModule(function (e) {
    e(r.TypesAnalytics.tracker).to(o.AnalyticsTracker).inSingletonScope()
  })
}
