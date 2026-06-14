/**
 * Webpack Module #53527
 * @exports ContinueButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContinueButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(83430),
    s = i.__importDefault(n(94184)),
    u = n(37725)
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
