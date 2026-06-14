/**
 * Restored source for Webpack Module #11748.
 *
 * Small gameplay-only debug controls for ending the current stage/level.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { di } = require("../core/RuntimeCore")
const { TypesGame } = require("../core/TypesGame")
const { useInjection } = require("./UIContext")

function DebugPanelGamePlay() {
  const model = useInjection(TypesGame.model)

  return jsxRuntime.jsxs(
    "div",
    {
      style:
        "pointer-events: auto; position: absolute; right: 10px; bottom: 80px; display: flex; flex-direction: column;",
      children: [
        jsxRuntime.jsx("span", {
          children: di.get(TypesGame.model).currentContinent.data.id,
        }),
        jsxRuntime.jsx("button", {
          onClick() {
            return model.endStage(false)
          },
          children: "Loose",
        }),
        jsxRuntime.jsx("br", {}),
        jsxRuntime.jsx("button", {
          onClick() {
            return model.endStage(true)
          },
          children: "Win Stage",
        }),
        jsxRuntime.jsx("button", {
          onClick() {
            return model.endStage(true, true)
          },
          children: "Win Level",
        }),
      ],
    },
  )
}

module.exports = { DebugPanelGamePlay }
