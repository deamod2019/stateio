/**
 * Restored source for Webpack Module #29568 plus #11414 re-export.
 *
 * Computes an SVG path bounding box after normalizing path commands through
 * a named boundary for the original path parser utility.
 */
"use strict"

const parsePath = require("./PathParserRuntime")

function quadraticBounds(values) {
  const min = Math.min(values[0], values[2])
  const max = Math.max(values[0], values[2])

  if (values[1] > values[0] ? values[2] >= values[1] : values[2] <= values[1]) {
    return [min, max]
  }

  const middle =
    (values[0] * values[2] - values[1] * values[1]) /
    (values[0] - 2 * values[1] + values[2])
  return middle < min ? [middle, max] : [min, middle]
}

function cubicBounds(values) {
  const denominator = values[0] - 3 * values[1] + 3 * values[2] - values[3]
  if (Math.abs(denominator) < 1e-8) {
    return values[0] === values[3] && values[0] === values[1]
      ? [values[0], values[3]]
      : quadraticBounds([
          values[0],
          -0.5 * values[0] + 1.5 * values[1],
          values[0] - 3 * values[1] + 3 * values[2],
        ])
  }

  const discriminant =
    -values[0] * values[2] +
    values[0] * values[3] -
    values[1] * values[2] -
    values[1] * values[3] +
    values[1] * values[1] +
    values[2] * values[2]
  if (discriminant <= 0) return [Math.min(values[0], values[3]), Math.max(values[0], values[3])]

  const root = Math.sqrt(discriminant)
  let min = Math.min(values[0], values[3])
  let max = Math.max(values[0], values[3])
  const base = values[0] - 2 * values[1] + values[2]
  let ratio = (base + root) / denominator

  for (let index = 1; index <= 2; ratio = (base - root) / denominator, index += 1) {
    if (ratio > 0 && ratio < 1) {
      const value =
        values[0] * (1 - ratio) * (1 - ratio) * (1 - ratio) +
        3 * values[1] * (1 - ratio) * (1 - ratio) * ratio +
        3 * values[2] * (1 - ratio) * ratio * ratio +
        values[3] * ratio * ratio * ratio
      if (value < min) min = value
      if (value > max) max = value
    }
  }

  return [min, max]
}

function getPathBounds(path) {
  const min = [Infinity, Infinity]
  const max = [-Infinity, -Infinity]

  parsePath(path)
    .abs()
    .unarc()
    .unshort()
    .iterate((command, index, previousX, previousY) => {
      switch (command[0]) {
        case "M":
        case "L":
          if (min[0] > command[1]) min[0] = command[1]
          if (min[1] > command[2]) min[1] = command[2]
          if (max[0] < command[1]) max[0] = command[1]
          if (max[1] < command[2]) max[1] = command[2]
          break
        case "V":
          if (min[1] > command[1]) min[1] = command[1]
          if (max[1] < command[1]) max[1] = command[1]
          break
        case "H":
          if (min[0] > command[1]) min[0] = command[1]
          if (max[0] < command[1]) max[0] = command[1]
          break
        case "C": {
          const xBounds = cubicBounds([previousX, command[1], command[3], command[5]])
          if (min[0] > xBounds[0]) min[0] = xBounds[0]
          if (max[0] < xBounds[1]) max[0] = xBounds[1]
          const yBounds = cubicBounds([previousY, command[2], command[4], command[6]])
          if (min[1] > yBounds[0]) min[1] = yBounds[0]
          if (max[1] < yBounds[1]) max[1] = yBounds[1]
          break
        }
        case "Q": {
          const xBounds = quadraticBounds([previousX, command[1], command[3]])
          if (min[0] > xBounds[0]) min[0] = xBounds[0]
          if (max[0] < xBounds[1]) max[0] = xBounds[1]
          const yBounds = quadraticBounds([previousY, command[2], command[4]])
          if (min[1] > yBounds[0]) min[1] = yBounds[0]
          if (max[1] < yBounds[1]) max[1] = yBounds[1]
          break
        }
      }
    }, true)

  return [min[0], min[1], max[0], max[1]]
}

module.exports = getPathBounds
module.exports.default = getPathBounds
