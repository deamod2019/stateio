/**
 * Webpack Module #57655
 * @exports SessionData
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SessionData = undefined))
  var n = (function () {
    function e() {
      this.data = { gameSession: NaN, friends: [] }
    }
    return (
      (e.prototype.init = function (e) {
        return (
          (this.data.gameSession = (parseInt(null == e ? undefined : e.gameSession, 10) || 0) + 1),
          (this.data.friends = (null == e ? undefined : e.friends) || []),
          this.getRawData()
        )
      }),
      (e.prototype.getRawData = function () {
        return this.data
      }),
      Object.defineProperty(e.prototype, "ftue", {
        get: function () {
          return this.data.gameSession <= 1
        },
        enumerable: false,
        configurable: true,
      }),
      e
    )
  })()
  t.SessionData = n
}
