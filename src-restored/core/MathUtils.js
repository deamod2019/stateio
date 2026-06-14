/**
 * Restored source for Webpack Modules #68532, #98707, and #77577.
 *
 * Shared 2D math, color helpers, and map fill-color owner assignment.
 */
"use strict"

const { PlayerType } = require("./PlayerType")

const EPSILON = 11754944e-45

function dist(first, second) {
  const [firstX, firstY] = first
  const [secondX, secondY] = second
  return Math.sqrt((secondX - firstX) * (secondX - firstX) + (secondY - firstY) * (secondY - firstY))
}

function lerpNumber(first, second, amount) {
  return first * amount + second * (1 - amount)
}

function lerpColorChannel(first, second, amount) {
  return first + amount * (second - first)
}

function len(value) {
  const [x, y] = value
  return Math.sqrt(x * x + y * y)
}

function rotate(value, angle) {
  const [x, y] = value
  return [x * Math.cos(angle) - y * Math.sin(angle), x * Math.sin(angle) + y * Math.cos(angle)]
}

function clamp(value, min, max) {
  if (value < min) value = min
  else if (value > max) value = max
  return value
}

const math = {
  lerp(first, second, amount) {
    const [firstX, firstY] = first
    const [secondX, secondY] = second
    return [lerpNumber(firstX, secondX, amount), lerpNumber(firstY, secondY, amount)]
  },

  len,

  sum(first, second) {
    const [firstX, firstY] = first
    return [firstX + second[0], firstY + second[1]]
  },

  sub(first, second) {
    const [firstX, firstY] = first
    return [firstX - second[0], firstY - second[1]]
  },

  scale(value, factor) {
    return value.map((item) => item * factor)
  },

  rotate,

  rotateAround(origin, point, angle) {
    const [originX, originY] = origin
    const [pointX, pointY] = point
    const [rotatedX, rotatedY] = rotate([pointX, pointY], angle)
    return [rotatedX + originX, rotatedY + originY]
  },

  norm(value) {
    const valueLength = len(value)
    const [x, y] = value
    return [x / valueLength, y / valueLength]
  },

  dist,

  dot(first, second) {
    const [firstX, firstY] = first
    return firstX * second[0] + firstY * second[1]
  },

  clamp,

  repeat(value, length) {
    return clamp(value - Math.floor(value / length) * length, 0, length)
  },

  remap(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  },

  approximately(first, second) {
    return Math.abs(second - first) < Math.max(1e-6 * Math.max(Math.abs(first), Math.abs(second)), 8 * EPSILON)
  },

  angle(first, second) {
    const [firstX, firstY] = first
    const [secondX, secondY] = second
    return Math.atan2(secondY - firstY, secondX - firstX)
  },

  round(value, precision = 1e3) {
    return Math.round(value * precision) / precision
  },

  array_summ(values) {
    return values.reduce((total, value) => total + value, 0)
  },

  RAD2DEG: 57.29578,
  DEG2RAD: 0.017453292,
  EPSILON,
}

function toRGB(value) {
  return [value >> 16, (value >> 8) & 255, value & 255]
}

function fromRGB(...rgb) {
  const [red, green, blue] = rgb
  return ((red << 16) + (green << 8) + blue) | 0
}

const color = {
  fromHex(value) {
    return parseInt(value.substr(1), 16)
  },

  toRGB,

  fromRGB,

  lerp(first, second, amount) {
    if (amount <= 0) return first
    if (amount >= 1) return second

    const [firstRed, firstGreen, firstBlue] = toRGB(first)
    const [secondRed, secondGreen, secondBlue] = toRGB(second)
    return fromRGB(
      lerpColorChannel(firstRed, secondRed, amount),
      lerpColorChannel(firstGreen, secondGreen, amount),
      lerpColorChannel(firstBlue, secondBlue, amount),
    )
  },

  pale(value, amount = 0.5) {
    return fromRGB(...toRGB(value).map((item) => Math.floor(clamp(item * amount, 0, 255))))
  },

  rgbToHsl(...rgb) {
    let [red, green, blue] = rgb
    red /= 255
    green /= 255
    blue /= 255

    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)
    let hue = (max + min) / 2
    let saturation = hue
    const lightness = saturation

    if (max === min) {
      hue = saturation = 0
    } else {
      const delta = max - min
      saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
      switch (max) {
        case red:
          hue = (green - blue) / delta + (green < blue ? 6 : 0)
          break
        case green:
          hue = (blue - red) / delta + 2
          break
        case blue:
          hue = (red - green) / delta + 4
          break
      }
      hue /= 6
    }

    return [Math.floor(360 * hue), Math.floor(100 * saturation), Math.floor(100 * lightness)]
  },
}

function getOwnerForFillColor(fillColor, availableOwners) {
  switch (fillColor == null ? undefined : fillColor.toUpperCase()) {
    case "#DE7676":
      return availableOwners[0]
    case "#74BCFF":
      return PlayerType.First
  }
  return PlayerType.Neutral
}

function getOwnerGenerator(availableOwners = [
  PlayerType.Second,
  PlayerType.Third,
  PlayerType.Fourth,
  PlayerType.Fifth,
  PlayerType.Sixth,
  PlayerType.Seventh,
  PlayerType.Eighth,
]) {
  return (fillColor) => {
    const owner = getOwnerForFillColor(fillColor, availableOwners)
    if (owner > PlayerType.First && owner !== PlayerType.Neutral) {
      availableOwners.splice(availableOwners.indexOf(owner), 1)
    }
    return owner
  }
}

module.exports = { getOwnerGenerator, dist, math, color }
