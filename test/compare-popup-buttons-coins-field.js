"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/3207__mod.js",
  "../src-restored/ui/Tickup.js",
  "../src-cjs/46766_CoinsField.js",
  "../src-restored/ui/CoinsField.js",
  "../src-restored/ui/UIHooks.js",
  "../src-cjs/75663_ClaimButton.js",
  "../src-restored/ui/ClaimButton.js",
  "../src-cjs/53527_ContinueButton.js",
  "../src-restored/ui/ContinueButton.js",
  "../src-cjs/86602_NoThanksButton.js",
  "../src-restored/ui/NoThanksButton.js",
]

compareTickup()
compareCoinsField("default tickup duration", { total: 12345, className: "wallet" })
compareCoinsField("disabled tickup", { total: 7, className: "flat", tickupDuration: 0 })
compareClaimButton("reward claim with default icon", { reward: 250, className: "claim-now" })
compareClaimButton("plain claim without icon", {
  reward: 0,
  text: "TAKE",
  multiplierText: "X5",
  showIcom: false,
})
compareContinueButton()
compareNoThanksButton("default delay", { className: "ghost" })
compareNoThanksButton("delayed invisible state", { delay: 75 }, true)

console.log(
  JSON.stringify(
    {
      modules: ["Tickup", "CoinsField", "ClaimButton", "ContinueButton", "NoThanksButton"],
      scenarios: 8,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareTickup() {
  const originalResult = exerciseTickup("../src-cjs/3207__mod.js")
  const restoredResult = exerciseTickup("../src-restored/ui/Tickup.js")
  assert.deepEqual(restoredResult, originalResult, "tickup differs")
}

function exerciseTickup(request) {
  const records = []
  const stateRefs = []
  const animationMock = {
    gsap: {
      fromTo(state, fromVars, toVars) {
        records.push(["gsap.fromTo", state.value, fromVars === state, toVars.duration, toVars.value, toVars.ease])
        stateRefs.push(state)
        state.value = toVars.value
        toVars.onUpdate()
      },
      killTweensOf(state) {
        records.push(["gsap.killTweensOf", stateRefs.indexOf(state), state.value])
      },
    },
  }
  const mocks = {
    "../src-cjs/25317_SteppedEase.js": animationMock,
    "../src-restored/core/animationRuntime.js": animationMock,
  }

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { tickup } = require(request)
    const cleanup = tickup(3, 11, 500, (value) => records.push(["onUpdate", value]))
    const cleanupResult = cleanup()
    return normalize({ records, cleanupResult })
  })
}

function compareCoinsField(name, props) {
  const originalResult = exerciseCoinsField("../src-cjs/46766_CoinsField.js", props)
  const restoredResult = exerciseCoinsField("../src-restored/ui/CoinsField.js", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseCoinsField(request, props) {
  const records = []
  const mocks = makeSharedMocks(records)
  Object.assign(mocks, {
    "../src-cjs/30396__mod.js": {
      useState(initialValue) {
        records.push(["useState", initialValue])
        return [
          initialValue,
          (nextValue) => {
            records.push(["setState", nextValue])
          },
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        const cleanup = effect()
        records.push(["useLayoutEffect.cleanupType", typeof cleanup])
      },
    },
    "../src-restored/ui/preactHooks.js": {
      useState(initialValue) {
        records.push(["useState", initialValue])
        return [
          initialValue,
          (nextValue) => {
            records.push(["setState", nextValue])
          },
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        const cleanup = effect()
        records.push(["useLayoutEffect.cleanupType", typeof cleanup])
      },
    },
    "../src-cjs/74083_UIConstants.js": {
      UIConstants: { coinsIndicator: { updateDelay: 125 } },
    },
    "../src-restored/core/UIConstants.js": {
      UIConstants: { coinsIndicator: { updateDelay: 125 } },
    },
    "../src-cjs/38319__mod.js": {
      getFontClassByDigits(value, min, max) {
        records.push(["getFontClassByDigits", value, min, max])
        return `digits-${value}`
      },
    },
    "../src-restored/core/NumberFormat.js": {
      getFontClassByDigits(value, min, max) {
        records.push(["getFontClassByDigits", value, min, max])
        return `digits-${value}`
      },
    },
    "../src-cjs/3207__mod.js": {
      tickup(from, to, duration, onUpdate) {
        records.push(["tickup", from, to, duration])
        onUpdate(to)
        return () => records.push(["tickup.cleanup"])
      },
    },
    "../src-restored/ui/Tickup.js": {
      tickup(from, to, duration, onUpdate) {
        records.push(["tickup", from, to, duration])
        onUpdate(to)
        return () => records.push(["tickup.cleanup"])
      },
    },
  })

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { CoinsField } = require(request)
    return normalize({ vnode: normalizeVNode(CoinsField(props)), records })
  })
}

function compareClaimButton(name, props) {
  const originalResult = exerciseButton("../src-cjs/75663_ClaimButton.js", "ClaimButton", props)
  const restoredResult = exerciseButton("../src-restored/ui/ClaimButton.js", "ClaimButton", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function compareContinueButton() {
  const originalResult = exerciseButton("../src-cjs/53527_ContinueButton.js", "ContinueButton", {})
  const restoredResult = exerciseButton("../src-restored/ui/ContinueButton.js", "ContinueButton", {})
  assert.deepEqual(restoredResult, originalResult, "continue button differs")
}

function compareNoThanksButton(name, props, invisible = false) {
  const originalResult = exerciseButton("../src-cjs/86602_NoThanksButton.js", "NoThanksButton", props, invisible)
  const restoredResult = exerciseButton("../src-restored/ui/NoThanksButton.js", "NoThanksButton", props, invisible)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseButton(request, exportName, props, invisible = false) {
  const records = []
  const mocks = makeSharedMocks(records, invisible)
  const clickProps = Object.assign({}, props, {
    onClick() {
      records.push(["props.onClick"])
      return "clicked"
    },
  })

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const component = require(request)[exportName]
    const vnode = component(clickProps)
    const clickResult = vnode.props.onClick()
    return normalize({ vnode: normalizeVNode(vnode), records, clickResult })
  })
}

function makeSharedMocks(records, invisible = false) {
  function Button() {}
  function Video() {}
  function COINS() {}

  const SVG = { Video, COINS }
  const uiContextMock = {
    Button,
    visibilityEffect(delay) {
      records.push(["visibilityEffect", delay])
      return [invisible]
    },
  }

  return {
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-restored/core/Localize.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-cjs/37725__mod.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-restored/core/UIHelpers.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-cjs/36622_SVG.js": { SVG },
    "../src-restored/ui/SVGAssets.js": { SVG },
    "../src-cjs/99621__mod.js": {},
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
    else if (key === "onClick") result.onClick = "[function]"
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
