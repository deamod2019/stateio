/**
 * Webpack Module #53373
 * @exports AnalyticsTracker
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AnalyticsTracker = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(44656),
    a = n(86700),
    s = (function () {
      function e() {
        ;((this.providers = new Set()), (this._useFb = !0))
      }
      return (
        (e.prototype.init = function () {
          var e = o.di.get(r.TypesCore.gameConfig).analytics
          if (e) {
            var t = e.fb
            e.firebase
            "boolean" == typeof t && (this._useFb = t)
          }
        }),
        (e.prototype.addProvider = function (e) {
          this.providers.add(e)
        }),
        (e.prototype.removeProvider = function (e) {
          this.providers.delete(e)
        }),
        (e.prototype.track = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = i.__read(e, 3),
            r = n[0],
            o = n[1],
            a = n[2]
          ;("object" == typeof o && ((a = o), (o = 0)),
            o || (o = 0),
            r &&
              this.providers.forEach(function (e) {
                return e.track(r, o, a)
              }))
        }),
        (e = i.__decorate([(0, a.injectable)()], e))
      )
    })()
  t.AnalyticsTracker = s
}
