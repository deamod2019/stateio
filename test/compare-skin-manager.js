"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Random } = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { SkinManager: OriginalSkinManager } = require("../src-cjs/60079_SkinManager.js")
const { SkinManager: RestoredSkinManager } = require("../src-restored/core/SkinManager.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const {
  UserSelectableColorsSet,
  SkinType,
} = require("../src-cjs/66154_SelectableFighterDataSet.js")

const originalDeps = { SkinManager: OriginalSkinManager }
const restoredDeps = { SkinManager: RestoredSkinManager }
const originalRandomFrom = Random.from
const originalRestoredRandomFrom = restoredRuntime.Random.from

try {
  assert.deepEqual(
    publicPrototypeMembers(restoredDeps.SkinManager),
    publicPrototypeMembers(originalDeps.SkinManager),
    "restored SkinManager public prototype differs",
  )

  compareScenario("constructor shape", (deps) => {
    const manager = new deps.SkinManager()
    return {
      fighters: mapEntries(manager.fighters),
      buildings: mapEntries(manager.buildings),
    }
  })

  compareScenario("fillSkins below random threshold uses selected player and defaults for opponents", (deps) => {
    const manager = makeManager(deps, {
      absoluteLevelNum: 4,
      selected_fighter_id: 2,
      selected_building_id: 3,
    })
    manager.fillSkins()
    return {
      firstFighter: manager.getFighterTextureBy(PlayerType.First),
      firstBuilding: manager.getBuildingTextureBy(PlayerType.First),
      neutralBuilding: manager.getBuildingTextureBy(PlayerType.Neutral),
      secondFighter: manager.getFighterTextureBy(PlayerType.Second),
      secondBuilding: manager.getBuildingTextureBy(PlayerType.Second),
      fighters: mapEntries(manager.fighters),
      buildings: mapEntries(manager.buildings),
    }
  })

  compareScenario("fillSkins above threshold uses deterministic random choices for opponents", (deps) => {
    patchRandomFrom((items) => items[items.length - 1])
    const manager = makeManager(deps, {
      absoluteLevelNum: 6,
      selected_fighter_id: 999,
      selected_building_id: 999,
    })
    manager.fillSkins()
    return {
      firstFighter: manager.getFighterTextureBy(PlayerType.First),
      firstBuilding: manager.getBuildingTextureBy(PlayerType.First),
      secondFighter: manager.getFighterTextureBy(PlayerType.Second),
      secondBuilding: manager.getBuildingTextureBy(PlayerType.Second),
      lastOwnerFighter: manager.getFighterTextureBy(21),
      lastOwnerBuilding: manager.getBuildingTextureBy(21),
      fightersSize: manager.fighters.size,
      buildingsSize: manager.buildings.size,
    }
  })

  compareScenario("clearSkins and updateSkins reset maps", (deps) => {
    const manager = makeManager(deps, {
      absoluteLevelNum: 4,
      selected_fighter_id: 2,
      selected_building_id: 3,
    })
    manager.fighters.set("old", "fighter")
    manager.buildings.set("old", "building")
    manager.updateSkins()
    const afterUpdate = {
      fighters: mapEntries(manager.fighters),
      buildings: mapEntries(manager.buildings),
    }
    manager.clearSkins()
    return {
      afterUpdate,
      afterClear: {
        fighters: mapEntries(manager.fighters),
        buildings: mapEntries(manager.buildings),
      },
    }
  })

  compareScenario("gift chooses from unlocked unowned skins", (deps) => {
    patchRandomFrom((items) => items[0])
    const manager = makeManager(deps, {
      absoluteLevelNum: 20,
      userFighters: [1, 2, 3],
      userBuildings: [1, 2, 3],
    })
    const gift = manager.getGift()
    return pickGift(gift)
  })

  compareScenario("selected color set and owner colors", (deps) => {
    const blue = makeManager(deps, {
      selected_color_set_id: UserSelectableColorsSet.BLUE,
    })
    const red = makeManager(deps, {
      selected_color_set_id: UserSelectableColorsSet.RED,
    })
    const missing = makeManager(deps, {
      selected_color_set_id: "missing",
    })

    return {
      blueSelected: blue.selectedColorSet,
      blueFirst: blue.getColorBy(PlayerType.First),
      blueSecond: blue.getColorBy(PlayerType.Second),
      redFirst: red.getColorBy(PlayerType.First),
      redSecond: red.getColorBy(PlayerType.Second),
      missingFirst: missing.getColorBy(PlayerType.First),
      third: blue.getColorBy(PlayerType.Third),
    }
  })

  compareScenario("available inventory marks selected and stored skins", (deps) => {
    const manager = makeManager(deps, {
      absoluteLevelNum: 8,
      selected_fighter_id: 19,
      selected_building_id: 22,
      userFighters: [1, 19, 25],
      userBuildings: [1, 22, 28],
    })

    return {
      fighters: summarizeInventory(manager.availableFighters),
      buildings: summarizeInventory(manager.availableBuildings),
    }
  })

  console.log(
    JSON.stringify(
      {
        module: "SkinManager",
        prototype: publicPrototypeMembers(restoredDeps.SkinManager),
        scenarios: 7,
        status: "ok",
      },
      null,
      2,
    ),
  )
} finally {
  Random.from = originalRandomFrom
  restoredRuntime.Random.from = originalRestoredRandomFrom
}

function compareScenario(name, run) {
  restoreRandomFrom()
  const originalResult = normalize(run(originalDeps))
  restoreRandomFrom()
  const restoredResult = normalize(run(restoredDeps))
  restoreRandomFrom()
  assert.deepEqual(restoredResult, originalResult, name)
}

function patchRandomFrom(fn) {
  Random.from = fn
  restoredRuntime.Random.from = fn
}

function restoreRandomFrom() {
  Random.from = originalRandomFrom
  restoredRuntime.Random.from = originalRestoredRandomFrom
}

function makeManager(deps, cookieOverrides = {}) {
  const manager = new deps.SkinManager()
  manager.cookies = makeCookies(cookieOverrides)
  return manager
}

function makeCookies(overrides) {
  const {
    absoluteLevelNum = 1,
    selected_fighter_id = 1,
    selected_building_id = 1,
    selected_color_set_id = UserSelectableColorsSet.BLUE,
    userFighters = [1],
    userBuildings = [1],
  } = overrides

  return {
    absoluteLevelNum,
    selected_fighter_id,
    selected_building_id,
    selected_color_set_id,
    getUserFighterSet() {
      return userFighters.slice()
    },
    getUserBuildingSet() {
      return userBuildings.slice()
    },
  }
}

function mapEntries(map) {
  return Array.from(map.entries()).sort(([left], [right]) => Number(left) - Number(right))
}

function pickGift(gift) {
  return gift
    ? {
        id: gift.id,
        type: gift.type,
        isFighter: gift.type === SkinType.FIGHTER,
        textureUrl: gift.textureUrl,
      }
    : null
}

function summarizeInventory(items) {
  return items.map((item) => ({
    id: item.id,
    selected: item.selected,
    stored: item.stored,
  }))
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
