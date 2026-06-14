/**
 * Webpack Module #15872
 * @exports LevelNextActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelNextActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(98931) /* 98931__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(94572) /* 94572_GameModel */,
    l = n(65370) /* 65370_GameState */,
    c = n(95781) /* 95781_TypesGame */,
    d = n(86700) /* 86700_MetadataReader */,
    h = n(48616) /* 48616__mod */,
    p = n(196) /* 196_DestroyFieldAction */,
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.gotoNextLevel = function (e) {
          return (
            undefined === e && (e = false),
            i.__awaiter(this, undefined, undefined, function () {
              var t = this
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (this.levelStart.waitForContextChange = e),
                      this.model.cookie.syncTime(),
                      this.model.gotoNextLevelStage() ? (this.model.startStage(), [3, 4]) : [3, 1]
                    )
                  case 1:
                    return [4, r.di.get(p.DestroyFieldAction).run()]
                  case 2:
                    return (n.sent(), [4, this.levelStart.run()])
                  case 3:
                    ;(n.sent(), (n.label = 4))
                  case 4:
                    return (
                      new Promise(function (e) {
                        return t.social.once(h.SocialEvents.CONTEXT_CHANGE, e)
                      }).then(function () {
                        if (t.model.state === l.GameState.GAMEPLAY) {
                          var e = t.model.getAssociatedUsers()
                          t.dispatch(s.UIEvents.SCREEN_CHANGED, {
                            id: a.TypesUI.screen.GAMEPLAY,
                            props: { participants: e },
                          })
                        }
                      }),
                      [2]
                    )
                }
              })
            })
          )
        }),
        (t.prototype.playNextSolo = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, this.gotoNextLevel()]
            })
          })
        }),
        i.__decorate(
          [
            (0, d.inject)(c.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(o.LevelNextAction)
  t.LevelNextActionSIO = f
}
