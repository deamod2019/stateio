"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/49934_CrossPromoComponent.js",
  "../src-restored/ui/CrossPromoComponent.js",
]

compareScenario("normal game origin", {
  runtime: {
    IS_ODR_BUILD: false,
    ODR_BUILD_ORIGIN: "https://odr.example/",
    GAME_SCRIPT_ORIGIN: "https://game.example/assets/",
  },
  props: {
    title: "Next Game",
    subtitle: "Play now",
    icon: "next.png",
    className: "extra",
    invisible: false,
  },
})

compareScenario("odr origin and invisible class", {
  runtime: {
    IS_ODR_BUILD: true,
    ODR_BUILD_ORIGIN: "https://odr.example/",
    GAME_SCRIPT_ORIGIN: "https://game.example/assets/",
  },
  props: {
    title: "ODR Game",
    subtitle: "Try this",
    icon: "odr.png",
    className: undefined,
    invisible: true,
  },
})

console.log(
  JSON.stringify(
    {
      module: "CrossPromoComponent",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, options) {
  const originalResult = exerciseComponent("original", options)
  const restoredResult = exerciseComponent("restored", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseComponent(kind, options) {
  const records = []
  const runtimeRequest =
    kind === "original"
      ? "../src-cjs/44656__mod.js"
      : "../src-restored/core/RuntimeCore.js"
  const targetRequest =
    kind === "original"
      ? "../src-cjs/49934_CrossPromoComponent.js"
      : "../src-restored/ui/CrossPromoComponent.js"
  const mocks = {
    [runtimeRequest]: options.runtime,
  }

  return withMockedModules(mocks, () => {
    const { CrossPromoComponent } = require(targetRequest)
    const vnode = CrossPromoComponent({
      ...options.props,
      onClick() {
        records.push(["onClick"])
        return "clicked"
      },
    })
    const clickResult = vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
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
      if (typeof item === "function") return "[function]"
      return item
    }),
  )
}
