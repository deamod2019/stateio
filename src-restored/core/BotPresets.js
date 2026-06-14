/**
 * Restored source for Webpack Module #13866.
 *
 * AI difficulty presets used by BotsSystem/BotCalculationLogic.
 */
"use strict"

const DEFAULT_PRESET = {
  waitTimeBetweenDecisions: 1,
  traceDuration: 6,
  stepDuration: 0.5,
  forcesBalanceFactor: 1,
  buildingsBalanceFactor: 1,
  spawnBalanceFactor: 1,
  fightersInSegment: 10,
  isConsiderGroupToGroupIntersection: false,
  commandInDecisionOrder: [0, 0],
  maxBuildingsMove: 3,
  targetReachedTimeBoost: 0,
  alivePlayerBuildingsLimit: -1,
  isForbiddenUpgrade: false,
}

function preset(overrides, defaults = DEFAULT_PRESET) {
  return { ...defaults, ...overrides }
}

const BotPreset0Vegetable = preset({
  name: "0Vegetable",
  waitTimeBetweenDecisions: 10,
  traceDuration: 10,
  stepDuration: 0.5,
  forcesBalanceFactor: 0.2,
  buildingsBalanceFactor: 1,
  spawnBalanceFactor: 0,
  fightersInSegment: 10,
  maxBuildingsMove: 3,
  targetReachedTimeBoost: 2,
  alivePlayerBuildingsLimit: 2,
})

const BotPreset1Easy = preset({
  name: "1Easy",
  waitTimeBetweenDecisions: 12,
  traceDuration: 15,
  stepDuration: 0.5,
  forcesBalanceFactor: 0.1,
  buildingsBalanceFactor: 1,
  spawnBalanceFactor: 0,
  fightersInSegment: 10,
  maxBuildingsMove: 2,
  targetReachedTimeBoost: 2,
  alivePlayerBuildingsLimit: -1,
})

const BotPreset2Medium = preset({
  name: "2Medium",
  waitTimeBetweenDecisions: 7,
  traceDuration: 10,
  stepDuration: 0.5,
  forcesBalanceFactor: 1,
  buildingsBalanceFactor: 2,
  spawnBalanceFactor: 0,
  fightersInSegment: 10,
  maxBuildingsMove: 3,
  targetReachedTimeBoost: 2,
  alivePlayerBuildingsLimit: -1,
})

const BotPreset3UpperMedium = preset({
  name: "3UpperMedium",
  waitTimeBetweenDecisions: 5,
  traceDuration: 10,
  stepDuration: 0.25,
  forcesBalanceFactor: 1,
  buildingsBalanceFactor: 2,
  spawnBalanceFactor: 1,
  fightersInSegment: 10,
  maxBuildingsMove: 3,
  targetReachedTimeBoost: 1,
  alivePlayerBuildingsLimit: -1,
})

const BotPreset4Hard = preset({
  name: "4Hard",
  waitTimeBetweenDecisions: 5,
  traceDuration: 20,
  stepDuration: 0.2,
  forcesBalanceFactor: 0,
  buildingsBalanceFactor: 1,
  spawnBalanceFactor: 0,
  fightersInSegment: 10,
  maxBuildingsMove: 4,
  targetReachedTimeBoost: 1,
  alivePlayerBuildingsLimit: -1,
})

const BotPreset5Final = preset({
  name: "5Final",
  waitTimeBetweenDecisions: 4,
  traceDuration: 20,
  stepDuration: 0.1,
  forcesBalanceFactor: 1,
  buildingsBalanceFactor: 1,
  spawnBalanceFactor: 1,
  fightersInSegment: 10,
  maxBuildingsMove: 3,
  targetReachedTimeBoost: 0,
  alivePlayerBuildingsLimit: -1,
})

const BotPreset6FinalAgressive = preset({
  name: "6FinalAgressive",
  waitTimeBetweenDecisions: 4,
  traceDuration: 30,
  stepDuration: 0.1,
  forcesBalanceFactor: 1,
  buildingsBalanceFactor: 0,
})

module.exports = {
  BotPreset0Vegetable,
  BotPreset1Easy,
  BotPreset2Medium,
  BotPreset3UpperMedium,
  BotPreset4Hard,
  BotPreset5Final,
  BotPreset6FinalAgressive,
}
