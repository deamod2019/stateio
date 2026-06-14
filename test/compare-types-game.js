"use strict"

const assert = require("node:assert/strict")

const restored = require("../src-restored/core/TypesGame.js")
const original = require("../src-cjs/95781_TypesGame.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "TypesGame export order differs")
assert.equal(restored.TypesGame, original.TypesGame, "TypesGame token object identity must be preserved")
assert.deepEqual(snapshot(restored.TypesGame), snapshot(original.TypesGame), "TypesGame token shape differs")
assert.deepEqual(
  Object.keys(restored.TypesGame.actions),
  [
    "startGame",
    "burst",
    "createMap",
    "createMapPart",
    "submitContextScore",
    "endStage",
    "giftPopup",
    "levelCompletePopup",
    "loadLevel",
    "battleResultsPopup",
    "winPopup",
    "tournamentCreate",
    "tournamentPostScore",
    "tournamentReShare",
    "suggestAuthorizeAction",
    "syncYandexLeaderboardsAction",
    "levelRestartAfterYandexLoginAction",
    "bannerControllerGameDistribution",
  ],
  "TypesGame actions token order differs",
)
assert.deepEqual(
  Object.keys(restored.TypesGame.views),
  ["fieldClass", "fieldInstance", "fighter", "arrows", "arrow", "state", "stateShape", "population"],
  "TypesGame views token order differs",
)

console.log(
  JSON.stringify(
    {
      module: "TypesGame",
      topLevelKeys: Object.keys(restored.TypesGame).length,
      status: "ok",
    },
    null,
    2,
  ),
)

function snapshot(value) {
  if (typeof value === "symbol") return "symbol"
  if (!value || typeof value !== "object") return value

  const result = {}
  for (const [key, item] of Object.entries(value)) result[key] = snapshot(item)
  return result
}
