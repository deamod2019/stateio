/**
 * Webpack Module #90211
 * @exports LeaderBoardItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderBoardItem = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(44656),
    s = n(30396),
    u = n(86178),
    l = n(95781),
    c = n(83430),
    d = n(75663),
    h = n(36622),
    p = i.__importDefault(n(94184)),
    f = n(37725),
    _ = n(38319)
  t.LeaderBoardItem = function (e) {
    var t,
      n,
      g = e.user,
      m = e.rank,
      v = e.isSolo,
      y = void 0 === v || v,
      C = (0, c.useInjection)(u.TypesSocial.model),
      b = (0, c.useInjection)(l.TypesGame.model),
      w = g.origin === C.me,
      x = g.origin !== C.opponent,
      T = i.__read((0, s.useState)(!1), 2),
      S = T[0],
      L = T[1]
    return (0, r.jsx)(r.Fragment, {
      children: (0, r.jsxs)(
        "li",
        i.__assign(
          {
            className: (0, p.default)("leaderboard__item", {
              leaderboard__item_me: w,
              leaderboard__item_disabled: !x,
            }),
          },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  {
                    className: (0, p.default)(
                      "leaderboard__item-rank",
                      (0, _.getFontClassByDigits)(
                        (0, f.isRankableUser)(g.origin)
                          ? null === (t = g.origin.getLbRecord()) || void 0 === t
                            ? void 0
                            : t.rank
                          : m,
                        2,
                        3,
                      ),
                    ),
                  },
                  {
                    children: (0, f.isRankableUser)(g.origin)
                      ? null === (n = g.origin.getLbRecord()) || void 0 === n
                        ? void 0
                        : n.rank
                      : m || "-",
                  },
                ),
              ),
              (0, r.jsx)(c.Avatar, { imgPath: g.image_url, imgAlt: "" }),
              (0, r.jsxs)(
                "div",
                i.__assign(
                  {
                    className: (0, p.default)("leaderboard__item-info", {
                      "leaderboard__item-info_social": !y,
                    }),
                  },
                  {
                    children: [
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          {
                            className: (0, p.default)("leaderboard__item-name", {
                              "leaderboard__item-name_social": !y,
                            }),
                          },
                          { children: g.name },
                        ),
                      ),
                      (0, r.jsxs)(
                        "div",
                        i.__assign(
                          {
                            className: (0, p.default)("leaderboard__item-points", {
                              "leaderboard__item-points_social": !y,
                            }),
                          },
                          {
                            children: [
                              y
                                ? (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, p.default)("leaderboard__item-score-key") },
                                      { children: o.Localize.get("ui-menu-lvl", "LVL") },
                                    ),
                                  )
                                : (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: "cup-icon" },
                                      { children: (0, r.jsx)(h.SVG.LeaderBoardCupIcon, {}) },
                                    ),
                                  ),
                              (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: (0, p.default)("leaderboard__item-score") },
                                  { children: g.score || "-" },
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
              y
                ? g.reward && !S
                  ? (0, r.jsx)(d.ClaimButton, {
                      reward: g.reward.count,
                      multiplierText: "",
                      onClick: function () {
                        var e, t
                        ;((0, f.playUIClickSound)(),
                          g.reward &&
                            ((e = g.reward),
                            (t = g.origin.id),
                            i.__awaiter(void 0, void 0, Promise, function () {
                              return i.__generator(this, function (n) {
                                return (
                                  a.di.get(u.TypesSocial.refRewardsModel).claim(t),
                                  (b.cookie.coins += e.count),
                                  L(!0),
                                  [2]
                                )
                              })
                            })))
                      },
                    })
                  : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        "div",
                        i.__assign(
                          { className: (0, p.default)("leaderboard__item-button") },
                          {
                            children:
                              "ya" === C.socialPlatform
                                ? null
                                : (0, r.jsx)(
                                    c.Button,
                                    i.__assign(
                                      {
                                        className: (0, p.default)("leaderboard__play-button"),
                                        onClick: function () {
                                          ;((0, f.playUIClickSound)(),
                                            (function () {
                                              var e
                                              null === (e = (0, a.lazyGet)(u.TypesFlow.PlayWith)) ||
                                                void 0 === e ||
                                                e.run(g.origin)
                                            })())
                                        },
                                      },
                                      { children: (0, r.jsx)(h.SVG.LeaderBoardPlayIcon, {}) },
                                    ),
                                  ),
                          },
                        ),
                      ),
                    })
                : null,
            ],
          },
        ),
      ),
    })
  }
}
