"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesUI } = require("../src-cjs/86178__mod.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")
const { GameUIModule: OriginalGameUIModule } = require("../src-cjs/37532_GameUIModule.js")
const { GameUIModule: RestoredGameUIModule } = require("../src-restored/ui/GameUIModule.js")
const { GamePlayScreen } = require("../src-restored/ui/GamePlayScreen.js")
const { StartScreen } = require("../src-restored/ui/StartScreen.js")
const { WinStagePopup } = require("../src-restored/ui/WinStagePopup.js")
const { LosePopup } = require("../src-restored/ui/LosePopup.js")
const { BattleResultsPopup } = require("../src-restored/ui/BattleResultsPopup.js")
const { ShareLevelResultPopup } = require("../src-restored/ui/ShareLevelResultPopup.js")
const { ConfirmPopup } = require("../src-restored/ui/ConfirmPopup.js")
const { GiftPopup } = require("../src-restored/ui/GiftPopup.js")
const { OfflineEarningsPopup } = require("../src-restored/ui/OfflineEarningsPopup.js")
const { LeaderboardScreen } = require("../src-restored/ui/LeaderboardScreen.js")
const { ShopScreen } = require("../src-restored/ui/ShopScreen.js")
const { SettingsPopup } = require("../src-restored/ui/SettingsPopup.js")

const originalBindings = recordBindings(OriginalGameUIModule)
const restoredBindings = recordBindings(RestoredGameUIModule)

assert.deepEqual(
  restoredBindings.records,
  originalBindings.records,
  "restored GameUIModule binding topology differs",
)

for (const [token, originalTarget] of originalBindings.targets) {
  const restoredTarget = restoredBindings.targets.get(token)
  if (token === TypesUI.screen.GAMEPLAY) {
    assert.equal(restoredTarget, GamePlayScreen, "gameplay screen should use restored view")
  } else if (token === TypesUI.screen.HOME) {
    assert.equal(restoredTarget, StartScreen, "home screen should use restored view")
  } else if (token === TypesUI.screen.LEADERBOARD) {
    assert.equal(restoredTarget, LeaderboardScreen, "leaderboard screen should use restored view")
  } else if (token === TypesUI.screen.SHOP) {
    assert.equal(restoredTarget, ShopScreen, "shop screen should use restored view")
  } else if (token === PopupType.WIN_LEVEL || token === PopupType.WIN_STAGE) {
    assert.equal(restoredTarget, WinStagePopup, `${tokenLabel(token)} popup should use restored view`)
  } else if (token === PopupType.BATTLE_RESULTS) {
    assert.equal(restoredTarget, BattleResultsPopup, "battle-results popup should use restored view")
  } else if (token === PopupType.LEVEL_COMPLETED) {
    assert.equal(restoredTarget, ShareLevelResultPopup, "level-completed popup should use restored view")
  } else if (token === PopupType.LOSE) {
    assert.equal(restoredTarget, LosePopup, "lose popup should use restored view")
  } else if (token === PopupType.CONFIRM) {
    assert.equal(restoredTarget, ConfirmPopup, "confirm popup should use restored view")
  } else if (token === PopupType.GIFT) {
    assert.equal(restoredTarget, GiftPopup, "gift popup should use restored view")
  } else if (token === PopupType.OFFLINE_EARNINGS) {
    assert.equal(restoredTarget, OfflineEarningsPopup, "offline-earnings popup should use restored view")
  } else if (token === PopupType.SETTINGS) {
    assert.equal(restoredTarget, SettingsPopup, "settings popup should use restored view")
  } else {
    assert.equal(
      restoredTarget,
      originalTarget,
      `unexpected restored GameUIModule target for ${tokenLabel(token)}`,
    )
  }
}

assert.equal(restoredBindings.targets.get(TypesUI.screen.GAMEPLAY), GamePlayScreen)
assert.equal(restoredBindings.targets.get(TypesUI.screen.HOME), StartScreen)
assert.equal(restoredBindings.targets.get(TypesUI.screen.LEADERBOARD), LeaderboardScreen)
assert.equal(restoredBindings.targets.get(TypesUI.screen.SHOP), ShopScreen)
assert.equal(restoredBindings.targets.get(PopupType.WIN_LEVEL), WinStagePopup)
assert.equal(restoredBindings.targets.get(PopupType.WIN_STAGE), WinStagePopup)
assert.equal(restoredBindings.targets.get(PopupType.BATTLE_RESULTS), BattleResultsPopup)
assert.equal(restoredBindings.targets.get(PopupType.LEVEL_COMPLETED), ShareLevelResultPopup)
assert.equal(restoredBindings.targets.get(PopupType.LOSE), LosePopup)
assert.equal(restoredBindings.targets.get(PopupType.CONFIRM), ConfirmPopup)
assert.equal(restoredBindings.targets.get(PopupType.GIFT), GiftPopup)
assert.equal(restoredBindings.targets.get(PopupType.OFFLINE_EARNINGS), OfflineEarningsPopup)
assert.equal(restoredBindings.targets.get(PopupType.SETTINGS), SettingsPopup)

console.log(
  JSON.stringify(
    {
      module: "GameUIModule",
      bindingEvents: restoredBindings.records.length,
      restoredTargetsChecked: 13,
      status: "ok",
    },
    null,
    2,
  ),
)

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry(
    (token) => {
      records.push(["bind", topologyTokenLabel(token)])
      return makeSyntax(records, targets, token)
    },
    (token) => records.push(["unbind", topologyTokenLabel(token)]),
    (token) => {
      records.push(["isBound", topologyTokenLabel(token)])
      return false
    },
    (token) => {
      records.push(["rebind", topologyTokenLabel(token)])
      return makeSyntax(records, targets, token)
    },
  )

  return { records, targets }
}

function makeSyntax(records, targets, token) {
  return {
    toConstantValue(target) {
      records.push(["toConstantValue"])
      targets.set(token, target)
      return this
    },
  }
}

function tokenLabel(token) {
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}

function topologyTokenLabel(token) {
  if (typeof token === "function") return "FunctionToken"
  return String(token)
}
