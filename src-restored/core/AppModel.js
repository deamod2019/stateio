/**
 * Restored source for Webpack Module #20383.
 *
 * Backend app model that initializes Firebase Remote Config and app defaults.
 */
"use strict"

const { initializeApp } = require("./FirebaseAppRuntime")
const {
  ensureInitialized,
  fetchAndActivate,
  getRemoteConfig,
  getString,
} = require("./FirebaseRemoteConfigRuntime")
const { markInjectable } = require("./DecoratorHelpers")
const { log } = require("./RuntimeUtils")
const { BackendModel } = require("./BackendModel")

class AppModel extends BackendModel {
  async init(options) {
    const firebaseConfig = options.firebase
    this._firebaseApp = initializeApp(firebaseConfig)
    this._remoteConfig = getRemoteConfig()
    this._remoteConfig.defaultConfig = this.getDefaultRemoteConfig(options.host)

    try {
      await ensureInitialized(this._remoteConfig).catch(log.warn)
      await fetchAndActivate(this._remoteConfig).catch(log.warn)
    } catch (error) {
      log.warn("Failed to activate remote config", error)
    }

    if (!this._defaultPayload) this._defaultPayload = {}
    this._defaultPayload.app_id = options.appId
    this._defaultPayload.sn = options.provider
    this._defaultHost = `${getString(this._remoteConfig, "backend")}`

    if (typeof __BACKEND_HOST__ !== "undefined" && __BACKEND_HOST__) {
      this._defaultHost = __BACKEND_HOST__
    }

    this._defaultHost = this._defaultHost.replace(/\/+$/, "")
    log.info("defaultHost", this._defaultHost)
  }

  getAuthorizationHeader() {
    return this.signature ? `Bearer ${this.signature}` : super.getAuthorizationHeader()
  }

  get firebaseApp() {
    return this._firebaseApp
  }

  get defaultEndpoint() {
    return ""
  }

  get remoteConfig() {
    return this._remoteConfig
  }

  getDefaultRemoteConfig(host = "http://localhost") {
    return {
      backend: host,
      payments_backend_url: `${host}/purchase`,
    }
  }
}

markInjectable(AppModel)

module.exports = { AppModel }
