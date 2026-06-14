/**
 * Restored source for Webpack Module #96126.
 *
 * Offline earnings reward popup with multiplier ad flow.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesCore, AdResponse } = require("../core/CoreTypes")
const { Localize } = require("../core/Localize")
const { WaitAction } = require("../core/WaitAction")
const ui = require("./UIContext")
const { showReward, showAd } = require("../core/UIHelpers")
const { TypesGame } = require("../core/TypesGame")
const { ClaimButton } = require("./ClaimButton")
const { CoinsIndicator } = require("./CoinsIndicator")
const { PopupWinIndicator } = require("./PopupWinIndicator")
const { ContinueButton } = require("./ContinueButton")
const { NoThanksButton } = require("./NoThanksButton")
const { WinRays } = require("./WinRays")
const { WinStars } = require("./WinStars")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { MultiplyBonus } = require("./MultiplyBonus")
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("98919")

function OfflineEarningsPopup(props) {
  const coins = props.coins === undefined ? 1000 : props.coins
  const hours = props.hours === undefined ? 23 : props.hours
  const minutes = props.minutes === undefined ? 59 : props.minutes
  const seconds = props.seconds === undefined ? 59 : props.seconds
  const animationEnabled =
    props.animationEnabled === undefined ? true : props.animationEnabled
  const model = ui.useInjection(TypesGame.model)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const initialState = {
    startCoinsTotal: model.cookie.coins,
    adViewed: false,
    multiplierSelected: false,
    mult: 1,
    reward: coins,
  }
  const [state, setState] = hooks.useState(() => initialState)
  const [popupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay, false, [
    state.adViewed,
  ])
  const updateDelay = UIConstants.coinsIndicator.updateDelay

  hooks.useEffect(() => {
    if (state.adViewed && state.multiplierSelected && state.mult > 1) {
      setState((current) =>
        ({ ...current, reward: current.reward * current.mult }),
      )
    }
  }, [state.multiplierSelected, state.adViewed, state.mult])

  function addCoins(amount) {
    model.cookie.coins += amount
  }

  async function closePopup() {
    model.cookie.syncTime()
    await (async () => {
      addCoins(state.reward)
      await WaitAction.ms(updateDelay)
      dispatcher.emit(ui.UIEvents.POPUP, { id: null })
    })()
  }

  return jsxRuntime.jsxs(
    "div",
    {
      className: "popups",
      children: [
        jsxRuntime.jsx("div", {
          className: classNames("coins-bar"),
          children: jsxRuntime.jsx(CoinsIndicator, {
            className: classNames("coins-indicator", "coins-indicator_filled"),
            total: state.startCoinsTotal,
          }),
        }),
        jsxRuntime.jsx("div", {
          className: classNames("popup-offline-earnings"),
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: Localize.get("ui-offline-title", "OFFLINE EARNINGS"),
              }),
              animationEnabled
                ? jsxRuntime.jsxs("div", {
                    className: "popup__main-animation",
                    children: [
                      jsxRuntime.jsx(SVG.OfflineEarnings, {}),
                      jsxRuntime.jsx(WinRays, {}),
                      jsxRuntime.jsx(WinStars, {}),
                    ],
                  })
                : null,
              jsxRuntime.jsxs("div", {
                className: "popup__body",
                children: [
                  jsxRuntime.jsx("div", {
                    className: classNames("popup__body-line"),
                    children: Localize.get("ui-offline-description", "YOU WERE AWAY FOR:"),
                  }),
                  jsxRuntime.jsxs("div", {
                    className: classNames("popup__body-line", "time-away"),
                    children: [hours, "H:", minutes, "M:", seconds, "S"],
                  }),
                  jsxRuntime.jsx(PopupWinIndicator, {
                    total: state.reward,
                    className: classNames(
                      "coins-indicator",
                      "coins-indicator_internal",
                      "coins-indicator_filled",
                    ),
                  }),
                  jsxRuntime.jsx("div", {
                    className: classNames("popup__body-line"),
                    children: jsxRuntime.jsx(MultiplyBonus, {
                      paused: state.multiplierSelected,
                      onPause(multiplier) {
                        setState((current) => ({
                          ...current,
                          mult: multiplier,
                        }))
                      },
                    }),
                  }),
                ],
              }),
              state.adViewed
                ? null
                : jsxRuntime.jsx("div", {
                    className: "popup__body-buttons",
                    children: jsxRuntime.jsx("div", {
                      className: classNames("popup__body-button", "center"),
                      children: state.adViewed
                        ? null
                        : jsxRuntime.jsx(ClaimButton, {
                            onClick: async () => {
                              setState((current) => ({
                                ...current,
                                multiplierSelected: true,
                              }))
                              const response = await showReward()
                              if (response === AdResponse.PLAYED) {
                                setState((current) => ({
                                  ...current,
                                  adViewed: true,
                                }))
                              }
                            },
                            text: Localize.get("ui-offline-mult_button", "MULTIPLY"),
                          }),
                    }),
                  }),
              state.adViewed
                ? jsxRuntime.jsx(ContinueButton, { onClick: closePopup })
                : jsxRuntime.jsx(NoThanksButton, {
                    delay: UIConstants.popup.noThanksButtonDelay,
                    onClick: async () => {
                      await showAd()
                      closePopup()
                    },
                  }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { OfflineEarningsPopup }
