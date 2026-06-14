/**
 * Webpack Module #94872
 * @exports Count
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Count = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */)
  t.Count = function (e) {
    var t = e.className,
      n = e.count,
      a = undefined === n ? 0 : n,
      s = i.__rest(e, ["className", "count"]),
      u = (0, o.default)("count", t)
    return (0, r.jsx)("span", i.__assign({ className: u }, s, { children: a }))
  }
}
