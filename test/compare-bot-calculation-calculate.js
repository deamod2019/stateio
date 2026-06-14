"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { BotCalculationLogic: OriginalBotCalculationLogic } = require("../src-cjs/59474_BotCalculationLogic.js")
const { BotCalculationLogic: RestoredBotCalculationLogic } = require("../src-restored/core/BotCalculationLogic.js")
const { Building: OriginalBuilding } = require("../src-cjs/26511_Building.js")
const { Building: RestoredBuilding } = require("../src-restored/core/Building.js")
const { FighterGroupsSystem: OriginalFighterGroupsSystem } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredFighterGroupsSystem } = require("../src-restored/core/FighterGroupsSystem.js")
const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { DecisionType } = require("../src-cjs/25583_DecisionType.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  BotCalculationLogic: OriginalBotCalculationLogic,
  Building: OriginalBuilding,
  FighterGroupsSystem: OriginalFighterGroupsSystem,
  PathHolder: OriginalPathHolder,
  Spawner: OriginalSpawner,
  RuntimeUtils: originalRuntime,
}
const restoredDeps = {
  BotCalculationLogic: RestoredBotCalculationLogic,
  Building: RestoredBuilding,
  FighterGroupsSystem: RestoredFighterGroupsSystem,
  PathHolder: RestoredPathHolder,
  Spawner: RestoredSpawner,
  RuntimeUtils: restoredRuntime,
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

async function main() {
  await compareAsyncScenario("calculate selects command from generated scored list", async (deps) => {
    const h = makeHarness(deps)
    await h.bot.calculate(h.buildings.get("bot-a"))
    return snapshot(h)
  })

  await compareAsyncScenario("calculate reuses in-flight promise", async (deps) => {
    const h = makeHarness(deps)
    const first = h.bot.calculate(h.buildings.get("bot-a"))
    const second = h.bot.calculate(h.buildings.get("bot-a"))
    await Promise.all([first, second])
    return snapshot(h)
  })

  console.log(
    JSON.stringify(
      {
        module: "BotCalculationLogic.calculate",
        scenarios: 2,
        status: "ok",
      },
      null,
      2,
    ),
  )
}

async function compareAsyncScenario(name, run) {
  const originalResult = await withDeterministicRuntime(originalDeps, () => run(originalDeps))
  const restoredResult = await withDeterministicRuntime(restoredDeps, () => run(restoredDeps))
  assert.deepEqual(normalize(restoredResult), normalize(originalResult), name)
}

async function withDeterministicRuntime(deps, run) {
  const realNow = Date.now
  const realSetTimeout = global.setTimeout
  const realRangeFloat = deps.RuntimeUtils.Random.rangeFloat
  const realRange = deps.RuntimeUtils.Random.range

  try {
    Date.now = () => 1000
    global.setTimeout = function setTimeoutImmediate(callback, delay) {
      callback()
      return { delay }
    }
    deps.RuntimeUtils.Random.rangeFloat = function rangeFloat(min, max) {
      return min
    }
    deps.RuntimeUtils.Random.range = function range(min, max) {
      return min
    }
    deps.FighterGroupsSystem.Clear()

    return await run()
  } finally {
    Date.now = realNow
    global.setTimeout = realSetTimeout
    deps.RuntimeUtils.Random.rangeFloat = realRangeFloat
    deps.RuntimeUtils.Random.range = realRange
    deps.FighterGroupsSystem.Clear()
  }
}

function makeHarness(deps) {
  const bot = new deps.BotCalculationLogic()
  bot.init({
    traceDuration: 2,
    stepDuration: 1,
    forcesBalanceFactor: 2,
    buildingsBalanceFactor: 3,
    targetReachedTimeBoost: 0.5,
    fightersInSegment: 5,
    isConsiderGroupToGroupIntersection: false,
    maxBuildingsMove: 1,
    alivePlayerBuildingsLimit: -1,
    commandInDecisionOrder: [0, 1],
  })

  const buildings = new Map()
  buildings.set("bot-a", makeBuilding(deps, "bot-a", PlayerType.Second, 12, [0, 0]))
  buildings.set("player-a", makeBuilding(deps, "player-a", PlayerType.First, 4, [30, 0]))
  buildings.set("neutral-a", makeBuilding(deps, "neutral-a", PlayerType.Neutral, 2, [15, 0]))

  bot.model = {
    meta: {
      getBuildingPopulationLimit(owner) {
        return owner + 50
      },
      getPopulationRate(owner) {
        return owner + 0.25
      },
    },
    currentContinent: { buildings },
  }

  return { bot, buildings }
}

function makeBuilding(deps, id, owner, population, position) {
  return {
    stateId: id,
    owner,
    hasTag(tag) {
      return tag === deps.Building.ACTIVE_TAG
    },
    has(key) {
      return key === deps.Spawner
    },
    get(key) {
      if (key === deps.PathHolder) {
        return {
          getPath(targetId) {
            return [
              [
                position.slice(0),
                [position[0] + 10, position[1]],
              ],
              [
                [position[0] + 10, position[1]],
                targetId === "player-a" ? [30, 0] : [15, 0],
              ],
            ]
          },
        }
      }
      return undefined
    },
    getSnapshot() {
      return {
        Owner: owner,
        SpawnRate: 1,
        AttackRate: 0,
        AttackRadius: 0,
        Id: id,
        Position: position.slice(0),
        CurrentPopulation: population,
        SpawnLimit: 25,
        FighterSpeed: 10,
        LastActionTimestamp: 0,
        BurstDelay: 0.5,
        BurstWidth: 2,
      }
    },
  }
}

function snapshot(h) {
  const command = h.bot.getLastCommand()
  return {
    busy: h.bot.busy,
    command: normalizeCommand(command),
  }
}

function normalizeCommand(command) {
  if (!command) return command
  return {
    Type: command.Type,
    TypeName: DecisionType[command.Type],
    Objects: (command.Objects || []).map((item) => ({
      Id: item.Id,
      Owner: item.Owner,
      CurrentPopulation: item.CurrentPopulation,
    })),
    Subject: command.Subject
      ? {
          Id: command.Subject.Id,
          Owner: command.Subject.Owner,
          CurrentPopulation: command.Subject.CurrentPopulation,
        }
      : undefined,
  }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      return item
    }),
  )
}
