/**
 * Webpack Module #93710
 * @exports RootView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.RootView = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.size = { width: 0, height: 0 }), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.resize = function (e, t, n) {
          ;(void 0 === n && (n = !1),
            (this.size.width = e),
            (this.size.height = t),
            this.onResize())
        }),
        (t.prototype.onResize = function () {}),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795).View)
  t.RootView = o
}
