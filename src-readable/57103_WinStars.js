/**
 * Webpack Module #57103
 * @exports WinStars
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.WinStars = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(36622) /* 36622_SVG */,
    a = i.__importDefault(n(94184) /* 94184__mod */)
  t.WinStars = function () {
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, a.default)("popup__win-stars") },
        { children: (0, r.jsx)(o.SVG.WinStars, {}) },
      ),
    )
  }
}
