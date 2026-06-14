"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/66154_SelectableFighterDataSet.js")
const restored = require("../src-restored/core/SelectableSkins.js")

const exportKeys = [
  "GameColors",
  "SkinType",
  "UserSelectableColorsSet",
  "SelectableColorCss",
  "SelectableColorsDataSet",
  "SelectableBuildingDataSet",
  "SelectableFighterDataSet",
]

for (const key of exportKeys) {
  assert.deepEqual(restored[key], original[key], `${key} differs from original`)
}

assert.equal(restored.SelectableBuildingDataSet.length, 33)
assert.equal(restored.SelectableFighterDataSet.length, 30)

console.log(
  JSON.stringify(
    {
      module: "SelectableSkins",
      exports: exportKeys,
      buildings: restored.SelectableBuildingDataSet.length,
      fighters: restored.SelectableFighterDataSet.length,
      status: "ok",
    },
    null,
    2,
  ),
)
