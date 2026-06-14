"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Avatar: OriginalAvatar } = require("../src-cjs/41595_Avatar.js")
const { AvatarPlayInGroup: OriginalAvatarPlayInGroup } = require("../src-cjs/71290_AvatarPlayInGroup.js")
const { Avatar: RestoredAvatar } = require("../src-restored/ui/Avatar.js")
const { AvatarPlayInGroup: RestoredAvatarPlayInGroup } = require("../src-restored/ui/AvatarPlayInGroup.js")

compareVNode("Avatar renders placeholder when image is missing", () => ({
  original: OriginalAvatar({ className: "solo" }),
  restored: RestoredAvatar({ className: "solo" }),
}))

compareVNode("Avatar renders image, score zero, and custom alt", () => ({
  original: OriginalAvatar({
    imgPath: "/photo.png",
    imgAlt: "Player",
    score: 0,
    scoreIconType: "cup",
  }),
  restored: RestoredAvatar({
    imgPath: "/photo.png",
    imgAlt: "Player",
    score: 0,
    scoreIconType: "cup",
  }),
}))

function onPlayWith() {}
compareVNode("Avatar renders play-with button", () => ({
  original: OriginalAvatar({
    playWithBtn: {
      className: "hot",
      content: "Play",
      icon: "play",
      visible: true,
      onClick: onPlayWith,
    },
    score: 8,
  }),
  restored: RestoredAvatar({
    playWithBtn: {
      className: "hot",
      content: "Play",
      icon: "play",
      visible: true,
      onClick: onPlayWith,
    },
    score: 8,
  }),
}))

const child = { type: "child", props: { id: "avatar-child" } }
compareVNode("AvatarPlayInGroup renders children and score", () => ({
  original: OriginalAvatarPlayInGroup({
    className: "pair",
    score: 17,
    children: child,
  }),
  restored: RestoredAvatarPlayInGroup({
    className: "pair",
    score: 17,
    children: child,
  }),
}))

compareVNode("AvatarPlayInGroup hides score zero like original", () => ({
  original: OriginalAvatarPlayInGroup({
    score: 0,
    children: child,
  }),
  restored: RestoredAvatarPlayInGroup({
    score: 0,
    children: child,
  }),
}))

compareVNode("AvatarPlayInGroup.Avatar wraps Avatar in list item", () => ({
  original: OriginalAvatarPlayInGroup.Avatar({
    className: "first",
    imgPath: "/friend.png",
    score: 3,
  }),
  restored: RestoredAvatarPlayInGroup.Avatar({
    className: "first",
    imgPath: "/friend.png",
    score: 3,
  }),
}))

console.log(
  JSON.stringify(
    {
      modules: ["Avatar", "AvatarPlayInGroup"],
      scenarios: 6,
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
