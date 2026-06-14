/**
 * Webpack Module #86602
 * @exports NoThanksButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.NoThanksButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(99621) /* 99621__mod */
  var o = n(86125) /* 86125__mod */,
    a = n(83430) /* 83430_InversifyContext */,
    s = i.__importDefault(n(94184) /* 94184__mod */),
    u = n(37725) /* 37725__mod */
  t.NoThanksButton = function (e) {
    var t = e.className,
      n = e.onClick,
      l = e.delay,
      c = undefined === l ? 0 : l,
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
