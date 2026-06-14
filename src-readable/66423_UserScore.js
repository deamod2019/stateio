/**
 * Webpack Module #66423
 * @exports UserScore
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserScore = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(60539) /* 60539__mod */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.setScoreSession = function (e) {
          if (isNaN(e)) this._sessionScore = NaN
          else {
            var t = this._sessionScore || 0
            ;((this._sessionScore = e),
              e >= t && this.emit(o.ScoreEvent.INCREASED),
              this.emit(o.ScoreEvent.UPDATED))
          }
        }),
        (t.prototype.update = function (e, t) {
          ;((this._contextScore = e || this._contextScore),
            (this._globalScore = t || this._globalScore),
            (t || e) && this.emit(o.ScoreEvent.UPDATED))
        }),
        (t.prototype.getScore = function (e) {
          undefined === e && (e = o.ScoreType.SESSION | o.ScoreType.CONTEXT | o.ScoreType.GLOBAL)
          var t = function (e, t) {
              return !!(t & e)
            },
            n = []
          if (
            (t(o.ScoreType.SESSION, e) && n.push(this._sessionScore),
            t(o.ScoreType.CONTEXT, e) &&
              n.push(this._contextScore && this._contextScore.getScore()),
            t(o.ScoreType.GLOBAL, e) && n.push(this._globalScore && this._globalScore.getScore()),
            (n = n.filter(function (e) {
              return !isNaN(e)
            })).length)
          )
            return Math.max.apply(null, n)
        }),
        (t.prototype.getEntry = function (e) {
          switch (e) {
            case o.ScoreType.GLOBAL:
              return this._globalScore
            case o.ScoreType.CONTEXT:
              return this._contextScore
          }
        }),
        (t.prototype.flush = function () {
          ;(delete this._contextScore, delete this._sessionScore)
        }),
        t
      )
    })(r.EventDispatcher)
  t.UserScore = a
}
