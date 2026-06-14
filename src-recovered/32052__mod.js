/**
 * Webpack Module #32052
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.tagged = void 0))
  var i = n(47738),
    r = n(99934)
  t.tagged = function (e, t) {
    return function (n, o, a) {
      var s = new i.Metadata(e, t)
      "number" == typeof a ? r.tagParameter(n, o, a, s) : r.tagProperty(n, o, s)
    }
  }
}
