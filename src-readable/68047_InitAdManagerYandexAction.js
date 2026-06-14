/**
 * Webpack Module #68047
 * @exports InitAdManagerYandexAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InitAdManagerYandexAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(48616) /* 48616__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e
            return i.__generator(this, function (t) {
              return ((e = this.page.bus.params.yasdk), this.ads.init(e), [2])
            })
          })
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.InitAdManagerAction)
  t.InitAdManagerYandexAction = a
}
