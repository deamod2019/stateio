/**
 * Webpack Module #7390
 * @exports LevelEndActionSIOYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelEndActionSIOYandex = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(24294),
    a = n(86178),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.submitScore = function () {
          var e, t
          return i.__awaiter(this, void 0, Promise, function () {
            var n, r, o
            return i.__generator(this, function (i) {
              return (
                (n = this.model.currentContinent),
                (this.social.me.scoreSession = n.getTotalScore()),
                this.social.inSolo &&
                  ((r = this.model.absoluteLevelNum),
                  (o = n.data.id),
                  null === (e = this.leaderboardContext) ||
                    void 0 === e ||
                    e.submit(r, { continent: o }),
                  void 0 !== this.social.userAuthorized &&
                    this.social.userAuthorized &&
                    (null === (t = this.leaderboardGlobal) ||
                      void 0 === t ||
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
          void 0,
        ),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(o.LevelEndActionSIO)
  t.LevelEndActionSIOYandex = s
}
