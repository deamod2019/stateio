/**
 * Restored source for Webpack Module #92068.
 *
 * Color swatch shown inside a shop item card.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")

function ColorItem(props) {
  const colorData = props.colorData
  return jsxRuntime.jsx("div", {
    className: "shop-item-color",
    style: colorData ? `background:${colorData[0]}` : "",
  })
}

module.exports = { ColorItem }
