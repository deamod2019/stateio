/**
 * Webpack Module #20119
 * @exports RootMediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.RootMediator = void 0))
  var i = n(70655),
    r = n(55132),
    o = n(86700),
    a = n(47283),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.getConfig = function () {
          return i.__assign(i.__assign({}, e.prototype.getConfig.call(this)), {
            backgroundColor: 13684944,
          })
        }),
        (t.prototype.onResize = function () {
          e.prototype.onResize.call(this)
          var t = this.view.app
          this.dispatch(a.GameEvents.RESIZE, {
            width: t.view.clientWidth,
            height: t.view.clientHeight,
          })
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.RootMediator)
  t.RootMediator = s
}
