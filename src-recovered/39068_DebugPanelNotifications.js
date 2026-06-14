/**
 * Webpack Module #39068
 * @exports DebugPanelNotifications
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugPanelNotifications = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(44656),
    s = n(86178)
  t.DebugPanelNotifications = function () {
    return (0, r.jsxs)("div", {
      children: [
        (0, r.jsx)("span", { children: "Notifications" }),
        (0, r.jsx)(
          o.Button,
          i.__assign(
            {
              onClick: function () {
                var e
                return null === (e = (0, a.lazyGet)(s.TypesNotification.start)) || void 0 === e
                  ? void 0
                  : e.run()
              },
            },
            { children: "Send notification" },
          ),
        ),
      ],
    })
  }
}
