/**
 * Restored source for Webpack Module #94776.
 *
 * Event-driven popup container. It listens for popup route changes, resolves
 * popup components from DI, and renders the current popup component.
 */
"use strict"

const core = require("../core/RuntimeCore")
const { TypesUI } = require("../core/CoreTypes")
const preact = require("./preactRuntime")
const hooks = require("./UIHooks")
const { useEventListener } = require("./UIContext")

function Popups() {
  const [current, setCurrent] = hooks.useState(() => ({
    Current: null,
    CurrentProps: null,
  }))

  useEventListener(
    TypesUI.events.POPUP,
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

module.exports = { Popups }
