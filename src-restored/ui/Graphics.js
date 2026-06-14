/**
 * Restored source for Webpack Module #73134.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default

function Graphics(props) {
  if (props.inline || props.inline === undefined) {
    return jsxRuntime.jsx("span", {
      className: classNames(props.className, "icon"),
      dangerouslySetInnerHTML: { __html: props.svg.default },
    })
  }

  return jsxRuntime.jsx(
    "span",
    {
      className: classNames(props.className, "icon"),
      children: jsxRuntime.jsx("svg", {
        dangerouslySetInnerHTML: {
          __html: `<use xlink:href="#${props.svg.default.id}" />`,
        },
      }),
    },
  )
}

module.exports = { Graphics }
