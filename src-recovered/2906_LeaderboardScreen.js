/**
 * Webpack Module #2906
 * @exports LeaderboardScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderboardScreen = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(86178),
    s = n(47283),
    u = n(95781),
    l = n(7161),
    c = n(30326),
    d = n(32715),
    h = i.__importDefault(n(94184)),
    p = n(30396)
  n(57862)
  t.LeaderboardScreen = function (e) {
    var t = (0, o.useInjection)(u.TypesGame.model),
      n =
        ((0, o.useInjection)(a.TypesSocial.model),
        { coins: t.cookie.coins, startCoins: t.cookie.coins }),
      f = i.__read(
        (0, p.useState)(function () {
          return n
        }),
        2,
      ),
      _ = (f[0], f[1])
    return (
      (0, o.useEventListener)(s.GameEvents.COINS_UPDATED, function (e) {
        _(function (t) {
          return i.__assign(i.__assign({}, t), e)
        })
      }),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, h.default)("screen", "screen__leaderboard") },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, h.default)("screen-top", "visible") },
                  {
                    children: (0, r.jsxs)(
                      "div",
                      i.__assign(
                        { className: (0, h.default)("container", "top-bar") },
                        {
                          children: [
                            (0, r.jsx)(l.BackButton, {
                              onClick: function () {
                                t.goToLobby()
                              },
                            }),
                            (0, r.jsx)(d.CoinsIndicator, {
                              className: (0, h.default)(
                                "coins-indicator",
                                "coins-indicator_filled",
                              ),
                              total: t.cookie.coins,
                            }),
                          ],
                        },
                      ),
                    ),
                  },
                ),
              ),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, h.default)("container") },
                  {
                    children: (0, r.jsx)(c.LeaderBoardTabs, {
                      activeTab: 0,
                      className: "leaderboards-tabs",
                      leaderboardsProps: e,
                    }),
                  },
                ),
              ),
            ],
          },
        ),
      )
    )
  }
}
