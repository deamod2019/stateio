/**
 * Webpack Module #75953
 * @exports ToggleControl
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ToggleControl = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(30396),
    a = i.__importDefault(n(94184)),
    s = n(8407)
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
