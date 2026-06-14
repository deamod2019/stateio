/**
 * Webpack Module #7161
 * @exports BackButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BackButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */)
  n(89991) /* 89991__mod */
  var u = n(37725) /* 37725__mod */
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
