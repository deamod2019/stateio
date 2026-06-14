/**
 * Restored source for Webpack Module #96087.
 *
 * Home-screen leaderboard button with optional authorization and Yandex sync.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const classNames = require("./classNames").default
const { playUIClickSound } = require("../core/UIHelpers")
const { TypesSocial } = require("../core/CoreTypes")
const { TypesGame } = require("../core/TypesGame")
const { lazyGet } = require("../core/RuntimeCore")

function LeaderboardButton(props) {
  const socialModel = ui.useInjection(TypesSocial.model)

  return jsxRuntime.jsx(ui.Button, {
    className: classNames("btn-blue", "leaderboard-button", props.className),
    icon: "leaderboard",
    async onClick() {
      if (props.onClick) {
        playUIClickSound()
        let authorized =
          socialModel.userAuthorized === undefined ||
          socialModel.authorizeUser === undefined ||
          socialModel.userAuthorized

        if (!authorized) {
          authorized = await lazyGet(TypesGame.actions.suggestAuthorizeAction)?.run()
        }

        if (authorized) {
          await lazyGet(TypesGame.actions.syncYandexLeaderboardsAction)?.run()
          props.onClick()
        }
      }
    },
  })
}

module.exports = { LeaderboardButton }
