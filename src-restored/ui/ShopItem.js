/**
 * Restored source for Webpack Module #76282.
 *
 * Generic shop card for fighter, building, and color inventory entries.
 */
"use strict"

const { __assign, __read } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const ui = require("./UIContext")
const { ShopType } = require("../../src-cjs/74083_UIConstants.js")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
const { BuildingItem } = require("./BuildingItem")
const { FighterItem } = require("./FighterItem")
const { ColorItem } = require("./ColorItem")

function p() {
  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: "shop-item__price" },
      {
        children: [
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: "shop-item__price-text" },
              {
                children: jsxRuntime.jsx("span", {
                  children: Localize.get("ui-fillbox-get", "GET"),
                }),
              },
            ),
          ),
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: "shop-item__price-video-icon" },
              { children: jsxRuntime.jsx(SVG.Video, {}) },
            ),
          ),
        ],
      },
    ),
  )
}

function ShopItem(props) {
  const colorClassName = props.colorClassName === undefined ? "" : props.colorClassName
  const className = props.className === undefined ? "" : props.className
  const isSelected = props.isSelected === undefined ? false : props.isSelected
  const onClick = props.onClick === undefined ? function noop() {} : props.onClick
  const stored = props.stored === undefined ? false : props.stored
  const textureUrl = props.textureUrl === undefined ? "" : props.textureUrl
  const selectedColorSet = props.selectedColorSet === undefined ? undefined : props.selectedColorSet
  const type = props.type === undefined ? ShopType.COLOR : props.type
  const colorData = props.colorData === undefined ? undefined : props.colorData
  const invisible = __read(ui.visibilityEffect(200), 1)[0]

  return jsxRuntime.jsxs(
    "div",
    __assign(
      {
        onClick,
        className: classNames("shop-item", className, {
          invisible,
          "shop-item_selected": isSelected,
        }),
      },
      {
        children: [
          jsxRuntime.jsx("div", { className: "shop-item__overlay" }),
          type === ShopType.COLOR
            ? jsxRuntime.jsx(ColorItem, { colorData })
            : type === ShopType.BUILDING
              ? jsxRuntime.jsx(BuildingItem, {
                  textureUrl,
                  className: colorClassName,
                  playerColor: selectedColorSet,
                })
              : jsxRuntime.jsx(FighterItem, {
                  textureUrl,
                  className: colorClassName,
                  playerColor: selectedColorSet,
                }),
          jsxRuntime.jsx("div", {
            className: classNames("shop-item-icon", {
              "shop-item-icon_selected": isSelected,
            }),
          }),
          stored ? null : jsxRuntime.jsx(p, {}),
        ],
      },
    ),
  )
}

module.exports = { ShopItem }
