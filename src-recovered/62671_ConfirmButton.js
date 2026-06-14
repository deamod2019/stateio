/**
 * Webpack Module #62671
 * @exports ConfirmButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ConfirmButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(36622),
    s = i.__importDefault(n(94184)),
    u = n(37725)
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
        { children: (0, r.jsx)(o.Graphics, { svg: a.confirm_icon, inline: !1 }) },
      ),
    )
  }
}
