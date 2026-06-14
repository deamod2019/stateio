/**
 * Restored source for Webpack Module #78199.
 *
 * Renders the social battle-results popup and closes it through the UI dispatcher
 * before forwarding the selected continuation path.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesCore } = require("../core/CoreTypes")
const { Localize } = require("../core/Localize")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const { ContinueButton } = require("./ContinueButton")
const { UIConstants } = require("../core/UIConstants")
const { CoinsIndicator } = require("./CoinsIndicator")
const classNames = require("./classNames").default
const { BattleResults } = require("./BattleResults")
require("./styleSideEffects")("21774")

function BattleResultsPopup(props) {
  const win = props.win !== undefined && props.win
  const onContinue = props.onContinue
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const model = ui.useInjection(TypesGame.model)
  const [popupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay)
  const passedStage = model.currentContinent.stageLevel - 1
  const continentId = model.currentContinent.data.id

  async function close(shared = true) {
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
    if (onContinue) await onContinue(shared)
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
          className: classNames("popup-battle-results"),
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsxs("div", {
                className: "popup__title",
                children: [
                  Localize.get("ui-battle-battle_title", "Battle Results"),
                  jsxRuntime.jsxs("div", {
                    className: classNames("popup__title-detailed", {
                      "popup__title-detailed_lose": !win,
                    }),
                    children: [
                      jsxRuntime.jsxs("span", { children: [continentId, " "] }),
                      jsxRuntime.jsx("span", { children: " stage " }),
                      `#${win ? passedStage + 1 : passedStage + 2}`,
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx("div", {
                className: "popup__body",
                children: jsxRuntime.jsx(BattleResults, {
                  passedStage,
                  isLevelFinished: model.currentContinent.isFinished,
                }),
              }),
              win
                ? jsxRuntime.jsx(ContinueButton, {
                    onClick() {
                      return close(true)
                    },
                  })
                : jsxRuntime.jsx(ui.Button, {
                    className: classNames("try-again-button", "btn-green"),
                    onClick() {
                      return close(false)
                    },
                    children: Localize.get("ui-try-again-button", "TRY AGAIN"),
                  }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { BattleResultsPopup }
