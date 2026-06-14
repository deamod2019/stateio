/**
 * Restored source for Webpack Module #63333.
 *
 * Base backend model that composes default host, payload, and authorization.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { HTTPRequest } = require("./HTTPRequest")

class BackendModel extends HTTPRequest {
  constructor(...args) {
    super(...args)
    this._defaultPayload = {}
  }

  async performHTTPRequest(path = "/", payload, method = "GET", withAuthorization = true) {
    const url = this._defaultHost + (path.startsWith("/") ? path : `/${path}`)
    const requestPayload = { ...this.getDefaultPayload(), ...payload }
    const headers = {}
    const authorization = withAuthorization && this.getAuthorizationHeader()

    if (authorization) headers.Authorization = authorization
    return this.json(url, requestPayload, method, headers)
  }

  async post(path, payload, withAuthorization = true) {
    return this.performHTTPRequest(path, payload, "POST", withAuthorization)
  }

  async put(path, payload, withAuthorization = true) {
    return this.performHTTPRequest(path, payload, "PUT", withAuthorization)
  }

  async delete(path, payload, withAuthorization = true) {
    return this.performHTTPRequest(path, payload, "DELETE", withAuthorization)
  }

  async get(path, withAuthorization = true) {
    return this.performHTTPRequest(path, undefined, "GET", withAuthorization)
  }

  getDefaultPayload() {
    return this._defaultPayload || {}
  }

  get defaultHost() {
    return this._defaultHost
  }

  getAuthorizationHeader() {
    return null
  }
}

markInjectable(BackendModel)

module.exports = { BackendModel }
