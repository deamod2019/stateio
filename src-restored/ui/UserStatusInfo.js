/**
 * Restored source for Webpack Module #69080.
 *
 * Home-screen login status prompt.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const ui = require("./UIContext")
const { TypesSocial } = require("../core/CoreTypes")
require("./styleSideEffects")("58319")
const { Localize } = require("../core/Localize")

function UserStatusInfo(props) {
  const className = props.className
  const authorized = props.authorized
  const onLogin = props.onLogin
  ui.useInjection(TypesSocial.model)

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("user-status-info", className, { authorized }),
      children: authorized
        ? null
        : jsxRuntime.jsxs("p", {
            className: "user-status-info-alert",
            children: [
              Localize.get(
                "game_login_text",
                "Log in to compete with others and guaranteed to save progress.",
              ),
              jsxRuntime.jsx("button", {
                className: classNames("login-btn", "btn"),
                type: "button",
                onClick() {
                  if (onLogin) onLogin()
                },
                children: Localize.get("game_login_btn", "Login"),
              }),
            ],
          }),
    },
  )
}

module.exports = { UserStatusInfo }
