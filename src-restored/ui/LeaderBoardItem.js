/**
 * Restored source for Webpack Module #90211.
 *
 * Single leaderboard user row with claim/play controls.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { di, lazyGet } = require("../../src-cjs/44656__mod.js")
const hooks = require("../../src-cjs/30396__mod.js")
const { TypesSocial, TypesFlow } = require("../core/CoreTypes")
const { TypesGame } = require("../core/TypesGame")
const ui = require("./UIContext")
const { ClaimButton } = require("./ClaimButton")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
const { isRankableUser, playUIClickSound } = require("../core/UIHelpers")
const { getFontClassByDigits } = require("../core/NumberFormat")

function LeaderBoardItem(props) {
  const user = props.user
  const rank = props.rank
  const isSolo = props.isSolo === undefined ? true : props.isSolo
  const socialModel = ui.useInjection(TypesSocial.model)
  const model = ui.useInjection(TypesGame.model)
  const isMe = user.origin === socialModel.me
  const isEnabled = user.origin !== socialModel.opponent
  const [claimed, setClaimed] = hooks.useState(false)
  const rankRecord = isRankableUser(user.origin) ? user.origin.getLbRecord()?.rank : rank

  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsxs(
      "li",
      __assign(
        {
          className: classNames("leaderboard__item", {
            leaderboard__item_me: isMe,
            leaderboard__item_disabled: !isEnabled,
          }),
        },
        {
          children: [
            jsxRuntime.jsx(
              "div",
              __assign(
                {
                  className: classNames(
                    "leaderboard__item-rank",
                    getFontClassByDigits(rankRecord, 2, 3),
                  ),
                },
                { children: isRankableUser(user.origin) ? user.origin.getLbRecord()?.rank : rank || "-" },
              ),
            ),
            jsxRuntime.jsx(ui.Avatar, { imgPath: user.image_url, imgAlt: "" }),
            jsxRuntime.jsxs(
              "div",
              __assign(
                {
                  className: classNames("leaderboard__item-info", {
                    "leaderboard__item-info_social": !isSolo,
                  }),
                },
                {
                  children: [
                    jsxRuntime.jsx(
                      "div",
                      __assign(
                        {
                          className: classNames("leaderboard__item-name", {
                            "leaderboard__item-name_social": !isSolo,
                          }),
                        },
                        { children: user.name },
                      ),
                    ),
                    jsxRuntime.jsxs(
                      "div",
                      __assign(
                        {
                          className: classNames("leaderboard__item-points", {
                            "leaderboard__item-points_social": !isSolo,
                          }),
                        },
                        {
                          children: [
                            isSolo
                              ? jsxRuntime.jsx(
                                  "div",
                                  __assign(
                                    { className: classNames("leaderboard__item-score-key") },
                                    { children: Localize.get("ui-menu-lvl", "LVL") },
                                  ),
                                )
                              : jsxRuntime.jsx(
                                  "div",
                                  __assign(
                                    { className: "cup-icon" },
                                    { children: jsxRuntime.jsx(SVG.LeaderBoardCupIcon, {}) },
                                  ),
                                ),
                            jsxRuntime.jsx(
                              "div",
                              __assign(
                                { className: classNames("leaderboard__item-score") },
                                { children: user.score || "-" },
                              ),
                            ),
                          ],
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
            isSolo
              ? user.reward && !claimed
                ? jsxRuntime.jsx(ClaimButton, {
                    reward: user.reward.count,
                    multiplierText: "",
                    onClick() {
                      playUIClickSound()
                      if (user.reward) {
                        const reward = user.reward
                        const userId = user.origin.id
                        void (async () => {
                          di.get(TypesSocial.refRewardsModel).claim(userId)
                          model.cookie.coins += reward.count
                          setClaimed(true)
                        })()
                      }
                    },
                  })
                : jsxRuntime.jsx(jsxRuntime.Fragment, {
                    children: jsxRuntime.jsx(
                      "div",
                      __assign(
                        { className: classNames("leaderboard__item-button") },
                        {
                          children:
                            socialModel.socialPlatform === "ya"
                              ? null
                              : jsxRuntime.jsx(
                                  ui.Button,
                                  __assign(
                                    {
                                      className: classNames("leaderboard__play-button"),
                                      onClick() {
                                        playUIClickSound()
                                        lazyGet(TypesFlow.PlayWith)?.run(user.origin)
                                      },
                                    },
                                    { children: jsxRuntime.jsx(SVG.LeaderBoardPlayIcon, {}) },
                                  ),
                                ),
                        },
                      ),
                    ),
                  })
              : null,
          ],
        },
      ),
    ),
  })
}

module.exports = { LeaderBoardItem }
