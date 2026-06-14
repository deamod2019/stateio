/**
 * Restored source for Webpack Module #56184.
 *
 * Gift fill-box popup, including rewarded-ad collection and continuation flow.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("92015")
const { Localize } = require("../core/Localize")
const { lazyGet } = require("../core/RuntimeCore")
const { TypesCore, TypesFlow, AdResponse } = require("../core/CoreTypes")
const ui = require("./UIContext")
const { showReward, showAd } = require("../core/UIHelpers")
const { TypesGame } = require("../core/TypesGame")
const { ClaimButton } = require("./ClaimButton")
const { ContinueButton } = require("./ContinueButton")
const { NoThanksButton } = require("./NoThanksButton")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { Images } = require("./SVGAssets")
const { CoinsIndicator } = require("./CoinsIndicator")
const { CapturingAnimated } = require("./CapturingAnimated")
const { SkinType } = require("../core/SelectableSkins")
const { GiftItem } = require("./GiftItem")

function GiftPopup(props) {
  const initialState = { adViewed: false, canCollect: false }
  const captured = props.captured
  const total = props.total
  const model = ui.useInjection(TypesGame.model)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const isFinished = captured >= total
  const [popupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay)
  const [state, setState] = hooks.useState(() => initialState)

  function closePopup() {
    setState((current) => ({ ...current }))
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
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
            total: model.cookie.coins,
          }),
        }),
        jsxRuntime.jsx("div", {
          className: classNames("popup-gift"),
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: Localize.get("ui-fillbox-title", "GIFT"),
              }),
              jsxRuntime.jsxs("div", {
                className: "popup__body",
                children: [
                  jsxRuntime.jsx(GiftItem, {
                    reward: state.adViewed ? props.reward : null,
                  }),
                  jsxRuntime.jsx(CapturingAnimated, {
                    from: captured - 1,
                    to: captured,
                    startDelay: 1,
                    total,
                    onAnimationComplete() {
                      if (isFinished) {
                        setState({ ...state, canCollect: true })
                      }
                    },
                  }),
                  jsxRuntime.jsx("div", {
                    className: classNames("decoration-gift", "decoration-gift_top-left"),
                    children: jsxRuntime.jsx(Images.Gift, {}),
                  }),
                  jsxRuntime.jsx("div", {
                    className: classNames(
                      "decoration-gift",
                      "decoration-gift_right-bottom",
                      "decoration-gift_small",
                    ),
                    children: jsxRuntime.jsx(Images.Gift, {}),
                  }),
                ],
              }),
              jsxRuntime.jsx("div", {
                className: "popup__body-buttons",
                children: jsxRuntime.jsx("div", {
                  className: classNames("popup__body-button", "center", {
                    invisible: state.adViewed || !state.canCollect,
                  }),
                  children: state.adViewed
                    ? null
                    : jsxRuntime.jsx(ClaimButton, {
                        onClick: async () => {
                          const response = await showReward()
                          if (response === AdResponse.PLAYED) {
                            if (props.reward) {
                              switch (props.reward.type) {
                                case SkinType.BUILDING:
                                  model.cookie.addUserBuilding(props.reward.id)
                                  break
                                case SkinType.FIGHTER:
                                  model.cookie.addUserFighter(props.reward.id)
                                  break
                              }
                              model.onShopScreenChanged()
                            }
                            setState((current) => ({
                              ...current,
                              adViewed: true,
                            }))
                          }
                        },
                      }),
                }),
              }),
              state.adViewed || !isFinished
                ? jsxRuntime.jsx(ContinueButton, {
                    onClick: async () => {
                      closePopup()
                      if (props.onContinue) return props.onContinue(true)
                      const levelNext = lazyGet(TypesFlow.LevelNext)
                      return levelNext === null || levelNext === undefined ? undefined : levelNext.run()
                    },
                  })
                : jsxRuntime.jsx(NoThanksButton, {
                    delay: UIConstants.popup.noThanksButtonDelay + 1000,
                    onClick: async () => {
                      await showAd()
                      closePopup()
                      return props.onContinue && props.onContinue(false)
                    },
                  }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { GiftPopup }
