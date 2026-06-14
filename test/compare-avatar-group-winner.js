"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { AvatarGroup: OriginalAvatarGroup } = require("../src-cjs/47702_AvatarGroup.js")
const { Winner: OriginalWinner } = require("../src-cjs/56612_Winner.js")
const { AvatarGroup: RestoredAvatarGroup } = require("../src-restored/ui/AvatarGroup.js")
const { Winner: RestoredWinner } = require("../src-restored/ui/Winner.js")

compareVNode("AvatarGroup renders wrapper", () => ({
  original: OriginalAvatarGroup({ className: "stack", "data-id": "avatars", children: "child" }),
  restored: RestoredAvatarGroup({ className: "stack", "data-id": "avatars", children: "child" }),
}))

compareVNode("AvatarGroup.Item renders item wrapper", () => ({
  original: OriginalAvatarGroup.Item({ className: "me", children: "item" }),
  restored: RestoredAvatarGroup.Item({ className: "me", children: "item" }),
}))

compareVNode("AvatarGroup.Separator renders separator icon", () => ({
  original: OriginalAvatarGroup.Separator({ className: "gap", type: "vs" }),
  restored: RestoredAvatarGroup.Separator({ className: "gap", type: "vs" }),
}))

compareVNode("AvatarGroup.Avatar forwards props", () => ({
  original: OriginalAvatarGroup.Avatar({ imgPath: "/avatar.png", score: 5 }),
  restored: RestoredAvatarGroup.Avatar({ imgPath: "/avatar.png", score: 5 }),
}))

compareVNode("Winner renders avatar and victory frame", () => ({
  original: OriginalWinner({
    className: "final",
    user: { photo: "/winner.png", scoreSession: 77 },
  }),
  restored: RestoredWinner({
    className: "final",
    user: { photo: "/winner.png", scoreSession: 77 },
  }),
}))

console.log(
  JSON.stringify(
    {
      modules: ["AvatarGroup", "Winner"],
      scenarios: 5,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareVNode(name, create) {
  const { original, restored } = create()
  assert.deepEqual(normalizeVNode(restored), normalizeVNode(original), name)
}

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
