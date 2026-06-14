/**
 * Restored source for Webpack Module #3565.
 *
 * BotLogic wraps BotCalculationLogic with the original start delay, decision
 * cadence, and staggered move execution behavior.
 */
"use strict"

const { Random, log } = require("./RuntimeUtils")
const { WaitAction } = require("./WaitAction")
const { DecisionType } = require("./DecisionType")
const { TypesGame } = require("./TypesGame")
const { injectToken, markInjectable } = require("./DecoratorHelpers")
const { BotCalculationLogic } = require("./BotCalculationLogic")

class StartDelay {
  constructor(delayMs = 1000, startTime = Date.now()) {
    this.delayMs = delayMs
    this._startTime = startTime
  }

  get running() {
    return Date.now() - this._startTime < this.delayMs
  }
}

class BotLogic {
  constructor() {
    this._lastCalculationTimestamp = Date.now()
    this._sendingDelay = { x: 0.1, y: 0.5 }
    this._executingDecision = false
  }

  get initialized() {
    return this._preset !== undefined
  }

  init(preset) {
    this._preset = preset
    this._logic.init(this._preset)
    return this
  }

  decide(building) {
    if (!this._preset) return undefined

    this._building = building
    if (!this._startDelay) {
      this._startDelay = new StartDelay(1000 * Random.range(3))
    }

    if (this._startDelay.running || this._logic.busy) return undefined

    if (this.isReadyForNextDecision) {
      this._lastCalculationTimestamp = Date.now()
      this._logic.calculate(building)
      this._executingDecision = false
    }

    return this._logic.getLastCommand()
  }

  executeDecision(decision) {
    if (this._executingDecision) return undefined

    if (decision.Type === DecisionType.Move) {
      this._executingDecision = true
      ;(async () => {
        try {
          const subject = decision.Subject
          const objects = decision.Objects
          for (const object of objects) {
            if (object === subject || object.owner !== this._building.owner) continue

            this._building.sendTo(subject)
            await WaitAction.sec(Random.rangeFloat(this._sendingDelay.x, this._sendingDelay.y))
            if (!this._executingDecision) break
          }
        } finally {
          this._executingDecision = false
        }
      })()
      return undefined
    }

    log.info("executeDecision", DecisionType[decision.Type])
    return undefined
  }

  get isReadyForNextDecision() {
    return Date.now() - this._lastCalculationTimestamp >= 1000 * this._preset.waitTimeBetweenDecisions
  }

  terminate() {
    this._logic.terminate()
  }
}

injectToken(BotLogic, "_logic", TypesGame.botCalculationLogic)
markInjectable(BotLogic)

module.exports = { BotLogic }
