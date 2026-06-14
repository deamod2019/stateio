/**
 * Webpack Module #68878
 * @exports Spinner
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Spinner = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(25317) /* 25317_SteppedEase */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6538) /* 6538_SIDES */,
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.spinning = false), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.graphics.scale.set(0.7),
            this.graphics.anchor.set(0.5),
            (this.graphics.visible = false),
            this.addChild(this.graphics),
            e.prototype.onAdded.call(this))
        }),
        (t.prototype.show = function () {
          ;((this.graphics.visible = true),
            clearTimeout(this.timeout),
            o.gsap.killTweensOf(this.graphics),
            o.gsap.fromTo(
              this.graphics,
              { alpha: 0 },
              { alpha: 1, duration: 0.5, delay: 1, ease: o.Sine.easeOut },
            ),
            (this.spinning = true),
            this.spin())
        }),
        (t.prototype.hide = function () {
          var e = this
          this.spinning &&
            (o.gsap.killTweensOf(this.graphics),
            o.gsap.to(this.graphics, {
              alpha: 0,
              duration: 0.2,
              ease: o.Sine.easeIn,
              onComplete: function () {
                ;((e.spinning = false), (e.graphics.visible = false), clearTimeout(e.timeout))
              },
            }))
        }),
        (t.prototype.spin = function () {
          var e = this
          this.spinning &&
            ((this.graphics.rotation += Math.PI / 6.5),
            (this.timeout = setTimeout(function () {
              return e.spin()
            }, 100)))
        }),
        i.__decorate(
          [(0, r.lazyInject)("spinner.svg"), i.__metadata("design:type", s.Sprite)],
          t.prototype,
          "graphics",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(n(59795) /* 59795__mod */.View)
  t.Spinner = u
}
