/**
 * Webpack Module #93599
 * @exports TournamentShareAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TournamentShareAction = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(44656),
    a = n(86700),
    s = n(95781),
    u = n(94572),
    l = n(86178),
    c = n(48616),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return "fb" !== this.social.socialPlatform
                    ? [2, !1]
                    : ((e = this.model.currentContinent),
                      [
                        4,
                        FBInstant.tournament
                          .shareAsync({ score: e.getTotalScore(), data: e.getHistory() })
                          .then(function () {
                            return !0
                          })
                          .catch(function (e) {
                            return (r.log.warn("FBInstant.tournament.createAsync", e), !1)
                          }),
                      ])
                case 1:
                  return [2, t.sent()]
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.model),
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
            (0, a.inject)(l.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (o = void 0 !== c.ISocial && c.ISocial) ? o : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.TournamentShareAction = d
}
