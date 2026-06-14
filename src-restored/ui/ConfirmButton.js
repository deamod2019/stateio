/**
 * Restored source for Webpack Module #62671.
 *
 * Green icon button used by the exit-confirmation popup.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Graphics } = require("./UIContext")
const { confirm_icon } = require("./SVGAssets")
const classNames = require("./classNames").default
const { playUIClickSound } = require("../core/UIHelpers")

function ConfirmButton(props) {
  return jsxRuntime.jsx(
    "button",
    {
      className: classNames("btn", "btn-green", "confirm-button"),
      onClick() {
        if (props.onClick) {
          playUIClickSound()
          props.onClick()
        }
      },
      type: "button",
      children: jsxRuntime.jsx(Graphics, { svg: confirm_icon, inline: false }),
    },
  )
}

module.exports = { ConfirmButton }
