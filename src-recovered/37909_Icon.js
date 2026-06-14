/**
 * Webpack Module #37909
 * @exports Icon
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Icon = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(56959)
  t.Icon = function (e) {
    var t = e.type,
      n = i.__rest(e, ["type"]),
      a = o.iconsMap.get(t)
    return (0, r.jsx)(a, i.__assign({}, n))
  }
}
