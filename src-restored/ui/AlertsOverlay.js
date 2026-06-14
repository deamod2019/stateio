/**
 * Restored source for Webpack Module #41510.
 *
 * Handles custom status alerts and ad-overlay dimming feedback.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { TypesUI, AdEvents, AdResponse } = require("../core/CoreTypes")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { useEventListener } = require("./UIContext")
require("./styleSideEffects")("15853")
const StatusAlertModule = require("./StatusAlertExports")
require("./styleSideEffects")("26604")

const StatusAlertView = StatusAlertModule.default
const { StatusAlertService } = StatusAlertModule

function AlertsOverlay() {
  const [state, setState] = hooks.useState({ active: false, alertId: "" })

  useEventListener(TypesUI.events.SHOW_CUSTOM_ALERT, (event) => {
    const message = event.message === undefined ? "" : event.message
    const type = event.type === undefined ? "info" : event.type
    const options = event.options
    let alertId = ""

    if (message) {
      switch (type) {
        case "error":
          alertId = StatusAlertService.showError(message, options)
          break
        case "info":
          alertId = StatusAlertService.showInfo(message, options)
          break
        case "success":
          alertId = StatusAlertService.showSuccess(message, options)
          break
        case "warning":
          alertId = StatusAlertService.showWarning(message, options)
          break
      }
    }

    setState({ active: false, alertId })
  })

  useEventListener(AdEvents.STARTED, () => {
    StatusAlertService.removeAlert(state.alertId)
    setState({ ...state, active: true })
  })

  useEventListener(AdEvents.ENDED, (event) => {
    const status = event.status
    let alertId = ""

    if (event.reward) {
      switch (status) {
        case AdResponse.UNKNOWN:
        case AdResponse.FAILED:
          alertId = StatusAlertService.showError(Localize.get("video_ad_failed"))
          break
        case AdResponse.NO_FILL:
          alertId = StatusAlertService.showWarning(Localize.get("no_video_ad"))
          break
        case AdResponse.CANCELLED:
          alertId = StatusAlertService.showWarning(Localize.get("video_ad_cancelled"))
          break
      }
    }

    setState({ active: false, alertId })
  })

  return jsxRuntime.jsxs(
    "div",
    {
      className: classNames("alerts__overlay"),
      children: [
        jsxRuntime.jsx(StatusAlertView, {}),
        jsxRuntime.jsx("div", { className: classNames("bg", { active: state.active }) }),
      ],
    },
  )
}

module.exports = { AlertsOverlay }
