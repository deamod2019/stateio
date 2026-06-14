/**
 * Restored source for Webpack Module #12832.
 *
 * Shared settings button with UI click sound.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
require("./styleSideEffects")("35836")
const { playUIClickSound } = require("../core/UIHelpers")

function SettingsButton(props) {
  const className = props.className
  const onClick = props.onClick

  return jsxRuntime.jsx(
    ui.Button,
    {
      className: classNames("button", "settings-button", className),
      onClick() {
        if (onClick) {
          playUIClickSound()
          onClick()
        }
      },
      children: jsxRuntime.jsx(SVG.Settings, {}),
    },
  )
}

module.exports = { SettingsButton }
