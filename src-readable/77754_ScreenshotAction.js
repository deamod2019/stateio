/**
 * Webpack Module #77754
 * @exports ScreenshotAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ScreenshotAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6538) /* 6538_SIDES */,
    u = n(32956) /* 32956__mod */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n
            return i.__generator(this, function (i) {
              return (
                (t = this.root.app.renderer),
                e || (e = this.root.app.stage),
                (n = s.RenderTexture.create({ width: 0.5 * e.width, height: 0.5 * e.height })),
                t.render(e, n, false, new s.Matrix(0.5, 0, 0, 0.5)),
                [2, t.extract.base64(new s.Sprite(n), "image/webp")]
              )
            })
          })
        }),
        i.__decorate(
          [(0, a.inject)(r.Types2D.rootView), i.__metadata("design:type", u.RootView)],
          t.prototype,
          "root",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.ScreenshotAction = l
}
