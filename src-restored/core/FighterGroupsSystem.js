/**
 * Restored source for Webpack Module #85765.
 *
 * Static registry for active FighterGroup instances.
 */
"use strict"

const { math } = require("./MathUtils")
const { FighterGroup } = require("./FighterGroup")

class FighterGroupsSystem {
  static GetActiveGroups() {
    return FighterGroupsSystem._groups.filter((group) => group !== null)
  }

  static CreateNewGroup(path, speed, owner, target, source) {
    FighterGroupsSystem._lastIndex = math.repeat(FighterGroupsSystem._lastIndex + 1, 100)
    FighterGroupsSystem._groups[FighterGroupsSystem._lastIndex] = new FighterGroup(
      FighterGroupsSystem._lastIndex,
      path,
      speed,
      owner,
      target,
      source,
    )
    FighterGroupsSystem.GetActiveGroups().forEach((group) => group?.Check())
    return FighterGroupsSystem._lastIndex
  }

  static AddFighterToGroup(groupId, fighter) {
    FighterGroupsSystem._groups[groupId]?.AddFighter(fighter)
  }

  static RemoveGroup(groupId) {
    FighterGroupsSystem._groups[groupId] = null
  }

  static Clear() {
    FighterGroupsSystem._groups.fill(null)
  }
}

FighterGroupsSystem._groups = new Array(100).fill(null)
FighterGroupsSystem._lastIndex = -1

module.exports = { FighterGroupsSystem }
