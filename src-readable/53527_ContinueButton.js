/**
 * Webpack Module #53527
 * @exports ContinueButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ContinueButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(83430) /* 83430_InversifyContext */,
    s = i.__importDefault(n(94184) /* 94184__mod */),
    u = n(37725) /* 37725__mod */
  t.ContinueButton = function (e) {
    var t = e.onClick
    return (0, r.jsx)(
      a.Button,
      i.__assign(
        {
          className: (0, s.default)("continue-button"),
          onClick: function () {
            t && ((0, u.playUIClickSound)(), t())
          },
        },
        { children: o.Localize.get("ui-win-continue", "CONTINUE") },
      ),
    )
  }
}
