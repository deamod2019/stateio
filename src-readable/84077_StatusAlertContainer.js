/**
 * Webpack Module #84077
 * @exports StatusAlertContainer
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StatusAlertContainer = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(6400) /* 6400__mod */,
    a = n(95252) /* 95252_StatusAlertItem */,
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
