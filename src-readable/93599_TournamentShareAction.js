/**
 * Webpack Module #93599
 * @exports TournamentShareAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TournamentShareAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(94572) /* 94572_GameModel */,
    l = n(86178) /* 86178__mod */,
    c = n(48616) /* 48616__mod */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return "fb" !== this.social.socialPlatform
                    ? [2, false]
                    : ((e = this.model.currentContinent),
                      [
                        4,
                        FBInstant.tournament
                          .shareAsync({ score: e.getTotalScore(), data: e.getHistory() })
                          .then(function () {
                            return true
                          })
                          .catch(function (e) {
                            return (r.log.warn("FBInstant.tournament.createAsync", e), false)
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
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(l.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (o = undefined !== c.ISocial && c.ISocial) ? o : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.TournamentShareAction = d
}
