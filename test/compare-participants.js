"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/9931_Participants.js",
  "../src-restored/ui/Participants.js",
]

compareScenario("renders empty participant strip", [])
compareScenario("renders photo and placeholder participants", [
  {
    color: "#112233",
    data: { name: "Alice", photo: "alice.png" },
  },
  {
    color: "#445566",
    data: { name: "Bob", photo: "" },
  },
])

console.log(
  JSON.stringify(
    {
      module: "Participants",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, users) {
  const originalResult = exercise("../src-cjs/9931_Participants.js", users)
  const restoredResult = exercise("../src-restored/ui/Participants.js", users)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exercise(request, users) {
  function Icon(props) {
    return {
      type: "Icon",
      key: null,
      props,
    }
  }

  return withMockedModules(
    {
      "../src-cjs/83430_InversifyContext.js": { Icon },
      "../src-restored/ui/UIContext.js": { Icon },
    },
    () => {
      deleteTargetModules()
      const { Participants } = require(request)
      return normalizeVNode(Participants({ users }))
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
