/**
 * Restored source for Webpack Module #82288.
 *
 * Store-connected status alert root view.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Component } = require("./preactRuntime")
const { StatusAlertContainer } = require("./StatusAlertContainer")
const StatusAlertStore = require("./StatusAlertStore").default

class StatusAlertView extends Component {
  constructor(props) {
    super(props)

    this.updateState = () => {
      this.frameId = requestAnimationFrame(() => {
        this.frameId2 = requestAnimationFrame(() => {
          this.setState({ alerts: StatusAlertStore.getState() })
        })
      })
    }

    this.state = { alerts: [] }
    this.unsubscribeStore = StatusAlertStore.subscribe(this.updateState)
  }

  componentWillUnmount() {
    if (this.unsubscribeStore) this.unsubscribeStore()
    window.cancelAnimationFrame(this.frameId)
    window.cancelAnimationFrame(this.frameId2)
  }

  render() {
    return jsxRuntime.jsx(StatusAlertContainer, { alerts: this.state.alerts })
  }
}

module.exports = { StatusAlertView }
