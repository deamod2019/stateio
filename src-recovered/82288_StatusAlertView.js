/**
 * Webpack Module #82288
 * @exports StatusAlertView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StatusAlertView = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(6400),
    a = n(84077),
    s = i.__importDefault(n(29518)),
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
