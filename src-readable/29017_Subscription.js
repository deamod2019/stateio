/**
 * Webpack Module #29017
 * @exports Subscription
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Subscription = undefined))
  var n = (function () {
    function e(e, t) {
      ;((this.messageType = e), (this.handler = t))
    }
    return (
      (e.prototype.equals = function (e, t) {
        return this.messageType === e && (undefined === t || this.handler === t)
      }),
      e
    )
  })()
  t.Subscription = n
}
