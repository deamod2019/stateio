/**
 * Restored source for Webpack Module #55960.
 *
 * Shared score label with an optional icon and content span.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Icon } = require("./UIControls")

function Score(props) {
  const { className, icon, children, ...rest } = props
  const renderedIcon = icon && (typeof icon === "string"
    ? jsxRuntime.jsx(Icon, { type: icon, width: 35, height: 35 })
    : icon)

  return jsxRuntime.jsxs(
    "span",
    {
      className: classNames("score", className),
      ...rest,
      children: [
        renderedIcon,
        jsxRuntime.jsx("span", {
          className: "score-content",
          children,
        }),
      ],
    },
  )
}

module.exports = { Score }
