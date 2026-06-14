/**
 * Webpack Module #62482
 * @exports BattleResults
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BattleResults = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(6376) /* 6376__mod */
  var o = n(83430) /* 83430_InversifyContext */,
    a = n(86178) /* 86178__mod */,
    s = n(48616) /* 48616__mod */,
    u = n(95781) /* 95781_TypesGame */,
    l = n(77577) /* 77577__mod */,
    c = i.__importDefault(n(94184) /* 94184__mod */),
    d = n(90211) /* 90211_LeaderBoardItem */
  t.BattleResults = function (e) {
    var t = e.passedStage,
      n = e.isLevelFinished,
      h = undefined !== n && n,
      p = (0, o.useInjection)(a.TypesSocial.model),
      f = (0, o.useInjection)(u.TypesGame.model),
      _ = function (e) {
        var t
        if (e === p.me) return f.currentContinent.getHistory()
        var n =
          null === (t = e.scores.getEntry(s.ScoreType.CONTEXT)) || undefined === t
            ? undefined
            : t.getExtraData()
        return n
          ? JSON.parse(n)
          : {
              c: f.currentContinent.stageLevel,
              l: f.currentContinent.data.id,
              s: f.currentContinent.data.stages.map(function (e) {
                return 0
              }),
            }
      },
      g = p.contextPlayers
        .map(function (e) {
          return {
            user: i.__assign(i.__assign({}, e), { name: e.name, image_url: e.photo, origin: e }),
            scores: _(e),
          }
        })
        .map(function (e) {
          return ((e.user.score = h ? l.math.array_summ(e.scores.s) : e.scores.s[t] || 0), e)
        })
        .sort(function (e, n) {
          return h
            ? l.math.array_summ(n.scores.s) - l.math.array_summ(e.scores.s)
            : n.scores.s[t] - e.scores.s[t]
        })
        .map(function (e, t) {
          return i.__assign(i.__assign({}, e), { rank: t + 1 })
        })
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, c.default)("leaderboard") },
        {
          children: (0, r.jsx)(
            "ul",
            i.__assign(
              { className: (0, c.default)("leaderboard__scroll") },
              {
                children: g.map(function (e) {
                  return (0, r.jsx)(d.LeaderBoardItem, { user: e.user, rank: e.rank, isSolo: false })
                }),
              },
            ),
          ),
        },
      ),
    )
  }
}
