/**
 * Webpack Module #45329
 * @exports BState
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BState = void 0))
  var n = (function () {
    function e(e, t, n) {
      ;((this.buildings = e), (this.groups = t), (this.timestamp = n))
    }
    return (
      (e.prototype.clone = function () {
        return new e(this.buildings, this.groups, this.timestamp)
      }),
      e
    )
  })()
  t.BState = n
}
