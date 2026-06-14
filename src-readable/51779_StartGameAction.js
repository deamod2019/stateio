/**
 * Webpack Module #51779
 * @exports StartGameAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StartGameAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(94572) /* 94572_GameModel */,
    u = n(48616) /* 48616__mod */,
    l = n(86178) /* 86178__mod */,
    c = n(15872) /* 15872_LevelNextActionSIO */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, d, h
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
              "function" == typeof (n = undefined !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (d = undefined !== u.ISocial && u.ISocial) ? d : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (h = undefined !== c.LevelNextActionSIO && c.LevelNextActionSIO)
                ? h
                : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          undefined,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.StartGameAction = d
}
