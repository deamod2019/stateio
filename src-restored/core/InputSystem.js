/**
 * Restored source for Webpack Module #47572.
 *
 * Player input system for selecting owned buildings, dragging an aim line, and
 * sending population to a target building.
 */
"use strict"

const { IterativeSystem } = require("./ECSCore")
const { TypesCore, TypesSocial } = require("./CoreTypes")
const { di, lazyGet } = require("./RuntimeCore")
const { math } = require("./MathUtils")
const { GameEvents } = require("./GameEvents")
const { Point, Ticker } = require("./pixiRuntime")
const { ActiveBuildingsQuery } = require("./ActiveBuildingsQuery")
const { CapitalView } = require("./CapitalView")

function distanceBetweenPoints(first, second) {
  return math.dist([first.x, first.y], [second.x, second.y])
}

class InputSystem extends IterativeSystem {
  constructor() {
    super(ActiveBuildingsQuery)
    this._selected = new Set()
    this._isTouchStartedOnBuilding = false
    this._wasBuildingInteracted = false
    this._multiselectTimer = 0
  }

  get dispatcher() {
    if (!this._dispatcher) {
      this._dispatcher = di.get(TypesCore.dispatcher)
    }
    return this._dispatcher
  }

  onCancel(event) {
    this.dispatcher.emit(GameEvents.AIM_REMOVE)
    this.deselectLast()
  }

  onStart(event) {
    this._buildingHitThisFrame = this.getClosest(new Point(event.clientX, event.clientY))

    if (this._buildingHitThisFrame?.isFirstPlayer) {
      this._isTouchStartedOnBuilding = true
      if (!this._buildingHitThisFrame.selected) {
        this.selectAsSource(this._buildingHitThisFrame)
      }
    }
  }

  onDrag(event) {
    if (this._selected.size === 0 || !this._isTouchStartedOnBuilding) return

    const pointer = new Point(event.clientX, event.clientY)
    const closestBuilding = this.getClosest(pointer)

    if (closestBuilding !== this._buildingHitLastFrame) {
      this._wasBuildingInteracted = false
    }

    const deltaSeconds = Ticker.shared.deltaMS / 1000

    if (closestBuilding) {
      const capital = closestBuilding.get(CapitalView)

      if (capital) {
        const capitalPosition = capital.toGlobal(new Point(0, 0))

        if (this._selected.has(closestBuilding)) {
          if (
            closestBuilding.isFirstPlayer &&
            this._selected.size > 1 &&
            !this._wasBuildingInteracted &&
            distanceBetweenPoints(capitalPosition, pointer) < InputSystem._multiselectDistanceMax
          ) {
            if (this._buildingHitLastFrame === closestBuilding) {
              this._multiselectTimer += deltaSeconds
              if (this._multiselectTimer >= InputSystem._timeForMultiselectAdding) {
                this.removeSource(closestBuilding)
                this._multiselectTimer = 0
                this._wasBuildingInteracted = true
              }
            } else {
              this._multiselectTimer = 0
            }
          }

          if (this._lastSelectedTargetBuilding) {
            this._lastSelectedTargetBuilding.deselect()
            delete this._lastSelectedTargetBuilding
          }
        } else if (
          closestBuilding.isFirstPlayer &&
          !this._wasBuildingInteracted &&
          distanceBetweenPoints(capitalPosition, pointer) < InputSystem._multiselectDistanceMax
        ) {
          if (this._buildingHitLastFrame === closestBuilding) {
            this._multiselectTimer += deltaSeconds
            if (this._multiselectTimer >= InputSystem._timeForMultiselectAdding) {
              this.selectAsSource(closestBuilding)
              this._multiselectTimer = 0
              this._wasBuildingInteracted = true
            }
          } else {
            this._multiselectTimer = 0
          }
        }
      }

      if (closestBuilding !== this._lastSelectedTargetBuilding) {
        this._lastSelectedTargetBuilding?.deselect()
        this._lastSelectedTargetBuilding = closestBuilding
        this._lastSelectedTargetBuilding.selectAsTarget()
      }
    } else {
      this._lastSelectedTargetBuilding?.deselect()
      delete this._lastSelectedTargetBuilding
      this.dispatcher.emit(GameEvents.AIM_SET, null)
    }

    this._buildingHitLastFrame = this.getClosest(pointer)
    this.dispatcher.emit(GameEvents.AIM_UPDATE, event)
  }

  onEnd(event) {
    if (this._lastSelectedTargetBuilding) {
      this._selected.forEach((building) => {
        if (building !== this._lastSelectedTargetBuilding && building.isFirstPlayer) {
          building.sendTo(this._lastSelectedTargetBuilding)
        }
      })

      const capital = this._lastSelectedTargetBuilding.get(CapitalView)
      if (capital) {
        this.dispatcher.emit(GameEvents.AIM_SET, capital.toGlobal(new Point(0, 0)))
      }

      this._lastSelectedTargetBuilding.deselect()
      delete this._lastSelectedTargetBuilding
    }

    this.dispatcher.emit(GameEvents.AIM_REMOVE)
    this.deselectLast()
  }

  getClosest(point) {
    let closest
    let closestDistance = Number.MAX_VALUE

    this.entities.forEach((building) => {
      const capital = building.get(CapitalView)
      if (!capital) return

      const localPoint = capital.toLocal(point)
      const distance = Math.sqrt(localPoint.x * localPoint.x + localPoint.y * localPoint.y)
      if (distance < closestDistance) {
        closest = building
        closestDistance = distance
      }
    })

    return closest
  }

  selectAsSource(building) {
    this._selected.add(building)
    building.selectAsSource()
    this.dispatcher.emit(GameEvents.AIM_CREATE, building)
    this.vibratePeek()
  }

  removeSource(building) {
    if (!this._selected.has(building)) return

    this._selected.delete(building)
    this.dispatcher.emit(GameEvents.AIM_HIDE, building)
    this.vibratePeek()
  }

  vibratePeek() {
    const vibrationManager = lazyGet(TypesSocial.vibrationManager)
    vibrationManager?.vibrate()
  }

  deselectLast() {
    this._selected.forEach((building) => building.deselect())
    this._selected.clear()
  }

  updateEntity() {}
}

InputSystem._multiselectDistanceMax = Number.MAX_VALUE
InputSystem._timeForMultiselectAdding = 0.25

module.exports = { InputSystem, distanceBetweenPoints }
