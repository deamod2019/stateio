/**
 * Restored source for Webpack Module #88460.
 *
 * Small query helper used by the Inversify target runtime.
 */
"use strict"

class QueryableString {
  constructor(str) {
    this.str = str
  }

  startsWith(prefix) {
    return this.str.indexOf(prefix) === 0
  }

  endsWith(suffix) {
    const reversedSuffix = suffix.split("").reverse().join("")
    const reversedValue = this.str.split("").reverse().join("")
    return this.startsWith.call({ str: reversedValue }, reversedSuffix)
  }

  contains(fragment) {
    return this.str.indexOf(fragment) !== -1
  }

  equals(value) {
    return this.str === value
  }

  value() {
    return this.str
  }
}

exports.QueryableString = QueryableString
