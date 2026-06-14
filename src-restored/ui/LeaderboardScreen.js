/**
 * Restored source for Webpack Module #2906.
 *
 * Leaderboard screen with the original top-bar and coin-update subscription.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { TypesSocial } = require("../core/CoreTypes")
const { GameEvents } = require("../core/GameEvents")
const { TypesGame } = require("../core/TypesGame")
const { BackButton } = require("./BackButton")
const { LeaderBoardTabs } = require("./LeaderBoardTabs")
const { CoinsIndicator } = require("./CoinsIndicator")
const classNames = require("./classNames").default
const hooks = require("../../src-cjs/30396__mod.js")
require("./styleSideEffects")("57862")

function LeaderboardScreen(props) {
  const model = ui.useInjection(TypesGame.model)
  ui.useInjection(TypesSocial.model)
  const initialState = {
    coins: model.cookie.coins,
    startCoins: model.cookie.coins,
  }
  const [, setCoinsState] = hooks.useState(() => initialState)

  ui.useEventListener(GameEvents.COINS_UPDATED, (event) => {
    setCoinsState((current) => __assign(__assign({}, current), event))
  })

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: classNames("screen", "screen__leaderboard") },
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
          jsxRuntime.jsx(
            "div",
            __assign(
              { className: classNames("container") },
              {
                children: jsxRuntime.jsx(LeaderBoardTabs, {
                  activeTab: 0,
                  className: "leaderboards-tabs",
                  leaderboardsProps: props,
                }),
              },
            ),
          ),
        ],
      },
    ),
  )
}

module.exports = { LeaderboardScreen }
