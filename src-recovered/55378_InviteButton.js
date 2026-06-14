/**
 * Webpack Module #55378
 * @exports InviteButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.InviteButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86178),
    s = n(48616),
    u = n(83430),
    l = i.__importDefault(n(94184)),
    c = n(37725)
  t.InviteButton = function (e) {
    return (0, r.jsx)(u.Button, {
      icon: "friends",
      className: (0, l.default)("btn-blue"),
      onClick: function () {
        return i.__awaiter(void 0, void 0, void 0, function () {
          var t
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (0, c.playUIClickSound)(),
                  [4, o.di.get(a.TypesSocial.model).invite(e.options, !1)]
                )
              case 1:
                switch (((t = n.sent()), t)) {
                  case s.SOCIAL_POPUP.ACCEPTED:
                    return [3, 2]
                  case s.SOCIAL_POPUP.CANCELLED:
                    return [3, 4]
                }
                return [3, 5]
              case 2:
                return [4, o.di.get(a.TypesFlow.LevelStart).run()]
              case 3:
                return (n.sent(), [3, 5])
              case 4:
                return [3, 5]
              case 5:
                return (e.onClick && e.onClick(), [2])
            }
          })
        })
      },
    })
  }
}
