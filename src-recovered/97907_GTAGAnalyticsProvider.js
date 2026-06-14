/**
 * Webpack Module #97907
 * @exports GTAGAnalyticsProvider
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GTAGAnalyticsProvider = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function () {
      function e() {}
      return (
        (e.prototype.track = function (e, t, n) {
          gtag && gtag("event", e, n)
        }),
        (e = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.GTAGAnalyticsProvider = o
}
