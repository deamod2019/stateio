/**
 * Webpack Module #70600
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.multiBindToService = void 0))
  t.multiBindToService = function (e) {
    return function (t) {
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return n.forEach(function (n) {
          return e.bind(n).toService(t)
        })
      }
    }
  }
}
