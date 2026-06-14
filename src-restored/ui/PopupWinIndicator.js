/**
 * Restored source for Webpack Module #49071.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
require("./styleSideEffects")("13283")
const { UIConstants } = require("../core/UIConstants")
const { CoinsField } = require("./CoinsField")
const { SVG } = require("./SVGAssets")

function PopupWinIndicator(props) {
  const className = props.className
  const total = props.total === undefined ? 600 : props.total

  return jsxRuntime.jsx(
    "div",
    {
      className: "absolute_box",
      children: jsxRuntime.jsxs("div", {
        className: classNames(className),
        children: [
          jsxRuntime.jsx(CoinsField, {
            className: classNames("coins-indicator__total", "coins-indicator__plus"),
            total,
            tickupDuration: total > 0 ? UIConstants.popup.updateCoinsTime : 0,
          }),
          jsxRuntime.jsx("div", {
            className: classNames("coins-indicator__icon"),
            children: jsxRuntime.jsx(SVG.COINS, {}),
          }),
        ],
      }),
    },
  )
}

module.exports = { PopupWinIndicator }
