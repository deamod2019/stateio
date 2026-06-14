/**
 * Webpack Module #57103
 * @exports WinStars
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.WinStars = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(36622),
    a = i.__importDefault(n(94184))
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
