/**
 * Webpack Module #6248
 * @exports SubmitContextScoreAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SubmitContextScoreAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(94572) /* 94572_GameModel */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(86700) /* 86700_MetadataReader */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e, t, n, a
            return i.__generator(this, function (i) {
              return (
                (e = this.model),
                e.meta,
                (t = e.social),
                (n = e.currentContinent),
                t.context_id &&
                  !t.inSolo &&
                  (null == (a = (0, r.lazyGet)(o.TypesSocial.leaderboardContext)) ||
                    a.submit(t.me.scoreContext + 1, n.getHistory())),
                [2]
              )
            })
          })
        }),
        i.__decorate(
          [
            (0, u.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== a.GameModel && a.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(r.Action)
  t.SubmitContextScoreAction = l
}
