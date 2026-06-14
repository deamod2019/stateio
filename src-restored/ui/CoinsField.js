/**
 * Restored source for Webpack Module #46766.
 *
 * Displays a coin count with optional tick-up animation and digit-dependent
 * font sizing.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { UIConstants } = require("../core/UIConstants")
const { getFontClassByDigits } = require("../core/NumberFormat")
const { tickup } = require("./Tickup")

function CoinsField(props) {
  const total = props.total === undefined ? 0 : props.total
  const className = props.className
  const tickupDuration =
    props.tickupDuration === undefined ? UIConstants.coinsIndicator.updateDelay : props.tickupDuration
  const [currentTotal, setCurrentTotal] = hooks.useState(total)

  if (tickupDuration) {
    hooks.useLayoutEffect(
      () => tickup(currentTotal, total, tickupDuration, (value) => setCurrentTotal(Math.round(value))),
      [total],
    )
  }

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("coins-field", className, getFontClassByDigits(currentTotal)),
      children: currentTotal,
    },
  )
}

module.exports = { CoinsField }
