/**
 * Webpack Module #39068
 * @exports DebugPanelNotifications
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.DebugPanelNotifications = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(44656) /* 44656__mod */,
    s = n(86178) /* 86178__mod */
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
                return null === (e = (0, a.lazyGet)(s.TypesNotification.start)) || undefined === e
                  ? undefined
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
