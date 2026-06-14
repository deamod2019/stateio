/**
 * Webpack Module #6515
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.optional = void 0))
  var i = n(6867),
    r = n(47738),
    o = n(99934)
  t.optional = function () {
    return function (e, t, n) {
      var a = new r.Metadata(i.OPTIONAL_TAG, !0)
      "number" == typeof n ? o.tagParameter(e, t, n, a) : o.tagProperty(e, t, a)
    }
  }
}
