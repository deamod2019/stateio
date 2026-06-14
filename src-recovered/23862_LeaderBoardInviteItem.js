/**
 * Webpack Module #23862
 * @exports LeaderBoardInviteItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderBoardInviteItem = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86125),
    s = n(86178),
    u = n(83430),
    l = i.__importDefault(n(94184)),
    c = n(30396),
    d = n(36622)
  n(6162)
  t.LeaderBoardInviteItem = function (e) {
    var t = e.className,
      n = e.pending,
      h = e.reward,
      p = { isPending: n },
      f = i.__read(
        (0, c.useState)(function () {
          return p
        }),
        2,
      ),
      _ = f[0],
      g = f[1]
    return (0, r.jsx)(
      "li",
      i.__assign(
        {
          className: (0, l.default)(
            "leaderboard__item",
            "leaderboard__item-invite",
            { "leaderboard__item-invite_disabled": _.isPending },
            t,
          ),
        },
        {
          children: (0, r.jsx)(
            u.Button,
            i.__assign(
              {
                disabled: _.isPending,
                onClick: function () {
                  return i.__awaiter(void 0, void 0, void 0, function () {
                    var e
                    return i.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, o.di.get(s.TypesSocial.refRewardsModel).request(h)]
                        case 1:
                          return t.sent()
                            ? (g(function (e) {
                                return i.__assign(i.__assign({}, e), { isPending: !0 })
                              }),
                              ((e = o.di.get(s.TypesFlow.LevelStart)).waitForContextChange = !0),
                              [4, e.run()])
                            : [3, 3]
                        case 2:
                          ;(t.sent(), (t.label = 3))
                        case 3:
                          return [2]
                      }
                    })
                  })
                },
                className: (0, l.default)("btn-green"),
              },
              {
                children: (0, r.jsxs)(
                  "div",
                  i.__assign(
                    { className: (0, l.default)("button-invite") },
                    {
                      children: [
                        (0, r.jsx)(
                          "div",
                          i.__assign(
                            { className: (0, l.default)("button-invite__icon") },
                            { children: (0, r.jsx)(u.Icon, { type: "friends" }) },
                          ),
                        ),
                        (0, r.jsxs)(
                          "div",
                          i.__assign(
                            { className: (0, l.default)("button-invite__text") },
                            {
                              children: [
                                _.isPending
                                  ? a.Localize.get("game_pending", "Pending...")
                                  : a.Localize.get("game_invite", "Invite Friend"),
                                _.isPending
                                  ? (0, r.jsx)(
                                      "span",
                                      i.__assign(
                                        { className: (0, l.default)("button-invite__description") },
                                        {
                                          children: a.Localize.get(
                                            "game_pending_description",
                                            "The reward is given when your friend launch the game.",
                                          ),
                                        },
                                      ),
                                    )
                                  : null,
                              ],
                            },
                          ),
                        ),
                        (0, r.jsxs)(
                          "div",
                          i.__assign(
                            { className: (0, l.default)("button-invite__reward") },
                            {
                              children: [
                                (0, r.jsx)(
                                  "div",
                                  i.__assign(
                                    { className: (0, l.default)("button-invite__reward-icon") },
                                    { children: (0, r.jsx)(d.SVG.COINS, {}) },
                                  ),
                                ),
                                (0, r.jsxs)(
                                  "div",
                                  i.__assign(
                                    { className: (0, l.default)("button-invite__reward-count") },
                                    { children: ["+", h.count] },
                                  ),
                                ),
                              ],
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    )
  }
}
