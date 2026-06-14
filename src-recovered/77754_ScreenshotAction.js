/**
 * Webpack Module #77754
 * @exports ScreenshotAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ScreenshotAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(44656),
    a = n(86700),
    s = n(6538),
    u = n(32956),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n
            return i.__generator(this, function (i) {
              return (
                (t = this.root.app.renderer),
                e || (e = this.root.app.stage),
                (n = s.RenderTexture.create({ width: 0.5 * e.width, height: 0.5 * e.height })),
                t.render(e, n, !1, new s.Matrix(0.5, 0, 0, 0.5)),
                [2, t.extract.base64(new s.Sprite(n), "image/webp")]
              )
            })
          })
        }),
        i.__decorate(
          [(0, a.inject)(r.Types2D.rootView), i.__metadata("design:type", u.RootView)],
          t.prototype,
          "root",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.ScreenshotAction = l
}
