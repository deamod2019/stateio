/**
 * Webpack Module #35567
 * @exports EndScreenAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.EndScreenAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            undefined === e && (e = false),
            i.__awaiter(this, undefined, undefined, function () {
              var t = this
              return i.__generator(this, function (n) {
                return (
                  this.social.inGroup
                    ? this.dispatch(o.TypesUI.events.SCREEN_CHANGED, {
                        id: o.TypesUI.screen.LEADERBOARD,
                        props: {
                          users: this.social.contextPlayers,
                          scoreType: a.ScoreType.CONTEXT,
                          overlay: false,
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
                              : undefined,
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
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", r.Action)],
          t.prototype,
          "levelStart",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.Action)
  t.EndScreenAction = u
}
