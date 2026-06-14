/**
 * Webpack Module #29017
 * @exports Subscription
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Subscription = void 0))
  var n = (function () {
    function e(e, t) {
      ;((this.messageType = e), (this.handler = t))
    }
    return (
      (e.prototype.equals = function (e, t) {
        return this.messageType === e && (void 0 === t || this.handler === t)
      }),
      e
    )
  })()
  t.Subscription = n
}
