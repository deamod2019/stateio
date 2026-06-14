"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/76883_UIRoot.js",
  "../src-restored/ui/UIRoot.js",
  "../src-restored/ui/SocialBanners.js",
]

const originalResult = exerciseRoot(loadOriginal)
const restoredResult = exerciseRoot(loadRestored)

assert.deepEqual(restoredResult, originalResult, "UIRoot vnode tree differs")

console.log(
  JSON.stringify(
    {
      module: "UIRoot",
      status: "ok",
    },
    null,
    2,
  ),
)

function exerciseRoot(loadModule) {
  const records = []
  const di = { id: "di" }
  const mocks = createMocks({ records, di })

  return withMockedModules(mocks, () => {
    const { UIRoot } = loadModule()
    const vnode = UIRoot()
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/76883_UIRoot.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/ui/UIRoot.js")
}

function createMocks({ records, di }) {
  function Provider() {}
  function AlertsOverlay() {}
  function SocialOverlay() {}
  function PauseOverlay() {}
  function Screens() {}
  function Popups() {}
  function SocialBanners() {}

  return {
    "../src-cjs/44656__mod.js": { di },
    "../src-restored/core/RuntimeCore.js": { di },
    "../src-cjs/83430_InversifyContext.js": {
      InversifyContext: { Provider },
      AlertsOverlay,
      SocialOverlay,
      PauseOverlay,
      Screens,
    },
    "../src-restored/ui/AlertsOverlay.js": { AlertsOverlay },
    "../src-restored/ui/SocialOverlay.js": { SocialOverlay },
    "../src-restored/ui/PauseOverlay.js": { PauseOverlay },
    "../src-cjs/94776_Popups.js": { Popups },
    "../src-cjs/72688_SocialBanners.js": { SocialBanners },
    "../src-restored/ui/SocialBanners.js": { SocialBanners },
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
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (!vnode || typeof vnode !== "object") return vnode

  return {
    type: vnodeTypeName(vnode.type),
    key: vnode.key === undefined ? null : vnode.key,
    props: normalizeProps(vnode.props || {}),
  }
}

function normalizeProps(props) {
  const result = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") result.children = normalizeVNode(value)
    else if (typeof value === "function") result[key] = "[function]"
    else result[key] = normalizeValue(value)
  }
  return result
}

function normalizeValue(value) {
  if (Array.isArray(value)) return value.map(normalizeValue)
  if (value && typeof value === "object") {
    if (value.id) return { id: value.id }
    const result = {}
    for (const [key, item] of Object.entries(value)) result[key] = normalizeValue(item)
    return result
  }
  if (value === undefined) return "__undefined__"
  return value
}

function vnodeTypeName(type) {
  if (typeof type === "function") return type.name || "[anonymous]"
  return type
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "function") return "[function]"
      return item
    }),
  )
}
