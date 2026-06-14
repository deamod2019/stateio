/**
 * Restored source for Webpack Module #93668.
 *
 * Minimal JSON HTTP wrapper used by backend-facing app models.
 */
"use strict"

const { log } = require("./RuntimeUtils")
const { markInjectable } = require("./DecoratorHelpers")

class HTTPRequest {
  async json(url, payload, method = "GET", headers = {}) {
    let response

    try {
      const request = { method }
      if (payload) {
        headers.Accept = "application/json"
        headers["Content-Type"] = "application/json"
        request.body = JSON.stringify(payload)
      }
      request.headers = headers
      response = await fetch(url, request)
    } catch (error) {
      log.warn(error)
    }

    if (response) {
      try {
        return response.json()
      } catch (error) {
        log.warn(error)
      }
    }

    return undefined
  }
}

markInjectable(HTTPRequest)

module.exports = { HTTPRequest }
