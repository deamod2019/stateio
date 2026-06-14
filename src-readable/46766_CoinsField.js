/**
 * Webpack Module #46766
 * @exports CoinsField
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CoinsField = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(38319) /* 38319__mod */,
    s = n(3207) /* 3207__mod */,
    u = n(74083) /* 74083_UIConstants */,
    l = n(30396) /* 30396__mod */
  t.CoinsField = function (e) {
    var t = e.total,
      n = undefined === t ? 0 : t,
      c = e.className,
      d = e.tickupDuration,
      h = undefined === d ? u.UIConstants.coinsIndicator.updateDelay : d,
      p = i.__read((0, l.useState)(n), 2),
      f = p[0],
      _ = p[1]
    return (
      h &&
        (0, l.useLayoutEffect)(
          function () {
            return (0, s.tickup)(f, n, h, function (e) {
              return _(Math.round(e))
            })
          },
          [n],
        ),
      (0, r.jsx)(
        "div",
        i.__assign(
          { className: (0, o.default)("coins-field", c, (0, a.getFontClassByDigits)(f)) },
          { children: f },
        ),
      )
    )
  }
}
