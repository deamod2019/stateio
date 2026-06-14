/**
 * Restored source for Webpack Module #5777.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const includeStyle = require("./styleSideEffects")

includeStyle("47519")

function ExclamationMarkNotificator(props = {}) {
  const className = props.className === undefined ? "" : props.className
  return jsxRuntime.jsx("div", {
    className: classNames("exclamation-mark-notificator", className),
  })
}

module.exports = { ExclamationMarkNotificator }
