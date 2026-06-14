"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { BotsSystem: OriginalBotsSystem } = require("../src-cjs/72063_BotsSystem.js")
const { BotsSystem: RestoredBotsSystem } = require("../src-restored/core/BotsSystem.js")
const { BotLogic: OriginalBotLogic } = require("../src-cjs/3565_BotLogic.js")
const { BotLogic: RestoredBotLogic } = require("../src-restored/core/BotLogic.js")
const { GamePlayEvent: OriginalGamePlayEvent } = require("../src-cjs/93972_GamePlaySystem.js")
const { GamePlayEvent: RestoredGamePlayEvent } = require("../src-restored/core/GamePlaySystem.js")
const presets = require("../src-cjs/13866_BotPreset6FinalAgressive.js")
const { DecisionType } = require("../src-cjs/25583_DecisionType.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const originalDeps = {
  BotsSystem: OriginalBotsSystem,
  BotLogic: OriginalBotLogic,
  GamePlayEvent: OriginalGamePlayEvent,
  RuntimeUtils: originalRuntime,
  RuntimeCore: core,
}
const restoredDeps = {
  BotsSystem: RestoredBotsSystem,
  BotLogic: RestoredBotLogic,
  GamePlayEvent: RestoredGamePlayEvent,
  RuntimeUtils: restoredRuntime,
  RuntimeCore: restoredCore,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.BotsSystem),
  publicPrototypeMembers(originalDeps.BotsSystem),
  "restored BotsSystem public prototype differs",
)

compareScenario("predicate and entityAdded initialize bot", (deps) => {
  return withHarness(deps, { stageLevel: 0 }, (h) => {
    const entity = makeEntity(deps)
    h.system.entityAdded({ current: entity })
    return {
      predicate: h.system.query._predicate(entity),
      botRecords: entity.bot.records,
      presetName: entity.bot.preset?.name,
    }
  })
})

compareScenario("updateEntity initializes, converts, and executes decision", (deps) => {
  return withHarness(deps, { stageLevel: 1, botLevel: 2, randomChoice: presets.BotPreset3UpperMedium }, (h) => {
    const entity = makeEntity(deps, {
      initialized: false,
      decision: {
        Type: DecisionType.Move,
        Subject: { Id: "target" },
        Objects: [{ Id: "source" }, { Id: "ally" }],
      },
    })
    h.system.updateEntity(entity, 0.16)
    return { botRecords: entity.bot.records, executed: entity.bot.executed }
  })
})

compareScenario("convertToDecision maps ids to live buildings", (deps) => {
  return withHarness(deps, {}, (h) => {
    const result = h.system.convertToDecision({
      Type: DecisionType.Move,
      Subject: { Id: "target" },
      Objects: [{ Id: "source" }, { Id: "ally" }],
    })
    return snapshotDecision(result)
  })
})

compareScenario("convertToDecision preserves wait command shape", (deps) => {
  return withHarness(deps, {}, (h) => h.system.convertToDecision({ Type: DecisionType.Wait }))
})

compareScenario("selectPreset handles start, low-level, and normal branches", (deps) => {
  return withHarness(deps, { randomChoice: presets.BotPreset4Hard }, (h) => {
    h.model.currentContinent.stageLevel = 0
    const start = h.system.selectPreset().name
    h.model.currentContinent.stageLevel = 1
    h.cookie.botLevel = 4
    h.cookie.fightsPassed = 1
    const low = h.system.selectPreset().name
    h.cookie.fightsPassed = 2
    const normal = h.system.selectPreset().name
    return {
      start,
      low,
      normal,
      prevNegative: h.system.getPrevLevel(0),
      prevMiddle: h.system.getPrevLevel(3),
      lowLevelFight: h.system.isLowLevelFight,
      randomCalls: h.randomCalls,
    }
  })
})

compareScenario("onAdded and onRemoved wire services and terminate bots", (deps) => {
  return withHarness(deps, {}, (h) => {
    const entity = makeEntity(deps)
    h.system.query._entities = [entity]
    h.system.onAddedToEngine()
    h.system.onRemovedFromEngine()
    return { records: h.records, botRecords: entity.bot.records }
  })
})

console.log(
  JSON.stringify(
    {
      module: "BotsSystem",
      prototype: publicPrototypeMembers(restoredDeps.BotsSystem),
      scenarios: 6,
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

function withHarness(deps, options, run) {
  const runtime = deps.RuntimeCore
  const originalGet = runtime.di.get
  const originalRandomFrom = deps.RuntimeUtils.Random.from
  const records = []
  const source = { id: "source" }
  const target = { id: "target" }
  const ally = { id: "ally" }
  const model = {
    currentContinent: {
      stageLevel: options.stageLevel ?? 1,
      buildings: new Map([
        ["source", source],
        ["target", target],
        ["ally", ally],
      ]),
    },
  }
  const cookie = {
    botLevel: options.botLevel ?? 1,
    fightsPassed: options.fightsPassed ?? 0,
  }
  const randomCalls = []
  runtime.di.get = (token) => {
    if (token === TypesGame.cookieModel) return cookie
    if (token === TypesGame.model) return model
    return model
  }
  deps.RuntimeUtils.Random.from = (weighted) => {
    randomCalls.push(weighted.map(([preset, weight]) => [preset.name, weight]))
    return [options.randomChoice ?? weighted[0][0], 1]
  }
  try {
    const system = new deps.BotsSystem()
    system.setEngine({
      addQuery(query) {
        records.push(["engine.addQuery", query === system.query])
      },
      removeQuery(query) {
        records.push(["engine.removeQuery", query === system.query])
      },
      subscribe(eventClass, handler) {
        records.push(["engine.subscribe", eventClass === deps.GamePlayEvent, handler === system._gameplayEventHandler])
      },
      unsubscribe(eventClass, handler) {
        records.push(["engine.unsubscribe", eventClass === deps.GamePlayEvent, handler === system._gameplayEventHandler])
      },
    })
    system.model = model
    system.cookie = cookie
    return run({ system, model, cookie, records, randomCalls })
  } finally {
    runtime.di.get = originalGet
    deps.RuntimeUtils.Random.from = originalRandomFrom
  }
}

function makeEntity(deps, options = {}) {
  const bot = {
    records: [],
    executed: undefined,
    initialized: options.initialized ?? true,
    preset: undefined,
    init(preset) {
      this.records.push(["init", preset.name])
      this.preset = preset
      this.initialized = true
      return this
    },
    decide(entity) {
      this.records.push(["decide", entity.id])
      return options.decision
    },
    executeDecision(decision) {
      this.records.push(["executeDecision"])
      this.executed = snapshotDecision(decision)
    },
    terminate() {
      this.records.push(["terminate"])
    },
  }
  return {
    id: "bot-building",
    bot,
    has(key) {
      return key === deps.BotLogic
    },
    get(key) {
      return key === deps.BotLogic ? bot : undefined
    },
  }
}

function snapshotDecision(decision) {
  return {
    Type: decision.Type,
    Subject: decision.Subject.id ?? decision.Subject,
    Objects: decision.Objects.map((object) => object.id ?? object),
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
