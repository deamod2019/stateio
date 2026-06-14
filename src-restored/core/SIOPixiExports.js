/**
 * Restored source for Webpack Module #55132.
 *
 * State.io Pixi/UI barrel that combines display framework, root classes,
 * texture loading, preload actions, and layout helpers.
 */
"use strict"

const display = require("./DisplayFramework")
const pixiCore = require("./PixiCoreExports")
const textures = require("./TextureLoader")
const preload = require("./PreloadAssetsExports")
const layout = require("./LayoutUtils")

const exportsObject = {
  ...display,
  ...pixiCore,
  ...textures,
  ...preload,
  ...layout,
}

Object.defineProperty(exportsObject, "__esModule", { value: true })

module.exports = exportsObject
