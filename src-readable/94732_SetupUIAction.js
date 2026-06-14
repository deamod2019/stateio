/**
 * Webpack Module #94732
 * @exports SetupUIAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SetupUIAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6400) /* 6400__mod */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
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
              undefined === t ||
              t.classList.add("sn-".concat(this.social.socialPlatform)),
            "vk" === this.social.socialPlatform &&
              r.IS_ODR_BUILD &&
              (null === (n = e.base) || undefined === n || n.classList.add("odr-build")))
        }),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesUI.uiRootClass), i.__metadata("design:type", Object)],
          t.prototype,
          "UIRootClass",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.SetupUIAction = u
}
