/**
 * Restored source for Webpack Module #99806.
 *
 * Moves fighters, synchronizes their views, handles arrival/occupation, and
 * removes colliding opposing fighters.
 */
"use strict"

const { di, lazyGet } = require("./RuntimeCore")
const { IterativeSystem } = require("./ECSCore")
const { TypesGame } = require("./TypesGame")
const { Fighter } = require("./Fighter")
const { PCell } = require("./PCell")
const { CapitalView } = require("./CapitalView")
const { FighterView } = require("./FighterView")
const { FighterDeathEffectAction } = require("./FighterDeathEffectAction")

class FighterEvent {
  constructor(type, fighter) {
    this.type = type
    this.fighter = fighter
  }
}

FighterEvent.FIGHTER_CREATED = "FighterCreated"
FighterEvent.FIGHTER_DIED = "FighterDied"

class FighterMovementSystem extends IterativeSystem {
  constructor() {
    super((entity) => entity.has(FighterView))
    this.cells = new Map()
    this.entityAdded = (snapshot) => {
      const fighter = snapshot.current
      this.addView(fighter)
      this.dispatch(new FighterEvent(FighterEvent.FIGHTER_CREATED, fighter))
    }
    this.entityRemoved = (snapshot) => {
      const fighter = snapshot.current
      this.removeView(fighter)
      this.dispatch(new FighterEvent(FighterEvent.FIGHTER_DIED, fighter))
    }
  }

  update(delta) {
    super.update(delta)
    this.checkCollisions()
  }

  checkCollisions() {
    this.cells.forEach((cell) => {
      cell.getCollisions().forEach((collision) => {
        di.get(FighterDeathEffectAction).run(collision)
        collision.forEach((fighter) => {
          if (!fighter.hasTag(Fighter.TAG_DIED)) {
            fighter.addTag(Fighter.TAG_DIED)
            fighter.group?.OnFighterDied()
          }
          this.engine.removeEntity(fighter)
        })
      })
    })
  }

  updateEntity(fighter, delta) {
    if (fighter.move(delta)) {
      fighter.target.tryOccupy(fighter)
      this.engine.removeEntity(fighter)
    } else {
      const [x, y] = fighter.position.map((value) => Math.round(value / PCell.SIZE))
      const cellKey = `${x}_${y}`
      const cell = this.cells.get(cellKey) || new PCell()
      cell.add(fighter)
      this.cells.set(cellKey, cell)
    }

    if (fighter.has(FighterView)) {
      const view = fighter.get(FighterView)
      view.position.set(...fighter.position)
      view.rotation = fighter.rotation
    }
  }

  addView(fighter) {
    const view = fighter.get(FighterView)
    const capital = fighter.source.get(CapitalView)
    const fightersLayer = lazyGet(TypesGame.views.fieldInstance)?.fighters

    if (view && fightersLayer) {
      const position = (view.position = fightersLayer.toLocal(capital.position, capital.parent))
      const { x, y } = position
      fighter.position[0] = x
      fighter.position[1] = y
      fightersLayer.addChild(view)
    }
  }

  removeView(fighter) {
    const view = fighter.get(FighterView)
    view?.parent?.removeChild(view)
  }

  onRemovedFromEngine() {
    this.cells.clear()
    for (let count = this.engine.entities.length; count; ) {
      if (this.entities[0]) {
        this.engine.removeEntity(this.entities[0])
      }
      count--
    }
    super.onRemovedFromEngine()
  }
}

module.exports = { FighterMovementSystem, FighterEvent }
