/**
 * Restored source for Webpack Module #96648.
 *
 * Renders the home/start screen, including top-bar controls, social routing,
 * offline earnings prompt, tap-to-play flow, boosters, and login recovery.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { lazyGet } = require("../core/RuntimeCore")
const { TypesCore, TypesSocial, TypesUI } = require("../core/CoreTypes")
const { ScoreType } = require("../core/SocialAppExports")
const ui = require("./UIContext")
const { TypesGame } = require("../core/TypesGame")
const { Boosters } = require("./Boosters")
const { Capturing } = require("./Capturing")
const { InviteButton } = require("./InviteButton")
const { LeaderboardButton } = require("./LeaderboardButton")
const { LevelTitle } = require("./LevelTitle")
const { CoinsIndicator } = require("./CoinsIndicator")
const { NoAdsButton } = require("./NoAdsButton")
const { SettingsButton } = require("./SettingsButton")
const { ShopButton } = require("./ShopButton")
const { TapToPlayButton } = require("./TapToPlayButton")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { PopupType } = require("../core/PopupType")
require("./styleSideEffects")("56635")
const { playUIClickSound } = require("../core/UIHelpers")
const { UserStatusInfo } = require("./UserStatusInfo")

let offlineEarningsChecked = false

function StartScreen() {
  const model = ui.useInjection(TypesGame.model)
  const social = ui.useInjection(TypesSocial.model)
  const skinManager = ui.useInjection(TypesGame.skinManager)
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const cookieModel = ui.useInjection(TypesGame.cookieModel)
  const initialState = {
    authorized: social.userAuthorized === undefined ? true : social.userAuthorized,
    stageLevel: model.currentContinent.stageLevel,
    totalStages: model.currentContinent.totalStages,
  }
  const [state, setState] = hooks.useState(() => initialState)
  const [invisible, setInvisible] = ui.visibilityEffect()
  const hasUnstoredSkins =
    [
      ...skinManager.availableBuildings,
      ...skinManager.availableFighters,
      ...model.cookie.availableColors,
    ].filter((item) => !item.stored).length > 0

  hooks.useEffect(() => {
    if (!social.session.ftue && social.inSolo && !offlineEarningsChecked) {
      const earning = model.getOfflineEarning()
      if (earning.isRewarded) {
        dispatcher.emit(ui.UIEvents.POPUP, {
          id: PopupType.OFFLINE_EARNINGS,
          props: {
            coins: earning.reward,
            hours: earning.date.getUTCHours(),
            minutes: earning.date.getUTCMinutes(),
            seconds: earning.date.getUTCSeconds(),
          },
        })
      }
      offlineEarningsChecked = true
    }
  }, [offlineEarningsChecked])

  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames("screen", "screen__start"),
      children: [
        jsxRuntime.jsxs("div", {
          className: classNames("screen-top", { invisible }),
          children: [
            jsxRuntime.jsxs("div", {
              className: classNames("container", "top-bar"),
              children: [
                jsxRuntime.jsx(SettingsButton, {
                  onClick() {
                    return dispatcher.emit(ui.UIEvents.POPUP, {
                      id: PopupType.SETTINGS,
                    })
                  },
                }),
                jsxRuntime.jsx(LevelTitle, {}),
                jsxRuntime.jsx(CoinsIndicator, {
                  total: model.cookie.coins,
                  className: classNames(
                    "coins-indicator",
                    "coins-indicator_filled",
                  ),
                }),
              ],
            }),
            jsxRuntime.jsx(Capturing, {
              captured: state.stageLevel / state.totalStages,
              title: Localize.get("ui-menu-capturing", "CAPTURING"),
              stages: state.totalStages,
              showGift: social.inSolo,
            }),
            jsxRuntime.jsxs("div", {
              className: classNames("container", "buttons-container", {
                invisible,
              }),
              children: [
                jsxRuntime.jsxs("span", {
                  className: classNames(
                    "buttons-group",
                    "buttons-group_left",
                  ),
                  children: [
                    ["ya", "gd"].includes(social.socialPlatform)
                      ? null
                      : jsxRuntime.jsx(InviteButton, {}),
                    social.socialPlatform === "gd"
                      ? null
                      : jsxRuntime.jsx(LeaderboardButton, {
                          onClick() {
                            return dispatcher.emit(ui.UIEvents.SCREEN_CHANGED, {
                              id: TypesUI.screen.LEADERBOARD,
                              props: {
                                scoreType: ScoreType.GLOBAL,
                                users: social.friends.concat(social.me),
                              },
                            })
                          },
                        }),
                  ],
                }),
                jsxRuntime.jsxs("span", {
                  className: classNames(
                    "buttons-group",
                    "buttons-group_right",
                  ),
                  children: [
                    jsxRuntime.jsx(NoAdsButton, {
                      className: "btn-unsupported",
                      onClick() {},
                    }),
                    jsxRuntime.jsx(ShopButton, {
                      showNotification: hasUnstoredSkins,
                      onClick() {
                        playUIClickSound()
                        dispatcher.emit(ui.UIEvents.SCREEN_CHANGED, {
                          id: TypesUI.screen.SHOP,
                          props: {},
                        })
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsx(TapToPlayButton, {
          onDown() {
            return setInvisible(true)
          },
          onClick() {
            const action = lazyGet(TypesGame.actions.startGame)
            return action === null || action === undefined ? undefined : action.run()
          },
        }),
        jsxRuntime.jsx("div", {
          className: classNames("screen-bottom", { invisible }),
          children: jsxRuntime.jsx(Boosters, {}),
        }),
        jsxRuntime.jsx(UserStatusInfo, {
          authorized: state.authorized,
          onLogin: async () => {
            if (social.authorizeUser) {
              const authorized = await social.authorizeUser()
              if (authorized && cookieModel.syncAfterAuthStateChange) {
                if (await cookieModel.syncAfterAuthStateChange()) {
                  const restart = lazyGet(
                    TypesGame.actions.levelRestartAfterYandexLoginAction,
                  )
                  await (restart === null || restart === undefined
                    ? undefined
                    : restart.run())
                  setState((current) => ({
                    ...current,
                    authorized,
                    stageLevel: model.currentContinent.stageLevel,
                    totalStages: model.currentContinent.totalStages,
                  }))
                }
              }
            }
          },
        }),
      ],
    },
  )
}

module.exports = { StartScreen }
