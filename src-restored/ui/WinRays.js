/**
 * Restored source for Webpack Module #94571.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { SVG } = require("./SVGAssets")

function WinRays() {
  return jsxRuntime.jsx("div", {
    className: classNames("popup__win-rays"),
    children: jsxRuntime.jsx(SVG.WinRays, {}),
  })
}

module.exports = { WinRays }
