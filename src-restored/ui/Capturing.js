/**
 * Restored source for Webpack Module #10065.
 *
 * Home-screen stage capture progress widget.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { SvgCapturingProgress } = require("./SvgCapturingProgress")
const { Images } = require("./SVGAssets")
require("./styleSideEffects")("89264")

function Capturing(props) {
  const stages = props.stages === undefined ? 4 : props.stages
  const captured = props.captured === undefined ? 0.01 : props.captured
  const title = props.title
  const showGift = props.showGift === undefined ? true : props.showGift

  return jsxRuntime.jsxs(
    "div",
    {
      className: "capturing",
      children: [
        title
          ? jsxRuntime.jsx("div", {
              className: "capturing__title",
              children: title,
            })
          : null,
        jsxRuntime.jsx("div", {
          className: "capturing__progress",
          children: jsxRuntime.jsx(SvgCapturingProgress, {
            width: 482,
            height: 76,
            captured,
            stages,
          }),
        }),
        showGift
          ? jsxRuntime.jsx("div", {
              className: "capturing__gift-image",
              children: jsxRuntime.jsx(Images.Gift, {}),
            })
          : null,
      ],
    },
  )
}

module.exports = { Capturing }
