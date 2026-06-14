/**
 * Restored source for Webpack Module #47277.
 *
 * Settings popup for vibration and audio toggles.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesAudio, TypesCore, TypesSocial } = require("../core/CoreTypes")
const { lazyGet } = require("../core/RuntimeCore")
const ui = require("./UIContext")
const hooks = require("./UIHooks")
const classNames = require("./classNames").default
const { BackButton } = require("./BackButton")
const { UIConstants } = require("../core/UIConstants")
const { SVG } = require("./SVGAssets")
require("./styleSideEffects")("80951")
const { AudioModel } = require("../core/AudioModel")
const { playUIClickSound } = require("../core/UIHelpers")
const { UserIdLabel } = require("./UserIdLabel")
const { WaitAction } = require("../core/WaitAction")

function g(props) {
  const [toggled, setToggled] = hooks.useState(props.toggled)

  return jsxRuntime.jsx(
    ui.Button,
    {
      className: classNames("toggle-btn", props.className, { toggled }),
      onClick() {
        if (props.onToggled) props.onToggled(!toggled)
        playUIClickSound()
        setToggled(!toggled)
      },
      children: props.children,
    },
  )
}

function SettingsPopup() {
  const [, forceUpdate] = hooks.useState({})
  const refresh = hooks.useCallback(() => forceUpdate({}), [])
  const [popupInvisible, setPopupInvisible] = ui.visibilityEffect(
    UIConstants.popup.startDelay,
  )
  const dispatcher = ui.useInjection(TypesCore.dispatcher)
  const audioModel = ui.useInjection(TypesAudio.model)
  const vibrationManager = lazyGet(TypesSocial.vibrationManager)

  ui.useEventListener(AudioModel.MUTE_SOUNDS, () => refresh, [])
  ui.useEventListener(AudioModel.MUTE_MUSIC, () => refresh, [])

  async function closePopup() {
    setPopupInvisible(true)
    await WaitAction.ms(300)
    dispatcher.emit(ui.UIEvents.POPUP, { id: null })
  }

  return jsxRuntime.jsxs(
    "div",
    {
      className: "popups",
      onClick(event) {
        if (event.target === event.currentTarget) closePopup()
      },
      children: [
        jsxRuntime.jsx(BackButton, { className: "white", onClick: closePopup }),
        jsxRuntime.jsxs("div", {
          className: classNames("popup-settings"),
          children: [
            jsxRuntime.jsxs("div", {
              className: classNames("popup", { invisible: popupInvisible }),
              children: [
                jsxRuntime.jsxs("div", {
                  className: classNames("popup__body"),
                  children: [
                    vibrationManager
                      ? jsxRuntime.jsx(g, {
                          toggled: !vibrationManager.enabled,
                          onToggled(toggled) {
                            vibrationManager.enabled = !toggled
                            if (vibrationManager.enabled) {
                              vibrationManager.vibrate()
                            }
                          },
                          children: jsxRuntime.jsx(SVG.Vibrate, {}),
                        })
                      : null,
                    jsxRuntime.jsx(g, {
                      toggled: audioModel.soundsMuted(),
                      onToggled(toggled) {
                        return audioModel.muteSounds(toggled)
                      },
                      children: jsxRuntime.jsx(SVG.Sounds, {}),
                    }),
                  ],
                }),
                jsxRuntime.jsx(UserIdLabel, {}),
              ],
            }),
            jsxRuntime.jsx(ui.CrossPromo, {
              delay: UIConstants.popup.startDelay + 100,
            }),
            jsxRuntime.jsx(ui.VersionLabel, {}),
          ],
        }),
      ],
    },
  )
}

module.exports = { SettingsPopup }
