/**
 * Webpack Module #55960
 * @exports Score
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Score = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(37909)
  t.Score = function (e) {
    var t = e.className,
      n = e.icon,
      s = e.children,
      u = i.__rest(e, ["className", "icon", "children"]),
      l = (0, o.default)("score", t),
      c =
        n &&
        (function (e) {
          return "string" == typeof e ? (0, r.jsx)(a.Icon, { type: e, width: 35, height: 35 }) : e
        })(n)
    return (0, r.jsxs)(
      "span",
      i.__assign({ className: l }, u, {
        children: [
          c,
          (0, r.jsx)("span", i.__assign({ className: "score-content" }, { children: s })),
        ],
      }),
    )
  }
}
