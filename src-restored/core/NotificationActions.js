/**
 * Restored source for Webpack Modules #78346, #97158, #92406, #33154, #54799.
 *
 * Push notification actions used by start/finish/leave flows.
 */
"use strict"

const { Action } = require("./Action")
const { TypesNotification, TypesSocial } = require("./CoreTypes")
const { log } = require("./RuntimeUtils")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")

class NotificationAction extends Action {
  constructor(...args) {
    super(...args)
    this.action = "CUSTOM"
    this.template = "play_turn"
    this.notification = "PUSH"
  }

  async execute(data) {
    this.data = data
    const payload = await this.getPayload()
    const ok = await this.social.notify(payload)
    if (ok) log.trace("notification", payload.text, payload.strategy)
    else log.warn("notification", payload.text, payload.strategy)
    return undefined
  }

  async getPayload() {
    const payload = {
      action: this.action,
      template: this.template,
      strategy: this.strategy,
      notification: this.notification,
      cta: this.cta,
      text: this.getText(),
    }
    payload.image = await this.getImage()
    return payload
  }

  getEmoji() {
    return NotificationAction.EMOJI ? `${NotificationAction.EMOJI} ` : ""
  }

  getI18NKey() {
    return "play_turn"
  }

  getText() {
    const prefix = this.getEmoji()
    return mapTemplate(this.i18n[this.getI18NKey()], (value) =>
      prefix +
      value.replace(/{username}|{score}/g, (placeholder) => {
        switch (placeholder) {
          case "{username}":
            return this.social.me.name
          case "{score}":
            return `${this.social.me.scoreSession}`
        }
        return placeholder
      }),
    )
  }

  async getImage() {
    return this.loadImage("./assets/Notification.png")
  }

  async loadImage(url, useCache = true) {
    if (useCache && NotificationAction.IMAGES_CACHE[url]) {
      return NotificationAction.IMAGES_CACHE[url]
    }

    return new Promise((resolve) => {
      const image = new Image()
      image.crossOrigin = "Anonymous"
      image.src = url
      image.style.visibility = "hidden"
      document.body.appendChild(image)
      image.addEventListener("load", () => {
        document.body.removeChild(image)
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0)
        const dataUrl = canvas.toDataURL("image/jpeg")
        if (useCache) NotificationAction.IMAGES_CACHE[url] = dataUrl
        resolve(dataUrl)
      })
    })
  }
}

NotificationAction.IMAGES_CACHE = {}
NotificationAction.EMOJI = ""
NotificationAction.WIDTH_FULL = 1200
NotificationAction.HEIGHT_FULL = 627

injectProperty(NotificationAction, "social", TypesSocial.model, Object)
injectProperty(NotificationAction, "i18n", TypesNotification.i18n, Object)
markInjectable(NotificationAction)

class NAStart extends NotificationAction {
  constructor(...args) {
    super(...args)
    this.strategy = "LAST"
  }
}

markInjectable(NAStart)

class NAFinish extends NotificationAction {
  constructor(...args) {
    super(...args)
    this.strategy = "IMMEDIATE"
    this.template = "play_won"
  }

  getI18NKey() {
    const score = this.social.me.scoreSession
    return this.data?.isWon
      ? score > 0
        ? "play_won_0"
        : "play_won_1"
      : score > 0
        ? "play_won_2"
        : "play_won_3"
  }
}

markInjectable(NAFinish)

class NALeave extends NotificationAction {}

markInjectable(NALeave)

module.exports = {
  NotificationAction,
  NAStart,
  NAFinish,
  NALeave,
  IMAGES_CACHE: NotificationAction.IMAGES_CACHE,
  EMOJI: NotificationAction.EMOJI,
  WIDTH_FULL: NotificationAction.WIDTH_FULL,
  HEIGHT_FULL: NotificationAction.HEIGHT_FULL,
}

function mapTemplate(template, mapper) {
  const mapped = { default: mapper(template.default), localizations: {} }
  for (const locale in template.localizations) {
    mapped.localizations[locale] = mapper(template.localizations[locale])
  }
  return mapped
}
