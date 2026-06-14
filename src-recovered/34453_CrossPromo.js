/**
 * Webpack Module #34453
 * @exports CrossPromo
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CrossPromo = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86178),
    s = n(19562),
    u = n(49934)
  t.CrossPromo = function (e) {
    var t = e.className,
      n = e.delay,
      l = void 0 === n ? 3e3 : n,
      c = (0, s.useInjection)(a.TypesSocial.model)
    if (
      !(function () {
        switch (c.socialPlatform) {
          case "fb":
            return (
              "undefined" != typeof FBInstant &&
              -1 !== FBInstant.getSupportedAPIs().indexOf("switchGameAsync") &&
              o.di.isBound(a.TypesPromo.config)
            )
          case "vk":
          case "ok":
          case "ya":
            return !0
        }
      })()
    )
      return null
    var d = (0, s.useInjection)(a.TypesPromo.random),
      h = d.appId,
      p = (d.data, i.__read((0, s.visibilityEffect)(l, !0, [h]), 1)[0])
    return (0, r.jsx)(
      u.CrossPromoComponent,
      i.__assign(
        {
          invisible: p,
          className: t,
          onClick: function () {
            return c.switchGame(d.appId, d.data)
          },
        },
        d,
      ),
    )
  }
}
