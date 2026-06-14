/**
 * Restored source for Webpack Module #76742.
 *
 * Shop screen with top-bar navigation and cleanup refresh behavior.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const { BackButton } = require("./BackButton")
const { CoinsIndicator } = require("./CoinsIndicator")
const { ShopPreview } = require("./ShopPreview")
const classNames = require("./classNames").default
const { ShopMenu } = require("./ShopMenu")
require("./styleSideEffects")("61750")
const hooks = require("../../src-cjs/30396__mod.js")

function ShopScreen() {
  const model = ui.useInjection(TypesGame.model)

  hooks.useEffect(() => {
    return () => model.onShopScreenChanged()
  })

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: classNames("screen", "screen__shop") },
      {
        children: [
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: classNames("screen-top", "visible") },
              {
                children: jsxRuntime.jsxs(
                  "div",
                  __assign(
                    { className: classNames("container", "top-bar") },
                    {
                      children: [
                        jsxRuntime.jsx(BackButton, {
                          onClick() {
                            model.goToLobby()
                          },
                        }),
                        jsxRuntime.jsx(CoinsIndicator, {
                          className: classNames("coins-indicator", "coins-indicator_filled"),
                          total: model.cookie.coins,
                        }),
                      ],
                    },
                  ),
                ),
              },
            ),
          ),
          jsxRuntime.jsxs(
            "div",
            __assign(
              { className: classNames("container", "shop-area") },
              {
                children: [
                  jsxRuntime.jsx(ShopPreview, {}),
                  jsxRuntime.jsx(ShopMenu, {}),
                ],
              },
            ),
          ),
        ],
      },
    ),
  )
}

module.exports = { ShopScreen }
