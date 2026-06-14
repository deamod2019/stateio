/**
 * Webpack Module #42970
 * @exports CircleAvatar
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CircleAvatar = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(6538),
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.circleBg = new o.Graphics()), (t._bgColor = 16777215), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          e.prototype.onAdded.call(this)
          var t = this.bg.width,
            n = this.bg.height,
            i = 0.5 * Math.max(t, n),
            r = new o.Graphics().beginFill(16777215).drawCircle(i, i, i).endFill()
          ;(this.bgAndImgCont.addChild(r),
            (this.bgAndImgCont.mask = r),
            this.updateColor(),
            this.addChildAt(this.circleBg, 0))
        }),
        Object.defineProperty(t.prototype, "bgColor", {
          get: function () {
            return this._bgColor
          },
          set: function (e) {
            ;((this._bgColor = e), this.updateColor())
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onImageLoaded = function () {
          ;((this.bgAndImgCont.width = this.circleBg.width - 20),
            (this.bgAndImgCont.scale.y = this.bgAndImgCont.scale.x),
            (this.bgAndImgCont.x = 0.5 * (this.circleBg.width - this.bgAndImgCont.width)),
            (this.bgAndImgCont.y = 0.5 * (this.circleBg.height - this.bgAndImgCont.height)))
        }),
        (t.prototype.updateColor = function () {
          var e = this.bg.width,
            t = this.bg.height,
            n = 0.5 * Math.max(e, t)
          this.circleBg.clear().beginFill(this._bgColor).drawCircle(n, n, n).endFill()
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(78001).UserPic)
  t.CircleAvatar = a
}
