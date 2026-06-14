/**
 * Webpack Module #56612
 * @exports Winner
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Winner = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(36622),
    s = i.__importDefault(n(94184))
  n(44097)
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
