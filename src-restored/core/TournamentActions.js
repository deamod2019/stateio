/**
 * Restored source for Webpack Modules #47, #57503, #93599, and #68719.
 *
 * Facebook Instant Games tournament helpers. They are still optional platform
 * features, but CoreGameModule binds their action tokens, so keeping them as
 * named restored classes avoids loading the old tournament barrel.
 */
"use strict"

const { Action } = require("./Action")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Types2D, TypesSocial } = require("./CoreTypes")
const { TypesGame } = require("./TypesGame")
const { GameModel } = require("./GameModel")
const { GenerateMapSpriteAction } = require("./GenerateMapSpriteAction")
const { RootView } = require("./RootView")
const { Container, Graphics } = require("./pixiRuntime")
const { log } = require("./RuntimeUtils")

class TournamentPostScoreAction extends Action {
  async execute() {
    if (this.social.socialPlatform === "fb") {
      const continent = this.model.currentContinent
      FBInstant.tournament.postScoreAsync(continent.getTotalScore()).catch((error) => {
        log.warn("FBInstant.tournament.postScoreAsync", error)
      })
    }
    return undefined
  }
}

class TournamentCreateAction extends Action {
  async execute() {
    if (this.social.socialPlatform !== "fb") return false

    const continent = this.model.currentContinent
    const payload = {
      initialScore: continent.getTotalScore(),
      data: continent.getHistory(),
    }
    const config = { title: continent.data.id }
    const extractBase64 = this.rootView.app.renderer.extract.base64
    config.image = extractBase64.call(
      this.rootView.app.renderer.extract,
      await this.generateTournamentImage(continent),
    )
    payload.config = config

    return FBInstant.tournament
      .createAsync(payload)
      .then(() => true)
      .catch((error) => {
        log.warn("FBInstant.tournament.createAsync", error)
        return false
      })
  }

  async generateTournamentImage(continent) {
    const container = new Container()
    const background = new Graphics()
      .beginFill(13684944)
      .drawRect(0, 0, TournamentCreateAction.POST_WIDTH, TournamentCreateAction.POST_HEIGHT)

    container.addChild(background)

    const mapSprite = await this.createMapAction.run({
      activeStage: continent.stageLevel,
      data: continent.data,
    })

    const targetWidth = 0.9 * background.width
    const targetHeight = 0.9 * background.height
    const scale = this.aspectFactor(mapSprite.width, mapSprite.height, targetWidth, targetHeight)
    mapSprite.width *= scale
    mapSprite.height *= scale
    mapSprite.x = 0.5 * (background.width - mapSprite.width)
    mapSprite.y = 0.5 * (background.height - mapSprite.height)

    container.addChild(background, mapSprite)
    return container
  }

  aspectFactor(width, height, targetWidth, targetHeight) {
    return width / height >= targetWidth / targetHeight ? targetWidth / width : targetHeight / height
  }
}

TournamentCreateAction.POST_WIDTH = 680
TournamentCreateAction.POST_HEIGHT = 340

class TournamentShareAction extends Action {
  async execute() {
    if (this.social.socialPlatform !== "fb") return false

    const continent = this.model.currentContinent
    return FBInstant.tournament
      .shareAsync({
        score: continent.getTotalScore(),
        data: continent.getHistory(),
      })
      .then(() => true)
      .catch((error) => {
        log.warn("FBInstant.tournament.createAsync", error)
        return false
      })
  }
}

injectProperty(TournamentPostScoreAction, "model", TypesGame.model, GameModel)
injectProperty(TournamentPostScoreAction, "social", TypesSocial.model, Object)
markInjectable(TournamentPostScoreAction)

injectProperty(TournamentCreateAction, "rootView", Types2D.rootView, RootView)
injectProperty(TournamentCreateAction, "model", TypesGame.model, GameModel)
injectProperty(TournamentCreateAction, "social", TypesSocial.model, Object)
injectProperty(
  TournamentCreateAction,
  "createMapAction",
  TypesGame.actions.createMap,
  GenerateMapSpriteAction,
)
markInjectable(TournamentCreateAction)

injectProperty(TournamentShareAction, "model", TypesGame.model, GameModel)
injectProperty(TournamentShareAction, "social", TypesSocial.model, Object)
markInjectable(TournamentShareAction)

module.exports = {
  TournamentCreateAction,
  TournamentPostScoreAction,
  TournamentShareAction,
}
