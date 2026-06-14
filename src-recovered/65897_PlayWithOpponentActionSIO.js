/**
 * Webpack Module #65897
 * @exports PlayWithOpponentActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlayWithOpponentActionSIO = void 0))
  var i = n(70655),
    r = n(98931),
    o = n(48616),
    a = n(95781),
    s = n(86700),
    u = n(94572),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.social.playWith(e, !1)]
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        t
      )
    })(r.PlayWithOpponentAction)
  t.PlayWithOpponentActionSIO = l
}
