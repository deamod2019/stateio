/**
 * Restored source for Webpack Module #44966.
 *
 * Gameplay territory progress SVG indicator.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("34365")
const { ProgressSection } = require("./ProgressSection")

function ProgressIndicator(props) {
  const itemsToDiplay = props.itemsToDiplay
  return jsxRuntime.jsxs(
    "svg",
    {
      className: "progress-indicator",
      width: "596",
      height: "38",
      viewBox: "0 0 596 38",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        jsxRuntime.jsx("rect", {
          className: "progress-indicator__background",
          x: "2",
          y: "2",
          width: "592",
          height: "34",
          rx: "17",
          style: { fill: "#C4C4C4", stroke: "white", strokeWidth: "4px" },
        }),
        jsxRuntime.jsx("mask", {
          id: "mask0",
          "mask-type": "alpha",
          width: "592",
          height: "34",
          children: jsxRuntime.jsx("rect", {
            width: "588",
            x: "4",
            y: "4",
            height: "30",
            rx: "13",
            fill: "#000",
          }),
        }),
        jsxRuntime.jsx("g", {
          mask: "url(#mask0)",
          children: itemsToDiplay.map((item) => {
            const [x, progress, fill] = item
            return jsxRuntime.jsx(ProgressSection, {
              className: "progress-indicator__section",
              x,
              progress,
              fill,
            })
          }),
        }),
      ],
    },
  )
}

module.exports = { ProgressIndicator }
