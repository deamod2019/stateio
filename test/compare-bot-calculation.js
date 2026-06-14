"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { BotCalculationLogic: OriginalBotCalculationLogic } = require("../src-cjs/59474_BotCalculationLogic.js")
const { BotCalculationLogic: RestoredBotCalculationLogic } = require("../src-restored/core/BotCalculationLogic.js")
const { DecisionType } = require("../src-cjs/25583_DecisionType.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { BState } = require("../src-cjs/45329_BState.js")
const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")

const originalDeps = { BotCalculationLogic: OriginalBotCalculationLogic, PathHolder: OriginalPathHolder }
const restoredDeps = { BotCalculationLogic: RestoredBotCalculationLogic, PathHolder: RestoredPathHolder }

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.BotCalculationLogic),
  publicPrototypeMembers(originalDeps.BotCalculationLogic),
  "restored BotCalculationLogic public prototype differs",
)

compareScenario("state score with reached target boost", (deps) => {
  const bot = makeBot(deps)
  return bot.CalculateStateScore(makeState(), makeImprovedState(), 2)
})

compareScenario("update spawn buildings honors block time and cap", (deps) => {
  const bot = makeBot(deps)
  const buildings = [
    makeBuildingSnapshot("a", PlayerType.Second, 4, { LastActionTimestamp: 9.8, SpawnRate: 10, SpawnLimit: 20 }),
    makeBuildingSnapshot("b", PlayerType.Second, 19, { LastActionTimestamp: 0, SpawnRate: 10, SpawnLimit: 20 }),
  ]
  bot.updateSpawnBuildings(buildings, 10, 1)
  return buildings
})

compareScenario("buildings feed pending group bursts", (deps) => {
  const bot = makeBot(deps)
  const buildings = [makeBuildingSnapshot("source", PlayerType.Second, 12)]
  const groups = [
    {
      Owner: PlayerType.Second,
      Source: "source",
      TargetAmount: 9,
      Amount: 0,
      LastBurstTimestamp: 0,
      BurstDelay: 1,
    },
  ]
  bot.calculateBuildingsToGroupAmount(buildings, groups, 1.2)
  return { buildings, groups }
})

compareScenario("group reinforces owned building", (deps) => {
  const bot = makeBot(deps)
  const buildings = [makeBuildingSnapshot("target", PlayerType.Second, 7)]
  const groups = [makeReachedGroup(PlayerType.Second, "target", 4)]
  bot.calculateGroupToBuildingsAmount(buildings, groups, 5)
  return { buildings, groups }
})

compareScenario("group captures enemy building", (deps) => {
  const bot = makeBot(deps)
  const buildings = [makeBuildingSnapshot("target", PlayerType.First, 2)]
  const groups = [makeReachedGroup(PlayerType.Second, "target", 5)]
  bot.calculateGroupToBuildingsAmount(buildings, groups, 5)
  return { buildings, groups }
})

compareScenario("wait command clones state", (deps) => {
  const bot = makeBot(deps)
  const state = makeState()
  const next = bot.executeCommand(state, { Type: DecisionType.Wait })
  return {
    sameRef: next === state,
    buildingsSameRef: next.buildings === state.buildings,
    groupsSameRef: next.groups === state.groups,
    value: next,
  }
})

compareScenario("move command creates group and drains source", (deps) => {
  const bot = makeBot(deps)
  const state = new BState([makeBuildingSnapshot("source", PlayerType.Second, 12)], [], 10)
  const command = {
    Type: DecisionType.Move,
    Objects: state.buildings,
    Subject: makeBuildingSnapshot("target", PlayerType.First, 4),
  }
  const next = bot.executeCommand(state, command)
  return next
})

compareScenario("target reached for matching move group", (deps) => {
  const bot = makeBot(deps)
  const command = {
    Type: DecisionType.Move,
    Objects: [{ Id: "source" }],
    Subject: { Id: "target" },
  }
  return bot.isTargetReached(
    new BState([], [makeReachedGroup(PlayerType.Second, "target", 1, "source", 0)], 5),
    command,
  )
})

compareScenario("last command is consumed and busy reflects promise", (deps) => {
  const bot = makeBot(deps)
  const command = { Type: DecisionType.Wait }
  bot._lastCommand = command
  const firstRead = bot.getLastCommand()
  const secondRead = bot.getLastCommand()
  bot._calculationPromise = Promise.resolve()
  const busy = bot.busy
  delete bot._calculationPromise
  return { firstRead, secondRead, busy, idle: bot.busy }
})

console.log(
  JSON.stringify(
    {
      module: "BotCalculationLogic",
      prototype: publicPrototypeMembers(restoredDeps.BotCalculationLogic),
      scenarios: 9,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const originalResult = normalize(run(originalDeps))
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeBot(deps) {
  const bot = new deps.BotCalculationLogic()
  bot._owner = PlayerType.Second
  bot._preset = {
    forcesBalanceFactor: 2,
    buildingsBalanceFactor: 3,
    targetReachedTimeBoost: 0.5,
    fightersInSegment: 5,
    isConsiderGroupToGroupIntersection: false,
  }
  bot.model = {
    meta: {
      getBuildingPopulationLimit(owner) {
        return owner + 50
      },
      getPopulationRate(owner) {
        return owner + 0.25
      },
    },
    currentContinent: {
      buildings: new Map([
        [
          "source",
          {
            stateId: "source",
            get(key) {
              if (key !== deps.PathHolder) return undefined
              return {
                getPath() {
                  return [
                    [
                      [0, 0],
                      [10, 0],
                    ],
                    [
                      [10, 0],
                      [20, 0],
                    ],
                  ]
                },
              }
            },
          },
        ],
        ["target", { stateId: "target" }],
      ]),
    },
  }
  return bot
}

function makeState() {
  return new BState(
    [
      makeBuildingSnapshot("source", PlayerType.Second, 10),
      makeBuildingSnapshot("target", PlayerType.First, 8),
    ],
    [{ Owner: PlayerType.Second, Amount: 4 }],
    10,
  )
}

function makeImprovedState() {
  return new BState(
    [
      makeBuildingSnapshot("source", PlayerType.Second, 12),
      makeBuildingSnapshot("target", PlayerType.Second, 3),
    ],
    [{ Owner: PlayerType.Second, Amount: 5 }],
    10,
  )
}

function makeBuildingSnapshot(id, owner, currentPopulation, overrides = {}) {
  return {
    Owner: owner,
    SpawnRate: 1,
    AttackRate: 0,
    AttackRadius: 0,
    Id: id,
    Position: [0, 0],
    CurrentPopulation: currentPopulation,
    SpawnLimit: 25,
    FighterSpeed: 6,
    LastActionTimestamp: 0,
    BurstDelay: 0.5,
    BurstWidth: 2,
    ...overrides,
  }
}

function makeReachedGroup(owner, target, amount, source = "source", creationTimestamp = 1) {
  return {
    Owner: owner,
    Source: source,
    Target: target,
    Amount: amount,
    CreationTimestamp: creationTimestamp,
    get IsReachedEnd() {
      return true
    },
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
