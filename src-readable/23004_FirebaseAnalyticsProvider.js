/**
 * Webpack Module #23004
 * @exports FirebaseAnalyticsProvider
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FirebaseAnalyticsProvider = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(99261) /* 99261__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function () {
      function e() {}
      return (
        (e.prototype.init = function (e) {
          var t = this
          ;(0, r.isSupported)().then(function (n) {
            n && (t.firebaseAnalytics = (0, r.getAnalytics)(e))
          })
        }),
        (e.prototype.track = function (e, t, n) {
          this.logEvent(e, i.__assign({ value: t }, n))
        }),
        (e.prototype.logEvent = function (e, t) {
          this.firebaseAnalytics && (0, r.logEvent)(this.firebaseAnalytics, e, t)
        }),
        (e = i.__decorate([(0, o.injectable)()], e))
      )
    })()
  t.FirebaseAnalyticsProvider = a
}
