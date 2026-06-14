/**
 * Webpack Module #64920
 * @exports DebugPanel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugPanel = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(11617),
    a = n(39068)
  t.DebugPanel = function () {
    return (0, r.jsxs)(
      "span",
      i.__assign(
        {
          id: "debug-panel",
          style: {
            zIndex: 10,
            pointerEvents: "all",
            position: "absolute",
            left: "50%",
            bottom: "90px",
          },
        },
        {
          children: [(0, r.jsx)(a.DebugPanelNotifications, {}), (0, r.jsx)(o.DebugLevelPicker, {})],
        },
      ),
    )
  }
}
