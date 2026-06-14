/**
 * Restored source for Webpack Module #56612.
 *
 * Winner badge composed from an avatar and victory frame.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("44097")
const { Avatar } = require("./Avatar")

function Winner(props) {
  const user = props.user
  const className = props.className

  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames("winner-container", className),
      children: [
        jsxRuntime.jsx(Avatar, { imgPath: user.photo, score: user.scoreSession }),
        jsxRuntime.jsx(SVG.VictoryFraming, {}),
      ],
    },
  )
}

module.exports = { Winner }
