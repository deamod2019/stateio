/**
 * Webpack Module #55960
 * @exports Score
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Score = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(37909) /* 37909_Icon */
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
