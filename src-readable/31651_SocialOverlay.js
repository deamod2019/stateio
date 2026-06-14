/**
 * Webpack Module #31651
 * @exports SocialOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SocialOverlay = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(46262) /* 46262__mod */
  var o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(44656) /* 44656__mod */,
    u = n(30396) /* 30396__mod */,
    l = i.__importDefault(n(94184) /* 94184__mod */)
  t.SocialOverlay = function () {
    var e = i.__read((0, u.useState)(false), 2),
      t = e[0],
      n = e[1],
      c = (0, s.lazyGet)(o.TypesSocial.model)
    if (c) {
      var d = function () {
          return n(true)
        },
        h = function () {
          return n(false)
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
