/**
 * Webpack Module #45878
 * @exports CancelButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CancelButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */)
  t.CancelButton = function (e) {
    return (0, r.jsx)(
      "button",
      i.__assign(
        { className: (0, s.default)("btn", "btn-red", "cancel-button") },
        e,
        { type: "button" },
        { children: (0, r.jsx)(o.Graphics, { svg: a.cancel_icon, inline: false }) },
      ),
    )
  }
}
