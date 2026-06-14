/**
 * Restored source for Webpack Module #82713.
 *
 * Balance tables and interpolation helpers for rewards, boosters, population,
 * and bot scaling.
 */
"use strict"

const { Random } = require("./RuntimeUtils")

function lerp(to, from, ratio) {
  return to * ratio + from * (1 - ratio)
}

class MetaConfig {
  constructor() {
    this._levelFinishReward = { Start: 200, GainBalance: [[0, 160]] }
    this._startPopulation = { Start: 10, GainBalance: [[0, 1]] }
    this._generationSpeed = {
      Start: 1,
      GainBalance: [
        [0, 0.073],
        [151, 0.079],
      ],
    }
    this._offlineEarning = {
      Start: 100,
      GainBalance: [
        [0, 75],
        [10, 150],
        [20, 300],
        [30, 375],
        [40, 450],
        [50, 675],
        [60, 750],
        [70, 825],
        [80, 900],
        [90, 975],
        [100, 1050],
        [110, 1500],
        [120, 2000],
        [130, 2500],
      ],
    }
    this._boostersCost = {
      Start: 50,
      GainBalance: [
        [0, 95],
        [20, 155],
        [40, 250],
      ],
    }
    this._neutralRate = {
      Start: 1,
      GainBalance: [
        [10, 1.7],
        [20, 2.4],
        [30, 3.1],
        [40, 3.8],
        [50, 4.6],
        [60, 5.4],
        [70, 6],
        [80, 6.8],
        [90, 7.5],
        [100, 8.2],
      ],
    }
    this._neutralStart = {
      Start: 10,
      GainBalance: [
        [10, 20],
        [20, 30],
        [30, 40],
        [40, 50],
        [50, 60],
        [60, 70],
        [70, 80],
      ],
    }
    this._neutralCap = {
      Start: 10,
      GainBalance: [
        [10, 20],
        [20, 30],
        [30, 40],
        [40, 50],
        [50, 60],
        [60, 70],
        [70, 60],
      ],
    }
    this._commonCap = {
      Start: 50,
      GainBalance: [
        [1, 50],
        [20, 80],
        [30, 100],
        [40, 120],
      ],
    }
    this._boostersCostTable = {
      Start: 0,
      GainBalance: [
        [0, 40000],
        [0, 50000],
        [0, 70000],
        [0, 85000],
        [0, 100000],
        [0, 150000],
        [0, 200000],
        [0, 250000],
        [0, 300000],
        [0, 350000],
        [0, 400000],
        [0, 450000],
        [0, 500000],
        [0, 550000],
        [0, 600000],
        [0, 650000],
        [0, 700000],
        [0, 750000],
        [0, 800000],
        [0, 850000],
        [0, 900000],
        [0, 950000],
        [0, 1000000],
        [0, 1050000],
        [0, 1100000],
        [0, 1150000],
        [0, 1200000],
        [0, 1250000],
        [0, 1300000],
        [0, 1350000],
        [0, 1400000],
        [0, 1450000],
        [0, 1500000],
        [0, 1550000],
        [0, 1600000],
        [0, 1650000],
        [0, 1700000],
        [0, 1750000],
        [0, 1800000],
        [0, 1850000],
        [0, 1900000],
        [0, 1950000],
        [0, 2000000],
        [0, 2050000],
        [0, 2100000],
        [0, 2150000],
        [0, 2200000],
        [0, 2250000],
        [0, 2300000],
        [0, 2350000],
      ],
    }
    this._botUpgrade = 1.5
    this._botRandomOffset = 2
  }

  GetLevelFinishReward(level) {
    return this.GetBalanceValueByLevelIntegral(level, this._levelFinishReward)
  }

  GetStartPopulation(level) {
    return this.GetBalanceValueByLevelIntegral(level, this._startPopulation)
  }

  GetGenerationSpeed(level) {
    return this.GetBalanceValueByLevelIntegral(level, this._generationSpeed)
  }

  GetOfflineEarning(level) {
    return level <= 150
      ? this.GetBalanceValueByLevelIntegral(level, this._offlineEarning)
      : Math.ceil(0.8 * level) + 150275
  }

  GetBoosterCost(level) {
    return level <= 150
      ? this.GetBalanceValueByLevelIntegral(level, this._boostersCost)
      : level <= 200
        ? this.GetBalanceFromTable(level - 151, this._boostersCostTable)
        : Math.pow(level, 3) + this.GetBoosterCost(200)
  }

  GetBalanceFromTable(level, table) {
    if (level <= 0 || level >= table.GainBalance.length) {
      const [, value] = table.GainBalance[0]
      return value
    }
    const [, value] = table.GainBalance[level]
    return value
  }

  GetNeutralRate(level) {
    return this.GetBalanceValueByLevelStairs(level, this._neutralRate)
  }

  GetNeutralCap(level) {
    return this.GetBalanceValueByLevelStairs(level, this._neutralCap)
  }

  GetCommonCap(level) {
    return this.GetBalanceValueByLevelStairs(level, this._commonCap)
  }

  GetNeutralStartPopulation(level) {
    return this.GetBalanceValueByLevelStairs(level, this._neutralStart)
  }

  GetBotUpgradeLevelsCap(level) {
    return level == 1
      ? 1
      : Math.ceil(level * this._botUpgrade) +
          Random.from(-this._botRandomOffset, this._botRandomOffset)
  }

  GetBalanceValueByLevelIntegral(level, table) {
    let value = table.Start
    let previousLevel = 1

    for (let index = 0; index < table.GainBalance.length; index += 1) {
      let [balanceLevel, gain] = table.GainBalance[index]
      if (!(level >= balanceLevel)) break

      let nextLevel = Number.MAX_SAFE_INTEGER
      if (index + 1 < table.GainBalance.length) nextLevel = table.GainBalance[index + 1][0]
      balanceLevel = Math.min(nextLevel, level)
      value += (balanceLevel - previousLevel) * gain
      previousLevel = nextLevel
    }

    return value
  }

  GetBalanceValueByLevelStairs(level, table) {
    const balance = table.GainBalance
    let value = table.Start

    for (let index = 0; index < balance.length - 1; index += 1) {
      const [currentLevel, currentValue] = balance[index]
      if (index == 0 && level < currentLevel) return value

      const [nextLevel] = balance[index + 1]
      if (currentLevel <= level && level < nextLevel) return currentValue
    }

    const [, lastValue] = balance[balance.length - 1]
    return lastValue
  }

  GetBalanceValueByLevelInterpolate(level, table) {
    const start = table.Start

    if (table.GainBalance.length <= 1) {
      const [balanceLevel, value] = table.GainBalance[table.GainBalance.length - 1]
      return lerp(table.Start, value, level / balanceLevel)
    }

    for (let index = 0; index < table.GainBalance.length - 1; index += 1) {
      const [currentLevel, currentValue] = table.GainBalance[index]
      const [nextLevel, nextValue] = table.GainBalance[index + 1]
      if (index == 0 && currentLevel > level) return lerp(start, currentValue, level / currentLevel)
      if (currentLevel >= level && level < nextLevel) {
        return lerp(currentValue, nextValue, level / (nextLevel - currentLevel))
      }
    }

    const [, lastValue] = table.GainBalance[table.GainBalance.length - 1]
    return lastValue
  }
}

module.exports = { MetaConfig }
