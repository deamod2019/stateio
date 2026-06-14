/**
 * Webpack Module #39887
 * @exports TimeTrack
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TimeTrack = void 0))
  var n = function () {
      return Date.now()
    },
    i = (function () {
      function e(e, t) {
        ;(void 0 === e && (e = 250),
          (this.interval = e),
          (this.onTick = t),
          (this._started = NaN),
          (this._paused = NaN),
          (this._tid = NaN),
          (this._isRunning = !1))
      }
      return (
        Object.defineProperty(e.prototype, "isRunning", {
          get: function () {
            return this._isRunning
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "startTime", {
          get: function () {
            return this._started
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.start = function () {
          ;((this._isRunning = !0), (this._started = n()), this.startTimer())
        }),
        (e.prototype.stop = function () {
          ;((this._isRunning = !1), clearInterval(this._tid))
        }),
        (e.prototype.pause = function () {
          this._isRunning &&
            ((this._paused = n()), clearInterval(this._tid), (this._isRunning = !1))
        }),
        (e.prototype.resume = function () {
          this._isRunning || ((this._started += n() - this._paused), this.start())
        }),
        (e.prototype.getTotalTime = function () {
          return n() - this._started
        }),
        (e.prototype.startTimer = function () {
          var e = this,
            t = function () {
              return e.onTick && e.onTick()
            }
          ;(clearTimeout(this._tid),
            (this._tid = setInterval(function () {
              t()
            }, this.interval)),
            t())
        }),
        e
      )
    })()
  t.TimeTrack = i
}
