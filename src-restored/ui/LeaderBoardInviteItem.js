/**
 * Restored source for Webpack Module #23862.
 *
 * Referral invite row shown below leaderboard users.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const { di } = require("../../src-cjs/44656__mod.js")
const { Localize } = require("../core/Localize")
const { TypesSocial, TypesFlow } = require("../core/CoreTypes")
const ui = require("./UIContext")
const classNames = require("./classNames").default
const hooks = require("../../src-cjs/30396__mod.js")
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("6162")

function LeaderBoardInviteItem(props) {
  const className = props.className
  const pending = props.pending
  const reward = props.reward
  const initialState = { isPending: pending }
  const [state, setState] = hooks.useState(() => initialState)

  return jsxRuntime.jsx(
    "li",
    __assign(
      {
        className: classNames(
          "leaderboard__item",
          "leaderboard__item-invite",
          { "leaderboard__item-invite_disabled": state.isPending },
          className,
        ),
      },
      {
        children: jsxRuntime.jsx(
          ui.Button,
          __assign(
            {
              disabled: state.isPending,
              async onClick() {
                const requested = await di.get(TypesSocial.refRewardsModel).request(reward)
                if (requested) {
                  setState((current) => __assign(__assign({}, current), { isPending: true }))
                  const levelStart = di.get(TypesFlow.LevelStart)
                  levelStart.waitForContextChange = true
                  await levelStart.run()
                }
              },
              className: classNames("btn-green"),
            },
            {
              children: jsxRuntime.jsxs(
                "div",
                __assign(
                  { className: classNames("button-invite") },
                  {
                    children: [
                      jsxRuntime.jsx(
                        "div",
                        __assign(
                          { className: classNames("button-invite__icon") },
                          { children: jsxRuntime.jsx(ui.Icon, { type: "friends" }) },
                        ),
                      ),
                      jsxRuntime.jsxs(
                        "div",
                        __assign(
                          { className: classNames("button-invite__text") },
                          {
                            children: [
                              state.isPending
                                ? Localize.get("game_pending", "Pending...")
                                : Localize.get("game_invite", "Invite Friend"),
                              state.isPending
                                ? jsxRuntime.jsx(
                                    "span",
                                    __assign(
                                      { className: classNames("button-invite__description") },
                                      {
                                        children: Localize.get(
                                          "game_pending_description",
                                          "The reward is given when your friend launch the game.",
                                        ),
                                      },
                                    ),
                                  )
                                : null,
                            ],
                          },
                        ),
                      ),
                      jsxRuntime.jsxs(
                        "div",
                        __assign(
                          { className: classNames("button-invite__reward") },
                          {
                            children: [
                              jsxRuntime.jsx(
                                "div",
                                __assign(
                                  { className: classNames("button-invite__reward-icon") },
                                  { children: jsxRuntime.jsx(SVG.COINS, {}) },
                                ),
                              ),
                              jsxRuntime.jsxs(
                                "div",
                                __assign(
                                  { className: classNames("button-invite__reward-count") },
                                  { children: ["+", reward.count] },
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
            },
          ),
        ),
      },
    ),
  )
}

module.exports = { LeaderBoardInviteItem }
