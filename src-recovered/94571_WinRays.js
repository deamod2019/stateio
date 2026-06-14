/**
 * Webpack Module #94571
 * @exports WinRays
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.WinRays = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(36622),
    a = i.__importDefault(n(94184))
  t.WinRays = function () {
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, a.default)("popup__win-rays") },
        { children: (0, r.jsx)(o.SVG.WinRays, {}) },
      ),
    )
  }
}
