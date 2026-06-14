"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { GameModel: OriginalGameModel } = require("../src-cjs/94572_GameModel.js")
const { GameModel: RestoredGameModel } = require("../src-restored/core/GameModel.js")
const { GameState } = require("../src-cjs/65370_GameState.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { Types2D, TypesFlow, TypesSocial, TypesUI } = require("../src-cjs/86178__mod.js")
const { UIEvents } = require("../src-cjs/83430_InversifyContext.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { ScoreType } = require("../src-cjs/48616__mod.js")
const { Ticker } = require("../src-cjs/6538_SIDES.js")

const originalDeps = { GameModel: OriginalGameModel }
const restoredDeps = { GameModel: RestoredGameModel }
const pendingComparisons = []
let currentHarness = null

const originalContainerEnv = {
  oldGet: core.di.get,
  oldIsBound: core.di.isBound,
  restoredGet: restoredCore.di.get,
  restoredIsBound: restoredCore.di.isBound,
}

core.di.get = restoredCore.di.get = function getFromTestContainer(token) {
  if (!currentHarness) return {}
  return currentHarness.getService(token)
}
core.di.isBound = restoredCore.di.isBound = function isBoundInTestContainer() {
  return currentHarness !== null
}

assert.deepEqual(RestoredGameModel.LEVELS_PREDEFINED, OriginalGameModel.LEVELS_PREDEFINED)
assert.deepEqual(RestoredGameModel.DEFAULT_CTX_DATA, OriginalGameModel.DEFAULT_CTX_DATA)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GameModel),
  publicPrototypeMembers(originalDeps.GameModel),
  "restored GameModel public prototype differs",
)

compareScenario("constructor shape", (deps) => {
  const h = makeHarness(deps)
  return {
    levels: h.model.levels,
    screenshots: h.model.screenshots,
    gameplaySystemsLength: h.model.gameplaySystems.length,
    paused: h.model.paused,
  }
})

compareScenario("setCurrentContinent adds queries and init system once", (deps) => {
  const h = makeHarness(deps)
  h.model.setCurrentContinent(h.continent, 99)
  h.model.setCurrentContinent(h.continent, 99)
  return snapshot(h)
})

compareScenario("startStage clears screenshots and enters gameplay", (deps) => {
  const h = makeHarness(deps)
  h.model.screenshots.push("old-a", "old-b")
  h.model.gameplaySystems = [{ __kind: "population" }, { __kind: "input" }]
  h.model.startStage(h.continent)
  return snapshot(h)
})

compareScenario("endStage loss enters loose state", (deps) => {
  const h = makeHarness(deps)
  h.model.gameplaySystems = [{ __kind: "gameplay" }]
  h.model.endStage(false)
  return snapshot(h)
})

compareScenario("endStage win unfinished captures stage", (deps) => {
  const h = makeHarness(deps)
  h.continent.isFinished = false
  h.model.endStage(true)
  return snapshot(h)
})

compareScenario("endStage win finished continent", (deps) => {
  const h = makeHarness(deps)
  h.continent.isFinished = true
  h.model.endStage(true)
  return snapshot(h)
})

compareScenario("endStage skip jumps to continent win", (deps) => {
  const h = makeHarness(deps)
  h.model.endStage(true, true)
  return snapshot(h)
})

compareScenario("paused toggles continent time and ticker", (deps) => {
  const h = makeHarness(deps)
  h.model.paused = true
  h.model.paused = false
  return snapshot(h)
})

compareScenario("associated users are matched by owner", (deps) => {
  const h = makeHarness(deps)
  return h.model.getAssociatedUsers()
})

compareScenario("offline earning below and above threshold", (deps) => {
  const h = makeHarness(deps)
  h.model.cookie.timeDiff = 30 * 1000
  const short = h.model.getOfflineEarning()
  h.model.cookie.timeDiff = 2 * 60 * 60 * 1000
  const long = h.model.getOfflineEarning()
  return { short, long }
})

compareScenario("solo context data", (deps) => {
  const h = makeHarness(deps)
  h.model.social.inSolo = true
  h.model.cookie.absoluteLevelNum = 2
  h.model.cookie.currentStage = 3
  return h.model.getContextData()
})

compareScenario("context data advances finished social context", (deps) => {
  const h = makeHarness(deps)
  h.model.social.context_id = "ctx"
  h.model.social.me.scores = makeScores(
    JSON.stringify({ l: "China.svg", c: 2, s: [10, 20] }),
  )
  return h.model.getContextData()
})

compareAsyncScenario("createFieldScreenShot keeps latest two", async (deps) => {
  const h = makeHarness(deps)
  h.model.screenshots.push("old-a", "old-b")
  const shot = await h.model.createFieldScreenShot()
  return { shot, snapshot: snapshot(h) }
})

Promise.all(pendingComparisons)
  .then(() => {
    Ticker.shared.stop()
    console.log(
      JSON.stringify(
        {
          module: "GameModel",
          prototype: publicPrototypeMembers(restoredDeps.GameModel),
          scenarios: 13,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    Ticker.shared.stop()
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    restoreContainers()
  })

function compareScenario(name, run) {
  withPatchedTicker(() => {
    const originalResult = normalize(run(originalDeps))
    const restoredResult = normalize(run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
  currentHarness = null
}

function compareAsyncScenario(name, run) {
  pendingComparisons.push(
    withPatchedTicker(async () => {
      const original = await run(originalDeps)
      const restored = await run(restoredDeps)
      assert.deepEqual(normalize(restored), normalize(original), name)
    }).finally(() => {
      currentHarness = null
    }),
  )
}

function makeHarness(deps) {
  const records = []
  const model = new deps.GameModel()
  const continent = makeContinent(records)

  const services = new Map()
  const harness = {
    model,
    records,
    continent,
    getService(token) {
      return services.get(token) || { run: (payload) => records.push(["run", labelToken(token), payload]) }
    },
  }
  currentHarness = harness

  services.set(TypesGame.actions.endStage, {
    run(win) {
      records.push(["endStageAction", win])
    },
  })
  services.set(TypesFlow.LevelEnd, {
    run(win) {
      records.push(["levelEndAction", win])
    },
  })
  services.set(Types2D.screenShotAction, {
    run(payload) {
      records.push(["screenshot.run", payload.image])
      return Promise.resolve(`shot-${records.filter((record) => record[0] === "screenshot.run").length}`)
    },
  })
  services.set(TypesGame.views.fieldInstance, { map: "field-map" })
  services.set(TypesSocial.leaderboardContext, {
    submit(score, history) {
      records.push(["leaderboard.submit", score, history])
    },
  })

  model.dispatch = function dispatch(event, payload) {
    records.push(["dispatch", event, normalizePayload(payload)])
  }
  model.engine = makeEngine(records)
  model._currentContinent = continent
  model.cookie = {
    absoluteLevelNum: 5,
    currentStage: 1,
    timeDiff: 0,
    syncTime() {
      records.push(["cookie.syncTime"])
    },
  }
  model.meta = {
    getOfflineEarning() {
      return 3600
    },
  }
  model.social = {
    inSolo: false,
    context_id: "",
    contextPlayers: [
      { id: "me", scoreContext: 4, scores: makeScores() },
      { id: "p2" },
      { id: "p3" },
    ],
    me: null,
    playSolo() {
      records.push(["social.playSolo"])
      this.inSolo = true
      return Promise.resolve()
    },
  }
  model.social.me = model.social.contextPlayers[0]
  model.skinManager = {
    getColorBy(owner) {
      return [`color-${owner}`]
    },
    updateSkins() {
      records.push(["skin.update"])
    },
  }

  return harness
}

function makeContinent(records) {
  return {
    stageLevel: 1,
    data: { stages: [{}, {}, {}], id: "continent" },
    isFinished: false,
    buildings: new Map([["a", { destroy() {} }]]),
    parsed: new Map([
      ["a", { stage: 1, startOwner: PlayerType.First }],
      ["b", { stage: 1, startOwner: PlayerType.Second }],
      ["c", { stage: 1, startOwner: PlayerType.Neutral }],
      ["d", { stage: 2, startOwner: PlayerType.Third }],
    ]),
    time: {
      start() {
        records.push(["time.start"])
      },
      pause() {
        records.push(["time.pause"])
      },
      resume() {
        records.push(["time.resume"])
      },
    },
    captureStage() {
      records.push(["continent.capture"])
      this.stageLevel++
    },
    getHistory() {
      return { l: "continent", c: this.stageLevel, s: [1, 2] }
    },
    dispose() {
      records.push(["continent.dispose"])
    },
  }
}

function makeEngine(records) {
  return {
    addQuery(query) {
      records.push(["engine.addQuery", labelQuery(query)])
    },
    addSystem(system) {
      records.push(["engine.addSystem", labelSystem(system)])
    },
    removeSystem(system) {
      records.push(["engine.removeSystem", labelSystem(system)])
    },
    getSystem() {
      return null
    },
    clear() {
      records.push(["engine.clear"])
    },
    removeAllEntities() {
      records.push(["engine.removeAllEntities"])
    },
    update(delta) {
      records.push(["engine.update", delta])
    },
  }
}

function snapshot(h) {
  return {
    state: h.model.state,
    paused: h.model.paused,
    screenshots: h.model.screenshots,
    stageLevel: h.continent.stageLevel,
    cookieStage: h.model.cookie.currentStage,
    records: h.records,
  }
}

function withPatchedTicker(run) {
  const add = Ticker.shared.add
  const remove = Ticker.shared.remove
  try {
    Ticker.shared.add = function addTicker(fn) {
      if (currentHarness) currentHarness.records.push(["ticker.add", typeof fn])
    }
    Ticker.shared.remove = function removeTicker(fn) {
      if (currentHarness) currentHarness.records.push(["ticker.remove", typeof fn])
    }
    return run()
  } finally {
    Ticker.shared.add = add
    Ticker.shared.remove = remove
  }
}

function makeScores(extraData) {
  return {
    getEntry(type) {
      assert.equal(type, ScoreType.CONTEXT)
      return extraData
        ? {
            getExtraData() {
              return extraData
            },
          }
        : undefined
    },
  }
}

function labelSystem(system) {
  if (system && system.__kind) return system.__kind
  const names = publicPrototypeMembers(system.constructor || function Empty() {})
  if (names.includes("onAddedToEngine") && "currentContinent" in system && "stageLevel" in system) {
    return "InitStageSystem"
  }
  if (names.includes("updateEntity") && names.includes("selectPreset")) return "BotsSystem"
  if (names.length === 1 && names.includes("updateEntity")) return "PopulationSystem"
  if (names.includes("updateEntity") && names.includes("vibratePeek")) return "InputSystem"
  if (names.includes("prepare") && names.includes("updateEntities")) return "IterativeSystem"
  if (names.includes("update")) return "System"
  return system && system.constructor ? system.constructor.name : String(system)
}

function labelQuery(query) {
  if (query && (typeof query.predicate === "function" || typeof query._predicate === "function")) return "Query"
  return query && query.constructor ? query.constructor.name : String(query)
}

function labelToken(token) {
  if (typeof token === "symbol") return "symbol"
  return String(token)
}

function normalizePayload(payload) {
  if (!payload) return payload
  if (payload.id || payload.props) {
    return {
      id: payload.id,
      props: payload.props
        ? {
            participants: payload.props.participants,
            hasOnConfirm: typeof payload.props.onConfirm === "function",
          }
        : undefined,
    }
  }
  return payload
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item instanceof Date) return item.toISOString()
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function restoreContainers() {
  core.di.get = originalContainerEnv.oldGet
  core.di.isBound = originalContainerEnv.oldIsBound
  restoredCore.di.get = originalContainerEnv.restoredGet
  restoredCore.di.isBound = originalContainerEnv.restoredIsBound
}
