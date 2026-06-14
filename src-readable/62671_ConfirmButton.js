/**
 * Webpack Module #62671
 * @exports ConfirmButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ConfirmButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */),
    u = n(37725) /* 37725__mod */
  t.ConfirmButton = function (e) {
    return (0, r.jsx)(
      "button",
      i.__assign(
        {
          className: (0, s.default)("btn", "btn-green", "confirm-button"),
          onClick: function () {
            e.onClick && ((0, u.playUIClickSound)(), e.onClick())
          },
          type: "button",
        },
        { children: (0, r.jsx)(o.Graphics, { svg: a.confirm_icon, inline: false }) },
      ),
    )
  }
}
