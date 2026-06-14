/**
 * Restored class name combiner from Webpack Module #94184.
 */
"use strict"

const hasOwn = {}.hasOwnProperty

function classNames() {
  const classes = []

  for (let index = 0; index < arguments.length; index += 1) {
    const value = arguments[index]
    if (!value) continue

    const type = typeof value
    if (type === "string" || type === "number") {
      classes.push(value)
    } else if (Array.isArray(value)) {
      if (value.length) {
        const nested = classNames.apply(null, value)
        if (nested) classes.push(nested)
      }
    } else if (type === "object") {
      if (
        value.toString !== Object.prototype.toString &&
        !value.toString.toString().includes("[native code]")
      ) {
        classes.push(value.toString())
        continue
      }
      for (const key in value) {
        if (hasOwn.call(value, key) && value[key]) classes.push(key)
      }
    }
  }

  return classes.join(" ")
}

classNames.default = classNames

module.exports = classNames
