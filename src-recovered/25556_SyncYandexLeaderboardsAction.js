/**
 * Webpack Module #25556
 * @exports SyncYandexLeaderboardsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SyncYandexLeaderboardsAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e, t, n, a, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e = !1),
                    (t = this.social.me.scoreGlobal),
                    this.social.authorizeUser ? [4, this.social.authorizeUser()] : [3, 5]
                  )
                case 1:
                  return (
                    (n = i.sent()),
                    (a = this.social.me.scoreSession),
                    n ? [4, this.social.syncLeaderboards()] : [3, 5]
                  )
                case 2:
                  return (
                    i.sent(),
                    (s = this.social.me.scoreGlobal),
                    (u = Math.max(t, a)) > s
                      ? [4, r.di.get(o.TypesSocial.leaderboardGlobal).submit(u)]
                      : [3, 4]
                  )
                case 3:
                  ;(i.sent(), (i.label = 4))
                case 4:
                  ;((e = !0), (i.label = 5))
                case 5:
                  return [2, e]
              }
            })
          })
        }),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.SyncYandexLeaderboardsAction = s
}
