/**
 * Restored source for Webpack Module #86602.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("99621")
const classNames = require("./classNames").default
const { Localize } = require("../core/Localize")
const { playUIClickSound } = require("../core/UIHelpers")
const { Button, visibilityEffect } = require("./UIContext")

function NoThanksButton(props) {
  const className = props.className
  const onClick = props.onClick
  const delay = props.delay === undefined ? 0 : props.delay
  const [invisible] = visibilityEffect(delay)

  return jsxRuntime.jsx(
    Button,
    {
      className: classNames("no-thanks-button", className, { invisible }),
      onClick() {
        if (onClick) {
          playUIClickSound()
          onClick()
        }
      },
      children: Localize.get("ui-common-no_thanks_button", "NO, THANKS"),
    },
  )
}

module.exports = { NoThanksButton }
