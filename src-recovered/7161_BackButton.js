/**
 * Webpack Module #7161
 * @exports BackButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BackButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(36622),
    s = i.__importDefault(n(94184))
  n(89991)
  var u = n(37725)
  t.BackButton = function (e) {
    return (0, r.jsx)(
      o.Button,
      i.__assign(
        {
          className: (0, s.default)("back-button", e.className),
          onClick: function () {
            e.onClick && ((0, u.playUIClickSound)(), e.onClick())
          },
        },
        { children: (0, r.jsx)(a.SVG.BackButton, {}) },
      ),
    )
  }
}
