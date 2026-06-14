/**
 * Restored source for Webpack Module #54768.
 *
 * CSS class mapping for status alert variants.
 */
"use strict"

function alertIcon(type) {
  switch (type) {
    case "success":
      return "is-check"
    case "error":
    case "warning":
      return "is-error"
    case "info":
      return "is-info-icon"
    default:
      return ""
  }
}

function boxClassName(type) {
  switch (type) {
    case "success":
      return "is-green-success"
    case "error":
      return "is-red-error"
    case "warning":
      return "is-orange-warning"
    default:
      return ""
  }
}

module.exports = { alertIcon, boxClassName }
