/**
 * Webpack Module #84077
 * @exports StatusAlertContainer
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StatusAlertContainer = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(6400),
    a = n(95252),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.render = function () {
          return (0, r.jsx)(
            "div",
            i.__assign(
              { className: "status-alerts-wrapper" },
              {
                children: this.props.alerts.map(function (e) {
                  return (0, r.jsx)(a.StatusAlertItem, { alert: e }, e.id)
                }),
              },
            ),
          )
        }),
        t
      )
    })(o.Component)
  t.StatusAlertContainer = s
}
