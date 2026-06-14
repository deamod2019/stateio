/**
 * Restored source for Webpack Module #952.
 *
 * Loads image assets through Pixi Loader and binds each loaded texture as a
 * dynamic sprite factory in the dependency container.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const { log } = require("./RuntimeUtils")
const { markInjectable } = require("./DecoratorHelpers")
const { Loader, Sprite } = require("./pixiRuntime")

const ASSET_ORIGIN = core.IS_ODR_BUILD ? core.ODR_BUILD_ORIGIN : core.GAME_SCRIPT_ORIGIN
const PRELOAD_EXTENSIONS = ["svg", "jpg", "png"]

class PreloadAssetsAction extends Action {
  async execute(data) {
    const loader = new Loader()

    data.assets
      .filter((asset) => PRELOAD_EXTENSIONS.indexOf(String(asset.split(".").pop())) !== -1)
      .forEach((asset) => {
        const path = this.transformAssetPath(asset)
        loader.add(asset, path, null, (resource) => {
          log.trace("preloaded", resource.name, "from:", path)
          this.bindAsset(asset, resource)
        })
      })

    if (data.onProgress) {
      loader.onProgress.add(() => {
        data.onProgress(loader.progress)
      })
    }

    await new Promise((resolve) => loader.load(resolve))
  }

  transformAssetPath(asset) {
    return `${ASSET_ORIGIN}assets/${asset}`
  }

  bindAsset(asset, resource) {
    const key = `${this.data?.prefix || ""}${asset}`
    core.di.bind(key).toDynamicValue(() => new Sprite(resource.texture))
  }
}

markInjectable(PreloadAssetsAction)

module.exports = { PreloadAssetsAction }
