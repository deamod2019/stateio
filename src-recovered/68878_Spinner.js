/**
 * Webpack Module #68878
 * @exports Spinner
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Spinner = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(25317),
    a = n(86700),
    s = n(6538),
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.spinning = !1), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.graphics.scale.set(0.7),
            this.graphics.anchor.set(0.5),
            (this.graphics.visible = !1),
            this.addChild(this.graphics),
            e.prototype.onAdded.call(this))
        }),
        (t.prototype.show = function () {
          ;((this.graphics.visible = !0),
            clearTimeout(this.timeout),
            o.gsap.killTweensOf(this.graphics),
            o.gsap.fromTo(
              this.graphics,
              { alpha: 0 },
              { alpha: 1, duration: 0.5, delay: 1, ease: o.Sine.easeOut },
            ),
            (this.spinning = !0),
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
                ;((e.spinning = !1), (e.graphics.visible = !1), clearTimeout(e.timeout))
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
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(n(59795).View)
  t.Spinner = u
}
