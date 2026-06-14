/**
 * Restored source for Webpack Module #9931.
 *
 * Participant avatar strip shown above the gameplay progress bar.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Icon } = require("./UIContext")
const classNames = require("./classNames").default
require("./styleSideEffects")("8803")

function Participants(props) {
  const users = props.users

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("participants-bar"),
      children: users.map((user) =>
        jsxRuntime.jsx("span", {
          className: classNames("avatar", "participant"),
          children: jsxRuntime.jsx("span", {
            className: "avatar-inner",
            style: { borderColor: user.color },
            children: user.data.photo
              ? jsxRuntime.jsx("img", {
                  src: user.data.photo,
                  alt: user.data.name,
                })
              : jsxRuntime.jsx(Icon, {
                  type: "placeholder-avatar",
                  className: "avatar-bg",
                }),
          }),
        }),
      ),
    },
  )
}

module.exports = { Participants }
