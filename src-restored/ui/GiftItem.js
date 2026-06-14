/**
 * Restored source for Webpack Module #79147.
 *
 * Gift preview tile used by the gift fill-box popup.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("36050")
const {
  SelectableColorCss,
  SelectableBuildingDataSet,
  SelectableFighterDataSet,
  SkinType,
} = require("../core/SelectableSkins")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const classNames = require("./classNames").default
const { BuildingItem } = require("./BuildingItem")
const { FighterItem } = require("./FighterItem")
const { Images } = require("./SVGAssets")

function GiftRewardPreview(props) {
  const type = props.type
  const id = props.id
  const selectedColorSet = ui.useInjection(TypesGame.model).cookie.selectedColorSet
  const playerColor = selectedColorSet === null || selectedColorSet === undefined ? undefined : selectedColorSet.data
  const colorClass =
    (
      SelectableColorCss.find((color) => {
        return color.id === (selectedColorSet === null || selectedColorSet === undefined ? undefined : selectedColorSet.id)
      }) || {}
    ).className || ""

  switch (type) {
    case SkinType.BUILDING:
      return jsxRuntime.jsx(BuildingItem, {
        textureUrl: (
          SelectableBuildingDataSet.find((skin) => {
            return skin.id === id
          }) || {}
        ).ui_textureUrl,
        className: colorClass,
        playerColor,
      })
    case SkinType.FIGHTER:
      return jsxRuntime.jsx(FighterItem, {
        textureUrl: (
          SelectableFighterDataSet.find((skin) => {
            return skin.id === id
          }) || {}
        ).ui_textureUrl,
        className: colorClass,
        playerColor,
      })
  }
}

function GiftItem(props) {
  const reward = props.reward

  return jsxRuntime.jsx(
    "span",
    {
      className: classNames("shop-item", "gift-item"),
      children: reward
        ? jsxRuntime.jsx(GiftRewardPreview, {
            id: reward.id,
            type: reward.type,
          })
        : jsxRuntime.jsx(Images.Gift, {}),
    },
  )
}

module.exports = { GiftItem }
