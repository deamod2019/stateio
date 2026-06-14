"use strict"

const assert = require("node:assert/strict")

const { PlayerType: OriginalPlayerType } = require("../src-cjs/36596_PlayerType.js")
const { GameState: OriginalGameState } = require("../src-cjs/65370_GameState.js")
const { PlayerType: RestoredPlayerType } = require("../src-restored/core/PlayerType.js")
const { GameState: RestoredGameState } = require("../src-restored/core/GameState.js")

compareEnum("PlayerType", RestoredPlayerType, OriginalPlayerType)
compareEnum("GameState", RestoredGameState, OriginalGameState)

console.log(
  JSON.stringify(
    {
      modules: ["PlayerType", "GameState"],
      status: "ok",
    },
    null,
    2,
  ),
)

function compareEnum(name, restored, original) {
  assert.deepEqual(restored, original, `${name} values differ`)
  assert.deepEqual(Object.keys(restored), Object.keys(original), `${name} key order differs`)

  for (const key of Object.keys(original)) {
    assert.equal(restored[key], original[key], `${name}.${key} differs`)
  }
}
