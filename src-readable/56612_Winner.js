/**
 * Webpack Module #56612
 * @exports Winner
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Winner = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */)
  n(44097) /* 44097__mod */
  t.Winner = function (e) {
    var t = e.user,
      n = e.className
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: (0, s.default)("winner-container", n) },
        {
          children: [
            (0, r.jsx)(o.Avatar, { imgPath: t.photo, score: t.scoreSession }),
            (0, r.jsx)(a.SVG.VictoryFraming, {}),
          ],
        },
      ),
    )
  }
}
