/**
 * Restored source for Webpack Module #79631.
 *
 * One colored slice inside the gameplay progress indicator.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")

function ProgressSection(props) {
  const x = props.x
  const progress = props.progress
  const fill = props.fill
  const className = props.className
  const width = 596
  const transition = "transform 0.2s"

  return jsxRuntime.jsxs(
    "g",
    {
      className,
      children: [
        jsxRuntime.jsx("rect", {
          style: {
            width,
            height: 38,
            fill,
            transform: `translateX(${width * x}px) scaleX(${progress})`,
            transition,
          },
        }),
        jsxRuntime.jsx("rect", {
          style: {
            width: 4,
            height: 38,
            fill: "white",
            transform: `translateX(${width * x + width * progress - 4}px)`,
            transition,
          },
        }),
      ],
    },
  )
}

module.exports = { ProgressSection }
