"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/49071_PopupWinIndicator.js",
  "../src-restored/ui/PopupWinIndicator.js",
  "../src-cjs/94571_WinRays.js",
  "../src-restored/ui/WinRays.js",
  "../src-cjs/57103_WinStars.js",
  "../src-restored/ui/WinStars.js",
]

compareComponent("PopupWinIndicator default total", "PopupWinIndicator", {
  original: "../src-cjs/49071_PopupWinIndicator.js",
  restored: "../src-restored/ui/PopupWinIndicator.js",
  props: { className: "win-total" },
})
compareComponent("PopupWinIndicator zero total", "PopupWinIndicator", {
  original: "../src-cjs/49071_PopupWinIndicator.js",
  restored: "../src-restored/ui/PopupWinIndicator.js",
  props: { className: "zero-total", total: 0 },
})
compareComponent("WinRays", "WinRays", {
  original: "../src-cjs/94571_WinRays.js",
  restored: "../src-restored/ui/WinRays.js",
  props: {},
})
compareComponent("WinStars", "WinStars", {
  original: "../src-cjs/57103_WinStars.js",
  restored: "../src-restored/ui/WinStars.js",
  props: {},
})

console.log(
  JSON.stringify(
    {
      modules: ["PopupWinIndicator", "WinRays", "WinStars"],
      scenarios: 4,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareComponent(name, exportName, options) {
  const originalResult = exercise(options.original, exportName, options.props)
  const restoredResult = exercise(options.restored, exportName, options.props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exercise(request, exportName, props) {
  const records = []
  function CoinsField() {}
  function COINS() {}
  function WinRaysIcon() {}
  function WinStarsIcon() {}
  const SVG = { COINS, WinRays: WinRaysIcon, WinStars: WinStarsIcon }

  return withMockedModules(
    {
      "../src-cjs/46766_CoinsField.js": { CoinsField },
      "../src-restored/ui/CoinsField.js": { CoinsField },
      "../src-cjs/36622_SVG.js": { SVG },
      "../src-restored/ui/SVGAssets.js": { SVG },
      "../src-cjs/74083_UIConstants.js": {
        UIConstants: { popup: { updateCoinsTime: 321 } },
      },
      "../src-restored/core/UIConstants.js": {
        UIConstants: { popup: { updateCoinsTime: 321 } },
      },
      "../src-cjs/13283__mod.js": {},
    },
    () => {
      deleteTargetModules()
      const component = require(request)[exportName]
      return normalize({ vnode: normalizeVNode(component(props)), records })
    },
  )
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
    if (key === "children") result.children = normalizeVNode(props[key])
    else result[key] = normalizeValue(props[key])
  }
  return result
}

function normalizeValue(value) {
  if (typeof value === "function") return value.name || "[function]"
  if (typeof value === "symbol") return value.toString()
  if (value === undefined) return "__undefined__"
  return value
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}
