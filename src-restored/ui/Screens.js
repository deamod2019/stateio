/**
 * Restored source for Webpack Module #99836.
 *
 * Event-driven screen container. It listens for screen route changes, resolves
 * screen components from DI, and renders the current screen component.
 */
"use strict"

const core = require("../core/RuntimeCore")
const { TypesUI } = require("../core/CoreTypes")
const preact = require("./preactRuntime")
const hooks = require("./UIHooks")
const { useEventListener } = require("./UIContext")

function Screens() {
  const [current, setCurrent] = hooks.useState(() => ({
    Current: null,
    CurrentProps: null,
  }))

  useEventListener(
    TypesUI.events.SCREEN_CHANGED,
    (event) => {
      setCurrent({
        ...current,
        Current: core.lazyGet(event.id),
        CurrentProps: event.props,
      })
    },
    [],
  )

  const Current = current.Current
  return Current && preact.h(Current, current.CurrentProps)
}

module.exports = { Screens }
