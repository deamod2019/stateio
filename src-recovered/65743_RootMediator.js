/**
 * Webpack Module #65743
 * @exports RootMediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.RootMediator = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = n(6538),
    s = n(59795),
    u = n(93710),
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
            antialias: !0,
            legacy: !0,
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
