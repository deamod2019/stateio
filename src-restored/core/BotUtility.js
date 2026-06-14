/**
 * Restored source for Webpack Module #35081.
 *
 * Geometry helpers used by bot battle-state collision simulation.
 */
"use strict"

const { math } = require("./MathUtils")

class RectBounds {
  constructor(segment) {
    this.Points = BotUtility.CalculateBounds(
      segment.Center,
      segment.Width,
      segment.Height,
      segment.Angle,
    )
  }
}

class BotUtility {
  static IsSegmentIntersectCircle(center, radius, segment) {
    return BotUtility.IsRectIntersectCircle(
      center,
      radius,
      segment.Center,
      segment.Width,
      segment.Height,
      segment.Angle,
    )
  }

  static IsRectIntersectCircle(circleCenter, radius, rectCenter, width, height, angle) {
    const bounds = BotUtility.CalculateBounds(rectCenter, width, height, angle)
    return (
      BotUtility.IsPointInRectangle(circleCenter, bounds) ||
      BotUtility.IsLineIntersectCircle(circleCenter, radius, bounds[0], bounds[1]) ||
      BotUtility.IsLineIntersectCircle(circleCenter, radius, bounds[1], bounds[2]) ||
      BotUtility.IsLineIntersectCircle(circleCenter, radius, bounds[2], bounds[3]) ||
      BotUtility.IsLineIntersectCircle(circleCenter, radius, bounds[3], bounds[0])
    )
  }

  static CalculateBounds(center, width, height, angle) {
    const bounds = []
    const halfWidth = 0.5 * width
    const halfHeight = 0.5 * height
    const radians = angle * math.DEG2RAD

    bounds[0] = math.rotateAround(center, [-halfWidth, halfHeight], radians)
    bounds[1] = math.rotateAround(center, [halfWidth, halfHeight], radians)
    bounds[2] = math.rotateAround(center, [halfWidth, -halfHeight], radians)
    bounds[3] = math.rotateAround(center, [-halfWidth, -halfHeight], radians)
    return bounds
  }

  static DrawBox(value) {
    void value
  }

  static IsPointInRectangle(point, bounds) {
    const pointDelta = math.sub(bounds[0], point)
    const topEdge = math.sub(bounds[0], bounds[1])
    const leftEdge = math.sub(bounds[0], bounds[3])

    return (
      0 <= math.dot(pointDelta, topEdge) &&
      math.dot(pointDelta, topEdge) <= math.dot(topEdge, topEdge) &&
      0 <= math.dot(pointDelta, leftEdge) &&
      math.dot(pointDelta, leftEdge) <= math.dot(leftEdge, leftEdge)
    )
  }

  static IsLineIntersectCircle(center, radius, start, end) {
    const startInside = math.dist(center, start) <= radius
    const endInside = math.dist(center, end) <= radius
    const [startX, startY] = start
    const [endX, endY] = end
    const deltaX = endX - startX
    const deltaY = endY - startY
    const projection =
      ((center[0] - startX) * deltaX + (center[1] - startY) * deltaY) /
      (deltaX * deltaX + deltaY * deltaY)
    const projectedPoint = [startX + projection * deltaX, startY + projection * deltaY]
    const projectionOnSegment = math.approximately(
      math.dist(start, projectedPoint) + math.dist(end, projectedPoint),
      math.dist(start, end),
    )
    const projectionInside = math.dist(center, projectedPoint) <= radius

    return (projectionOnSegment && projectionInside) || startInside || endInside
  }

  static IsSegmentIntersectSegment(first, second) {
    return BotUtility.IsRectanglesIntersecting(new RectBounds(first), new RectBounds(second))
  }

  static IsRectanglesIntersecting(first, second) {
    const rectangles = [first, second]

    for (const rectangle of rectangles) {
      for (let index = 0; index < rectangle.Points.length; index++) {
        const nextIndex = (index + 1) % rectangle.Points.length
        const [x1, y1] = rectangle.Points[index]
        const [x2, y2] = rectangle.Points[nextIndex]
        const axis = [y2 - y1, x1 - x2]

        let firstMin = Number.NaN
        let firstMax = Number.NaN
        for (const point of first.Points) {
          const projection = axis[0] * point[0] + axis[1] * point[1]
          if (isNaN(firstMin) || projection < firstMin) firstMin = projection
          if (isNaN(firstMax) || projection > firstMax) firstMax = projection
        }

        let secondMin = Number.NaN
        let secondMax = Number.NaN
        for (const point of second.Points) {
          const projection = axis[0] * point[0] + axis[1] * point[1]
          if (isNaN(secondMin) || projection < secondMin) secondMin = projection
          if (isNaN(secondMax) || projection > secondMax) secondMax = projection
        }

        if (firstMax < secondMin || secondMax < firstMin) return false
      }
    }

    return true
  }
}

module.exports = { BotUtility }
