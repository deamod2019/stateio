"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/45878_CancelButton.js",
  "../src-restored/ui/CancelButton.js",
  "../src-cjs/62671_ConfirmButton.js",
  "../src-restored/ui/ConfirmButton.js",
]

compareCancelScenario("cancel button passes props and icon", {
  disabled: true,
  onClick() {},
})
compareConfirmScenario("confirm button plays sound before callback", {
  withCallback: true,
})
compareConfirmScenario("confirm button tolerates missing callback", {
  withCallback: false,
})

console.log(
  JSON.stringify(
    {
      module: "CancelButton/ConfirmButton",
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareCancelScenario(name, props) {
  const originalResult = exerciseCancel("../src-cjs/45878_CancelButton.js", props)
  const restoredResult = exerciseCancel("../src-restored/ui/CancelButton.js", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function compareConfirmScenario(name, options) {
  const originalResult = exerciseConfirm("../src-cjs/62671_ConfirmButton.js", options)
  const restoredResult = exerciseConfirm("../src-restored/ui/ConfirmButton.js", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseCancel(request, props) {
  const mocks = makeMocks([])

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { CancelButton } = require(request)
    return normalizeVNode(CancelButton(props))
  })
}

function exerciseConfirm(request, options) {
  const records = []
  const mocks = makeMocks(records)

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { ConfirmButton } = require(request)
    const vnode = ConfirmButton({
      onClick: options.withCallback
        ? () => {
            records.push("callback")
          }
        : undefined,
    })
    vnode.props.onClick()
    return {
      vnode: normalizeVNode(vnode),
      records,
    }
  })
}

function makeMocks(records) {
  function Graphics(props) {
    return { type: "Graphics", key: null, props }
  }

  const cancel_icon = { id: "cancel_icon" }
  const confirm_icon = { id: "confirm_icon" }

  return {
    "../src-cjs/83430_InversifyContext.js": { Graphics },
    "../src-restored/ui/UIContext.js": { Graphics },
    "../src-cjs/36622_SVG.js": { cancel_icon, confirm_icon },
    "../src-restored/ui/SVGAssets.js": { cancel_icon, confirm_icon },
    "../src-cjs/37725__mod.js": {
      playUIClickSound() {
        records.push("sound")
      },
    },
    "../src-restored/core/UIHelpers.js": {
      playUIClickSound() {
        records.push("sound")
      },
    },
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
