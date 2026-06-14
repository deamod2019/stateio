/**
 * Restored source for Webpack Module #46044.
 *
 * Converts a Spawner burst request into one or more Fighter instances moving
 * along the cached path between source and target buildings.
 */
"use strict"

const { captureMessage } = require("./SentryRuntime")
const { injectToken, markInjectable } = require("./DecoratorHelpers")
const { TypesGame } = require("./TypesGame")
const { math } = require("./MathUtils")
const { GameModel } = require("./GameModel")
const { Fighter } = require("./Fighter")
const { PathHolder } = require("./PathHolder")
const { FighterGroupsSystem } = require("./FighterGroupsSystem")
const { Spawner } = require("./Spawner")
const { Action } = require("./Action")

class BurstWaveAction extends Action {
  async execute(request) {
    let amount = request.amount
    const target = request.target
    const spawner = request.spawner
    const step = 1 / (Spawner.UNITS_PER_WAVE - 1)
    const total = Math.ceil(amount)

    for (let index = 0; index < total; index++) {
      const offset =
        index % 2 === 0 ? 0.5 - step * Math.ceil(index / 2) : 0.5 + step * Math.ceil(index / 2)
      let fighterAmount = 1

      if (amount < 1) {
        fighterAmount = amount
      } else {
        amount -= 1
      }

      const source = spawner.selfBuilding
      if (source === target) {
        captureMessage("BurstWaveAction. from === target \u2013 logical mistake")
        return undefined
      }

      const pathHolder = source.get(PathHolder)
      let path = []
      if (pathHolder) {
        const cachedPath = pathHolder.get(target)
        if (!cachedPath) {
          captureMessage("BurstWaveAction. Path is undefined, something weren't disposed properly")
          return undefined
        }
        path = cachedPath.map((pointPair) => math.lerp(...pointPair, offset))
      }

      const speed = 1 * Fighter.NORMAL_SPEED
      const groupId = FighterGroupsSystem.CreateNewGroup(path, speed, source.owner, target, source)
      FighterGroupsSystem.AddFighterToGroup(
        groupId,
        new Fighter(source.owner, source, target, offset, path, fighterAmount, speed, 1),
      )
    }
  }
}

injectToken(BurstWaveAction, "model", TypesGame.model)
markInjectable(BurstWaveAction)

module.exports = { BurstWaveAction }
