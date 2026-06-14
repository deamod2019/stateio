/**
 * Webpack Module #6846
 * @exports ScreenContainer
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ScreenContainer = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.size = {}), t)
      }
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "screen", {
          get: function () {
            return this._screen
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setScreen = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t,
              n = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = this._screen),
                    (this._screen = e),
                    this._screen && this.addChild(this._screen),
                    this.onResize(),
                    [
                      4,
                      Promise.all([
                        (null == t ? void 0 : t.fadeOut) && t.fadeOut(),
                        (null == e ? void 0 : e.fadeIn) && e.fadeIn(),
                      ]).then(function () {
                        return t && n.removeChild(t)
                      }),
                    ]
                  )
                case 1:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.onResize = function () {
          this._screen &&
            this._screen.resize &&
            this._screen.resize(this.size.width, this.size.height)
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795).View)
  t.ScreenContainer = o
}
