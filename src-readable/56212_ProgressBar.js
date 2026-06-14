/**
 * Webpack Module #56212
 * @exports ProgressBar
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ProgressBar = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(6538) /* 6538_SIDES */,
    a = n(25317) /* 25317_SteppedEase */,
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t._progress = 0),
          (t.fg = new o.Graphics()),
          (t.bg = new o.Graphics()),
          (t._barWidth = 0),
          (t._config = { width: 150, height: 3 }),
          t
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          ;((this._config = e),
            this.bg
              .clear()
              .lineTextureStyle({
                cap: o.LINE_CAP.ROUND,
                width: this._config.height,
                color: 16777215,
                alpha: 0.3,
              })
              .lineTo(this._config.width, 0),
            (this.barWidth = e.width))
        }),
        (t.prototype.onAdded = function () {
          ;(this.addChild(this.bg, this.fg), e.prototype.onAdded.call(this))
        }),
        (t.prototype.show = function (e) {
          ;(undefined === e && (e = 1),
            (this.visible = true),
            a.gsap.killTweensOf(this.fg),
            a.gsap.fromTo(
              this,
              { alpha: 0 },
              { alpha: 1, duration: 0.5, delay: e, ease: a.Sine.easeOut },
            ))
        }),
        (t.prototype.hide = function () {
          var e = this
          a.gsap.to(this, {
            duration: 0.5,
            alpha: 0,
            onComplete: function () {
              e.visible = false
            },
          })
        }),
        Object.defineProperty(t.prototype, "progress", {
          get: function () {
            return this._progress
          },
          set: function (e) {
            ;((this._progress = e),
              a.gsap.killTweensOf(this.fg),
              a.gsap.to(this, { duration: 0.1, barWidth: this._config.width * this._progress }))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "barWidth", {
          get: function () {
            return this._barWidth
          },
          set: function (e) {
            ;((this._barWidth = e),
              this.fg
                .clear()
                .lineTextureStyle({
                  cap: o.LINE_CAP.ROUND,
                  width: 0.8 * this._config.height,
                  color: 16777215,
                })
                .lineTo(this._barWidth, 0))
          },
          enumerable: false,
          configurable: true,
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(59795) /* 59795__mod */.View)
  t.ProgressBar = s
}
