/**
 * Webpack Module #31651
 * @exports SocialOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocialOverlay = void 0))
  var i = n(70655),
    r = n(16584)
  n(46262)
  var o = n(86178),
    a = n(48616),
    s = n(44656),
    u = n(30396),
    l = i.__importDefault(n(94184))
  t.SocialOverlay = function () {
    var e = i.__read((0, u.useState)(!1), 2),
      t = e[0],
      n = e[1],
      c = (0, s.lazyGet)(o.TypesSocial.model)
    if (c) {
      var d = function () {
          return n(!0)
        },
        h = function () {
          return n(!1)
        }
      ;(0, u.useEffect)(
        function () {
          return (
            c.on(a.SocialEvents.SHOW_OVERLAY, d),
            c.on(a.SocialEvents.HIDE_OVERLAY, h),
            function () {
              ;(c.off(a.SocialEvents.SHOW_OVERLAY, d), c.off(a.SocialEvents.HIDE_OVERLAY, h))
            }
          )
        },
        [c],
      )
    }
    return (0, r.jsx)("div", { className: (0, l.default)("social__overlay", { active: t }) })
  }
}
