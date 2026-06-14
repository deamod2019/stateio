/**
 * Webpack Module #52951
 * @exports ProgressBar
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ProgressBar = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(47283) /* 47283_GameEvents */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(95781) /* 95781_TypesGame */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(30396) /* 30396__mod */,
    d = n(9931) /* 9931_Participants */
  n(19963) /* 19963__mod */
  var h = n(44966) /* 44966_ProgressIndicator */
  t.ProgressBar = function (e) {
    var t = e.participants,
      n = (0, s.useInjection)(u.TypesGame.skinManager),
      p = i.__read((0, c.useState)({ items: [], totalValue: 0 }), 2),
      f = p[0],
      _ = p[1]
    ;(0, o.useEventListener)(a.GameEvents.STATS_UPDATED, _, t)
    var g = 0,
      m = (f.items || []).map(function (e) {
        var t = e.count / f.totalValue,
          r = g
        g += t
        var o = i.__read(n.getColorBy(e.owner), 2),
          a = o[0]
        o[1]
        return [r, t, a]
      })
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { class: (0, l.default)("progress-bar") },
        {
          children: [
            t ? (0, r.jsx)(d.Participants, { users: t }) : null,
            (0, r.jsx)(h.ProgressIndicator, { itemsToDiplay: m }),
          ],
        },
      ),
    )
  }
}
