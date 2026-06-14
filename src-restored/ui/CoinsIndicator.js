/**
 * Restored source for Webpack Module #32715.
 *
 * Coin total indicator synchronized from game and Yandex sync events.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { GameEvents } = require("../core/GameEvents")
const { CoinsField } = require("./CoinsField")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
require("./styleSideEffects")("13283")

function CoinsIndicator(props) {
  const className = props.className
  const total = props.total === undefined ? 600 : props.total
  const [coins, setCoins] = hooks.useState(total)

  ui.useEventListener(GameEvents.COINS_UPDATED, (event) => setCoins(event.coins))
  ui.useEventListener("YANDEX_SYNC", (event) => setCoins(event.coins))

  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames(className),
      children: [
        jsxRuntime.jsx(CoinsField, {
          className: classNames("coins-indicator__total"),
          total: coins,
        }),
        jsxRuntime.jsx("div", {
          className: classNames("coins-indicator__icon"),
          children: jsxRuntime.jsx(SVG.COINS, {}),
        }),
      ],
    },
  )
}

module.exports = { CoinsIndicator }
