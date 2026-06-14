/**
 * Webpack Module #32715
 * @exports CoinsIndicator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CoinsIndicator = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(47283),
    s = n(46766),
    u = n(36622),
    l = i.__importDefault(n(94184)),
    c = n(30396)
  n(13283)
  t.CoinsIndicator = function (e) {
    var t = e.className,
      n = e.total,
      d = void 0 === n ? 600 : n,
      h = i.__read((0, c.useState)(d), 2),
      p = h[0],
      f = h[1]
    return (
      (0, o.useEventListener)(a.GameEvents.COINS_UPDATED, function (e) {
        return f(e.coins)
      }),
      (0, o.useEventListener)("YANDEX_SYNC", function (e) {
        f(e.coins)
      }),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, l.default)(t) },
          {
            children: [
              (0, r.jsx)(s.CoinsField, {
                className: (0, l.default)("coins-indicator__total"),
                total: p,
              }),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, l.default)("coins-indicator__icon") },
                  { children: (0, r.jsx)(u.SVG.COINS, {}) },
                ),
              ),
            ],
          },
        ),
      )
    )
  }
}
