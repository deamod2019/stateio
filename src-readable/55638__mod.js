/**
 * Webpack Module #55638
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.targetName = undefined))
  var i = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    r = n(47738) /* 47738_Metadata */,
    o = n(99934) /* 99934__mod */
  t.targetName = function (e) {
    return function (t, n, a) {
      var s = new r.Metadata(i.NAME_TAG, e)
      o.tagParameter(t, n, a, s)
    }
  }
}
