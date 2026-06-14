/**
 * Webpack Module #49295
 * @exports PlayWithOpponentAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PlayWithOpponentAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(98931) /* 98931__mod */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.social.playWith(e, true)]
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
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", u.LevelStartAction)],
          t.prototype,
          "levelStart",
          undefined,
        ),
        t
      )
    })(r.Action)
  t.PlayWithOpponentAction = l
}
