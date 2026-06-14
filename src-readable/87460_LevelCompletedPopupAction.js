/**
 * Webpack Module #87460
 * @exports LevelCompletedPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelCompletedPopupAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(94572) /* 94572_GameModel */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(30107) /* 30107_PopupType */,
    d = n(86178) /* 86178__mod */,
    h = n(48616) /* 48616__mod */,
    p = n(45724) /* 45724_GenerateShareImageAction */,
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, f
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e,
              t,
              n,
              o,
              a,
              s = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e = this.model.currentContinent.data.id),
                    (t = +this.social.me.scoreSession.toFixed()),
                    ["ya", "vk", "gd"].includes(this.social.socialPlatform)
                      ? ((o = undefined), [3, 3])
                      : [3, 1]
                  )
                case 1:
                  return [4, this.generateImage(e, t)]
                case 2:
                  ;((o = i.sent()), (i.label = 3))
                case 3:
                  return (
                    (n = o),
                    [
                      4,
                      new Promise(function (i) {
                        s.dispatch(l.UIEvents.POPUP, {
                          id: c.PopupType.LEVEL_COMPLETED,
                          props: { levelName: e, points: t, shareImage: n, onContinue: i },
                        })
                      }),
                    ]
                  )
                case 4:
                  return ((a = i.sent()), r.log.debug("LevelCompletedPopupAction shared", a), [2])
              }
            })
          })
        }),
        (t.prototype.generateImage = function (e, t) {
          return i.__awaiter(this, undefined, Promise, function () {
            var e, n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    i.trys.push([0, 2, , 3]),
                    [4, o.di.get(p.GenerateShareImageAction).run({ points: t })]
                  )
                case 1:
                  return ((e = i.sent()), [2, e.image])
                case 2:
                  return ((n = i.sent()), r.log.warn("Image generation failed", n), [3, 3])
                case 3:
                  return [2]
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(d.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (f = undefined !== h.ISocial && h.ISocial) ? f : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.LevelCompletedPopupAction = f
}
