/**
 * Webpack Module #51779
 * @exports StartGameAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartGameAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = n(95781),
    s = n(94572),
    u = n(48616),
    l = n(86178),
    c = n(15872),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, d, h
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.social.showBotPopup()]
                case 1:
                  return (e.sent(), [4, this.levelNext.run()])
                case 2:
                  return (
                    e.sent(),
                    (0, r.lazyGet)(a.TypesGame.actions.bannerControllerGameDistribution),
                    [2]
                  )
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, o.inject)(a.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (d = void 0 !== u.ISocial && u.ISocial) ? d : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (h = void 0 !== c.LevelNextActionSIO && c.LevelNextActionSIO)
                ? h
                : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.StartGameAction = d
}
