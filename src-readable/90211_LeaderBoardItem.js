/**
 * Webpack Module #90211
 * @exports LeaderBoardItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LeaderBoardItem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(30396) /* 30396__mod */,
    u = n(86178) /* 86178__mod */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(83430) /* 83430_InversifyContext */,
    d = n(75663) /* 75663_ClaimButton */,
    h = n(36622) /* 36622_SVG */,
    p = i.__importDefault(n(94184) /* 94184__mod */),
    f = n(37725) /* 37725__mod */,
    _ = n(38319) /* 38319__mod */
  t.LeaderBoardItem = function (e) {
    var t,
      n,
      g = e.user,
      m = e.rank,
      v = e.isSolo,
      y = undefined === v || v,
      C = (0, c.useInjection)(u.TypesSocial.model),
      b = (0, c.useInjection)(l.TypesGame.model),
      w = g.origin === C.me,
      x = g.origin !== C.opponent,
      T = i.__read((0, s.useState)(false), 2),
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
                          ? null === (t = g.origin.getLbRecord()) || undefined === t
                            ? undefined
                            : t.rank
                          : m,
                        2,
                        3,
                      ),
                    ),
                  },
                  {
                    children: (0, f.isRankableUser)(g.origin)
                      ? null === (n = g.origin.getLbRecord()) || undefined === n
                        ? undefined
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
                            i.__awaiter(undefined, undefined, Promise, function () {
                              return i.__generator(this, function (n) {
                                return (
                                  a.di.get(u.TypesSocial.refRewardsModel).claim(t),
                                  (b.cookie.coins += e.count),
                                  L(true),
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
                                                undefined === e ||
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
