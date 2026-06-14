/**
 * Restored source for Webpack Module #53309.
 *
 * Animated start button used on the home screen.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { WaitAction } = require("../core/WaitAction")
const ui = require("./UIContext")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
require("./styleSideEffects")("69130")

function TapToPlayButton(props) {
  const initialState = {
    text: Localize.get("ui-menu-tap_to_play", "TAP TO PLAY"),
    animationStarted: false,
    clicked: false,
  }
  const showGoDelay = UIConstants.tapToPlayButton.showGoDelay
  const hideDelay = UIConstants.tapToPlayButton.hideDelay
  const [state, setState] = hooks.useState(() => initialState)

  return jsxRuntime.jsx(
    ui.Button,
    {
      disabled: state.clicked,
      className: classNames("button", "start-button", {
        "start-button_clicked": state.clicked,
        "start-button_animated": state.animationStarted,
      }),
      ...props,
      async onClick() {
        const goText = Localize.get("tap_to_play_go", "GO!")
        setState((current) => ({ ...current, text: goText, clicked: true }))
        if (props.onDown) props.onDown()
        await WaitAction.ms(showGoDelay)
        setState((current) => ({ ...current, animationStarted: true }))
        await WaitAction.ms(hideDelay - showGoDelay)
        if (props.onClick) props.onClick()
      },
      children: state.text,
    },
  )
}

module.exports = { TapToPlayButton }
