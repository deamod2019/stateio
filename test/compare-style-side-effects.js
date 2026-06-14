"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const styleModuleIds = [
  "10471",
  "13283",
  "14936",
  "15853",
  "19963",
  "20621",
  "21391",
  "21774",
  "26604",
  "28130",
  "32115",
  "34365",
  "35836",
  "36050",
  "36163",
  "44097",
  "45230",
  "46193",
  "46262",
  "52388",
  "56635",
  "57862",
  "58319",
  "6162",
  "61750",
  "6376",
  "67566",
  "69130",
  "69181",
  "70461",
  "70535",
  "80951",
  "8803",
  "89264",
  "89991",
  "92015",
  "92716",
  "9356",
  "98919",
  "99621",
]

for (const id of styleModuleIds) {
  const original = requireOriginalStyleModule(id)
  assert.deepEqual(Object.keys(original), [], `style module ${id} should export no keys`)
}

const styleSideEffects = require("../src-restored/ui/styleSideEffects.js")
styleSideEffects.resetLoadedStyleModuleIds()
styleSideEffects("80951")
styleSideEffects.includeStyle("56635")
assert.deepEqual(styleSideEffects.getLoadedStyleModuleIds(), ["80951", "56635"])
styleSideEffects.resetLoadedStyleModuleIds()
assert.deepEqual(styleSideEffects.getLoadedStyleModuleIds(), [])

console.log(
  JSON.stringify(
    {
      module: "styleSideEffects",
      styleModules: styleModuleIds.length,
      status: "ok",
    },
    null,
    2,
  ),
)

function requireOriginalStyleModule(id) {
  const file = require("node:fs")
    .readdirSync("src-cjs")
    .find((name) => name.startsWith(`${id}_`))
  assert.ok(file, `missing style module ${id}`)
  return require(`../src-cjs/${file}`)
}
