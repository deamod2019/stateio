/**
 * Restored source for Webpack Module #7161.
 *
 * Shared back button with UI click sound.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
require("./styleSideEffects")("89991")
const { playUIClickSound } = require("../core/UIHelpers")

function BackButton(props) {
  return jsxRuntime.jsx(
    ui.Button,
    {
      className: classNames("back-button", props.className),
      onClick() {
        if (props.onClick) {
          playUIClickSound()
          props.onClick()
        }
      },
      children: jsxRuntime.jsx(SVG.BackButton, {}),
    },
  )
}

module.exports = { BackButton }
