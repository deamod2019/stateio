/**
 * Restored source for Webpack Module #20811.
 *
 * Lightweight moving-group model used by bot battle-state simulation.
 */
"use strict"

const { math } = require("./MathUtils")
const { Spawner } = require("./Spawner")

class GroupModel {
  constructor(owner, speed, amount, path, target, source, targetAmount, lastBurstTimestamp) {
    this.Owner = owner
    this.Speed = speed
    this.Amount = amount
    this.Path = path
    this.Target = target
    this.Source = source
    this.TargetAmount = targetAmount
    this.LastBurstTimestamp = lastBurstTimestamp
  }

  GenerateSegments(fightersInSegment) {
    const segments = []
    let amount = this.Amount
    let offset = 0

    while (amount > 0) {
      const remaining = Math.max(amount - fightersInSegment, 0)
      const segmentAmount = amount - remaining
      amount = remaining

      const width =
        (segmentAmount / Spawner.UNITS_PER_WAVE) *
        this.BurstDelay *
        this.Speed
      const height =
        2 *
        this.SegmentLen *
        (Math.min(segmentAmount, Spawner.UNITS_PER_WAVE) / Spawner.UNITS_PER_WAVE)
      const traceLength = Math.max(this._accumulatedLen - offset, 0)
      const [center, angle] = this.TracePath(traceLength)

      segments.push({
        Width: width,
        Height: height,
        Angle: angle,
        Center: center,
        Amount: segmentAmount,
      })
      offset += width
    }

    return segments
  }

  get IsReachedEnd() {
    return this._accumulatedLen >= this._maxLen
  }

  Init(creationTimestamp, accumulatedLen, burstDelay, segmentLen) {
    this.CreationTimestamp = creationTimestamp
    this._accumulatedLen = 0
    this.BurstDelay = burstDelay
    this.SegmentLen = segmentLen
    this.CalculateMaxLen()
    this.AccumPath(accumulatedLen)
  }

  CalculateMaxLen() {
    let maxLen = 0
    for (let index = 1; index < this.Path.length; index++) {
      maxLen += math.dist(this.Path[index - 1], this.Path[index])
    }
    this._maxLen = maxLen
  }

  AccumPath(length) {
    this._accumulatedLen = Math.min(this._accumulatedLen + length, this._maxLen)
  }

  TracePath(length) {
    let accumulated = 0
    let center = this.Path[0]
    let angle = math.angle(this.Path[0], this.Path[1])

    for (let index = 1; index < this.Path.length; index++) {
      const segmentLength = math.dist(this.Path[index - 1], this.Path[index])
      accumulated += segmentLength

      if (accumulated >= length) {
        const startIndex = index - 1
        const endIndex = index
        const to = accumulated
        const from = accumulated - segmentLength
        const position = math.remap(length, from, to, 0, 1)
        center = math.lerp(this.Path[startIndex], this.Path[endIndex], position)
        const direction = math.norm(math.sub(this.Path[endIndex], center))
        angle = Math.atan2(direction[1], direction[0]) * math.RAD2DEG
        break
      }
    }

    return [center, angle]
  }
}

module.exports = { GroupModel }
