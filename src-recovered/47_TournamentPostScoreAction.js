/**
 * Webpack Module #47
 * @exports TournamentPostScoreAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TournamentPostScoreAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(84194),
    u = n(94572),
    l = n(95781),
    c = n(86700),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, c.inject)(o.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (r = void 0 !== a.ISocial && a.ISocial) ? r : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(r.Action)
  t.TournamentPostScoreAction = d
}
