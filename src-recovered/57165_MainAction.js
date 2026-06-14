/**
 * Webpack Module #57165
 * @exports MainAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.MainAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(98931),
    a = n(86178),
    s = n(56792),
    u = n(94572),
    l = n(95781),
    c = n(86700),
    d = n(99629),
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, h
      return (
        i.__extends(t, e),
        (t.prototype.launch = function () {
          var e, t
          return i.__awaiter(this, void 0, void 0, function () {
            var n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = this.social.syncLeaderboards()),
                    null === (e = (0, r.lazyGet)(a.TypesSocial.vibrationManager)) ||
                      void 0 === e ||
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
                      void 0 === t ||
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, c.inject)(a.TypesFlow.LevelStart),
            i.__metadata(
              "design:type",
              "function" == typeof (o = void 0 !== d.LevelStartActionSIO && d.LevelStartActionSIO)
                ? o
                : Object,
            ),
          ],
          t.prototype,
          "levelStart",
          void 0,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (h = void 0 !== s.CookieModel && s.CookieModel) ? h : Object,
            ),
          ],
          t.prototype,
          "cookies",
          void 0,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(o.SocialFlowAction)
  t.MainAction = h
}
