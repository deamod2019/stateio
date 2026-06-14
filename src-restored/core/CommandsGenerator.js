/**
 * Restored source for Webpack Module #77875.
 *
 * Generates bot move/wait commands over the lightweight battle-state snapshot.
 */
"use strict"

const { DecisionType } = require("./DecisionType")
const { PlayerType } = require("./PlayerType")

function getOwnedBuildings(buildings, owner) {
  return buildings.filter((building) => building.Owner == owner)
}

function getOtherBuildings(buildings, owner) {
  return buildings.filter((building) => building.Owner !== owner)
}

function* generateIndexGroups(groupSize, limit) {
  const group = new Array(groupSize)
  const stack = []
  stack.push(0)

  while (stack.length > 0) {
    let index = stack.length - 1
    let value = stack.pop()

    while (value < limit) {
      group[index++] = value++
      stack.unshift(value)
      if (index === groupSize) yield group
    }
  }
}

class CommandsGenerator {
  static GeneratePossibleCommands(state, owner, preset) {
    const commands = []
    commands.push(...this.GenerateAttackCommands(state, owner, preset))
    commands.push(...this.GenerateDefenceCommands(state, owner, preset))
    commands.push(...this.GenerateWaitCommands(state, owner))
    return commands.length < 1 ? [{ Type: DecisionType.Wait }] : commands
  }

  static GenerateAttackCommands(state, owner, preset) {
    const commands = []
    const playerBuildingCount = getOwnedBuildings(state.buildings, PlayerType.First).length

    if (
      preset.alivePlayerBuildingsLimit !== -1 &&
      preset.alivePlayerBuildingsLimit > playerBuildingCount
    ) {
      return commands
    }

    const ownedBuildings = getOwnedBuildings(state.buildings, owner)
    const maxBuildingsMove = Math.min(ownedBuildings.length, preset.maxBuildingsMove)

    for (let count = 1; count <= maxBuildingsMove; count++) {
      const indexGroups = generateIndexGroups(count, ownedBuildings.length)
      const targets =
        preset.alivePlayerBuildingsLimit == playerBuildingCount
          ? getOwnedBuildings(state.buildings, PlayerType.Neutral)
          : getOtherBuildings(state.buildings, owner)

      for (const target of targets) {
        for (const group of indexGroups) {
          const objects = []
          for (const index of group) objects.push(ownedBuildings[index])
          commands.push({
            Type: DecisionType.Move,
            Objects: objects,
            Subject: target,
          })
        }
      }
    }

    return commands
  }

  static GenerateDefenceCommands(state, owner, preset) {
    const commands = []
    const ownedBuildings = getOwnedBuildings(state.buildings, owner)
    const maxBuildingsMove = Math.min(ownedBuildings.length, preset.maxBuildingsMove)

    for (let count = 1; count <= maxBuildingsMove; count++) {
      void count
      const indexGroups = generateIndexGroups(maxBuildingsMove, ownedBuildings.length)

      for (const subject of ownedBuildings) {
        for (const group of indexGroups) {
          let hasSubject = false
          const objects = []

          for (const index of group) {
            const object = ownedBuildings[index]
            if (object === subject) {
              hasSubject = true
              break
            }
            objects.push(object)
          }

          if (!hasSubject) {
            commands.push({
              Type: DecisionType.Move,
              Objects: objects,
              Subject: subject,
            })
          }
        }
      }
    }

    return commands
  }

  static GenerateWaitCommands(state, owner) {
    void state
    void owner
    return [{ Type: DecisionType.Wait, Objects: [], Subject: {} }]
  }
}

module.exports = { CommandsGenerator }
