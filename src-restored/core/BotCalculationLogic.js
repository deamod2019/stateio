/**
 * Restored source for Webpack Module #59474.
 *
 * BotCalculationLogic simulates possible commands over a lightweight battle
 * state and keeps the highest-scoring command for BotLogic to execute.
 */
"use strict"

const { Random } = require("./RuntimeUtils")
const { math } = require("./MathUtils")
const { DecisionType } = require("./DecisionType")
const { PlayerType } = require("./PlayerType")
const { Spawner } = require("./Spawner")
const { TypesGame } = require("./TypesGame")
const { injectToken, markInjectable } = require("./DecoratorHelpers")
const { FighterGroupsSystem } = require("./FighterGroupsSystem")
const { PathHolder } = require("./PathHolder")
const { BotUtility } = require("./BotUtility")
const { BState } = require("./BState")
const { CommandsGenerator } = require("./CommandsGenerator")
const { GroupModel } = require("./GroupModel")
const { Population } = require("./Population")

function getActiveBuildingTag() {
  return require("./Building").Building.ACTIVE_TAG
}

function findById(items, id) {
  for (const item of items) {
    if (item.Id === id) return item
  }
}

function clampedRateAmount(amount, duration, rate) {
  return math.clamp(rate * duration, 0, amount)
}

function getOwnerForces(state, owner) {
  const isOwner = (item) => item.Owner === owner
  const sum = (value, total) => total + value

  return (
    state.buildings
      .filter(isOwner)
      .map((building) => building.CurrentPopulation)
      .reduce(sum, 0) +
    state.groups
      .filter(isOwner)
      .map((group) => group.Amount)
      .reduce(sum, 0)
  )
}

class BotCalculationLogic {
  init(preset) {
    this._preset = preset
  }

  async calculate(building) {
    this._owner = building.owner
    await (this._calculationPromise || (this._calculationPromise = this._calculate()))
    delete this._calculationPromise
  }

  async _calculate() {
    this._initialWaitPromise = new Promise((resolve, reject) => {
      this._rejectInitialPromise = reject
      setTimeout(resolve, Random.rangeFloat(0, 3000))
    })

    try {
      await this._initialWaitPromise
    } catch (error) {
      return
    } finally {
      delete this._initialWaitPromise
      delete this._rejectInitialPromise
    }

    const startState = this.generateStartState()
    const commands = CommandsGenerator.GeneratePossibleCommands(startState, this._owner, this._preset)
    const scoredCommands = []

    for (let index = 0; index < commands.length; index++) {
      scoredCommands.push({
        index,
        score: await this.calculateCommandScore(startState, commands[index]),
      })
    }

    const sortedCommands = scoredCommands.sort((first, second) => second.score - first.score)
    const [minOrder, maxOrder] = this._preset.commandInDecisionOrder
    const decisionIndex = Random.range(
      Math.min(minOrder, scoredCommands.length - 1),
      Math.min(maxOrder, scoredCommands.length),
    )
    this._lastCommand = commands[sortedCommands[decisionIndex].index]
  }

  async calculateCommandScore(state, command) {
    const { traceDuration, stepDuration } = this._preset
    let tracedState = this.executeCommand(state, command)
    let targetReachedAt = Number.NaN

    for (let elapsed = 0; elapsed <= traceDuration; elapsed += stepDuration) {
      this.traceState(tracedState, stepDuration)
      if (isNaN(targetReachedAt) && this.isTargetReached(tracedState, command)) {
        targetReachedAt = elapsed
      }
    }

    let score = this.CalculateStateScore(state, tracedState, targetReachedAt)
    if (command.Type === DecisionType.Move && command.Subject.Owner === PlayerType.Neutral) {
      score *= 2
    }

    return score
  }

  CalculateStateScore(startState, tracedState, targetReachedAt) {
    const startForces = getOwnerForces(startState, this._owner)
    const forcesDelta =
      ((getOwnerForces(tracedState, this._owner) - startForces) /
        (startForces === 0 ? 1 : startForces)) *
      this._preset.forcesBalanceFactor

    const startBuildings = startState.buildings.filter((building) => building.Owner === this._owner).length
    let score =
      forcesDelta +
      ((tracedState.buildings.filter((building) => building.Owner === this._owner).length -
        startBuildings) /
        (startBuildings === 0 ? 1 : startBuildings)) *
        this._preset.buildingsBalanceFactor

    if (!isNaN(targetReachedAt)) {
      const targetReachedBoost = 1 - math.remap(targetReachedAt, 0, tracedState.timestamp, 0, 1)
      score += Math.abs(score) * this._preset.targetReachedTimeBoost * targetReachedBoost
    }

    return score
  }

  generateStartState() {
    const buildings = []
    const activeTag = getActiveBuildingTag()
    this.model.currentContinent.buildings.forEach((building) => {
      if (building.hasTag(activeTag)) {
        buildings.push(building.getSnapshot())
      }
    })

    const now = Date.now()
    const groups = FighterGroupsSystem.GetActiveGroups()
      .map((group) => {
        if (!group.Source.has(Spawner)) return undefined

        const stateGroup = new GroupModel(
          group.Owner,
          group.Speed,
          group.Amount,
          group.Path,
          group.Target.stateId,
          group.Source.stateId,
          0,
          -1,
        )

        stateGroup.Init(
          group.StartTimestamp,
          (now - group.StartTimestamp) * group.Speed,
          group.BurstDelay,
          group.BurstWidth,
        )
        return stateGroup
      })
      .filter((group) => !!group)

    return new BState(buildings, groups, now)
  }

  moveState(state, command) {
    const timestamp = state.timestamp
    const buildings = state.buildings.slice(0)
    const groups = state.groups.slice(0)
    const targetBuilding = this.model.currentContinent.buildings.get(command.Subject.Id)

    command.Objects.forEach((sourceBuilding) => {
      const path = this.model.currentContinent.buildings
        .get(sourceBuilding.Id)
        .get(PathHolder)
        .getPath(targetBuilding.stateId)
        .map((point) => math.lerp(...point, 0.5))
      const sendAmount = math.clamp(
        sourceBuilding.CurrentPopulation - Spawner.UNITS_PER_WAVE,
        0,
        Spawner.UNITS_PER_WAVE,
      )
      const targetAmount = sourceBuilding.CurrentPopulation - sendAmount
      const group = new GroupModel(
        sourceBuilding.Owner,
        sourceBuilding.FighterSpeed,
        targetAmount,
        path,
        command.Subject.Id,
        sourceBuilding.Id,
        0,
        timestamp,
      )

      group.Init(state.timestamp, 0, sourceBuilding.BurstDelay, sourceBuilding.BurstWidth)
      groups.push(group)
      sourceBuilding.CurrentPopulation -= sendAmount
      sourceBuilding.LastActionTimestamp = timestamp

      for (let index = 0; index < buildings.length; index++) {
        if (buildings[index].Id === sourceBuilding.Id) {
          buildings[index] = sourceBuilding
          break
        }
      }
    })

    return new BState(buildings, groups, timestamp)
  }

  traceState(state, duration) {
    const buildings = state.buildings.slice(0)
    const groups = state.groups.slice(0)
    const timestamp = state.timestamp + duration

    this.calculateGroupsMoving(buildings, groups, duration)
    this.calculateBuildingsToGroupAmount(buildings, groups, timestamp)
    this.calculateGroupToBuildingsAmount(buildings, groups, timestamp)
    this.updateSpawnBuildings(buildings, timestamp, duration)

    return new BState(buildings, groups, timestamp)
  }

  calculateGroupsMoving(buildings, groups, duration) {
    for (const group of groups) {
      group.Amount = this.CalculateTowersIntersectionAmount(buildings, group, duration)
      group.AccumPath(group.Speed * duration)
    }

    if (this._preset.isConsiderGroupToGroupIntersection) {
      const remainingAmounts = new Array(groups.length).fill(0)
      for (let index = 0; index < groups.length; index++) {
        remainingAmounts[index] = this.CalculateGroupsIntersectionAmount(groups, groups[index], duration)
      }
      for (let index = 0; index < groups.length; index++) {
        const group = groups[index]
        group.Amount = remainingAmounts[index]
        groups[index] = group
      }
    }
  }

  CalculateTowersIntersectionAmount(buildings, group, duration) {
    let amount = group.Amount

    for (const building of buildings) {
      if (building.Owner === group.Owner || building.AttackRate <= 0) continue

      const segments = group.GenerateSegments(this._preset.fightersInSegment)
      for (const segment of segments) {
        if (BotUtility.IsSegmentIntersectCircle(building.Position, building.AttackRadius, segment)) {
          amount -= clampedRateAmount(segment.Amount, duration, building.AttackRate)
        }
      }
    }

    return amount
  }

  CalculateGroupsIntersectionAmount(groups, group) {
    const segments = group.GenerateSegments(this._preset.fightersInSegment)

    for (const otherGroup of groups) {
      if (otherGroup.Owner === group.Owner || otherGroup.Amount <= 0) continue

      const otherSegments = otherGroup.GenerateSegments(this._preset.fightersInSegment)
      for (let index = 0; index < segments.length; index++) {
        for (const otherSegment of otherSegments) {
          if (BotUtility.IsSegmentIntersectSegment(segments[index], otherSegment)) {
            segments[index].Amount = Math.max(segments[index].Amount - otherGroup.Amount, 0)
          }
        }
      }
    }

    return segments.map((segment) => segment.Amount).reduce((total, amount) => total + amount, 0)
  }

  calculateBuildingsToGroupAmount(buildings, groups, timestamp) {
    for (const group of groups) {
      if (timestamp - group.LastBurstTimestamp < group.BurstDelay) continue

      const sourceBuilding = findById(buildings, group.Source)
      if (!sourceBuilding) continue

      if (sourceBuilding.CurrentPopulation <= 0 || sourceBuilding.Owner !== group.Owner) {
        group.TargetAmount = 0
      }

      if (group.TargetAmount > 0) {
        if (sourceBuilding.CurrentPopulation < group.TargetAmount) {
          group.TargetAmount = sourceBuilding.CurrentPopulation
        }

        const amount = math.clamp(group.TargetAmount, 0, Spawner.UNITS_PER_WAVE)
        group.Amount += amount
        group.TargetAmount -= amount
        group.LastBurstTimestamp = timestamp
        sourceBuilding.CurrentPopulation -= amount
        sourceBuilding.LastActionTimestamp = timestamp
      }
    }
  }

  calculateGroupToBuildingsAmount(buildings, groups, timestamp) {
    for (const group of groups) {
      if (!group.IsReachedEnd || group.Amount <= 0) continue

      const targetBuilding = findById(buildings, group.Target)
      if (!targetBuilding) continue

      const amount = math.clamp(group.Amount, 0, Spawner.UNITS_PER_WAVE)
      group.Amount = Math.max(group.Amount - amount, 0)

      if (targetBuilding.Owner === group.Owner) {
        targetBuilding.CurrentPopulation += amount
      } else if (targetBuilding.CurrentPopulation >= amount) {
        targetBuilding.CurrentPopulation -= amount
      } else {
        targetBuilding.Owner = group.Owner
        targetBuilding.CurrentPopulation =
          amount - targetBuilding.CurrentPopulation + Population.SPAWN_AMOUNT_ON_OCCUPATION
        targetBuilding.AttackRadius = 0
        targetBuilding.AttackRate = 0
        targetBuilding.SpawnLimit = this.model.meta.getBuildingPopulationLimit(group.Owner)
        targetBuilding.SpawnRate = this.model.meta.getPopulationRate(group.Owner)
      }

      targetBuilding.LastActionTimestamp = timestamp
    }
  }

  updateSpawnBuildings(buildings, timestamp, duration) {
    for (let index = 0; index < buildings.length; index++) {
      const building = buildings[index]
      const secondsSinceLastAction = timestamp - building.LastActionTimestamp
      const blockedSeconds = Math.max(Population.BLOCK_POPULATION_SECONDS - secondsSinceLastAction, 0)
      const activeSpawnSeconds = Math.max(duration - blockedSeconds, 0)
      const spawnedPopulation = building.SpawnRate * activeSpawnSeconds

      building.CurrentPopulation = Math.min(
        building.CurrentPopulation + spawnedPopulation,
        building.SpawnLimit,
      )
      buildings[index] = building
    }
  }

  isTargetReached(state, command) {
    switch (command.Type) {
      case DecisionType.Upgrade:
      case DecisionType.MakeTower:
      case DecisionType.MakeBuilding:
      case DecisionType.Wait:
        return true
      case DecisionType.Move: {
        const matchedGroups = state.groups
          .slice(0)
          .filter(
            (group) =>
              group.Owner === this._owner &&
              command.Objects.some((building) => building.Id === group.Source) &&
              group.Target === command.Subject.Id &&
              group.CreationTimestamp === 0,
          )

        for (const group of matchedGroups) {
          if (group.IsReachedEnd) return true
        }

        return false
      }
      default:
        throw new Error("ArgumentOutOfRangeException()")
    }
  }

  executeCommand(state, command) {
    switch (command.Type) {
      case DecisionType.Move:
        return this.moveState(state, command)
      case DecisionType.Wait:
        return state.clone()
      default:
        return state
    }
  }

  getLastCommand() {
    const command = this._lastCommand
    delete this._lastCommand
    return command
  }

  get busy() {
    return !!this._calculationPromise
  }

  terminate() {
    this._rejectInitialPromise?.call(null)
  }
}

injectToken(BotCalculationLogic, "model", TypesGame.model)
markInjectable(BotCalculationLogic)

module.exports = {
  BotCalculationLogic,
}
