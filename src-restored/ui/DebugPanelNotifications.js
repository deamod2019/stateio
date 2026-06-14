/**
 * Restored source for Webpack Module #39068.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { lazyGet } = require("../core/RuntimeCore")
const { TypesNotification } = require("../core/CoreTypes")
const { Button } = require("./UIControls")

function DebugPanelNotifications() {
  return jsxRuntime.jsxs("div", {
    children: [
      jsxRuntime.jsx("span", { children: "Notifications" }),
      jsxRuntime.jsx(Button, {
        onClick() {
          const action = lazyGet(TypesNotification.start)
          return action === null || action === undefined ? undefined : action.run()
        },
        children: "Send notification",
      }),
    ],
  })
}

module.exports = { DebugPanelNotifications }
