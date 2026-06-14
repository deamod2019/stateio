/**
 * Restored source for Webpack Module #84194 and its utility leaves.
 *
 * Shared runtime helpers: logging scope, random helpers, URL query parsing,
 * and simple document.cookie access.
 */
"use strict"

const { log: rootLog } = require("./Logger")

rootLog.setLevel(3)
const log = rootLog.scope("#dp")

class Random {
  static rangeFloat(min, max = 0) {
    return min + Math.random() * (max - min)
  }

  static range(min, max) {
    return Math.floor(Random.rangeFloat(min, max))
  }

  static bool(chance = 0.5) {
    return Math.random() <= chance
  }

  static sign(chance = 0.5) {
    return Random.bool(chance) ? 1 : -1
  }

  static UUID(seed = Date.now()) {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (token) => {
      const value = (seed + 16 * Math.random()) % 16 | 0
      seed = Math.floor(seed / 16)
      return (token === "x" ? value : (value & 3) | 8).toString(16)
    })
  }

  static from(...items) {
    if (items.length > 1) return items[Math.floor(items.length * Math.random())]

    const item = items[0]
    return Array.isArray(item) ? item[Math.floor(item.length * Math.random())] : item
  }
}

class UrlParser {
  constructor() {
    this.params = {}
  }

  parseUri() {
    const tokens = window.location.search.substr(1).split("&")
    if (tokens.length) {
      tokens.forEach((token) => {
        const [key, value] = token.split("=")
        this.params[key] = value
      })
    }
  }

  getParam(key) {
    return this.params[key] !== undefined ? this.params[key] : null
  }
}

class Cookie {
  static get(key) {
    const prefix = `${key}=`
    const tokens = decodeURIComponent(document.cookie).split(";")

    for (let index = 0; index < tokens.length; index++) {
      let token = tokens[index]
      while (token.charAt(0) === " ") token = token.substring(1)
      if (token.indexOf(prefix) === 0) return token.substring(prefix.length, token.length)
    }

    return ""
  }

  static set(key, value, durationMinutes = 10080) {
    const expiresAt = new Date()
    expiresAt.setMinutes(expiresAt.getMinutes() + durationMinutes)
    document.cookie =
      `${key}=${escape(value)}` + (durationMinutes == null ? "" : `;expires=${expiresAt.toUTCString()}`)
  }

  static clear(key) {
    Cookie.set(key, "", -1)
  }
}

const exportsObject = {}
Object.defineProperty(exportsObject, "__esModule", { value: true })
exportsObject.log = log
exportsObject.Random = Random
exportsObject.UrlParser = UrlParser
exportsObject.Cookie = Cookie

module.exports = exportsObject
