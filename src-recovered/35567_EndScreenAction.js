/**
 * Webpack Module #35567
 * @exports EndScreenAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.EndScreenAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(86700),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
              var t = this
              return i.__generator(this, function (n) {
                return (
                  this.social.inGroup
                    ? this.dispatch(o.TypesUI.events.SCREEN_CHANGED, {
                        id: o.TypesUI.screen.LEADERBOARD,
                        props: {
                          users: this.social.contextPlayers,
                          scoreType: a.ScoreType.CONTEXT,
                          overlay: !1,
                          onClose: function () {
                            return t.levelStart.run()
                          },
                        },
                      })
                    : e
                      ? this.dispatch(o.TypesUI.events.SCREEN_CHANGED, {
                          id: o.TypesUI.screen.WIN,
                          props: {
                            opponent: this.social.opponent,
                            nextMatch: this.social.getRandomOpponent(),
                          },
                        })
                      : this.dispatch(o.TypesUI.events.SCREEN_CHANGED, {
                          id: o.TypesUI.screen.GAME_OVER,
                          props: {
                            opponent: this.social.opponent,
                            nextMatch: this.social.inSolo
                              ? this.social.getRandomOpponent()
                              : void 0,
                          },
                        }),
                  [2]
                )
              })
            })
          )
        }),
        i.__decorate(
          [(0, s.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", r.Action)],
          t.prototype,
          "levelStart",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.Action)
  t.EndScreenAction = u
}
