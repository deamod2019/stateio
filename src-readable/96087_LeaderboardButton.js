/**
 * Webpack Module #96087
 * @exports LeaderboardButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LeaderboardButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = i.__importDefault(n(94184) /* 94184__mod */),
    s = n(37725) /* 37725__mod */,
    u = n(86178) /* 86178__mod */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(95781) /* 95781_TypesGame */,
    d = n(44656) /* 44656__mod */
  t.LeaderboardButton = function (e) {
    var t = (0, l.useInjection)(u.TypesSocial.model)
    return (0, r.jsx)(o.Button, {
      className: (0, a.default)("btn-blue", "leaderboard-button", e.className),
      icon: "leaderboard",
      onClick: function () {
        return i.__awaiter(undefined, undefined, undefined, function () {
          var n, r, o
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return e.onClick
                  ? ((0, s.playUIClickSound)(),
                    (n =
                      undefined === t.userAuthorized || undefined === t.authorizeUser || t.userAuthorized)
                      ? [3, 2]
                      : [
                          4,
                          null ===
                            (r = (0, d.lazyGet)(c.TypesGame.actions.suggestAuthorizeAction)) ||
                          undefined === r
                            ? undefined
                            : r.run(),
                        ])
                  : [3, 4]
              case 1:
                ;((n = i.sent()), (i.label = 2))
              case 2:
                return n
                  ? [
                      4,
                      null ===
                        (o = (0, d.lazyGet)(c.TypesGame.actions.syncYandexLeaderboardsAction)) ||
                      undefined === o
                        ? undefined
                        : o.run(),
                    ]
                  : [3, 4]
              case 3:
                ;(i.sent(), e.onClick(), (i.label = 4))
              case 4:
                return [2]
            }
          })
        })
      },
    })
  }
}
