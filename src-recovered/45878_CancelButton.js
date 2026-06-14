/**
 * Webpack Module #45878
 * @exports CancelButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CancelButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(36622),
    s = i.__importDefault(n(94184))
  t.CancelButton = function (e) {
    return (0, r.jsx)(
      "button",
      i.__assign(
        { className: (0, s.default)("btn", "btn-red", "cancel-button") },
        e,
        { type: "button" },
        { children: (0, r.jsx)(o.Graphics, { svg: a.cancel_icon, inline: !1 }) },
      ),
    )
  }
}
