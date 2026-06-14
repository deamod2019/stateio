/**
 * Restored source for Webpack Module #53527.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Localize } = require("../core/Localize")
const { playUIClickSound } = require("../core/UIHelpers")
const { Button } = require("./UIContext")

function ContinueButton(props) {
  const onClick = props.onClick
  return jsxRuntime.jsx(
    Button,
    {
      className: classNames("continue-button"),
      onClick() {
        if (onClick) {
          playUIClickSound()
          onClick()
        }
      },
      children: Localize.get("ui-win-continue", "CONTINUE"),
    },
  )
}

module.exports = { ContinueButton }
