/**
 * Webpack Module #25879
 * @exports Random
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Random = void 0))
  var n = (function () {
    function e() {}
    return (
      (e.rangeFloat = function (e, t) {
        return (void 0 === t && (t = 0), e + Math.random() * (t - e))
      }),
      (e.range = function (t, n) {
        return Math.floor(e.rangeFloat(t, n))
      }),
      (e.bool = function (e) {
        return (void 0 === e && (e = 0.5), Math.random() <= e)
      }),
      (e.sign = function (t) {
        return (void 0 === t && (t = 0.5), e.bool(t) ? 1 : -1)
      }),
      (e.UUID = function (e) {
        return (
          void 0 === e && (e = Date.now()),
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = ((e + 16 * Math.random()) % 16) | 0
            return ((e = Math.floor(e / 16)), ("x" === t ? n : (3 & n) | 8).toString(16))
          })
        )
      }),
      (e.from = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        if (e.length > 1) return e[Math.floor(e.length * Math.random())]
        var n = e[0]
        return Array.isArray(n) ? n[Math.floor(n.length * Math.random())] : n
      }),
      e
    )
  })()
  t.Random = n
}
