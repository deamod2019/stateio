/**
 * Restored source for Webpack Module #45878.
 *
 * Red icon button used by the exit-confirmation popup.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Graphics } = require("./UIContext")
const { cancel_icon } = require("./SVGAssets")
const classNames = require("./classNames").default

function CancelButton(props) {
  return jsxRuntime.jsx(
    "button",
    {
      className: classNames("btn", "btn-red", "cancel-button"),
      ...props,
      type: "button",
      children: jsxRuntime.jsx(Graphics, { svg: cancel_icon, inline: false }),
    },
  )
}

module.exports = { CancelButton }
