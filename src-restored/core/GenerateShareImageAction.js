/**
 * Restored source for Webpack Module #45724.
 *
 * Composes the level-completed share image from the generated map sprite,
 * avatar frame, score badge, localized copy, and renderer extraction.
 */
"use strict"

const { Action, di } = require("./RuntimeCore")
const {
  aspectFit,
  centerSize,
  loadTexture,
} = require("./SIOPixiExports")
const { Localize } = require("./Localize")
const { Types2D, TypesSocial } = require("./CoreTypes")
const { ISocial } = require("./SocialAppExports")
const { GameConstants } = require("./GameConstants")
const RootView = require("./SIORootView").default
const { TypesGame } = require("./TypesGame")
const {
  BitmapText,
  BLEND_MODES,
  Container,
  Graphics,
  RenderTexture,
  Sprite,
  Texture,
  utils,
} = require("./pixiRuntime")
const { GameModel } = require("./GameModel")
const { UserPic } = require("./UserPic")
const {
  injectProperty,
  lazyInjectProperty,
  markInjectable,
} = require("./DecoratorHelpers")

const {
  subTitleFontStyle,
  scoreFontStyle,
  scoreBarStyle,
  layoutSettings,
} = GameConstants.LevelCompletedScreenShot

class GenerateShareImageAction extends Action {
  async execute(payload) {
    const screenshot = await this.drawScreenShot(payload.points, this.social.me)
    return { image: this.rootView.app.renderer.extract.base64(screenshot) }
  }

  async drawScreenShot(points, user) {
    const [avatar, fieldSprite] = await Promise.all([
      this.createAvatar(points, user),
      this.createFieldSprite(),
    ])
    const background = new Graphics().beginFill(0xd0d0d0).drawRect(0, 0, 10, 10).endFill()
    const overlay = new Graphics().beginFill(0, 0.2).drawRect(0, 0, 10, 10).endFill()
    const container = new Container()
    const bounds = fieldSprite.getBounds().pad(20, 20)

    container.addChild(background, fieldSprite, avatar)
    overlay.width = background.width = bounds.width
    overlay.height = background.height = bounds.height
    fieldSprite.x = 0.5 * (bounds.width - fieldSprite.width)
    fieldSprite.y = 0.5 * (bounds.height - fieldSprite.height)
    avatar.x = 0.5 * (bounds.width - layoutSettings.avatarWidth)
    avatar.y = 0.5 * (bounds.height - layoutSettings.avatarHeight)

    const avatarTexture = RenderTexture.create({ width: bounds.width, height: bounds.height })
    this.rootView.app.renderer.render(avatar, avatarTexture)
    const avatarSprite = new Sprite(avatarTexture)

    Texture.removeFromCache(avatarTexture)
    container.removeChild(avatar)
    container.addChild(overlay)
    container.addChild(avatarSprite)
    return container
  }

  async createFieldSprite() {
    return di.get(TypesGame.actions.createMap).run({
      activeStage: Number.MAX_SAFE_INTEGER,
      data: this.model.currentContinent.data,
      area: { width: 640, height: 640 },
    })
  }

  async createAvatar(points, user) {
    const output = new Container()
    const avatarContainer = new Container()
    const userPic = new UserPic()
    const radius = layoutSettings.avatarRadius

    userPic.width = layoutSettings.avatarWidth
    userPic.height = layoutSettings.avatarHeight
    avatarContainer.addChild(userPic)

    if (user) {
      const texture = await loadTexture(user.photo)
      if (texture) {
        texture.textureCacheIds[0] = `user-photo-${user.id}`
        utils.TextureCache[user.photo] = texture
      }
    }

    const frame = new Sprite(utils.TextureCache["victory-framing.svg"])
    frame.anchor.set(0.5, 1)
    frame.x = 0.5 * layoutSettings.avatarWidth
    frame.y = layoutSettings.avatarHeight + 40

    const rays = new Sprite(utils.TextureCache["animation/win-rays.svg"])
    rays.anchor.set(0.5)
    rays.blendMode = BLEND_MODES.OVERLAY
    rays.width = layoutSettings.maxWidth
    rays.alpha = 0.6
    aspectFit({ width: 540, height: 774 }, rays)
    rays.x = 0.5 * layoutSettings.avatarWidth
    rays.y = 0.5 * layoutSettings.avatarHeight

    userPic.user = user

    const mask = new Graphics().beginFill(0xffffff).drawCircle(radius, radius, radius).endFill()
    avatarContainer.addChild(mask)
    avatarContainer.mask = mask

    const score = new BitmapText(
      `${points}`,
      { ...scoreFontStyle, fontName: "Helvetica" },
    )
    const scoreBackground = new Graphics()
    const badge = new Container()
    badge.addChild(scoreBackground, score)
    badge.y = layoutSettings.badgeOffsetY
    score.text = `${points}`
    scoreBackground
      .clear()
      .beginFill(scoreBarStyle.color)
      .drawRoundedRect(
        0,
        0,
        scoreBarStyle.width,
        scoreBarStyle.height,
        scoreBarStyle.radius,
      )
    centerSize(scoreBackground, score)

    const message = Localize.get("level_completed_message", "ALL STAGES COMPLETED!")
    const subtitle = new BitmapText(
      message,
      { ...subTitleFontStyle, fontName: "Helvetica" },
    )
    subtitle.x = 0.5 * (layoutSettings.avatarWidth - subtitle.width)
    subtitle.y = layoutSettings.subtitleOffsetY

    output.addChild(rays)
    output.addChild(avatarContainer)
    output.addChild(frame)
    output.addChild(subtitle)
    output.addChild(badge)
    Texture.removeFromCache(userPic.sprite?.texture)
    return output
  }
}

injectProperty(GenerateShareImageAction, "rootView", Types2D.rootView, RootView)
injectProperty(GenerateShareImageAction, "social", TypesSocial.model, ISocial)
injectProperty(GenerateShareImageAction, "model", TypesGame.model, GameModel)
lazyInjectProperty(
  GenerateShareImageAction,
  "screenshotAction",
  Types2D.screenShotAction,
  Action,
)
markInjectable(GenerateShareImageAction)

module.exports = { GenerateShareImageAction }
