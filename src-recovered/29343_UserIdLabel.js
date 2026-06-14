/**
 * Webpack Module #29343
 * @exports UserIdLabel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UserIdLabel = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430)
  n(9356)
  var a = n(86178)
  t.UserIdLabel = function () {
    var e = (0, o.useInjection)(a.TypesSocial.model)
    return (0, r.jsx)(
      "div",
      i.__assign({ className: "user-id-label" }, { children: "user id: ".concat(e.me.id) }),
    )
  }
}
