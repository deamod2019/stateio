/**
 * Restored source for Webpack Module #17828.
 *
 * Shared score group container with Icon and Score static helpers.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Icon } = require("./UIControls")
const { Score } = require("./Score")

function ScoreGroup(props) {
  const { className, ...rest } = props

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("score-group", className),
      ...rest,
    },
  )
}

ScoreGroup.Icon = Icon
ScoreGroup.Score = Score

module.exports = { ScoreGroup }
