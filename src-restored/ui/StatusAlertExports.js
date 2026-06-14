/**
 * Restored source for Webpack Module #63386.
 *
 * Compatibility barrel for the status alert view and service singleton.
 */
"use strict"

const { StatusAlertService } = require("./StatusAlertService")
const { StatusAlertView } = require("./StatusAlertView")

module.exports = {
  default: StatusAlertView,
  StatusAlertService,
}
