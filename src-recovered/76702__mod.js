/**
 * Webpack Module #76702
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.useInjection = void 0))
  var i = n(30396),
    r = n(83430)
  t.useInjection = function (e, t) {
    return (void 0 === t && (t = !1), (0, i.useContext)(r.InversifyContext).get(e))
  }
}
