"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const legacyCore = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesCore } = require("../src-cjs/86178__mod.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const original = {
  RuntimeCore: legacyCore,
  CookieModelBase: require("../src-cjs/28696_CookieModelBase.js").CookieModelBase,
  CookieModel: require("../src-cjs/56792_CookieModel.js").CookieModel,
  CookieModelKey: require("../src-cjs/56792_CookieModel.js").CookieModelKey,
  MetaConfig: require("../src-cjs/82713_MetaConfig.js").MetaConfig,
  MetaModel: require("../src-cjs/36356_MetaModel.js").MetaModel,
}
const restored = {
  RuntimeCore: restoredCore,
  CookieModelBase: require("../src-restored/core/CookieModelBase.js").CookieModelBase,
  CookieModel: require("../src-restored/core/CookieModel.js").CookieModel,
  CookieModelKey: require("../src-restored/core/CookieModel.js").CookieModelKey,
  MetaConfig: require("../src-restored/core/MetaConfig.js").MetaConfig,
  MetaModel: require("../src-restored/core/MetaModel.js").MetaModel,
}

const originalEnv = { get: legacyCore.di.get, restoredGet: restoredCore.di.get }

Promise.resolve()
  .then(async () => {
    assert.deepEqual(
      publicPrototypeMembers(restored.CookieModelBase),
      publicPrototypeMembers(original.CookieModelBase),
      "CookieModelBase prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restored.CookieModel),
      publicPrototypeMembers(original.CookieModel),
      "CookieModel prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restored.MetaConfig),
      publicPrototypeMembers(original.MetaConfig),
      "MetaConfig prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restored.MetaModel),
      publicPrototypeMembers(original.MetaModel),
      "MetaModel prototype differs",
    )

    compare("CookieModelKey", (deps) => deps.CookieModelKey)
    compare("MetaConfig balance values", exerciseMetaConfig)
    await compareAsync("CookieModel persistence and selectors", exerciseCookieModel)
    compare("MetaModel economy facade", exerciseMetaModel)

    console.log(
      JSON.stringify(
        {
          module: "CookieMeta",
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(restoreEnvironment)

function compare(name, exercise) {
  restoreEnvironment()
  const originalResult = normalize(exercise(original))
  restoreEnvironment()
  const restoredResult = normalize(exercise(restored))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareAsync(name, exercise) {
  restoreEnvironment()
  const originalResult = normalize(await exercise(original))
  restoreEnvironment()
  const restoredResult = normalize(await exercise(restored))
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseMetaConfig({ MetaConfig }) {
  const meta = new MetaConfig()
  return {
    levelRewards: [1, 10, 151, 205].map((level) => meta.GetLevelFinishReward(level)),
    startPopulation: [1, 10, 151].map((level) => meta.GetStartPopulation(level)),
    generationSpeed: [1, 150, 151, 200].map((level) => meta.GetGenerationSpeed(level)),
    offlineEarning: [1, 10, 150, 151].map((level) => meta.GetOfflineEarning(level)),
    boosterCost: [1, 20, 150, 151, 175, 201].map((level) => meta.GetBoosterCost(level)),
    table: [-1, 0, 1, 49, 50].map((level) =>
      meta.GetBalanceFromTable(level, {
        Start: 0,
        GainBalance: [
          [0, 10],
          [0, 20],
          [0, 30],
        ],
      }),
    ),
    neutralRate: [1, 10, 19, 100, 110].map((level) => meta.GetNeutralRate(level)),
    neutralCap: [1, 10, 70, 100].map((level) => meta.GetNeutralCap(level)),
    commonCap: [1, 20, 35, 50].map((level) => meta.GetCommonCap(level)),
    neutralStart: [1, 10, 70, 100].map((level) => meta.GetNeutralStartPopulation(level)),
    botCapLevelOne: meta.GetBotUpgradeLevelsCap(1),
    interpolateOne: meta.GetBalanceValueByLevelInterpolate(5, {
      Start: 10,
      GainBalance: [[10, 20]],
    }),
    interpolateMany: meta.GetBalanceValueByLevelInterpolate(5, {
      Start: 0,
      GainBalance: [
        [3, 30],
        [10, 60],
      ],
    }),
  }
}

async function exerciseCookieModel(deps) {
  const { CookieModel, CookieModelKey, RuntimeCore } = deps
  const records = []
  const saved = []
  const warnings = []
  const originalWarn = console.warn
  const originalDebug = console.debug
  console.warn = (...args) => warnings.push(args.map(String))
  console.debug = (...args) => records.push(["debug", ...args.map(String)])

  patchDispatcher(records, RuntimeCore)
  const realNow = Date.now
  Date.now = () => 100000

  try {
    const model = new CookieModel()
    model.social = {
      inSolo: false,
      cookie: {
        async get(keys) {
          records.push(["cookie.get", keys.length, keys[0], keys[keys.length - 1]])
          return Object.fromEntries(
            keys.map((key) => {
              if (key === CookieModelKey.coins) return [key, 25]
              if (key === CookieModelKey.lastLaunch) return [key, 90000]
              if (key === CookieModelKey.ctx_history) {
                return [key, JSON.stringify({ level: [{ c: 1, s: [0, 1] }] })]
              }
              return [key, undefined]
            }),
          )
        },
        save(key, value) {
          saved.push([key, value])
        },
      },
    }

    const defaults = model.getDefaultStore()
    await model.sync()
    const afterSync = {
      coins: model.coins,
      lastLaunch: model.lastLaunch,
      timeDiff: model.timeDiff,
      saves: saved.slice(0, 5),
      saveCount: saved.length,
    }

    model.coins = 50
    const enough = [model.isEnoughCoins(49), model.isEnoughCoins(51)]
    model.spendCoins(5)

    model.setContextHistory("level", { c: 1, s: [0, 1] })
    const history = {
      last: model.getContextHistory("level"),
      all: model.getContextHistories(),
    }

    const selectedBefore = {
      color: summarizeSelectable(model.selectedColorSet),
      building: summarizeSelectable(model.selectedBuilding),
      fighter: summarizeSelectable(model.selectedFighter),
      colors: model.availableColors.map(summarizeSelectable).slice(0, 3),
      buildingSet: model.getUserBuildingSet(),
      fighterSet: model.getUserFighterSet(),
      firstColor: model.getColorByPlayerType(PlayerType.First),
      secondColor: model.getColorByPlayerType(PlayerType.Second),
    }

    model.addUserBuilding(2)
    model.addUserBuilding(2)
    model.addUserFighter(2)
    model.selected_color_set_id = 2
    model.selected_building_id = 2
    model.selected_fighter_id = 2

    const selectedAfter = {
      colorId: model.selected_color_set_id,
      buildingId: model.selected_building_id,
      fighterId: model.selected_fighter_id,
      buildingSet: model.getUserBuildingSet(),
      fighterSet: model.getUserFighterSet(),
      firstColor: model.getColorByPlayerType(PlayerType.First),
      secondColor: model.getColorByPlayerType(PlayerType.Second),
    }

    model.clear()

    return {
      defaultKeys: Object.keys(defaults),
      afterSync,
      coinsAfterSpend: model.coins,
      enough,
      history,
      selectedBefore,
      selectedAfter,
      afterClear: {
        coins: model.coins,
        absoluteLevelNum: model.absoluteLevelNum,
        clearSaveCount: saved.length,
      },
      dispatcherRecords: records.filter((item) => item[0] === "dispatcher.emit"),
      warnings,
    }
  } finally {
    Date.now = realNow
    console.warn = originalWarn
    console.debug = originalDebug
  }
}

function exerciseMetaModel({ MetaModel }) {
  const model = new MetaModel()
  const records = []
  model.cookie = createMetaCookie(records)
  model._metaConfig.GetBotUpgradeLevelsCap = (level) => level + 2
  model.upgradedForFree = () => records.push(["upgraded.free"])
  model.upgraded = () => records.push(["upgraded"])

  const before = {
    rewardDefault: model.getReward(),
    rewardLevel: model.getReward(3),
    caps: [
      model.getBuildingPopulationLimit(PlayerType.Neutral),
      model.getBuildingPopulationLimit(PlayerType.First),
    ],
    rates: [
      model.getPopulationRate(PlayerType.Neutral),
      model.getPopulationRate(PlayerType.First),
      model.getPopulationRate(PlayerType.Second),
    ],
    starts: [
      model.getStartPopulation(PlayerType.Neutral),
      model.getStartPopulation(PlayerType.First),
      model.getStartPopulation(PlayerType.Second),
    ],
    costs: [
      model.getStartPopulationCost(),
      model.getPopulationRateCost(),
      model.getOfflineEarningCost(),
    ],
    next: [
      model.getNextStartPopulation(PlayerType.Neutral),
      model.getNextStartPopulation(PlayerType.First),
      model.getNextStartPopulation(PlayerType.Second),
      model.getNextPopulationRate(PlayerType.Neutral),
      model.getNextPopulationRate(PlayerType.First),
      model.getNextPopulationRate(PlayerType.Second),
      model.getNextOfflineEarning(),
      model.getOfflineEarning(),
      model.getPlayerGenerationRateValue(3),
    ],
  }

  model.increaseStartPopulation()
  model.increaseStartPopulationFree()
  model.increaseSpawn()
  model.increaseSpawnFree()
  model.increaseOffline()
  model.increaseOfflineFree()

  return {
    before,
    cookie: model.cookie,
    records,
    loseMultiplier: model.loseMultiplier,
  }
}

function createMetaCookie(records) {
  return {
    absoluteLevelNum: 5,
    playerStartPopulation: 2,
    playerSpawnLevel: 3,
    playerOfflineLevel: 4,
    coins: 1000000,
    isEnoughCoins(cost) {
      records.push(["isEnoughCoins", cost])
      return this.coins >= cost
    },
    spendCoins(cost) {
      records.push(["spendCoins", cost])
      this.coins -= cost
    },
  }
}

function summarizeSelectable(item) {
  if (!item) return item
  return {
    id: item.id,
    selected: item.selected,
    stored: item.stored,
    type: item.type,
    hasData: Boolean(item.data),
    textureUrl: item.textureUrl,
  }
}

function patchDispatcher(records, runtime) {
  runtime.di.get = function get(token) {
    if (token === TypesCore.dispatcher || token === "core.dispatcher") {
      return {
        emit(event, payload) {
          records.push([
            "dispatcher.emit",
            event === GameEvents.COINS_UPDATED ? "COINS_UPDATED" : event,
            payload || null,
          ])
        },
      }
    }
    return undefined
  }
}

function restoreEnvironment() {
  legacyCore.di.get = originalEnv.get
  restoredCore.di.get = originalEnv.restoredGet
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}
