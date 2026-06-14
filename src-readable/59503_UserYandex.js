/**
 * Webpack Module #59503
 * @exports UserYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserYandex = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._isNew = false), (t.lbRecords = []), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.getLbRecord = function (e) {
          return (
            undefined === e && (e = "Scores"),
            this.lbRecords.find(function (t) {
              return t.lb === e
            })
          )
        }),
        (t.prototype.init = function (e, t) {
          return (undefined === t && (t = false), (this.rawData = e), (this._isNew = t), this)
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return (
              ((this.rawData.getUniqueID && this.rawData.getUniqueID()) ||
                (this.rawData.getID && this.rawData.getID())) + ""
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.rawData.getName && this.rawData.getName() + ""
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "photo", {
          get: function () {
            return this.rawData.getPhoto && this.rawData.getPhoto("large") + ""
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "scoreSession", {
          get: function () {
            return this._scores.getScore(a.ScoreType.SESSION) || 0
          },
          set: function (e) {
            this._scores.setScoreSession(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "scoreGlobal", {
          get: function () {
            return this._scores.getScore(a.ScoreType.GLOBAL) || 0
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "scoreContext", {
          get: function () {
            return this._scores.getScore(a.ScoreType.CONTEXT) || 0
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "scores", {
          get: function () {
            return this._scores
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "isNew", {
          get: function () {
            return this._isNew
          },
          enumerable: false,
          configurable: true,
        }),
        i.__decorate(
          [(0, r.inject)(o.TypesSocial.userScore), i.__metadata("design:type", Object)],
          t.prototype,
          "_scores",
          undefined,
        ),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(44656) /* 44656__mod */.EventDispatcher)
  t.UserYandex = s
}
