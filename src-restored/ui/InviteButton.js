/**
 * Restored source for Webpack Module #55378.
 *
 * Social invite button that optionally restarts the level after an accepted invite.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { di } = require("../core/RuntimeCore")
const { TypesFlow, TypesSocial } = require("../core/CoreTypes")
const { SOCIAL_POPUP } = require("../core/SocialAppExports")
const ui = require("./UIContext")
const classNames = require("./classNames").default
const { playUIClickSound } = require("../core/UIHelpers")

function InviteButton(props) {
  return jsxRuntime.jsx(ui.Button, {
    icon: "friends",
    className: classNames("btn-blue"),
    async onClick() {
      playUIClickSound()
      const result = await di.get(TypesSocial.model).invite(props.options, false)
      switch (result) {
        case SOCIAL_POPUP.ACCEPTED:
          await di.get(TypesFlow.LevelStart).run()
          break
        case SOCIAL_POPUP.CANCELLED:
          break
      }
      if (props.onClick) props.onClick()
    },
  })
}

module.exports = { InviteButton }
