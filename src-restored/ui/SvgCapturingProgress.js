/**
 * Restored source for Webpack Module #52472.
 *
 * SVG capture progress bar used by home and gift progress widgets.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { FilledRects } = require("./FilledRects")

function SvgCapturingProgress(props) {
  const width = props.width
  const height = props.height
  const captured = props.captured
  const stages = props.stages

  return jsxRuntime.jsxs(
    "svg",
    {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        jsxRuntime.jsx("rect", {
          width,
          height,
          rx: height / 2,
          fill: "#FEEB5D",
          className: "background",
        }),
        jsxRuntime.jsx(FilledRects, {
          fill: "#B3B3B3",
          stages,
          width,
          height,
          pad: 10,
          gap: 5,
        }),
        jsxRuntime.jsx(
          "mask",
          {
            id: "mask-capturing",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width,
            height,
            children: jsxRuntime.jsx("rect", {
              width: width * captured,
              height,
              fill: "#000",
            }),
          },
        ),
        jsxRuntime.jsx(
          "g",
          {
            mask: "url(#mask-capturing)",
            children: jsxRuntime.jsx(FilledRects, {
              fill: "#77D982",
              stages,
              width,
              height,
              pad: 10,
              gap: 5,
            }),
          },
        ),
      ],
    },
  )
}

module.exports = { SvgCapturingProgress }
