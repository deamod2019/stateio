/**
 * Webpack Module #86602
 * @exports NoThanksButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.NoThanksButton = void 0))
  var i = n(70655),
    r = n(16584)
  n(99621)
  var o = n(86125),
    a = n(83430),
    s = i.__importDefault(n(94184)),
    u = n(37725)
  t.NoThanksButton = function (e) {
    var t = e.className,
      n = e.onClick,
      l = e.delay,
      c = void 0 === l ? 0 : l,
      d = i.__read((0, a.visibilityEffect)(c), 1)[0]
    return (0, r.jsx)(
      a.Button,
      i.__assign(
        {
          className: (0, s.default)("no-thanks-button", t, { invisible: d }),
          onClick: function () {
            n && ((0, u.playUIClickSound)(), n())
          },
        },
        { children: o.Localize.get("ui-common-no_thanks_button", "NO, THANKS") },
      ),
    )
  }
}
