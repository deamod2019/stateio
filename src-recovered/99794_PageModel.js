/**
 * Webpack Module #99794
 * @exports PageModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PageModel = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t._assetsProgress = 0),
          (t._gameStartedAtProgress = NaN),
          (t._windowFocusHandler = function (e) {
            return t.windowFocusHandler(e)
          }),
          (t._documentVisibilityHandler = t.documentVisibilityHandler.bind(t)),
          (t._windowBlured = document.hidden || !document.hasFocus()),
          ["blur", "focus"].forEach(function (e) {
            return window.addEventListener(e, t._windowFocusHandler)
          }),
          document.addEventListener("visibilitychange", t._documentVisibilityHandler),
          t
        )
      }
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "assetsProgress", {
          get: function () {
            return this._assetsProgress
          },
          set: function (e) {
            this.bus &&
              (isNaN(this._gameStartedAtProgress) &&
                ((this._gameStartedAtProgress = this.bus.loaded || 0),
                "undefined" != typeof gsap && gsap.killTweensOf(this.bus)),
              (this._assetsProgress = e),
              (this.bus.loaded =
                this._gameStartedAtProgress +
                (100 - this._gameStartedAtProgress) * this._assetsProgress))
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isBusReadyAsync = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (null === (e = this.bus) || void 0 === e ? void 0 : e.ready)
                    ? [3, 2]
                    : [4, r.WaitAction.ms(10)]
                case 1:
                  return (t.sent(), [3, 0])
                case 2:
                  return [2]
              }
            })
          })
        }),
        Object.defineProperty(t.prototype, "bus", {
          get: function () {
            return window.__diffbus
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.windowFocusHandler = function (e) {
          switch (e.type) {
            case "focus":
              this.windowBlured = !1
              break
            case "blur":
              this.windowBlured = !0
          }
        }),
        (t.prototype.documentVisibilityHandler = function () {
          document.hidden ? (this.windowBlured = !0) : (this.windowBlured = !1)
        }),
        Object.defineProperty(t.prototype, "windowBlured", {
          get: function () {
            return this._windowBlured
          },
          set: function (e) {
            this._windowBlured !== e &&
              ((this._windowBlured = e), this.callPagePauseAction(this._windowBlured))
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.callPagePauseAction = function (e) {
          var t
          null === (t = (0, r.lazyGet)(o.TypesSocial.pauseAction)) || void 0 === t || t.run(e)
        }),
        (t.prototype.destroy = function () {
          var t = this
          ;(["blur", "focus"].forEach(function (e) {
            return window.removeEventListener(e, t._windowFocusHandler)
          }),
            document.removeEventListener("visibilitychange", this._documentVisibilityHandler),
            e.prototype.destroy.call(this))
        }),
        (t = i.__decorate([(0, a.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(r.GlobalEventProvider)
  t.PageModel = s
}
