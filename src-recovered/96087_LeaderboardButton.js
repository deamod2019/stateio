/**
 * Webpack Module #96087
 * @exports LeaderboardButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderboardButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = i.__importDefault(n(94184)),
    s = n(37725),
    u = n(86178),
    l = n(83430),
    c = n(95781),
    d = n(44656)
  t.LeaderboardButton = function (e) {
    var t = (0, l.useInjection)(u.TypesSocial.model)
    return (0, r.jsx)(o.Button, {
      className: (0, a.default)("btn-blue", "leaderboard-button", e.className),
      icon: "leaderboard",
      onClick: function () {
        return i.__awaiter(void 0, void 0, void 0, function () {
          var n, r, o
          return i.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return e.onClick
                  ? ((0, s.playUIClickSound)(),
                    (n =
                      void 0 === t.userAuthorized || void 0 === t.authorizeUser || t.userAuthorized)
                      ? [3, 2]
                      : [
                          4,
                          null ===
                            (r = (0, d.lazyGet)(c.TypesGame.actions.suggestAuthorizeAction)) ||
                          void 0 === r
                            ? void 0
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
                      void 0 === o
                        ? void 0
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
