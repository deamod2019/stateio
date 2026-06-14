/**
 * Restored source for Webpack Module #57620.
 *
 * Generates cached left/right travel paths between every pair of capital
 * buildings and then removes itself from the engine.
 */
"use strict"

const { IterativeSystem } = require("./ECSCore")
const { math } = require("./MathUtils")
const { PathHolder } = require("./PathHolder")
const { CapitalView } = require("./CapitalView")

class PathsGenerationSystem extends IterativeSystem {
  constructor() {
    super((entity) => entity.has(CapitalView))
  }

  update(delta) {
    super.update(delta)
    this.engine.removeSystem(this)
  }

  updateEntity(building) {
    const pathHolder = building.get(PathHolder)
    if (!pathHolder) return

    pathHolder.clearCache()

    for (const targetBuilding of this.entities) {
      if (targetBuilding === building) continue

      const targetPosition = targetBuilding.data.statePos
      const sourcePosition = building.data.statePos
      const targetRadiusHalf = 0.5 * targetBuilding.data.stateRadius
      const centerLine = []
      const direction = math.norm(math.sub(targetPosition, sourcePosition))

      centerLine.push(sourcePosition)
      centerLine.push(math.sum(sourcePosition, math.scale(direction, targetRadiusHalf)))
      centerLine.push(math.sub(targetPosition, math.scale(direction, targetRadiusHalf)))
      centerLine.push(targetPosition)

      const path = []
      path.push([sourcePosition, sourcePosition])

      for (
        let index = 1, maxOffset = PathHolder.MAX_SPAWN_LEN_ONE_DIRECTION;
        index < centerLine.length - 1;
        index++
      ) {
        const segmentDirection = math.norm(math.sub(centerLine[index + 1], centerLine[index]))
        const leftNormal = math.rotate(segmentDirection, -Math.PI / 2)
        const rightNormal = math.rotate(segmentDirection, Math.PI / 2)
        const left = math.sum(centerLine[index], math.scale(leftNormal, maxOffset))
        const right = math.sum(centerLine[index], math.scale(rightNormal, maxOffset))
        path.push([left, right])
      }

      path.push([targetPosition, targetPosition])
      pathHolder.addPath(targetBuilding, path)
    }
  }
}

module.exports = { PathsGenerationSystem }
