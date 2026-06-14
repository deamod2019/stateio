"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Score: OriginalScore } = require("../src-cjs/55960_Score.js")
const { ScoreGroup: OriginalScoreGroup } = require("../src-cjs/17828_ScoreGroup.js")
const { Score: RestoredScore } = require("../src-restored/ui/Score.js")
const { ScoreGroup: RestoredScoreGroup } = require("../src-restored/ui/ScoreGroup.js")
const { Icon } = require("../src-cjs/37909_Icon.js")
const { Icon: RestoredIcon } = require("../src-restored/ui/UIControls.js")

assert.deepEqual(
  normalizeVNode(RestoredScore({ children: "42" })),
  normalizeVNode(OriginalScore({ children: "42" })),
  "Score without icon differs",
)

assert.deepEqual(
  normalizeVNode(RestoredScore({
    className: "total-score",
    icon: "cup",
    title: "Best",
    children: 123,
  })),
  normalizeVNode(OriginalScore({
    className: "total-score",
    icon: "cup",
    title: "Best",
    children: 123,
  })),
  "Score with string icon differs",
)

const customIcon = { type: "custom-icon", props: { id: "already-rendered" } }
assert.deepEqual(
  normalizeVNode(RestoredScore({ icon: customIcon, children: "custom" })),
  normalizeVNode(OriginalScore({ icon: customIcon, children: "custom" })),
  "Score with custom icon vnode differs",
)

assert.deepEqual(
  normalizeVNode(RestoredScoreGroup({
    className: "leader",
    "data-id": "score-group",
    children: "group child",
  })),
  normalizeVNode(OriginalScoreGroup({
    className: "leader",
    "data-id": "score-group",
    children: "group child",
  })),
  "ScoreGroup container differs",
)

assert.equal(RestoredScoreGroup.Icon, RestoredIcon)
assert.equal(OriginalScoreGroup.Icon, Icon)
assert.equal(RestoredScoreGroup.Score, RestoredScore)
assert.equal(typeof OriginalScoreGroup.Score, "function")

console.log(
  JSON.stringify(
    {
      modules: ["Score", "ScoreGroup"],
      scenarios: 6,
      status: "ok",
    },
    null,
    2,
  ),
)

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (vnode && typeof vnode === "object") {
    return {
      type: normalizeValue(vnode.type),
      key: vnode.key ?? null,
      props: normalizeProps(vnode.props || {}),
    }
  }
  return normalizeValue(vnode)
}

function normalizeProps(props) {
  const result = {}
  for (const key of Object.keys(props).sort()) {
    const value = props[key]
    if (key === "children") result.children = normalizeVNode(value)
    else result[key] = normalizeValue(value)
  }
  return result
}

function normalizeValue(value) {
  if (typeof value === "function") return "[function]"
  if (typeof value === "symbol") return value.toString()
  if (value === undefined) return "__undefined__"
  return value
}
