/**
 * Restored source for Webpack Module #99856.
 *
 * Small display-object sizing and centering helpers.
 */
"use strict"

function centerWidth(area, target) {
  const width = typeof area === "number" ? area : area.width
  if (target === undefined) return 0.5 * width

  const x = 0.5 * (width - (typeof target === "number" ? target : target.width))
  target.x = x
  return x
}

function centerHeight(area, target) {
  const height = typeof area === "number" ? area : area.height
  if (target === undefined) return 0.5 * height

  const y = 0.5 * (height - (typeof target === "number" ? target : target.height))
  target.y = y
  return y
}

function centerSize(area, target) {
  return { x: centerWidth(area, target), y: centerHeight(area, target) }
}

function aspectFit(area, target) {
  const widthRatio = target.width / area.width
  const heightRatio = target.height / area.height

  if (heightRatio < widthRatio) {
    target.width = (target.height / area.height) * area.width
  } else if (widthRatio < heightRatio) {
    target.height = (target.width / area.width) * area.height
  }

  return target
}

function aspectFill(displayObject, target) {
  const originalWidth = displayObject.width / displayObject.scale.x
  const originalHeight = displayObject.height / displayObject.scale.y
  const widthRatio = target.width / originalWidth
  const heightRatio = target.height / originalHeight

  if (heightRatio > widthRatio) {
    displayObject.width = (target.height / originalHeight) * originalWidth
    displayObject.scale.y = displayObject.scale.x
  } else if (widthRatio > heightRatio) {
    displayObject.height = (target.width / originalWidth) * originalHeight
    displayObject.scale.x = displayObject.scale.y
  }

  return displayObject
}

module.exports = { centerSize, centerWidth, centerHeight, aspectFit, aspectFill }
