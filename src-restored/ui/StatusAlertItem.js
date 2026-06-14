/**
 * Restored source for Webpack Module #95252.
 *
 * Single animated status alert item with close and auto-hide behavior.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Component } = require("./preactRuntime")
const { alertIcon, boxClassName } = require("./StatusAlertHelpers")
const { defaultAlertOptions } = require("./StatusAlertOptions")
const StatusAlertServiceModule = require("./StatusAlertService")

class StatusAlertItem extends Component {
  constructor(props) {
    super(props)

    this.showAlert = async () => {
      if (this.statusAlert) this.statusAlert.classList.add("is-transparent")
      await setTimeout(() => {
        if (this.statusAlert) this.statusAlert.classList.remove("is-transparent")
      })
    }

    this.removeAlert = async () => {
      if (this.statusAlert) {
        this.statusAlert.classList.add("is-transparent")
        await setTimeout(this.removeAlertCallbackSubmit, 800)
      }
    }

    this.removeAlertCallbackSubmit = () => {
      return StatusAlertServiceModule.StatusAlertService.removeAlert(this.props.alert.id)
    }
  }

  componentDidMount() {
    this.showAlert()
    if (this.alertOptions.autoHide) {
      setTimeout(this.removeAlert, this.alertOptions.autoHideTime)
    }
  }

  render() {
    return jsxRuntime.jsx(
      "div",
      {
        className: "status-alert is-transparent",
        ref: (element) => {
          this.statusAlert = element
        },
        children: jsxRuntime.jsx("div", {
          className: "status-alert__padding-wrapper",
          children: jsxRuntime.jsxs("div", {
            className: `status-alert__box ${this.boxClassName}`,
            children: [
              this.alertOptions.withCloseIcon &&
                jsxRuntime.jsx("div", {
                  className: "status-alert__icon-on-right-holder",
                  children: jsxRuntime.jsx("div", {
                    className: "status-alert__icon is-close-icon",
                    onClick: this.removeAlert,
                  }),
                }),
              this.alertOptions.withIcon &&
                jsxRuntime.jsx("div", {
                  className: "status-alert__icon-holder",
                  children: jsxRuntime.jsx("div", {
                    className: `status-alert__icon ${this.alertIcon}`,
                  }),
                }),
              jsxRuntime.jsx("div", {
                className: "status-alert__text",
                children: this.alertText,
              }),
            ],
          }),
        }),
      },
    )
  }

  get boxClassName() {
    return boxClassName(this.props.alert.type)
  }

  get alertOptions() {
    return { ...defaultAlertOptions, ...this.props.alert.options }
  }

  get alertIcon() {
    return alertIcon(this.props.alert.type)
  }

  get alertText() {
    return typeof this.props.alert.message !== "object" || this.props.alert.message.nodeName
      ? this.props.alert.message
      : JSON.stringify(this.props.alert.message)
  }
}

module.exports = { StatusAlertItem, defaultAlertOptions }
