/**
 * Webpack Module #14633
 * @exports LeaderBoard
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LeaderBoard = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(48616) /* 48616__mod */,
    s = n(86178) /* 86178__mod */,
    u = n(44656) /* 44656__mod */,
    l = n(90211) /* 90211_LeaderBoardItem */,
    c = n(23862) /* 23862_LeaderBoardInviteItem */
  n(6162) /* 6162__mod */
  t.LeaderBoard = function (e) {
    var t,
      n,
      d =
        (null === (t = (0, u.lazyGet)(s.TypesSocial.refRewardsModel)) || undefined === t
          ? undefined
          : t.getPendingItems()) || [],
      h =
        (null === (n = (0, u.lazyGet)(s.TypesSocial.refRewardsModel)) || undefined === n
          ? undefined
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
            undefined === e && (e = []),
            undefined === t && (t = []),
            e.sort(function (e, t) {
              return (t.user.score || 0) - (e.user.score || 0)
            }),
            (e = e.map(function (e, t) {
              return i.__assign(i.__assign({}, e), { rank: t + 1 })
            })),
            i.__spreadArray(i.__spreadArray([], i.__read(e), false), i.__read(t), false)
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
