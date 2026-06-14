/**
 * Restored source for Webpack Module #76883.
 *
 * Root HTML UI component. Provides the DI container to Preact UI children and
 * mounts the fixed overlay/popup/screen layers in the original order.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { di } = require("../core/RuntimeCore")
const ui = require("./UIContext")
const { SocialBanners } = require("./SocialBanners")
const { AlertsOverlay } = require("./AlertsOverlay")
const { SocialOverlay } = require("./SocialOverlay")
const { PauseOverlay } = require("./PauseOverlay")
const { Popups } = require("./Popups")
const { Screens } = require("./Screens")

function UIRoot() {
  return jsxRuntime.jsx(
    ui.InversifyContext.Provider,
    {
      value: di,
      children: jsxRuntime.jsxs("div", {
        id: "game-ui",
        children: [
          jsxRuntime.jsx(AlertsOverlay, {}),
          jsxRuntime.jsx(SocialOverlay, {}),
          jsxRuntime.jsx(PauseOverlay, {}),
          jsxRuntime.jsx(Popups, {}),
          jsxRuntime.jsx(Screens, {}),
          jsxRuntime.jsx(SocialBanners, {}),
        ],
      }),
    },
  )
}

module.exports = { UIRoot }
