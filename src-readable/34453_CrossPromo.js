/**
 * Webpack Module #34453
 * @exports CrossPromo
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CrossPromo = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(19562) /* 19562__mod */,
    u = n(49934) /* 49934_CrossPromoComponent */
  t.CrossPromo = function (e) {
    var t = e.className,
      n = e.delay,
      l = undefined === n ? 3e3 : n,
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
            return true
        }
      })()
    )
      return null
    var d = (0, s.useInjection)(a.TypesPromo.random),
      h = d.appId,
      p = (d.data, i.__read((0, s.visibilityEffect)(l, true, [h]), 1)[0])
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
