/**
 * Restored source for Webpack Module #95622.
 *
 * Renders the gameplay overlay screen with the exit/back control and
 * participant progress bar.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { di } = require("../core/RuntimeCore")
const { TypesGame } = require("../core/TypesGame")
const { BackButton } = require("./BackButton")
const { ProgressBar } = require("./ProgressBar")
const classNames = require("./classNames").default
require("./DebugPanelGamePlay")
require("./styleSideEffects")("14936")

function GamePlayScreen(props) {
  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames("screen", "screen__game-play"),
      children: [
        jsxRuntime.jsx("div", {
          className: classNames("container", "back-btn"),
          children: jsxRuntime.jsx(BackButton, {
            onClick() {
              return di.get(TypesGame.model).exitTheGame()
            },
          }),
        }),
        jsxRuntime.jsx("div", {
          className: "container",
          children: jsxRuntime.jsx(ProgressBar, {
            participants: props.participants,
          }),
        }),
        null,
      ],
    },
  )
}

module.exports = { GamePlayScreen }
