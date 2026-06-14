/**
 * Restored source for Webpack Module #56532.
 *
 * Exit-confirmation popup with the original yes/no callback contract.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { CancelButton } = require("./CancelButton")
const { ConfirmButton } = require("./ConfirmButton")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const ui = require("./UIContext")
require("./styleSideEffects")("21391")

function ConfirmPopup(props) {
  const onConfirm = props.onConfirm
  const [popupInvisible] = ui.visibilityEffect(UIConstants.popup.startDelay)

  return jsxRuntime.jsx(
    "div",
    {
      className: "popups",
      children: jsxRuntime.jsxs("div", {
        className: classNames("popup-confirm"),
        children: [
          jsxRuntime.jsxs("div", {
            className: classNames("popup", { invisible: popupInvisible }),
            children: [
              jsxRuntime.jsx("div", {
                className: "popup__title",
                children: Localize.get("ui-exit-exit_label", "EXIT"),
              }),
              jsxRuntime.jsx("div", {
                className: "popup__body",
                children: jsxRuntime.jsx("div", {
                  children: Localize.get("ui-exit-description", "Leave the game?"),
                }),
              }),
              jsxRuntime.jsxs("div", {
                className: "popup__body-buttons",
                children: [
                  jsxRuntime.jsx("div", {
                    className: classNames("popup__body-button", "left"),
                    children: jsxRuntime.jsx("div", {
                      children: jsxRuntime.jsx(ConfirmButton, {
                        onClick: () => onConfirm(true),
                      }),
                    }),
                  }),
                  jsxRuntime.jsx("div", {
                    className: classNames("popup__body-button", "right"),
                    children: jsxRuntime.jsx("div", {
                      children: jsxRuntime.jsx(CancelButton, {
                        onClick: () => onConfirm(false),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsx(ui.CrossPromo, {
            delay: UIConstants.popup.startDelay + 100,
          }),
        ],
      }),
    },
  )
}

module.exports = { ConfirmPopup }
