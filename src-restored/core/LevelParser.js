/**
 * Restored source for Webpack Module #13137.
 *
 * Parses the bundled SVG map files into the continent/stage/state data model
 * consumed by LoadLevelAction and ContinentModel.
 */
"use strict"

const { log } = require("./RuntimeUtils")

function parseLevelSVG(document) {
  const rootGroup = document.children[0].children[0]
  log.debug("parse", rootGroup.id)

  const level = {
    id: rootGroup.id,
    states: [],
    stages: [],
  }

  for (let index = 0; index < rootGroup.childElementCount; index++) {
    const child = rootGroup.children[index]

    if (child.id.toLocaleLowerCase().startsWith("stage")) {
      const stage = { id: child.id, states: [] }
      level.stages.push(stage)

      for (let stateIndex = 0; stateIndex < child.childElementCount; stateIndex++) {
        stage.states.push(parseState(child.children[stateIndex]))
      }
    } else if (child.children.length === 2) {
      level.states.push(parseState(child))
    }
  }

  if (!level.stages.length) level.stages = [{ id: level.id, states: level.states }]

  level.stages = level.stages.sort((left, right) => (left.id < right.id ? -1 : 1))
  return level
}

module.exports = { parseLevelSVG }

function parseState(node) {
  const center = findCenter(node)
  const statePosition = parseCenterPosition(center)

  return {
    ...statePosition,
    radius: parseRadius(center),
    id: node.id,
    fillColor: findFillColor(node),
    shapes: findShapes(node),
  }
}

function findCenter(node) {
  const isCenterNode = (candidate) => {
    if (!candidate) return false
    if (candidate.id.startsWith("Centre")) return true
    if (candidate.id.startsWith("Ð¡entre")) {
      if (!node.id.startsWith("Ð¡entre")) console.warn(node.id, "starts with Ð¡entre")
      return true
    }
    return false
  }

  const groups = node.getElementsByTagName("g")
  for (let index = 0; index < groups.length; index++) {
    if (isCenterNode(groups[index])) {
      const nested = findCenter(groups[index])
      if (nested) return nested
    }
  }

  const circles = node.getElementsByTagName("circle")
  for (let index = 0; index < circles.length; index++) {
    if (isCenterNode(circles[index].parentNode)) return circles[index]
  }

  const ellipses = node.getElementsByTagName("ellipse")
  for (let index = 0; index < ellipses.length; index++) {
    if (isCenterNode(ellipses[index].parentNode)) return ellipses[index]
  }

  return undefined
}

function parseCenterPosition(center) {
  return {
    x: parseInt(center.getAttribute("cx"), 10),
    y: parseInt(center.getAttribute("cy"), 10),
  }
}

function parseRadius(center) {
  return parseInt(center.getAttribute("r"), 10)
}

function findFillColor(node) {
  const paths = node.getElementsByTagName("path")
  for (let index = 0; index < paths.length; index++) {
    const fill = paths[index].getAttribute("fill")
    if (fill) return fill
  }
  return null
}

function findShapes(node) {
  const paths = node.getElementsByTagName("path")
  const shapes = []

  for (let index = 0; index < paths.length; index++) {
    const shape = paths[index].getAttribute("d")
    if (shape) shapes.push(shape)
  }

  return shapes
}
