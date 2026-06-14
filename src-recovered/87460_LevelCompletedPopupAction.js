/**
 * Webpack Module #87460
 * @exports LevelCompletedPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelCompletedPopupAction = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(44656),
    a = n(86700),
    s = n(95781),
    u = n(94572),
    l = n(83430),
    c = n(30107),
    d = n(86178),
    h = n(48616),
    p = n(45724),
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, f
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
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
                      ? ((o = void 0), [3, 3])
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
          return i.__awaiter(this, void 0, Promise, function () {
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, a.inject)(d.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (f = void 0 !== h.ISocial && h.ISocial) ? f : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.LevelCompletedPopupAction = f
}
