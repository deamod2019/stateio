/**
 * Webpack Module #76702
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.useInjection = undefined))
  var i = n(30396) /* 30396__mod */,
    r = n(83430) /* 83430_InversifyContext */
  t.useInjection = function (e, t) {
    return (undefined === t && (t = false), (0, i.useContext)(r.InversifyContext).get(e))
  }
}
