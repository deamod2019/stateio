/**
 * Webpack Module #15872
 * @exports LevelNextActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelNextActionSIO = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(98931),
    a = n(86178),
    s = n(83430),
    u = n(94572),
    l = n(65370),
    c = n(95781),
    d = n(86700),
    h = n(48616),
    p = n(196),
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.gotoNextLevel = function (e) {
          return (
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
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
          return i.__awaiter(this, void 0, void 0, function () {
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(o.LevelNextAction)
  t.LevelNextActionSIO = f
}
