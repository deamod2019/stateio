/**
 * Webpack Module #10910
 * @exports ArrowView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ArrowView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(6538) /* 6538_SIDES */,
    a = n(55132) /* 55132__mod */,
    s = 6258909,
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.arrowCont = new o.Container()),
          (t.arrowTip = new o.Graphics()),
          (t.graphics = new o.Graphics().beginFill(s, 0.7).drawRect(0, 0, 20, 20).endFill()),
          t
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.arrowTip.beginFill(s, 0.7).lineTo(-20, 0).lineTo(0, 30).lineTo(20, 0).endFill(),
            this.addChild(this.arrowCont),
            (this.graphics.x = 0.5 * -this.graphics.width),
            this.arrowCont.addChild(this.graphics),
            this.arrowCont.addChild(this.arrowTip),
            e.prototype.onAdded.call(this))
        }),
        (t.prototype.setUpDirection = function (e, t) {
          undefined === t && (t = false)
          var n = this.toLocal(e),
            i = Math.sqrt(n.x * n.x + n.y * n.y)
          ;((this.visible = i > this.arrowTip.height),
            (this.arrowTip.y = this.graphics.height = i - this.arrowTip.height),
            (this.arrowCont.rotation = Math.atan2(n.y, n.x) - Math.PI / 2))
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(a.View)
  t.ArrowView = u
}
