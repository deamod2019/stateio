/**
 * Webpack Module #16465
 * @exports ScreenShotActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ScreenShotActionSIO = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(55132),
    a = n(44656),
    s = n(86700),
    u = n(6538),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          var t = e.image,
            n = e.imageScale,
            r = void 0 === n ? 0.5 : n
          return i.__awaiter(this, void 0, Promise, function () {
            var e, n, o, a
            return i.__generator(this, function (i) {
              return (
                (e = this.root.app.renderer),
                t || (t = this.root.app.stage),
                (n = u.RenderTexture.create({ width: t.width * r, height: t.height * r })),
                e.render(t, n, !1, new u.Matrix(r, 0, 0, r)),
                (o = new u.Sprite(n)),
                (a = e.extract.base64(o, "image/webp")),
                u.Texture.removeFromCache(n),
                [2, a]
              )
            })
          })
        }),
        i.__decorate(
          [
            (0, s.inject)(r.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== o.RootView && o.RootView) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(a.Action)
  t.ScreenShotActionSIO = l
}
