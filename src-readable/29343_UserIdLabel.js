/**
 * Webpack Module #29343
 * @exports UserIdLabel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserIdLabel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */
  n(9356) /* 9356__mod */
  var a = n(86178) /* 86178__mod */
  t.UserIdLabel = function () {
    var e = (0, o.useInjection)(a.TypesSocial.model)
    return (0, r.jsx)(
      "div",
      i.__assign({ className: "user-id-label" }, { children: "user id: ".concat(e.me.id) }),
    )
  }
}
