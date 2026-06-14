/**
 * Restored source for Webpack Module #4199.
 *
 * Browser image and Pixi texture loading helpers.
 */
"use strict"

const { Texture, utils } = require("./pixiRuntime")
const { log } = require("./RuntimeUtils")

async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "Anonymous"
    image.src = url
    image.onload = () => resolve(image)
    image.onerror = (error) => reject(error)
  })
}

async function loadTexture(url) {
  const cachedTexture = utils.TextureCache[url]
  if (cachedTexture) return cachedTexture

  let image
  try {
    image = await loadImage(url)
  } catch (error) {
    log.warn("loadImage", error)
  }

  return image ? Texture.from(image) : Texture.EMPTY
}

module.exports = { loadTexture, loadImage }
