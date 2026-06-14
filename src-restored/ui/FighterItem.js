/**
 * Restored source for Webpack Module #30851.
 *
 * Fighter shop tile composed from three repeated textured units.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("10471")
const hooks = require("./preactHooks")
const { TexturedShopItem } = require("./TexturedShopItem")

function FighterItem(props) {
  const textureUrl = props.textureUrl === undefined ? "" : props.textureUrl
  const playerColor = props.playerColor === undefined ? undefined : props.playerColor
  const className = props.className === undefined ? "" : props.className
  const firstCellRef = hooks.useRef(null)

  return jsxRuntime.jsxs(
    "div",
    {
      className: "shop-item-fighter",
      children: [
        jsxRuntime.jsx("div", {
          ref: firstCellRef,
          className: "shop-item-fighter__cell",
          children: jsxRuntime.jsx(TexturedShopItem, {
            className,
            textureUrl,
            playerColor,
          }),
        }),
        jsxRuntime.jsxs("div", {
          className: "shop-item-fighter__cell",
          children: [
            jsxRuntime.jsx("div", {
              className: "shop-item-fighter__cell",
              children: jsxRuntime.jsx(TexturedShopItem, {
                className,
                textureUrl,
                playerColor,
              }),
            }),
            jsxRuntime.jsx("div", {
              className: "shop-item-fighter__cell",
              children: jsxRuntime.jsx(TexturedShopItem, {
                className,
                textureUrl,
                playerColor,
              }),
            }),
          ],
        }),
      ],
    },
  )
}

module.exports = { FighterItem }
