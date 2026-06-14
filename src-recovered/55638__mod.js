/**
 * Webpack Module #55638
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.targetName = void 0))
  var i = n(6867),
    r = n(47738),
    o = n(99934)
  t.targetName = function (e) {
    return function (t, n, a) {
      var s = new r.Metadata(i.NAME_TAG, e)
      o.tagParameter(t, n, a, s)
    }
  }
}
