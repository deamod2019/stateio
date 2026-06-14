/**
 * Webpack Module #71693
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.multiInject = void 0))
  var i = n(6867),
    r = n(47738),
    o = n(99934)
  t.multiInject = function (e) {
    return function (t, n, a) {
      var s = new r.Metadata(i.MULTI_INJECT_TAG, e)
      "number" == typeof a ? o.tagParameter(t, n, a, s) : o.tagProperty(t, n, s)
    }
  }
}
