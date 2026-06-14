/**
 * Webpack Module #14633
 * @exports LeaderBoard
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderBoard = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(48616),
    s = n(86178),
    u = n(44656),
    l = n(90211),
    c = n(23862)
  n(6162)
  t.LeaderBoard = function (e) {
    var t,
      n,
      d =
        (null === (t = (0, u.lazyGet)(s.TypesSocial.refRewardsModel)) || void 0 === t
          ? void 0
          : t.getPendingItems()) || [],
      h =
        (null === (n = (0, u.lazyGet)(s.TypesSocial.refRewardsModel)) || void 0 === n
          ? void 0
          : n.getAvailableItems()) || [],
      p = function (e, t) {
        return e
          .filter(function (e) {
            return e.rf === t
          })
          .map(function (e) {
            return e.value
          })[0]
      },
      f = function (e, t) {
        switch (t) {
          case a.ScoreType.GLOBAL:
            return e.scoreGlobal
          case a.ScoreType.CONTEXT:
            return e.scoreContext
        }
        return e.scores.getScore()
      },
      _ = (
        e.users.map(function (t) {
          return {
            name: t.name,
            image_url: t.photo,
            score: f(t, e.scoreType),
            reward: p(h, t.id),
            origin: t,
          }
        }) || []
      ).map(function (e) {
        return { user: e }
      }),
      g =
        d.map(function (e) {
          return { reward: e.value, pending: !!e.rf }
        }) || [],
      m =
        (e.onClose,
        (function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = []),
            e.sort(function (e, t) {
              return (t.user.score || 0) - (e.user.score || 0)
            }),
            (e = e.map(function (e, t) {
              return i.__assign(i.__assign({}, e), { rank: t + 1 })
            })),
            i.__spreadArray(i.__spreadArray([], i.__read(e), !1), i.__read(t), !1)
          )
        })(_, g))
    return (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(
        "div",
        i.__assign(
          { className: (0, o.default)("leaderboard") },
          {
            children: (0, r.jsx)(
              "ul",
              i.__assign(
                { className: (0, o.default)("leaderboard__scroll") },
                {
                  children: m.map(function (e) {
                    return (function (e) {
                      return e && e.user
                        ? (0, r.jsx)(l.LeaderBoardItem, i.__assign({}, e))
                        : (0, r.jsx)(c.LeaderBoardInviteItem, i.__assign({}, e))
                    })(e)
                  }),
                },
              ),
            ),
          },
        ),
      ),
    })
  }
}
