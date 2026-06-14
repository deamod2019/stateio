/**
 * Restored source for Webpack Module #10754.
 *
 * Creates the looping tutorial finger that points from the player's first
 * active building to the nearest non-player active building.
 */
"use strict"

const { log } = require("./RuntimeUtils")
const { di } = require("./RuntimeCore")
const { math } = require("./MathUtils")
const { PlayerType } = require("./PlayerType")
const { gsap } = require("./animationRuntime")
const { ReactionSystem, Entity } = require("./ECSCore")
const { Building } = require("./Building")
const { TutorialFingerView } = require("./TutorialFingerView")

class TutorialSystem extends ReactionSystem {
  constructor() {
    super((entity) => entity.has(Building.ACTIVE_TAG))
    this._tutorialFingerEntityId = NaN
  }

  update() {}

  onAddedToEngine() {
    super.onAddedToEngine()

    const finger = di.get(TutorialFingerView)
    const fingerEntity = new Entity().add(finger)
    this.engine.addEntity(fingerEntity)
    this._tutorialFingerEntityId = fingerEntity.id

    const source = this.entities.find((entity) => entity.owner === PlayerType.First)
    if (!source) {
      log.warn(`Tutorial failed, from is ${source}`)
      this.engine.removeSystem(this)
      return
    }

    const sourcePosition = source.data.statePos
    const nearestTarget = this.entities
      .filter((entity) => entity.owner !== PlayerType.First)
      .sort(
        (first, second) =>
          math.dist(sourcePosition, first.data.statePos) -
          math.dist(sourcePosition, second.data.statePos),
      )[0]

    if (!nearestTarget) {
      log.warn(`Tutorial failed, nearest is ${nearestTarget}`)
      this.engine.removeSystem(this)
      return
    }

    const [fromX, fromY] = sourcePosition
    const [toX, toY] = nearestTarget.data.statePos
    const startScale = 1.2
    const endScale = 0.7

    gsap
      .timeline({ repeat: -1 })
      .add(gsap.fromTo(finger, { alpha: 0 }, { alpha: 1 }), "appear")
      .add(
        gsap.fromTo(
          finger.scale,
          { x: startScale, y: startScale },
          { x: endScale, y: endScale },
        ),
        "appear",
      )
      .fromTo(finger, { x: fromX, y: fromY }, { x: toX, y: toY })
      .add(gsap.fromTo(finger, { alpha: 1 }, { alpha: 0 }), "disappear")
      .add(
        gsap.fromTo(
          finger.scale,
          { x: endScale, y: endScale },
          { x: startScale, y: startScale },
        ),
        "disappear",
      )
  }

  onRemovedFromEngine() {
    const fingerEntity = this.engine.getEntityById(this._tutorialFingerEntityId)
    if (fingerEntity) {
      this.engine.removeEntity(fingerEntity)
    }

    super.onRemovedFromEngine()
  }
}

module.exports = { TutorialSystem }
