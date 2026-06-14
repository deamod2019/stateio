/**
 * Restored source for Webpack Module #99061.
 *
 * Public service used to show and remove transient status alerts.
 */
"use strict"

const { defaultAlertOptions } = require("./StatusAlertOptions")
const StatusAlertStoreModule = require("./StatusAlertStore")
const StatusAlertStore = StatusAlertStoreModule.default
const { StoreActionTypes } = StatusAlertStoreModule

class StatusAlertServiceClass {
  showAlert(message, type, options) {
    if (options && options.removeAllBeforeShow) this.removeAllAlerts()

    const id = createUuid()
    StatusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: { id, message, type, options: options || {} },
    })
    return id
  }

  showSuccess(message, options) {
    return this.showAlert(message, "success", { ...defaultAlertOptions, ...options })
  }

  showError(message, options) {
    return this.showAlert(message, "error", { ...defaultAlertOptions, ...options })
  }

  showInfo(message, options) {
    return this.showAlert(message, "info", { ...defaultAlertOptions, ...options })
  }

  showWarning(message, options) {
    return this.showAlert(message, "warning", { ...defaultAlertOptions, ...options })
  }

  removeAlert(id) {
    StatusAlertStore.dispatch({ type: StoreActionTypes.RemoveAlert, payload: id })
  }

  removeAllAlerts() {
    StatusAlertStore.dispatch({ type: StoreActionTypes.RemoveAllAlerts })
  }
}

function createUuid() {
  let timestamp = new Date().getTime()
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    timestamp += performance.now()
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (token) => {
    const value = ((timestamp + 16 * Math.random()) % 16) | 0
    timestamp = Math.floor(timestamp / 16)
    return (token === "x" ? value : (value & 3) | 8).toString(16)
  })
}

exports.StatusAlertServiceClass = StatusAlertServiceClass
exports.StatusAlertService = new StatusAlertServiceClass()
