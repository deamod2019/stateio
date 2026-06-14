/**
 * Webpack Module #12832
 * @exports SettingsButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SettingsButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(36622),
    s = i.__importDefault(n(94184))
  n(35836)
  var u = n(37725)
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
