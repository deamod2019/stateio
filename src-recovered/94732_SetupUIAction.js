/**
 * Webpack Module #94732
 * @exports SetupUIAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SetupUIAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = n(6400),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t = this
            return i.__generator(this, function (n) {
              return (
                (0, s.render)(
                  (0, s.h)(this.UIRootClass, {
                    ref: function (e) {
                      return t.onRefCreated(e)
                    },
                  }),
                  e || document.getElementById(r.CANVAS_ID).parentElement,
                ),
                [2]
              )
            })
          })
        }),
        (t.prototype.onRefCreated = function (e) {
          var t, n
          ;(r.di.bind(o.TypesUI.root).toConstantValue(e),
            null === (t = e.base) ||
              void 0 === t ||
              t.classList.add("sn-".concat(this.social.socialPlatform)),
            "vk" === this.social.socialPlatform &&
              r.IS_ODR_BUILD &&
              (null === (n = e.base) || void 0 === n || n.classList.add("odr-build")))
        }),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesUI.uiRootClass), i.__metadata("design:type", Object)],
          t.prototype,
          "UIRootClass",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.SetupUIAction = u
}
