/**
 * Restored source for Webpack Module #46696.
 *
 * Renders the stage/level win reward popup, including rewarded-ads claiming,
 * coins payout, and continuation callback flow.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesCore, AdResponse } = require("../core/CoreTypes")
const { Localize } = require("../core/Localize")
const ui = require("./UIContext")
const { SIOConstants } = require("../core/SIOConstants")
const { showReward, showAd } = require("../core/UIHelpers")
const { TypesGame } = require("../core/TypesGame")
const { CoinsIndicator } = require("./CoinsIndicator")
const { PopupWinIndicator } = require("./PopupWinIndicator")
const { ContinueButton } = require("./ContinueButton")
const { NoThanksButton } = require("./NoThanksButton")
const { WinRays } = require("./WinRays")
const { WinStars } = require("./WinStars")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { ClaimButton } = require("./ClaimButton")
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("20621")
const { WaitAction } = require("../core/WaitAction")

function WinStagePopup(props) {
  const animationEnabled = props.animationEnabled === undefined ? true : props.animationEnabled
  const coins = props.coins === undefined ? 9999 : props.coins
  const showRewardAd = props.showRewardAd === undefined ? true : props.showRewardAd
  const onContinue = props.onContinue
  const model = ui.useInjection(TypesGame.model)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const [popupInvisible, setPopupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay)
  const [state, setState] = hooks.useState({
    startCoinsTotal: model.cookie.coins,
    adViewed: false,
    reward: 0,
  })
  const claimReward = coins * SIOConstants.CLAIM_FACTOR

  hooks.useEffect(() => {
    if (!state.adViewed) {
      const timeout = setTimeout(() => {
        setState({ ...state, reward: coins })
      }, 200)
      return () => clearTimeout(timeout)
    }

    setState({ ...state, reward: claimReward })
  }, [state.adViewed])

  async function continueWithReward(shared = false) {
    setPopupInvisible(true)
    model.cookie.coins += state.reward
    await WaitAction.ms(UIConstants.coinsIndicator.updateDelay)
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
    if (onContinue) await onContinue(shared)
  }

  const canClaim = showRewardAd && !state.adViewed

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
          className: "popup-win-level",
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: Localize.get("ui-win-win_label", "YOU WON"),
              }),
              animationEnabled
                ? jsxRuntime.jsxs("div", {
                    className: "popup__main-animation",
                    children: [
                      jsxRuntime.jsx(SVG.PopupWinCup, {}),
                      jsxRuntime.jsx(WinRays, {}),
                      jsxRuntime.jsx(WinStars, {}),
                    ],
                  })
                : null,
              jsxRuntime.jsxs("div", {
                className: "popup__body",
                children: [
                  jsxRuntime.jsx("div", {
                    className: "popup__sub-title",
                    children: Localize.get("ui-win-reward_label", "YOUR REWARD"),
                  }),
                  jsxRuntime.jsx(PopupWinIndicator, {
                    className: classNames("coins-indicator", "coins-indicator_internal"),
                    total: state.reward,
                  }),
                ],
              }),
              canClaim
                ? jsxRuntime.jsx("div", {
                    className: "popup__body-buttons",
                    children: jsxRuntime.jsx("div", {
                      className: classNames("popup__body-button", "center"),
                      children: state.adViewed
                        ? null
                        : jsxRuntime.jsx(ClaimButton, {
                            onClick: async () => {
                              const response = await showReward()
                              if (response === AdResponse.PLAYED) {
                                setState((current) => ({
                                  ...current,
                                  adViewed: true,
                                }))
                              }
                            },
                            reward: claimReward,
                          }),
                    }),
                  })
                : null,
              canClaim
                ? jsxRuntime.jsx(NoThanksButton, {
                    delay: UIConstants.popup.noThanksButtonDelay,
                    onClick: async () => {
                      await showAd()
                      await continueWithReward(false)
                    },
                  })
                : jsxRuntime.jsx(ContinueButton, {
                    onClick: () => continueWithReward(true),
                  }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { WinStagePopup }
