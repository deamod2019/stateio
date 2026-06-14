"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/11748_DebugPanelGamePlay.js",
  "../src-restored/ui/DebugPanelGamePlay.js",
]

compareDebugPanelGamePlay()

console.log(
  JSON.stringify(
    {
      module: "DebugPanelGamePlay",
      scenarios: 1,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareDebugPanelGamePlay() {
  const originalResult = exercise("../src-cjs/11748_DebugPanelGamePlay.js")
  const restoredResult = exercise("../src-restored/ui/DebugPanelGamePlay.js")
  assert.deepEqual(restoredResult, originalResult)
}

function exercise(request) {
  const records = []
  const model = {
    currentContinent: {
      data: { id: "debug-continent" },
    },
    endStage(...args) {
      records.push(["endStage", args])
      return `end:${args.join(":")}`
    },
  }
  const mocks = createMocks(records, model)

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { DebugPanelGamePlay } = require(request)
    const vnode = DebugPanelGamePlay()
    const buttons = collectVNodesByType(vnode, "button")
    assert.equal(buttons.length, 3)

    const clickResults = buttons.map((button) => button.props.onClick())
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResults,
    })
  })
}

function createMocks(records, model) {
  const runtime = {
    di: {
      get(token) {
        records.push(["di.get", tokenLabel(token)])
        return model
      },
    },
  }
  const uiContext = {
    useInjection(token) {
      records.push(["useInjection", tokenLabel(token)])
      return model
    },
  }

  return {
    "../src-cjs/44656__mod.js": runtime,
    "../src-restored/core/RuntimeCore.js": runtime,
    "../src-cjs/83430_InversifyContext.js": uiContext,
    "../src-restored/ui/UIContext.js": uiContext,
  }
}

function withMockedModules(mocks, run) {
  const originals = new Map()

  for (const [request, exportsObject] of Object.entries(mocks)) {
    const resolved = require.resolve(request)
    originals.set(resolved, require.cache[resolved])
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: exportsObject,
    }
  }

  try {
    return run()
  } finally {
    deleteTargetModules()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }
}

function deleteTargetModules() {
  for (const target of TARGETS) delete require.cache[require.resolve(target)]
}

function collectVNodesByType(vnode, type) {
  if (!vnode || typeof vnode !== "object") return []
  const matches = vnode.type === type ? [vnode] : []
  const children = vnode.props?.children
  const childList = Array.isArray(children) ? children : [children]
  for (const child of childList) matches.push(...collectVNodesByType(child, type))
  return matches
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (!vnode || typeof vnode !== "object") return vnode

  return {
    type: typeof vnode.type === "function" ? "[function]" : vnode.type,
    key: vnode.key ?? null,
    props: normalizeProps(vnode.props || {}),
  }
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
  if (Array.isArray(value)) return value.map(normalizeValue)
  if (typeof value === "function") return "[function]"
  if (typeof value === "symbol") return value.toString()
  if (value === undefined) return "__undefined__"
  if (value && typeof value === "object") {
    const result = {}
    for (const key of Object.keys(value).sort()) result[key] = normalizeValue(value[key])
    return result
  }
  return value
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}
