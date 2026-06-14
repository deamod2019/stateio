/**
 * Restored source for Webpack Module #94766.
 *
 * State.io preload action that builds bitmap fonts, preloads shared and skin
 * assets, updates the page progress model, and shows the root spinner.
 */
"use strict"

const { Types2D, TypesApp } = require("./CoreTypes")
const { PageModel } = require("./SocialAppExports")
const {
  SelectableBuildingDataSet,
  SelectableFighterDataSet,
} = require("./SelectableSkins")
const { BitmapFont, utils } = require("./pixiRuntime")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { PreloadAssetsAction } = require("./PreloadAssetsAction")
const SIORootView = require("./SIORootView").default

class SIOPreloadAssetsAction extends PreloadAssetsAction {
  async execute() {
    console.error("start preload")

    const skinAssets = Array.from(
      SelectableBuildingDataSet.concat(SelectableFighterDataSet),
      (item) => item.textureUrl || "",
    )

    BitmapFont.from(
      "Helvetica",
      { fill: "black", fontFamily: "Helvetica", fontSize: 24, fontWeight: "800" },
      { chars: "0123456789- ", resolution: devicePixelRatio },
    )

    const assets = [
      "Notification.png",
      "spinner.svg",
      "skull.svg",
      "finger.svg",
      "animation/win-rays.svg",
      "victory-framing.svg",
      ...skinAssets,
    ]

    const preload = super.execute({
      assets,
      onProgress: (progress) => {
        this.pageModel.assetsProgress = progress / 100
      },
    })

    await Promise.all([preload])

    utils.TextureCache["Notification.png"].baseTexture.setResolution(1)
    this.root.onAdded()
    this.root.spinner.show()
  }
}

injectProperty(SIOPreloadAssetsAction, "root", Types2D.rootView, SIORootView)
injectProperty(SIOPreloadAssetsAction, "pageModel", TypesApp.pageModel, PageModel)
markInjectable(SIOPreloadAssetsAction)

module.exports = { SIOPreloadAssetsAction }
