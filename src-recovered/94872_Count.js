/**
 * Webpack Module #94872
 * @exports Count
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Count = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184))
  t.Count = function (e) {
    var t = e.className,
      n = e.count,
      a = void 0 === n ? 0 : n,
      s = i.__rest(e, ["className", "count"]),
      u = (0, o.default)("count", t)
    return (0, r.jsx)("span", i.__assign({ className: u }, s, { children: a }))
  }
}
