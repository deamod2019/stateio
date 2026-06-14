/**
 * Restored source for Webpack Module #64920.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { DebugLevelPicker } = require("./DebugLevelPicker")
const { DebugPanelNotifications } = require("./DebugPanelNotifications")

function DebugPanel() {
  return jsxRuntime.jsxs("span", {
    id: "debug-panel",
    style: {
      zIndex: 10,
      pointerEvents: "all",
      position: "absolute",
      left: "50%",
      bottom: "90px",
    },
    children: [
      jsxRuntime.jsx(DebugPanelNotifications, {}),
      jsxRuntime.jsx(DebugLevelPicker, {}),
    ],
  })
}

module.exports = { DebugPanel }
