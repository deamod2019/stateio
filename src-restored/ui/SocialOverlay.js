/**
 * Restored source for Webpack Module #31651.
 *
 * Mirrors social SDK overlay show/hide events into a CSS overlay state.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("46262")
const { TypesSocial } = require("../core/CoreTypes")
const { SocialEvents } = require("../core/SocialAppExports")
const { lazyGet } = require("../core/RuntimeCore")
const hooks = require("./UIHooks")
const classNames = require("./classNames").default

function SocialOverlay() {
  const [active, setActive] = hooks.useState(false)
  const social = lazyGet(TypesSocial.model)

  if (social) {
    const show = () => setActive(true)
    const hide = () => setActive(false)

    hooks.useEffect(() => {
      social.on(SocialEvents.SHOW_OVERLAY, show)
      social.on(SocialEvents.HIDE_OVERLAY, hide)
      return () => {
        social.off(SocialEvents.SHOW_OVERLAY, show)
        social.off(SocialEvents.HIDE_OVERLAY, hide)
      }
    }, [social])
  }

  return jsxRuntime.jsx("div", {
    className: classNames("social__overlay", { active }),
  })
}

module.exports = { SocialOverlay }
