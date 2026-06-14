/**
 * Restored source for Webpack Module #29343.
 *
 * Displays the current social user id in the settings popup.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
require("./styleSideEffects")("9356")
const { TypesSocial } = require("../core/CoreTypes")

function UserIdLabel() {
  const socialModel = ui.useInjection(TypesSocial.model)
  return jsxRuntime.jsx("div", {
    className: "user-id-label",
    children: `user id: ${socialModel.me.id}`,
  })
}

module.exports = { UserIdLabel }
