/**
 * Webpack Module #41099
 * @exports Overlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Overlay = undefined))
  var i = n(70655) /* 70655__mod */,
    r = i.__importDefault(n(10990) /* 10990__mod */),
    o = n(86700) /* 86700_MetadataReader */,
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._blured = false), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(e.prototype.onAdded.call(this), (this.renderable = false))
        }),
        (t.prototype.blur = function (e) {
          return (
            undefined === e && (e = 0.3),
            i.__awaiter(this, undefined, undefined, function () {
              var t = this
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this._blured
                      ? [2]
                      : this.blurTween && this.blurTween.isActive()
                        ? [4, this.blurTween.then()]
                        : [3, 2]
                  case 1:
                    return (n.sent(), [3, 4])
                  case 2:
                    return (
                      this.setBlured(true),
                      [
                        4,
                        new Promise(function (n) {
                          ;((t.alpha = 0),
                            (t.renderable = true),
                            (t.blurTween = r.default.to(t, {
                              duration: e,
                              alpha: 1,
                              onComplete: n,
                              ease: "sine.out",
                            })))
                        }),
                      ]
                    )
                  case 3:
                    ;(n.sent(), (n.label = 4))
                  case 4:
                    return [2]
                }
              })
            })
          )
        }),
        (t.prototype.unblur = function (e) {
          return (
            undefined === e && (e = 0.5),
            i.__awaiter(this, undefined, undefined, function () {
              var t = this
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.unblurTween && this.unblurTween.isActive()
                      ? [4, this.unblurTween.then()]
                      : [3, 2]
                  case 1:
                    return (n.sent(), [3, 4])
                  case 2:
                    return (
                      this.setBlured(false),
                      [
                        4,
                        new Promise(function (n) {
                          t.unblurTween = r.default.to(t, {
                            duration: e,
                            alpha: 0,
                            onComplete: function () {
                              ;((t.renderable = false), n())
                            },
                            ease: "sine.in",
                          })
                        }),
                      ]
                    )
                  case 3:
                    ;(n.sent(), (n.label = 4))
                  case 4:
                    return [2]
                }
              })
            })
          )
        }),
        (t.prototype.setBlured = function (e) {
          ;((this._blured = e), (this.interactive = this._blured))
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(n(59795) /* 59795__mod */.View)
  t.Overlay = a
}
