/**
 * Webpack Module #12832
 * @exports SettingsButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SettingsButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */)
  n(35836) /* 35836__mod */
  var u = n(37725) /* 37725__mod */
  t.SettingsButton = function (e) {
    var t = e.className,
      n = e.onClick
    return (0, r.jsx)(
      o.Button,
      i.__assign(
        {
          className: (0, s.default)("button", "settings-button", t),
          onClick: function () {
            n && ((0, u.playUIClickSound)(), n())
          },
        },
        { children: (0, r.jsx)(a.SVG.Settings, {}) },
      ),
    )
  }
}
