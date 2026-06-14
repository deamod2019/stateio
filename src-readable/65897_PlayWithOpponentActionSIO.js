/**
 * Webpack Module #65897
 * @exports PlayWithOpponentActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PlayWithOpponentActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(98931) /* 98931__mod */,
    o = n(48616) /* 48616__mod */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(94572) /* 94572_GameModel */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, Promise, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.social.playWith(e, false)]
                case 1:
                  return t.sent() !== o.SOCIAL_POPUP.ACCEPTED ? [3, 3] : [4, this.levelStart.run()]
                case 2:
                  ;(t.sent(), this.model.startStage(), (t.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, s.inject)(a.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        t
      )
    })(r.PlayWithOpponentAction)
  t.PlayWithOpponentActionSIO = l
}
