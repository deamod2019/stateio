"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const core = require("../src-cjs/44656__mod.js")
const { WaitAction: restoredWaitAction } = require("../src-restored/core/WaitAction.js")
const { BotLogic: OriginalBotLogic } = require("../src-cjs/3565_BotLogic.js")
const { BotLogic: RestoredBotLogic } = require("../src-restored/core/BotLogic.js")
const { DecisionType } = require("../src-cjs/25583_DecisionType.js")

const originalDeps = { BotLogic: OriginalBotLogic, RuntimeUtils: originalRuntime }
const restoredDeps = { BotLogic: RestoredBotLogic, RuntimeUtils: restoredRuntime }

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.BotLogic),
  publicPrototypeMembers(originalDeps.BotLogic),
  "restored BotLogic public prototype differs",
)

let now = 0
let waitRecords = []
let randomFloatRecords = []
let currentPatch = {}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

async function main() {
  await compareScenario("init marks initialized and forwards preset", (deps) => {
    return withPatchedEnvironment(deps, () => {
      const bot = makeBot(deps, { now: 10 })
      const preset = makePreset()
      const result = bot.init(preset)
      return { sameRef: result === bot, initialized: bot.initialized, records: bot._logic.records }
    })
  })

  await compareScenario("decide waits for start delay", (deps) => {
    return withPatchedEnvironment(deps, () => {
      const bot = makeBot(deps, { now: 0, range: 3, command: { Type: DecisionType.Wait } })
      bot.init(makePreset())
      const decision = bot.decide(makeBuilding())
      return { decision, records: bot._logic.records, executing: bot._executingDecision }
    })
  })

  await compareScenario("decide calculates when start delay and cadence are ready", (deps) => {
    return withPatchedEnvironment(deps, () => {
      const bot = makeBot(deps, { now: 0, range: 0, command: { Type: DecisionType.Wait } })
      bot.init(makePreset())
      setNow(1000)
      bot._executingDecision = true
      const building = makeBuilding()
      const decision = bot.decide(building)
      return {
        decision,
        buildingStored: bot._building === building,
        lastCalculationTimestamp: bot._lastCalculationTimestamp,
        executing: bot._executingDecision,
        records: bot._logic.records,
      }
    })
  })

  await compareScenario("decide skips calculation while logic is busy", (deps) => {
    return withPatchedEnvironment(deps, () => {
      const bot = makeBot(deps, { now: 1000, range: 0, busy: true, command: { Type: DecisionType.Wait } })
      bot.init(makePreset())
      const decision = bot.decide(makeBuilding())
      return { decision, records: bot._logic.records }
    })
  })

  await compareScenario("executeDecision sends only from matching-owner objects", (deps) => {
    return withPatchedEnvironment(deps, async () => {
      const bot = makeBot(deps, { now: 0, rangeFloat: 0.25 })
      bot.init(makePreset())
      const building = makeBuilding(2)
      bot._building = building
      const subject = makeBuilding(3, "target")
      const sameOwner = makeBuilding(2, "sameOwner")
      const otherOwner = makeBuilding(1, "otherOwner")
      const result = bot.executeDecision({
        Type: DecisionType.Move,
        Subject: subject,
        Objects: [subject, sameOwner, otherOwner],
      })
      await Promise.resolve()
      await Promise.resolve()
      return {
        result,
        executing: bot._executingDecision,
        buildingRecords: building.records,
        waitRecords: waitRecords.slice(),
        randomFloatRecords: randomFloatRecords.slice(),
      }
    })
  })

  await compareScenario("terminate forwards to calculation logic", (deps) => {
    return withPatchedEnvironment(deps, () => {
      const bot = makeBot(deps, { now: 0 })
      bot.terminate()
      return bot._logic.records
    })
  })

  console.log(
    JSON.stringify(
      {
        module: "BotLogic",
        prototype: publicPrototypeMembers(restoredDeps.BotLogic),
        scenarios: 6,
        status: "ok",
      },
      null,
      2,
    ),
  )
}

async function compareScenario(name, run) {
  const originalResult = normalize(await run(originalDeps))
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function withPatchedEnvironment(deps, run) {
  const originalNow = Date.now
  const originalRange = deps.RuntimeUtils.Random.range
  const originalRangeFloat = deps.RuntimeUtils.Random.rangeFloat
  const originalWaitSec = core.WaitAction.sec
  const originalRestoredWaitSec = restoredWaitAction.sec
  waitRecords = []
  randomFloatRecords = []
  Date.now = () => now
  deps.RuntimeUtils.Random.range = () => currentPatch.range
  deps.RuntimeUtils.Random.rangeFloat = (min, max) => {
    randomFloatRecords.push([min, max])
    return currentPatch.rangeFloat
  }
  core.WaitAction.sec = (seconds) => {
    waitRecords.push(seconds)
    return Promise.resolve()
  }
  restoredWaitAction.sec = core.WaitAction.sec
  try {
    return await run()
  } finally {
    Date.now = originalNow
    deps.RuntimeUtils.Random.range = originalRange
    deps.RuntimeUtils.Random.rangeFloat = originalRangeFloat
    core.WaitAction.sec = originalWaitSec
    restoredWaitAction.sec = originalRestoredWaitSec
    currentPatch = {}
  }
}

function makeBot(deps, patch = {}) {
  currentPatch = {
    range: 0,
    rangeFloat: 0.1,
    busy: false,
    command: undefined,
    ...patch,
  }
  setNow(currentPatch.now)
  const bot = new deps.BotLogic()
  bot._logic = makeLogic(currentPatch)
  return bot
}

function setNow(value) {
  now = value ?? 0
}

function makePreset() {
  return { waitTimeBetweenDecisions: 1, name: "test" }
}

function makeLogic(patch) {
  return {
    records: [],
    get busy() {
      return patch.busy
    },
    init(preset) {
      this.records.push(["init", preset.name])
    },
    calculate(building) {
      this.records.push(["calculate", building.id])
    },
    getLastCommand() {
      this.records.push(["getLastCommand"])
      return patch.command
    },
    terminate() {
      this.records.push(["terminate"])
    },
  }
}

function makeBuilding(owner = 2, id = "building") {
  return {
    id,
    owner,
    records: [],
    sendTo(target) {
      this.records.push(["sendTo", target.id])
    },
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "undefined" ? "__undefined__" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
