/**
 * Webpack Module #2906
 * @exports LeaderboardScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LeaderboardScreen = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(86178) /* 86178__mod */,
    s = n(47283) /* 47283_GameEvents */,
    u = n(95781) /* 95781_TypesGame */,
    l = n(7161) /* 7161_BackButton */,
    c = n(30326) /* 30326_LeaderBoardTabs */,
    d = n(32715) /* 32715_CoinsIndicator */,
    h = i.__importDefault(n(94184) /* 94184__mod */),
    p = n(30396) /* 30396__mod */
  n(57862) /* 57862__mod */
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
