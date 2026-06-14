/**
 * Restored source for Webpack Module #46697.
 *
 * Fighter is the moving unit entity spawned by buildings.
 */
"use strict"

const { color, math } = require("./MathUtils")
const { GameColors } = require("./SelectableSkins")
const { injectToken, markInjectable } = require("./DecoratorHelpers")
const { Entity } = require("./ECSCore")
const { TypesGame } = require("./TypesGame")

class Fighter extends Entity {
  constructor(owner, source, target, step, path, amount, speed, scaleFactor = 1) {
    super()
    this.owner = owner
    this.source = source
    this.target = target
    this.step = step
    this.path = path
    this.amount = amount
    this.speed = speed
    this.scaleFactor = scaleFactor
    this.color = 0xff0000
    this.position = [0, 0]
    this._rotation = 0

    const [, fighterColor] = GameColors.players[owner]
    this.color = color.fromHex(fighterColor)
    this.add(Fighter.TAG)
  }

  getPositionOnGrid(size = 100) {
    const [x, y] = this.position
    return [Math.round(x / size), Math.round(y / size)]
  }

  move(delta = 0) {
    const targetPoint = this.path[0]
    if (!targetPoint) return true

    const [targetX, targetY] = targetPoint
    let [x, y] = this.position
    const angle = Math.atan2(targetY - y, targetX - x)
    const size = Fighter.DEFAULT_SIZE

    x += (Math.cos(angle) * this.speed * delta) / size
    y += (Math.sin(angle) * this.speed * delta) / size
    this.position[0] = x
    this.position[1] = y
    this._rotation = angle + Math.PI / 2

    if (this.path.length > 0) {
      if (math.dist(this.position, targetPoint) <= 30 * Fighter.DISTANCE_TOLERANCE) {
        this.path.shift()
      }
    }

    return this.path.length === 0
  }

  get rotation() {
    return this._rotation
  }
}

Fighter.TAG = "fighter"
Fighter.TAG_DIED = "fighter_died"
Fighter.DEFAULT_SIZE = 7
Fighter.NORMAL_SPEED = 6
Fighter.DISTANCE_TOLERANCE = 0.5

injectToken(Fighter, "cookies", TypesGame.cookieModel)
markInjectable(Fighter)

module.exports = { Fighter }
