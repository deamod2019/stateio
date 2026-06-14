/**
 * Webpack Module #75953
 * @exports ToggleControl
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ToggleControl = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(30396) /* 30396__mod */,
    a = i.__importDefault(n(94184) /* 94184__mod */),
    s = n(8407) /* 8407_Button */
  t.ToggleControl = function (e) {
    var t = i.__read((0, o.useState)(e.value), 2),
      n = t[0],
      u = t[1],
      l = (0, a.default)({ "btn--muted": n }, "btn-icon", "btn-icon__".concat(e.className))
    return (0, r.jsx)(s.Button, {
      className: l,
      shape: "circle",
      onClick: function () {
        ;(u(!n), e.onChange(!n))
      },
    })
  }
}
