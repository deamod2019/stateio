/**
 * Webpack Module #59503
 * @exports UserYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UserYandex = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(86178),
    a = n(48616),
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._isNew = !1), (t.lbRecords = []), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.getLbRecord = function (e) {
          return (
            void 0 === e && (e = "Scores"),
            this.lbRecords.find(function (t) {
              return t.lb === e
            })
          )
        }),
        (t.prototype.init = function (e, t) {
          return (void 0 === t && (t = !1), (this.rawData = e), (this._isNew = t), this)
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return (
              ((this.rawData.getUniqueID && this.rawData.getUniqueID()) ||
                (this.rawData.getID && this.rawData.getID())) + ""
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.rawData.getName && this.rawData.getName() + ""
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "photo", {
          get: function () {
            return this.rawData.getPhoto && this.rawData.getPhoto("large") + ""
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "scoreSession", {
          get: function () {
            return this._scores.getScore(a.ScoreType.SESSION) || 0
          },
          set: function (e) {
            this._scores.setScoreSession(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "scoreGlobal", {
          get: function () {
            return this._scores.getScore(a.ScoreType.GLOBAL) || 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "scoreContext", {
          get: function () {
            return this._scores.getScore(a.ScoreType.CONTEXT) || 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "scores", {
          get: function () {
            return this._scores
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isNew", {
          get: function () {
            return this._isNew
          },
          enumerable: !1,
          configurable: !0,
        }),
        i.__decorate(
          [(0, r.inject)(o.TypesSocial.userScore), i.__metadata("design:type", Object)],
          t.prototype,
          "_scores",
          void 0,
        ),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(44656).EventDispatcher)
  t.UserYandex = s
}
