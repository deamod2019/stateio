/**
 * Webpack Module #46766
 * @exports CoinsField
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CoinsField = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(38319),
    s = n(3207),
    u = n(74083),
    l = n(30396)
  t.CoinsField = function (e) {
    var t = e.total,
      n = void 0 === t ? 0 : t,
      c = e.className,
      d = e.tickupDuration,
      h = void 0 === d ? u.UIConstants.coinsIndicator.updateDelay : d,
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
