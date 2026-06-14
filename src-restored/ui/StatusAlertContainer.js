/**
 * Restored source for Webpack Module #84077.
 *
 * Renders the active status-alert stack.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Component } = require("./preactRuntime")
const { StatusAlertItem } = require("./StatusAlertItem")

class StatusAlertContainer extends Component {
  render() {
    return jsxRuntime.jsx(
      "div",
      {
        className: "status-alerts-wrapper",
        children: this.props.alerts.map((alert) => {
          return jsxRuntime.jsx(StatusAlertItem, { alert }, alert.id)
        }),
      },
    )
  }
}

module.exports = { StatusAlertContainer }
