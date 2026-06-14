/**
 * Webpack Module #22674
 * @exports Claim
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Claim = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(86939) /* 86939__mod */
  t.Claim = function (e) {
    var t = e.className,
      n = e.buttonType,
      s = undefined === n ? "primary" : n,
      u = e.type,
      l = e.count,
      c = e.ads,
      d = e.children,
      h = e.shape,
      p = undefined === h ? "oval" : h,
      f = i.__rest(e, ["className", "buttonType", "type", "count", "ads", "children", "shape"]),
      _ = (0, o.default)("claim", t)
    return (0, r.jsxs)(
      a.Button,
      i.__assign({ className: _, shape: p, type: s }, f, {
        children: [
          d,
          u &&
            (0, r.jsxs)(
              "span",
              i.__assign(
                { className: "count-wrap" },
                { children: [(0, r.jsx)(a.Icon, { type: u }), (0, r.jsx)(a.Count, { count: l })] },
              ),
            ),
          c && (0, r.jsx)(a.Icon, { type: "ads" }),
        ],
      }),
    )
  }
}
