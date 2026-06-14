/**
 * Webpack Module #16465
 * @exports ScreenShotActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ScreenShotActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(55132) /* 55132__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(6538) /* 6538_SIDES */,
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
            r = undefined === n ? 0.5 : n
          return i.__awaiter(this, undefined, Promise, function () {
            var e, n, o, a
            return i.__generator(this, function (i) {
              return (
                (e = this.root.app.renderer),
                t || (t = this.root.app.stage),
                (n = u.RenderTexture.create({ width: t.width * r, height: t.height * r })),
                e.render(t, n, false, new u.Matrix(r, 0, 0, r)),
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
              "function" == typeof (n = undefined !== o.RootView && o.RootView) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(a.Action)
  t.ScreenShotActionSIO = l
}
