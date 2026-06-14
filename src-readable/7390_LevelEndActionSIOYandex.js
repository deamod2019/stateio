/**
 * Webpack Module #7390
 * @exports LevelEndActionSIOYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelEndActionSIOYandex = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(24294) /* 24294_LevelEndActionSIO */,
    a = n(86178) /* 86178__mod */,
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.submitScore = function () {
          var e, t
          return i.__awaiter(this, undefined, Promise, function () {
            var n, r, o
            return i.__generator(this, function (i) {
              return (
                (n = this.model.currentContinent),
                (this.social.me.scoreSession = n.getTotalScore()),
                this.social.inSolo &&
                  ((r = this.model.absoluteLevelNum),
                  (o = n.data.id),
                  null === (e = this.leaderboardContext) ||
                    undefined === e ||
                    e.submit(r, { continent: o }),
                  undefined !== this.social.userAuthorized &&
                    this.social.userAuthorized &&
                    (null === (t = this.leaderboardGlobal) ||
                      undefined === t ||
                      t.submit(r, { continent: o }))),
                [2]
              )
            })
          })
        }),
        i.__decorate(
          [(0, r.inject)(a.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(o.LevelEndActionSIO)
  t.LevelEndActionSIOYandex = s
}
