"use strict"

const assert = require("node:assert/strict")

const { __importStar } = require("../src-restored/core/TSHelpers.js")
const restored = require("../src-restored/ui/UIControlIcons.js")

const iconModules = {
  adsIcon: "14565",
  friendsIcon: "72630",
  globeIcon: "49473",
  playIcon: "66823",
  replayIcon: "10660",
  leaderboardIcon: "83372",
  xIcon: "29671",
  shareIcon: "24998",
  trophyIcon: "68760",
  placeholderAvatarIcon: "27106",
  bombIcon: "65203",
  heartIcon: "5130",
  vsIcon: "97573",
  gearIcon: "83864",
}

assert.deepEqual(Object.keys(restored).sort(), Object.keys(iconModules).sort(), "icon export keys differ")

for (const [name, id] of Object.entries(iconModules)) {
  const original = __importStar(requireOriginalSvg(id))
  assert.deepEqual(restored[name], original, `${name} SVG module differs`)
}

console.log(
  JSON.stringify(
    {
      module: "UIControlIcons",
      icons: Object.keys(iconModules).length,
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
