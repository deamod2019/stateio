/**
 * Restored source for Webpack Module #84965.
 *
 * Repeated rounded SVG rectangles used by capture progress bars.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")

function FilledRects(props) {
  const stages = props.stages
  const fill = props.fill
  const width = props.width
  const height = props.height
  const pad = props.pad
  const gap = props.gap
  const rectWidth = (width - 2 * pad - gap * (stages + 1)) / stages
  const rectHeight = height - 2 * pad
  const items = new Array(stages).fill(null)

  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: items.map((item, index) =>
      jsxRuntime.jsx("rect", {
        x: pad + gap + (rectWidth + gap) * index,
        y: pad,
        fill,
        width: rectWidth,
        height: rectHeight,
        rx: rectHeight / 2,
      }),
    ),
  })
}

module.exports = { FilledRects }
