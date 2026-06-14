/**
 * Webpack Module #76883
 * @exports UIRoot
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UIRoot = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(83430),
    s = n(94776),
    u = n(72688)
  t.UIRoot = function () {
    return (0, r.jsx)(
      a.InversifyContext.Provider,
      i.__assign(
        { value: o.di },
        {
          children: (0, r.jsxs)(
            "div",
            i.__assign(
              { id: "game-ui" },
              {
                children: [
                  (0, r.jsx)(a.AlertsOverlay, {}),
                  (0, r.jsx)(a.SocialOverlay, {}),
                  (0, r.jsx)(a.PauseOverlay, {}),
                  (0, r.jsx)(s.Popups, {}),
                  (0, r.jsx)(a.Screens, {}),
                  (0, r.jsx)(u.SocialBanners, {}),
                ],
              },
            ),
          ),
        },
      ),
    )
  }
}
