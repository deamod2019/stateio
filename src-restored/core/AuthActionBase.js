/**
 * Restored source for Webpack Module #65248.
 *
 * Base action for platform authorization: reads player identity, asks the
 * backend for a Firebase custom token, and signs in through Firebase Auth.
 */
"use strict"

const { getAuth, signInWithCustomToken } = require("./FirebaseAuthRuntime")
const { Action } = require("./Action")
const { AppModel } = require("./AppModel")
const { defineDecoratedProperty, injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesApp } = require("./CoreTypes")
const { log } = require("./RuntimeUtils")

class AuthActionBase extends Action {
  async execute() {
    const player = await this.getPlayerInfo()
    const { id, name, photo, signature } = player

    this.model.signature = signature

    let response = await this.model.post("auth", { user_id: id, signature }, false)
    if (response && !response.token) {
      response = await this.model.post(
        "auth",
        {
          user_id: id,
          user_photo: photo,
          user_name: name,
          signature,
        },
        false,
      )
    }

    await this.proceedToken(response?.token)
    return undefined
  }

  async proceedToken(token) {
    if (!token) {
      log.warn("#auth missed token")
      return undefined
    }

    let auth
    try {
      auth = getAuth(this.model.firebaseApp)
    } catch (error) {
      log.warn("getAuth failed with error", error)
      return undefined
    }

    let result
    try {
      result = await signInWithCustomToken(auth, token)
    } catch (error) {
      log.warn("signInWithCustomToken failed with error", error)
      return undefined
    }

    log.info("#auth success", result)
    return undefined
  }

  async loadProfileImage(url) {
    let result

    if (url) {
      try {
        const response = await fetch(url)
        const blob = await response.blob()

        result = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
      } catch (error) {
        log.warn("Failed to load profile image")
      }
    }

    return result
  }

  async auth() {
    return undefined
  }
}

injectProperty(AuthActionBase, "model", TypesApp.model, AppModel)
defineDecoratedProperty(AuthActionBase, "model")
markInjectable(AuthActionBase)

module.exports = { AuthActionBase }
