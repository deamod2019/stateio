/**
 * Restored source for Webpack Module #158.
 *
 * Caches generated Pixi textures and SVG shape textures used by map rendering.
 */
"use strict"

const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { SCALE_MODES, Sprite, Texture } = require("./pixiRuntime")
const { Types2D } = require("./CoreTypes")
const { RootView } = require("./SIOPixiExports")
const getPathBounds = require("./PathBounds")

class SpritesPool {
  constructor() {
    this._textures = new Map()
    this._shapeTextures = new Map()
    this._pendingShapeTextures = new Map()
  }

  fromDisplayObject(id, factory) {
    if (!this._textures.has(id)) {
      this._textures.set(
        id,
        this.rootView.app.renderer.generateTexture(
          factory(),
          SCALE_MODES.LINEAR,
          window.devicePixelRatio,
        ),
      )
    }

    return new Sprite(this._textures.get(id))
  }

  async createShape(id, shape, keepCache = true) {
    const key = `${id}`

    if (!this._shapeTextures.has(key)) {
      const texture = await this.loadShapeTexture(shape, id)
      texture.textureCacheIds[0] = key

      if (!keepCache) {
        const sprite = new Sprite(texture)
        Texture.removeFromCache(texture)
        return sprite
      }

      this._shapeTextures.set(key, texture)
    }

    return new Sprite(this._shapeTextures.get(key))
  }

  async loadShapeTexture(shape, id) {
    const pending = this._pendingShapeTextures.get(id) || this._loadShapeTexture(shape)
    this._pendingShapeTextures.set(id, pending)
    return pending
  }

  async _loadShapeTexture(shape) {
    let [x, y, width, height] = getPathBounds(shape)
    width -= x
    height -= y

    return Texture.fromURL(
      URL.createObjectURL(
        new Blob(
          [
            '<svg xmlns="http://www.w3.org/2000/svg"\n                            width="' +
              width +
              '" \n                            height="' +
              height +
              '" \n                            viewBox="' +
              x +
              " " +
              y +
              " " +
              width +
              " " +
              height +
              '" \n                            fill="white"> \n                            <path d="' +
              shape +
              '" />\n                        </svg>',
          ],
          { type: "image/svg+xml" },
        ),
      ),
    )
  }

  purge() {
    this._shapeTextures.forEach(Texture.removeFromCache)
    this._textures.forEach(Texture.removeFromCache)
    this._pendingShapeTextures.clear()
    this._textures.clear()
    this._shapeTextures.clear()
  }
}

injectProperty(SpritesPool, "rootView", Types2D.rootView, RootView)
markInjectable(SpritesPool)

module.exports = { SpritesPool }
