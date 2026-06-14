"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/39811_MultiplyArrow.js",
  "../src-restored/ui/MultiplyArrow.js",
  "../src-restored/ui/UIHooks.js",
]

compareScenario("running starts looping tween", { paused: false, initialProgress: 0 })
compareScenario("paused picks 2x low edge", { paused: true, initialProgress: 0.1 })
compareScenario("paused picks 3x first band", { paused: true, initialProgress: 0.2 })
compareScenario("paused picks 4x middle band", { paused: true, initialProgress: 0.5 })
compareScenario("paused picks 3x high band", { paused: true, initialProgress: 0.7 })
compareScenario("paused picks 2x final band", { paused: true, initialProgress: 0.9 })

console.log(
  JSON.stringify(
    {
      module: "MultiplyArrow",
      scenarios: 6,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, options) {
  const originalResult = exercise("../src-cjs/39811_MultiplyArrow.js", options)
  const restoredResult = exercise("../src-restored/ui/MultiplyArrow.js", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exercise(request, options) {
  const records = []
  const tweenStates = []
  const mocks = {
    "../src-cjs/30396__mod.js": {
      useState(initializer) {
        records.push(["useState", typeof initializer])
        const initialState = Object.assign(initializer(), { progress: options.initialProgress })
        return [
          initialState,
          (updater) => {
            const next = typeof updater === "function" ? updater(initialState) : updater
            records.push(["setState", normalize(next)])
          },
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        const cleanup = effect()
        records.push(["cleanupType", typeof cleanup])
        if (typeof cleanup === "function") cleanup()
      },
    },
    "../src-restored/ui/preactHooks.js": {
      useState(initializer) {
        records.push(["useState", typeof initializer])
        const initialState = Object.assign(initializer(), { progress: options.initialProgress })
        return [
          initialState,
          (updater) => {
            const next = typeof updater === "function" ? updater(initialState) : updater
            records.push(["setState", normalize(next)])
          },
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        const cleanup = effect()
        records.push(["cleanupType", typeof cleanup])
        if (typeof cleanup === "function") cleanup()
      },
    },
    "../src-cjs/25317_SteppedEase.js": {
      gsap: {
        fromTo(state, fromVars, toVars) {
          records.push([
            "gsap.fromTo",
            state.value,
            fromVars.value,
            toVars.value,
            toVars.repeat,
            toVars.yoyo,
            toVars.ease,
          ])
          tweenStates.push(state)
          state.value = 0.42
          toVars.onUpdate()
        },
        killTweensOf(state) {
          records.push(["gsap.killTweensOf", tweenStates.indexOf(state), state.value])
        },
      },
    },
  }

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { MultiplyArrow } = require(request)
    const vnode = MultiplyArrow({
      paused: options.paused,
      onPause(multiplier) {
        records.push(["onPause", multiplier])
      },
    })
    return normalize({ vnode: normalizeVNode(vnode), records })
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
  if (vnode && typeof vnode === "object") {
    return {
      type: vnode.type,
      key: vnode.key ?? null,
      props: normalize(vnode.props || {}),
    }
  }
  return vnode
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
