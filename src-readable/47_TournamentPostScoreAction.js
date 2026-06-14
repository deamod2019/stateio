/**
 * Webpack Module #47
 * @exports TournamentPostScoreAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TournamentPostScoreAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(84194) /* 84194__mod */,
    u = n(94572) /* 94572_GameModel */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(86700) /* 86700_MetadataReader */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e
            return i.__generator(this, function (t) {
              return (
                "fb" !== this.social.socialPlatform ||
                  ((e = this.model.currentContinent),
                  FBInstant.tournament.postScoreAsync(e.getTotalScore()).catch(function (e) {
                    return s.log.warn("FBInstant.tournament.postScoreAsync", e)
                  })),
                [2]
              )
            })
          })
        }),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, c.inject)(o.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== a.ISocial && a.ISocial) ? r : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(r.Action)
  t.TournamentPostScoreAction = d
}
