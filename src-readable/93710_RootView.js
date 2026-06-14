/**
 * Webpack Module #93710
 * @exports RootView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.RootView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.size = { width: 0, height: 0 }), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.resize = function (e, t, n) {
          ;(undefined === n && (n = false),
            (this.size.width = e),
            (this.size.height = t),
            this.onResize())
        }),
        (t.prototype.onResize = function () {}),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795) /* 59795__mod */.View)
  t.RootView = o
}
