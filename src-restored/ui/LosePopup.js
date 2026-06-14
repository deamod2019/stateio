/**
 * Restored source for Webpack Module #53841.
 *
 * Renders the lose reward popup, pays consolation coins, and advances to the
 * next flow action after the popup closes.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesCore, TypesFlow } = require("../core/CoreTypes")
const { Localize } = require("../core/Localize")
const { lazyGet } = require("../core/RuntimeCore")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const { CoinsIndicator } = require("./CoinsIndicator")
const { PopupWinIndicator } = require("./PopupWinIndicator")
const { ContinueButton } = require("./ContinueButton")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("52388")
const { WaitAction } = require("../core/WaitAction")

function LosePopup(props) {
  const animationEnabled = props.animationEnabled === undefined ? true : props.animationEnabled
  const coins = props.coins === undefined ? 999 : props.coins
  const model = ui.useInjection(TypesGame.model)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const initialState = { startCoinsTotal: model.cookie.coins, reward: coins, visible: false }
  const updateDelay = UIConstants.coinsIndicator.updateDelay
  const [state, setState] = hooks.useState(() => initialState)

  hooks.useEffect(() => {
    const timeout = setTimeout(() => {
      setState((current) => ({ ...current, visible: true }))
    }, UIConstants.popup.startDelay)
    return () => clearTimeout(timeout)
  }, [])

  function addCoins(amount) {
    model.cookie.coins += amount
  }

  async function closeAndContinue() {
    addCoins(state.reward)
    await WaitAction.ms(updateDelay)
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
    const levelNext = lazyGet(TypesFlow.LevelNext)
    if (levelNext === null || levelNext === undefined) return
    levelNext.run()
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
          className: "popup-lose",
          children: jsxRuntime.jsxs("div", {
            className: classNames("popup", { visible: state.visible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: Localize.get("ui-lose-lose_label", "YOU LOSE"),
              }),
              animationEnabled
                ? jsxRuntime.jsx("div", {
                    className: "popup__main-animation",
                    children: jsxRuntime.jsx(SVG.PopupLose, {}),
                  })
                : null,
              jsxRuntime.jsx("div", {
                className: "popup__body",
                children: jsxRuntime.jsx(PopupWinIndicator, {
                  className: classNames(
                    "coins-indicator",
                    "coins-indicator_internal",
                  ),
                  total: state.reward,
                }),
              }),
              jsxRuntime.jsx(ContinueButton, { onClick: closeAndContinue }),
            ],
          }),
        }),
      ],
    },
  )
}

module.exports = { LosePopup }
