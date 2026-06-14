"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/74083_UIConstants.js")
const restored = require("../src-restored/core/UIConstants.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "UIConstants export order differs")
assert.deepEqual(restored.ShopType, original.ShopType)
assert.deepEqual(restored.UIConstants, original.UIConstants)

console.log(
  JSON.stringify(
    {
      module: "UIConstants",
      boosterConfigs: restored.UIConstants.boosters.length,
      shopTabTypes: restored.UIConstants.shop.tabTypes.length,
      status: "ok",
    },
    null,
    2,
  ),
)
