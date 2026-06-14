/**
 * Webpack Module #57655
 * @exports SessionData
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SessionData = void 0))
  var n = (function () {
    function e() {
      this.data = { gameSession: NaN, friends: [] }
    }
    return (
      (e.prototype.init = function (e) {
        return (
          (this.data.gameSession = (parseInt(null == e ? void 0 : e.gameSession, 10) || 0) + 1),
          (this.data.friends = (null == e ? void 0 : e.friends) || []),
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
        enumerable: !1,
        configurable: !0,
      }),
      e
    )
  })()
  t.SessionData = n
}
