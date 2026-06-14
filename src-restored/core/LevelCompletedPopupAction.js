/**
 * Restored source for Webpack Module #87460.
 *
 * Builds the level-completed popup payload, optionally generates a share image,
 * waits for the popup continuation callback, and logs the result.
 */
"use strict"

const { log } = require("./RuntimeUtils")
const core = require("./RuntimeCore")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesGame } = require("./TypesGame")
const { UIEvents } = require("../ui/UIContext")
const { PopupType } = require("./PopupType")
const { TypesSocial } = require("./CoreTypes")
const { ISocial } = require("./SocialAppExports")
const { GameModel } = require("./GameModel")
const { GenerateShareImageAction } = require("./GenerateShareImageAction")
const { Action } = require("./Action")

class LevelCompletedPopupAction extends Action {
  async execute() {
    const levelName = this.model.currentContinent.data.id
    const points = +this.social.me.scoreSession.toFixed()
    const shareImage = ["ya", "vk", "gd"].includes(this.social.socialPlatform)
      ? undefined
      : await this.generateImage(levelName, points)

    const shared = await new Promise((resolve) => {
      this.dispatch(UIEvents.POPUP, {
        id: PopupType.LEVEL_COMPLETED,
        props: { levelName, points, shareImage, onContinue: resolve },
      })
    })

    log.debug("LevelCompletedPopupAction shared", shared)
  }

  async generateImage(levelName, points) {
    void levelName
    try {
      const result = await core.di.get(GenerateShareImageAction).run({ points })
      return result.image
    } catch (error) {
      log.warn("Image generation failed", error)
      return undefined
    }
  }
}

injectProperty(
  LevelCompletedPopupAction,
  "model",
  TypesGame.model,
  typeof GameModel !== "undefined" ? GameModel : Object,
)
injectProperty(
  LevelCompletedPopupAction,
  "social",
  TypesSocial.model,
  typeof ISocial !== "undefined" ? ISocial : Object,
)
markInjectable(LevelCompletedPopupAction)

module.exports = { LevelCompletedPopupAction }
