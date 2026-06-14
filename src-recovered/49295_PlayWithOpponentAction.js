/**
 * Webpack Module #49295
 * @exports PlayWithOpponentAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlayWithOpponentAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(86700),
    u = n(98931),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.social.playWith(e, !0)]
                case 1:
                  return t.sent() !== a.SOCIAL_POPUP.ACCEPTED ? [3, 3] : [4, this.levelStart.run()]
                case 2:
                  ;(t.sent(), (t.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        }),
        i.__decorate(
          [(0, s.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", u.LevelStartAction)],
          t.prototype,
          "levelStart",
          void 0,
        ),
        t
      )
    })(r.Action)
  t.PlayWithOpponentAction = l
}
