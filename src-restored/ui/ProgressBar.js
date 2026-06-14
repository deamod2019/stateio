/**
 * Restored source for Webpack Module #52951.
 *
 * Gameplay participant list plus territory progress indicator.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { GameEvents } = require("../core/GameEvents")
const { TypesGame } = require("../core/TypesGame")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { Participants } = require("./Participants")
require("./styleSideEffects")("19963")
const { ProgressIndicator } = require("./ProgressIndicator")

function ProgressBar(props) {
  const participants = props.participants
  const skinManager = ui.useInjection(TypesGame.skinManager)
  const [state, setState] = hooks.useState({ items: [], totalValue: 0 })

  ui.useEventListener(GameEvents.STATS_UPDATED, setState, participants)

  let start = 0
  const itemsToDiplay = (state.items || []).map((item) => {
    const progress = item.count / state.totalValue
    const x = start
    start += progress
    const [color] = skinManager.getColorBy(item.owner)
    return [x, progress, color]
  })

  return jsxRuntime.jsxs(
    "div",
    {
      class: classNames("progress-bar"),
      children: [
        participants ? jsxRuntime.jsx(Participants, { users: participants }) : null,
        jsxRuntime.jsx(ProgressIndicator, { itemsToDiplay }),
      ],
    },
  )
}

module.exports = { ProgressBar }
