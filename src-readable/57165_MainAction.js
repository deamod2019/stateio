/**
 * Webpack Module #57165
 * @exports MainAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.MainAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(98931) /* 98931__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(56792) /* 56792_CookieModel */,
    u = n(94572) /* 94572_GameModel */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(86700) /* 86700_MetadataReader */,
    d = n(99629) /* 99629_LevelStartActionSIO */,
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, h
      return (
        i.__extends(t, e),
        (t.prototype.launch = function () {
          var e, t
          return i.__awaiter(this, undefined, undefined, function () {
            var n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = this.social.syncLeaderboards()),
                    null === (e = (0, r.lazyGet)(a.TypesSocial.vibrationManager)) ||
                      undefined === e ||
                      e.init(),
                    [4, this.cookies.sync()]
                  )
                case 1:
                  return (i.sent(), this.social.inSolo ? [3, 3] : [4, n])
                case 2:
                  ;(i.sent(), (i.label = 3))
                case 3:
                  return (
                    null === (t = (0, r.lazyGet)(l.TypesGame.skinManager)) ||
                      undefined === t ||
                      t.updateSkins(),
                    [4, this.levelStart.run()]
                  )
                case 4:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.model),
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
            (0, c.inject)(a.TypesFlow.LevelStart),
            i.__metadata(
              "design:type",
              "function" == typeof (o = undefined !== d.LevelStartActionSIO && d.LevelStartActionSIO)
                ? o
                : Object,
            ),
          ],
          t.prototype,
          "levelStart",
          undefined,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (h = undefined !== s.CookieModel && s.CookieModel) ? h : Object,
            ),
          ],
          t.prototype,
          "cookies",
          undefined,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(o.SocialFlowAction)
  t.MainAction = h
}
