/**
 * Restored source for Webpack Module #8189.
 *
 * Renders the level-completed sharing popup, including the final screenshot,
 * share control, and continue/no-thanks continuation path.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const { TypesCore, TypesSocial } = require("../core/CoreTypes")
const { CoinsIndicator } = require("./CoinsIndicator")
const { NoThanksButton } = require("./NoThanksButton")
const { Winner } = require("./Winner")
const { WinRays } = require("./WinRays")
const { WinStars } = require("./WinStars")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
require("./styleSideEffects")("28130")
const { WaitAction } = require("../core/WaitAction")
const { Localize } = require("../core/Localize")
const { ContinueButton } = require("./ContinueButton")

function ShareLevelResultPopup(props) {
  const shareImage = props.shareImage
  const onContinue = props.onContinue
  const model = ui.useInjection(TypesGame.model)
  const social = ui.useInjection(TypesSocial.model)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const [popupInvisible, setPopupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay)
  const screenshot = model.screenshots[model.screenshots.length - 1]

  async function close(shared = false) {
    setPopupInvisible(true)
    await WaitAction.ms(UIConstants.coinsIndicator.updateDelay)
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
    if (onContinue) await onContinue(shared)
  }

  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames("popups"),
      children: [
        jsxRuntime.jsx("div", {
          className: classNames("coins-bar"),
          children: jsxRuntime.jsx(CoinsIndicator, {
            className: classNames("coins-indicator", "coins-indicator_filled"),
            total: model.cookie.coins,
          }),
        }),
        jsxRuntime.jsx("div", {
          className: classNames("popup-share-level-completed"),
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: jsxRuntime.jsx("div", {
                  className: "popup__title-detailed",
                  children: Localize.get(
                    "level_completed_message",
                    "ALL STAGES COMPLETED!",
                  ),
                }),
              }),
              jsxRuntime.jsxs("div", {
                className: "popup__body",
                children: [
                  jsxRuntime.jsx(Winner, { user: social.me }),
                  jsxRuntime.jsx(WinRays, {}),
                  jsxRuntime.jsx(WinStars, {}),
                  jsxRuntime.jsx("img", {
                    className: classNames("level-image"),
                    src: screenshot,
                  }),
                ],
              }),
              jsxRuntime.jsx(ui.ShareComponent, {
                invisible: popupInvisible || !shareImage,
                screenshot: shareImage,
                onShare: close,
              }),
              shareImage && shareImage !== ""
                ? jsxRuntime.jsx(NoThanksButton, {
                    delay: UIConstants.popup.noThanksButtonDelay,
                    onClick: close,
                  })
                : jsxRuntime.jsx(ContinueButton, { onClick: close }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { ShareLevelResultPopup }
