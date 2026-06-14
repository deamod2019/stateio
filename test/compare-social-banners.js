"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesUI } = require("../src-restored/core/CoreTypes.js")

const TARGETS = [
  "../src-cjs/72688_SocialBanners.js",
  "../src-restored/ui/SocialBanners.js",
]

compareScenario("renders bound custom banner", { bound: true })
compareScenario("returns empty when unbound", { bound: false })

console.log(
  JSON.stringify(
    {
      module: "SocialBanners",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, options) {
  const originalResult = exerciseSocialBanners("original", options)
  const restoredResult = exerciseSocialBanners("restored", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseSocialBanners(kind, options) {
  const records = []
  function CustomBanner() {}

  const lazyGet = (token) => {
    records.push(["lazyGet", tokenLabel(token)])
    return options.bound ? CustomBanner : undefined
  }
  const runtimeRequest =
    kind === "original"
      ? "../src-cjs/44656__mod.js"
      : "../src-restored/core/RuntimeCore.js"
  const targetRequest =
    kind === "original"
      ? "../src-cjs/72688_SocialBanners.js"
      : "../src-restored/ui/SocialBanners.js"

  return withMockedModules({ [runtimeRequest]: { lazyGet } }, () => {
    const { SocialBanners } = require(targetRequest)
    const vnode = SocialBanners()
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
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
    deleteTargetModules()
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
    JSON.stringify(value, (_key, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "function") return item.name || "[function]"
      return item
    }),
  )
}

function tokenLabel(token) {
  if (token === TypesUI.customComponent.SOCIAL_BANNERS) {
    return "TypesUI.customComponent.SOCIAL_BANNERS"
  }
  return String(token)
}
