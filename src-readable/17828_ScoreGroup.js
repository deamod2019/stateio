/**
 * Webpack Module #17828
 * @exports ScoreGroup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ScoreGroup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(55960) /* 55960_Score */,
    s = n(37909) /* 37909_Icon */
  ;((t.ScoreGroup = function (e) {
    var t = e.className,
      n = i.__rest(e, ["className"]),
      a = (0, o.default)("score-group", t)
    return (0, r.jsx)("div", i.__assign({ className: a }, n))
  }),
    (t.ScoreGroup.Icon = s.Icon),
    (t.ScoreGroup.Score = a.Score))
}
