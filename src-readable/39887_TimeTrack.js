/**
 * Webpack Module #39887
 * @exports TimeTrack
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TimeTrack = undefined))
  var n = function () {
      return Date.now()
    },
    i = (function () {
      function e(e, t) {
        ;(undefined === e && (e = 250),
          (this.interval = e),
          (this.onTick = t),
          (this._started = NaN),
          (this._paused = NaN),
          (this._tid = NaN),
          (this._isRunning = false))
      }
      return (
        Object.defineProperty(e.prototype, "isRunning", {
          get: function () {
            return this._isRunning
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "startTime", {
          get: function () {
            return this._started
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.start = function () {
          ;((this._isRunning = true), (this._started = n()), this.startTimer())
        }),
        (e.prototype.stop = function () {
          ;((this._isRunning = false), clearInterval(this._tid))
        }),
        (e.prototype.pause = function () {
          this._isRunning &&
            ((this._paused = n()), clearInterval(this._tid), (this._isRunning = false))
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
