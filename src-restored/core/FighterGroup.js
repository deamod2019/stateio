/**
 * Restored source for Webpack Module #72257.
 *
 * FighterGroup tracks a burst of fighters travelling from one building to
 * another and manages adding fighter views into the ECS engine.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { TypesGame } = require("./TypesGame")
const { PathHolder } = require("./PathHolder")
const { math, color } = require("./MathUtils")
const { Sprite, utils } = require("./pixiRuntime")
const { Fighter } = require("./Fighter")
const { Spawner } = require("./Spawner")
const { FighterView } = require("./FighterView")

class FighterGroup {
  constructor(id, path, speed, owner, target, source) {
    this.id = id
    this.Path = path
    this.Speed = speed
    this.Owner = owner
    this.Target = target
    this.Source = source
    this.Amount = 0
    this.StartTimestamp = 0
    this.StartTimestamp = Date.now()
  }

  get BurstWidth() {
    return this.Source.get(PathHolder).getPathWidth()
  }

  get BurstDelay() {
    return this.Source.get(Spawner).burstDelay
  }

  GetPathLen() {
    let length = 0
    for (let index = 1; index < this.Path.length; index++) {
      length += math.dist(this.Path[index - 1], this.Path[index])
    }
    return length
  }

  initUnitGraphics(fighter) {
    const skinManager = di.get(TypesGame.skinManager)
    const spritesPool = di.get(TypesGame.spritesPool)
    const texture = skinManager.getFighterTextureBy(fighter.owner)
    const targetSize = Fighter.DEFAULT_SIZE * fighter.scaleFactor * 1.5
    const sprite = spritesPool.fromDisplayObject(texture, () => {
      const displayObject = new Sprite(utils.TextureCache[texture])
      const bounds = displayObject.getBounds()
      displayObject.anchor.set(0.5)
      displayObject.scale.set(targetSize / Math.max(bounds.height, bounds.width))
      return displayObject
    })

    sprite.tint = color.fromHex(skinManager.getColorBy(fighter.owner)[1])
    return sprite
  }

  AddFighter(fighter) {
    this.Amount++
    this.StartTimestamp = Date.now()

    const model = di.get(TypesGame.model)
    const view = new FighterView()
    const unitGraphics = this.initUnitGraphics(fighter)

    unitGraphics.anchor.set(0.5)
    view.addChild(unitGraphics)
    fighter.add(view)
    model.engine.addEntity(fighter)
    fighter.group = this
  }

  Check() {
    if (((Date.now() - this.StartTimestamp) * this.Speed) / this.GetPathLen() >= 1 && this.Amount <= 0) {
      const { FighterGroupsSystem } = require("./FighterGroupsSystem")
      FighterGroupsSystem.RemoveGroup(this.id)
    }
  }

  OnFighterDied() {
    this.Amount--
  }
}

module.exports = { FighterGroup }
