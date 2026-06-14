"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const BONUS_TARGETS = [
  "../src-cjs/36710_MultiplyBonus.js",
  "../src-restored/ui/MultiplyBonus.js",
]

const ALL_TARGETS = [
  ...BONUS_TARGETS,
  "../src-cjs/39811_MultiplyArrow.js",
  "../src-restored/ui/MultiplyArrow.js",
]

compareScenario("passes running arrow props through gauge", {
  paused: false,
  marker: "running",
})
compareScenario("passes paused arrow props through gauge", {
  paused: true,
  marker: "paused",
})
verifyRestoredEntryUsesRestoredArrowOnly()

console.log(
  JSON.stringify(
    {
      module: "MultiplyBonus",
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, options) {
  const originalResult = exercise("../src-cjs/36710_MultiplyBonus.js", options)
  const restoredResult = exercise("../src-restored/ui/MultiplyBonus.js", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exercise(request, options) {
  const records = []

  function MultiplyArrow(props) {
    records.push(["MultiplyArrow", props.paused, typeof props.onPause])
    return {
      type: "MultiplyArrow",
      key: null,
      props: {
        paused: props.paused,
        onPauseType: typeof props.onPause,
        marker: options.marker,
      },
    }
  }

  const mocks = {
    "../src-cjs/39811_MultiplyArrow.js": { MultiplyArrow },
    "../src-restored/ui/MultiplyArrow.js": { MultiplyArrow },
  }

  return withMockedModules(mocks, () => {
    deleteBonusModules()
    const { MultiplyBonus } = require(request)
    const onPause = () => records.push(["onPause"])
    const vnode = MultiplyBonus({
      paused: options.paused,
      onPause,
    })
    return normalize({ vnode: normalizeVNode(vnode), records })
  })
}

function verifyRestoredEntryUsesRestoredArrowOnly() {
  deleteAllTargets()
  const { MultiplyBonus } = require("../src-restored/ui/MultiplyBonus.js")
  const legacyBonusPath = require.resolve("../src-cjs/36710_MultiplyBonus.js")
  const legacyArrowPath = require.resolve("../src-cjs/39811_MultiplyArrow.js")
  const restoredArrowPath = require.resolve("../src-restored/ui/MultiplyArrow.js")

  assert.equal(typeof MultiplyBonus, "function")
  assert.equal(require.cache[legacyBonusPath], undefined)
  assert.equal(require.cache[legacyArrowPath], undefined)
  assert.notEqual(require.cache[restoredArrowPath], undefined)
  deleteAllTargets()
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
    deleteAllTargets()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }
}

function deleteBonusModules() {
  for (const target of BONUS_TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function deleteAllTargets() {
  for (const target of ALL_TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) {
    return vnode.map(normalizeVNode)
  }

  if (vnode && typeof vnode === "object") {
    const normalized = {
      type: typeof vnode.type === "function" ? vnode.type.name || "function" : vnode.type,
      key: vnode.key ?? null,
      props: normalizeVNodeProps(vnode.props || {}),
    }
    return normalized
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

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (item === Infinity) return "Infinity"
      return item
    }),
  )
}
