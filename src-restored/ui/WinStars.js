/**
 * Restored source for Webpack Module #57103.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { SVG } = require("./SVGAssets")

function WinStars() {
  return jsxRuntime.jsx("div", {
    className: classNames("popup__win-stars"),
    children: jsxRuntime.jsx(SVG.WinStars, {}),
  })
}

module.exports = { WinStars }
