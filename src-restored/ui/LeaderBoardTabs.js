/**
 * Restored source for Webpack Module #30326.
 *
 * Thin leaderboard tabs wrapper used by the leaderboard screen.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const { LeaderBoard } = require("./LeaderBoard")
require("./styleSideEffects")("45230")

function LeaderBoardTabs(props) {
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx(LeaderBoard, __assign({}, props.leaderboardsProps)),
  })
}

module.exports = { LeaderBoardTabs }
