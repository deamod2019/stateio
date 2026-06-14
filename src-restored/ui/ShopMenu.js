/**
 * Restored source for Webpack Module #83643.
 *
 * Shop tab inventory and reward-ad unlock handling.
 */
"use strict"

const { __assign, __awaiter, __generator, __read } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { AdResponse } = require("../core/CoreTypes")
const ui = require("./UIContext")
const { SelectableColorCss } = require("../core/SelectableSkins")
const { playUIClickSound, showReward } = require("../../src-cjs/37725__mod.js")
const { TypesGame } = require("../core/TypesGame")
const { ShopItem } = require("./ShopItem")
const { ShopType, UIConstants } = require("../../src-cjs/74083_UIConstants.js")
const classNames = require("./classNames").default
const hooks = require("../../src-cjs/30396__mod.js")
const { ShopTabHeader } = require("./ShopTabHeader")

let currentTabType = UIConstants.shop.defaultTabType

function isDebugUnlockEnabled() {
  return undefined
}

function ShopMenu() {
  const model = ui.useInjection(TypesGame.model)
  const skinManager = ui.useInjection(TypesGame.skinManager)
  const initialState = {
    shopItems: [],
    adViewed: false,
    lastOpenedTab: currentTabType,
    selectedItemId: null,
  }
  const stateParts = __read(
    hooks.useState(() => initialState),
    2,
  )
  const state = stateParts[0]
  const setState = stateParts[1]
  const shopItems = state.shopItems
  const adViewed = state.adViewed

  const showRewardAndUnlock = (unlock) =>
    __awaiter(undefined, undefined, undefined, function* showRewardAndUnlockGenerator() {
      setState((current) => __assign(__assign({}, current), { adViewed: false }))
      const response = yield showReward()
      if (response === AdResponse.PLAYED) {
        unlock()
        setState((current) => __assign(__assign({}, current), { adViewed: true }))
      }
    })

  function selectStoredItem(item, select) {
    if (!item.selected) {
      playUIClickSound()
      select()
      setState((current) => __assign(__assign({}, current), { selectedItemId: item.id }))
    }
  }

  function createFighterClick(item) {
    return function onFighterClick() {
      if (item.stored) {
        selectStoredItem(item, () => {
          model.cookie.selected_fighter_id = item.id
        })
      } else {
        if (isDebugUnlockEnabled()) return void model.cookie.addUserFighter(item.id)
        showRewardAndUnlock(() => {
          model.cookie.addUserFighter(item.id)
        })
      }
    }
  }

  function createBuildingClick(item) {
    return function onBuildingClick() {
      if (item.stored) {
        selectStoredItem(item, () => {
          model.cookie.selected_building_id = item.id
        })
      } else {
        if (isDebugUnlockEnabled()) return void model.cookie.addUserBuilding(item.id)
        showRewardAndUnlock(() => {
          model.cookie.addUserBuilding(item.id)
        })
      }
    }
  }

  function createColorClick(item) {
    return function onColorClick() {
      return (
        item.stored &&
        selectStoredItem(item, () => {
          model.cookie.selected_color_set_id = item.id
        })
      )
    }
  }

  function getTabTitle(type) {
    switch (type) {
      case ShopType.BUILDING:
        return Localize.get("ui-store-building", "BUILDING")
      case ShopType.FIGHTER:
        return Localize.get("ui-store-fighter", "FIGHTER")
      default:
        return Localize.get("ui-store-color", "COLOR")
    }
  }

  function getSelectedColorClassName() {
    return (
      SelectableColorCss.find((item) => item.id === model.cookie.selectedColorSet?.id)?.className || ""
    )
  }

  function createItemsForTab(type) {
    const selectedColorSet = model.cookie.selectedColorSet?.data
    const colorClassName = getSelectedColorClassName()

    switch (type) {
      case ShopType.BUILDING:
        return skinManager.availableBuildings.map((item) => ({
          id: item.id,
          type,
          content: {
            selectedColorSet,
            textureUrl: item.ui_textureUrl,
            isSelected: item.selected,
            stored: item.stored,
            colorClassName,
            onClick: createBuildingClick(item),
          },
        }))
      case ShopType.FIGHTER:
        return skinManager.availableFighters.map((item) => ({
          id: item.id,
          type,
          content: {
            selectedColorSet,
            textureUrl: item.ui_textureUrl,
            isSelected: item.selected,
            stored: item.stored,
            colorClassName,
            onClick: createFighterClick(item),
          },
        }))
      case ShopType.COLOR:
        return model.cookie.availableColors.map((item) => ({
          id: item.id,
          type,
          content: {
            isSelected: item.selected,
            stored: item.stored,
            colorData: item.data,
            onClick: createColorClick(item),
          },
        }))
    }
    return []
  }

  function createTabs() {
    return UIConstants.shop.tabTypes.map((type) => {
      const isActive = type === currentTabType
      const items = createItemsForTab(type)
      const showNotification =
        items.filter((item) => !(item.content === null || item.content === undefined ? undefined : item.content.stored))
          .length > 0

      return {
        type,
        isActive,
        items,
        header: {
          className: isActive ? "shop-menu__tab-header_active" : "",
          showNotification,
          title: getTabTitle(type),
          onClick() {
            playUIClickSound()
            currentTabType = type
            setState((current) => __assign(__assign({}, current), { lastOpenedTab: type }))
          },
        },
      }
    })
  }

  hooks.useEffect(
    () => {
      const nextShopItems = createTabs()
      setState((current) => __assign(__assign({}, current), { shopItems: nextShopItems }))
    },
    [adViewed, state.lastOpenedTab, state.selectedItemId],
  )

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: classNames("shop-menu") },
      {
        children: [
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: classNames("shop-menu__tabs-header") },
              {
                children: shopItems.map((item) => jsxRuntime.jsx(ShopTabHeader, __assign({}, item.header))),
              },
            ),
          ),
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: classNames("shop-menu__tabs-content") },
              {
                children: jsxRuntime.jsx(
                  "div",
                  __assign(
                    { className: classNames("shop-menu__tab-content") },
                    {
                      children: shopItems.map((tab) =>
                        tab.isActive
                          ? tab.items.map((item) =>
                              jsxRuntime.jsx(ShopItem, __assign({ id: item.id, type: item.type }, item.content)),
                            )
                          : null,
                      ),
                    },
                  ),
                ),
              },
            ),
          ),
        ],
      },
    ),
  )
}

module.exports = { ShopMenu }
