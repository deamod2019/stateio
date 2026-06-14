"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/84965_FilledRects.js",
  "../src-restored/ui/FilledRects.js",
  "../src-cjs/52472_SvgCapturingProgress.js",
  "../src-restored/ui/SvgCapturingProgress.js",
]

compareFilledRectsScenario("three filled rects", {
  stages: 3,
  fill: "#123456",
  width: 120,
  height: 40,
  pad: 4,
  gap: 2,
})
compareSvgScenario("capture progress half filled", {
  width: 482,
  height: 76,
  captured: 0.5,
  stages: 4,
})
compareSvgScenario("capture progress custom width", {
  width: 200,
  height: 50,
  captured: 0.25,
  stages: 5,
})

console.log(
  JSON.stringify(
    {
      module: "FilledRects/SvgCapturingProgress",
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareFilledRectsScenario(name, props) {
  const originalResult = exerciseFilledRects("../src-cjs/84965_FilledRects.js", props)
  const restoredResult = exerciseFilledRects("../src-restored/ui/FilledRects.js", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function compareSvgScenario(name, props) {
  const originalResult = exerciseSvg("../src-cjs/52472_SvgCapturingProgress.js", props)
  const restoredResult = exerciseSvg("../src-restored/ui/SvgCapturingProgress.js", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseFilledRects(request, props) {
  deleteTargetModules()
  const { FilledRects } = require(request)
  return normalizeVNode(FilledRects(props))
}

function exerciseSvg(request, props) {
  deleteTargetModules()
  const { SvgCapturingProgress } = require(request)
  return normalizeVNode(renderFunctionVNodes(SvgCapturingProgress(props)))
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function renderFunctionVNodes(vnode) {
  if (Array.isArray(vnode)) return vnode.map(renderFunctionVNodes)
  if (!vnode || typeof vnode !== "object") return vnode

  if (typeof vnode.type === "function") {
    return renderFunctionVNodes(vnode.type(vnode.props || {}))
  }

  const props = Object.assign({}, vnode.props || {})
  if ("children" in props) props.children = renderFunctionVNodes(props.children)
  return Object.assign({}, vnode, { props })
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) {
    return vnode.map(normalizeVNode)
  }

  if (vnode && typeof vnode === "object") {
    return {
      type: typeof vnode.type === "function" ? vnode.type.name || "function" : vnode.type,
      key: vnode.key ?? null,
      props: normalizeVNodeProps(vnode.props || {}),
    }
  }

  return vnode
}

function normalizeVNodeProps(props) {
  const normalized = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") normalized.children = normalizeVNode(value)
    else if (typeof value === "function") normalized[key] = "function"
    else normalized[key] = normalizeVNode(value)
  }
  return normalized
}
