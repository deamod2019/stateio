/**
 * Webpack Module #6515
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.optional = undefined))
  var i = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    r = n(47738) /* 47738_Metadata */,
    o = n(99934) /* 99934__mod */
  t.optional = function () {
    return function (e, t, n) {
      var a = new r.Metadata(i.OPTIONAL_TAG, true)
      "number" == typeof n ? o.tagParameter(e, t, n, a) : o.tagProperty(e, t, a)
    }
  }
}
