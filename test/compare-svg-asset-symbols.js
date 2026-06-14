"use strict"

const assert = require("node:assert/strict")

const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const restored = require("../src-restored/ui/SVGAssetSymbols.js")

const assetModules = {
  popupLose: "82110",
  popupWinCup: "3791",
  win_rays: "61709",
  winStars: "83451",
  backButton: "73956",
  boosterOffline: "7997",
  boosterProduceSpeedIcon: "1255",
  boosterProduceSpeed: "95579",
  boosterStartUnitsIcon: "55803",
  boosterStartUnits: "20080",
  cancel_icon: "10797",
  confirm_icon: "73230",
  coins: "22283",
  no_ads_icon: "47058",
  offlineEarnings: "36211",
  shop: "53152",
  video: "18230",
  leaderboardPlay: "33001",
  leaderboardCup: "35536",
  victoryFraming: "55641",
}

assert.deepEqual(Object.keys(restored).sort(), Object.keys(assetModules).sort(), "asset export keys differ")

for (const [name, id] of Object.entries(assetModules)) {
  const restoredSymbol = restored[name].default
  const originalSymbol = requireOriginalSvg(id).default

  assert.equal(restoredSymbol.id, originalSymbol.id, `${name} id differs`)
  assert.equal(restoredSymbol.use, originalSymbol.use, `${name} use differs`)
  assert.equal(restoredSymbol.viewBox, originalSymbol.viewBox, `${name} viewBox differs`)
  assert.equal(restoredSymbol.content, originalSymbol.content, `${name} content differs`)
  assert.equal(restoredSymbol.stringify(), originalSymbol.stringify(), `${name} stringify differs`)
  assert.equal(restoredSymbol.toString(), originalSymbol.toString(), `${name} toString differs`)
}

console.log(
  JSON.stringify(
    {
      module: "SVGAssetSymbols",
      symbols: Object.keys(assetModules).length,
      status: "ok",
    },
    null,
    2,
  ),
)

function requireOriginalSvg(id) {
  const file = require("node:fs")
    .readdirSync("src-cjs")
    .find((name) => name.startsWith(`${id}_`))
  assert.ok(file, `missing original SVG module ${id}`)
  return require(`../src-cjs/${file}`)
}
