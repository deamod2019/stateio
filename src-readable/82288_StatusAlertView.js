/**
 * Webpack Module #82288
 * @exports StatusAlertView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StatusAlertView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(6400) /* 6400__mod */,
    a = n(84077) /* 84077_StatusAlertContainer */,
    s = i.__importDefault(n(29518) /* 29518_StoreActionTypes */),
    u = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.updateState = function () {
            n.frameId = requestAnimationFrame(function () {
              n.frameId2 = requestAnimationFrame(function () {
                var e = s.default.getState()
                n.setState({ alerts: e })
              })
            })
          }),
          (n.state = { alerts: [] }),
          (n.unsubscribeStore = s.default.subscribe(n.updateState)),
          n
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.componentWillUnmount = function () {
          ;(this.unsubscribeStore && this.unsubscribeStore(),
            window.cancelAnimationFrame(this.frameId),
            window.cancelAnimationFrame(this.frameId2))
        }),
        (t.prototype.render = function () {
          return (0, r.jsx)(a.StatusAlertContainer, { alerts: this.state.alerts })
        }),
        t
      )
    })(o.Component)
  t.StatusAlertView = u
}
