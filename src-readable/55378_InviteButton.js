/**
 * Webpack Module #55378
 * @exports InviteButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InviteButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(48616) /* 48616__mod */,
    u = n(83430) /* 83430_InversifyContext */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(37725) /* 37725__mod */
  t.InviteButton = function (e) {
    return (0, r.jsx)(u.Button, {
      icon: "friends",
      className: (0, l.default)("btn-blue"),
      onClick: function () {
        return i.__awaiter(undefined, undefined, undefined, function () {
          var t
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (0, c.playUIClickSound)(),
                  [4, o.di.get(a.TypesSocial.model).invite(e.options, false)]
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
