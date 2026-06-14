/**
 * Webpack Module #49083
 * @exports BaseScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BaseScreen = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.fadeIn = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, Promise.resolve(undefined)]
            })
          })
        }),
        (t.prototype.fadeOut = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, Promise.resolve(undefined)]
            })
          })
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795) /* 59795__mod */.View)
  t.BaseScreen = o
}
