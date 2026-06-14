"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const originalParser = require("../src-cjs/13137__mod.js")
const restoredParser = require("../src-restored/core/LevelParser.js")

assert.deepEqual(Object.keys(restoredParser), Object.keys(originalParser), "LevelParser export order differs")

compareScenario("staged map", makeStagedDocument())
compareScenario("single-stage fallback map", makeFallbackDocument())

console.log(
  JSON.stringify(
    {
      module: "LevelParser",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, document) {
  const originalResult = normalize(originalParser.parseLevelSVG(document))
  const restoredResult = normalize(restoredParser.parseLevelSVG(document))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeStagedDocument() {
  const root = node("g", "continent-a", {}, [
    stateNode("loose-state", "#111111", ["M0 0L1 1"], { x: "10", y: "11", r: "12" }),
    node("g", "Stage02", {}, [
      stateNode("state-b", "#222222", ["M2 2L3 3", "M4 4L5 5"], {
        x: "20",
        y: "21",
        r: "22",
      }),
    ]),
    node("g", "Stage01", {}, [
      stateNode("state-a", "#333333", ["M6 6L7 7"], { x: "30", y: "31", r: "32" }),
    ]),
  ])

  return documentFor(root)
}

function makeFallbackDocument() {
  const root = node("g", "continent-b", {}, [
    stateNode("solo-a", null, ["M8 8L9 9"], { x: "40", y: "41", r: "42" }),
    stateNode("solo-b", "#444444", [], { x: "50", y: "51", r: "52" }),
  ])

  return documentFor(root)
}

function stateNode(id, fill, shapes, center) {
  const pathNodes = shapes.length
    ? shapes.map((shape, index) =>
        node("path", `${id}-path-${index}`, index === 0 ? { d: shape, fill } : { d: shape }),
      )
    : [node("path", `${id}-path-empty`, fill ? { fill } : {})]

  return node("g", id, {}, [
    node("g", `Centre-${id}`, {}, [node("circle", `${id}-circle`, { cx: center.x, cy: center.y, r: center.r })]),
    node("g", `${id}-shape-layer`, {}, pathNodes),
  ])
}

function documentFor(rootGroup) {
  return node("document", "document", {}, [node("svg", "svg-root", {}, [rootGroup])])
}

function node(tagName, id, attrs = {}, children = []) {
  const element = {
    tagName,
    id,
    children,
    childElementCount: children.length,
    parentNode: null,
    getAttribute(name) {
      return attrs[name] === undefined ? null : attrs[name]
    },
    getElementsByTagName(name) {
      const matches = []
      collectByTag(this, name, matches)
      return matches
    },
  }

  for (const child of children) child.parentNode = element
  return element
}

function collectByTag(element, tagName, matches) {
  for (const child of element.children) {
    if (child.tagName === tagName) matches.push(child)
    collectByTag(child, tagName, matches)
  }
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}
