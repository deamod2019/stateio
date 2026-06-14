/**
 * Webpack Module #49083
 * @exports BaseScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BaseScreen = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.fadeIn = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, Promise.resolve(void 0)]
            })
          })
        }),
        (t.prototype.fadeOut = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, Promise.resolve(void 0)]
            })
          })
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795).View)
  t.BaseScreen = o
}
