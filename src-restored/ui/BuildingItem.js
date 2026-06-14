/**
 * Restored source for Webpack Module #83719.
 *
 * Building skin preview tile used inside the shop item card.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("70535")
const { TexturedShopItem } = require("./TexturedShopItem")

function BuildingItem(props) {
  const textureUrl = props.textureUrl === undefined ? "" : props.textureUrl
  const playerColor = props.playerColor === undefined ? undefined : props.playerColor
  const className = props.className === undefined ? "" : props.className

  return jsxRuntime.jsx(
    "div",
    {
      className: "shop-item-building",
      children: jsxRuntime.jsx(TexturedShopItem, {
        textureUrl,
        className,
        playerColor,
      }),
    },
  )
}

module.exports = { BuildingItem }
