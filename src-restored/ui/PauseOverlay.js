/**
 * Restored source for Webpack Module #7514.
 *
 * Shows the pause overlay and resumes the social pause action on click.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { CommonEvents, lazyGet } = require("../core/RuntimeCore")
const { Localize } = require("../core/Localize")
const { TypesSocial } = require("../core/CoreTypes")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { useInjection, useEventListener } = require("./UIContext")
require("./styleSideEffects")("32115")

function PauseOverlay() {
  const [paused, setPaused] = hooks.useState(false)
  const social = useInjection(TypesSocial.model)

  if (social.showPauseOverlay === undefined || social.showPauseOverlay) {
    useEventListener(
      CommonEvents.PAUSE,
      (value) => {
        setPaused(value)
      },
      [],
    )
  }

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("pause__overlay", { hidden: !paused }),
      onClick() {
        const pauseAction = lazyGet(TypesSocial.pauseAction)
        return pauseAction === null || pauseAction === undefined
          ? undefined
          : pauseAction.run(false)
      },
      children: jsxRuntime.jsx("div", {
        className: "title",
        children: Localize.get("ui_tap_to_continue", "Tap to continue"),
      }),
    },
  )
}

module.exports = { PauseOverlay }
