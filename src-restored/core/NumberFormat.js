/**
 * Restored source for Webpack Module #38319.
 *
 * Small number-format helpers used by UI labels.
 */
"use strict"

function getFontClassByDigits(value, min = 4, max = 9) {
  let className = ""

  if (value) {
    const length = value.toString().length

    if (length <= min) className = ""
    if (length > min && length < max) className = `f${length}-digits`
    if (length >= max) className = `f${max}-digits`
  }

  return className
}

function toFixedString(value, digits = 2, separator = ".") {
  const text = value.toString(10)
  const index = text.indexOf(separator)
  return index === -1 ? text : text.substr(0, index + 1 + digits)
}

module.exports = { getFontClassByDigits, toFixedString }
