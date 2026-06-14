/**
 * Webpack Module #65743
 * @exports RootMediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.RootMediator = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(6538) /* 6538_SIDES */,
    s = n(59795) /* 59795__mod */,
    u = n(93710) /* 93710_RootView */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.initialize = function () {
          var e = this
          ;((this.view.app = new a.Application(this.getConfig())),
            window.addEventListener("resize", function () {
              return e.onResize()
            }),
            this.view.app.stage.addChild(this.view),
            this.onResize())
        }),
        (t.prototype.getConfig = function () {
          return {
            resolution: window.devicePixelRatio,
            view: document.getElementById(r.CANVAS_ID),
            backgroundColor: u.RootView.BACKGROUND_COLOR,
            antialias: true,
            legacy: true,
          }
        }),
        (t.prototype.onResize = function () {
          var e = this.view.app,
            t = e.view,
            n = t.clientWidth,
            i = t.clientHeight
          ;(e.renderer.resize(n, i), this.view.resize(n, i))
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(s.Mediator)
  t.RootMediator = l
}
