/**
 * Webpack Module #38085
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.named = void 0))
  var i = n(6867),
    r = n(47738),
    o = n(99934)
  t.named = function (e) {
    return function (t, n, a) {
      var s = new r.Metadata(i.NAMED_TAG, e)
      "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s)
    }
  }
}
