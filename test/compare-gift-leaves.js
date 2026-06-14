"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const SkinType = {
  BUILDING: "SkinType.BUILDING",
  FIGHTER: "SkinType.FIGHTER",
  COLOR: "SkinType.COLOR",
}

const UserSelectableColorsSet = {
  BLUE: "UserSelectableColorsSet.BLUE",
  RED: "UserSelectableColorsSet.RED",
}

const SelectableColorCss = [
  { id: UserSelectableColorsSet.BLUE, className: "skins-blue-color-set" },
  { id: UserSelectableColorsSet.RED, className: "skins-red-color-set" },
]

const SelectableBuildingDataSet = [
  { id: 7, ui_textureUrl: "buildings-ui/7.svg" },
]

const SelectableFighterDataSet = [
  { id: 9, ui_textureUrl: "fighters-ui/9.svg" },
]

const TARGETS = [
  "../src-cjs/73097_CapturingAnimated.js",
  "../src-restored/ui/CapturingAnimated.js",
  "../src-restored/ui/UIHooks.js",
  "../src-cjs/79147_GiftItem.js",
  "../src-restored/ui/GiftItem.js",
]

compareCapturingScenario("default delay capture tween", {
  from: 1,
  to: 2,
  total: 4,
})
compareCapturingScenario("custom delay capture tween", {
  from: 2,
  to: 5,
  total: 10,
  startDelay: 2.5,
})
compareGiftScenario("empty gift placeholder", null)
compareGiftScenario("building reward preview", {
  type: SkinType.BUILDING,
  id: 7,
})
compareGiftScenario("fighter reward preview", {
  type: SkinType.FIGHTER,
  id: 9,
})

console.log(
  JSON.stringify(
    {
      module: "CapturingAnimated/GiftItem",
      scenarios: 5,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareCapturingScenario(name, props) {
  const originalResult = exerciseCapturing("../src-cjs/73097_CapturingAnimated.js", props)
  const restoredResult = exerciseCapturing("../src-restored/ui/CapturingAnimated.js", props)
  assert.deepEqual(restoredResult, originalResult, name)
}

function compareGiftScenario(name, reward) {
  const originalResult = exerciseGiftItem("../src-cjs/79147_GiftItem.js", reward)
  const restoredResult = exerciseGiftItem("../src-restored/ui/GiftItem.js", reward)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseCapturing(request, props) {
  const records = []

  function Capturing(capturingProps) {
    return {
      type: "Capturing",
      key: null,
      props: capturingProps,
    }
  }

  const mocks = {
    "../src-cjs/30396__mod.js": {
      useState(initialState) {
        records.push(["useState", normalize(initialState)])
        return [
          initialState,
          (nextState) => records.push(["setState", normalize(nextState)]),
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        effect()
      },
    },
    "../src-restored/ui/preactHooks.js": {
      useState(initialState) {
        records.push(["useState", normalize(initialState)])
        return [
          initialState,
          (nextState) => records.push(["setState", normalize(nextState)]),
        ]
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", deps])
        effect()
      },
    },
    "../src-cjs/25317_SteppedEase.js": {
      gsap: {
        fromTo(target, fromVars, toVars) {
          records.push([
            "gsap.fromTo",
            normalize(target),
            normalize(fromVars),
            toVars.delay,
            toVars.duration,
            toVars.value,
            toVars.ease,
            typeof toVars.onComplete,
          ])
          target.value = toVars.value
          toVars.onUpdate()
          if (toVars.onComplete) toVars.onComplete()
        },
      },
    },
    "../src-restored/core/animationRuntime.js": {
      gsap: {
        fromTo(target, fromVars, toVars) {
          records.push([
            "gsap.fromTo",
            normalize(target),
            normalize(fromVars),
            toVars.delay,
            toVars.duration,
            toVars.value,
            toVars.ease,
            typeof toVars.onComplete,
          ])
          target.value = toVars.value
          toVars.onUpdate()
          if (toVars.onComplete) toVars.onComplete()
        },
      },
    },
    "../src-cjs/10065_Capturing.js": { Capturing },
    "../src-restored/ui/Capturing.js": { Capturing },
  }

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { CapturingAnimated } = require(request)
    const completeRecords = []
    const vnode = CapturingAnimated(
      Object.assign({}, props, {
        onAnimationComplete() {
          completeRecords.push("complete")
        },
      }),
    )
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      completeRecords,
    })
  })
}

function exerciseGiftItem(request, reward) {
  function useInjection() {
    return {
      cookie: {
        selectedColorSet: {
          id: UserSelectableColorsSet.BLUE,
          data: ["#4BB4F8", "#33698D"],
        },
      },
    }
  }

  function BuildingItem(props) {
    return { type: "BuildingItem", key: null, props }
  }

  function FighterItem(props) {
    return { type: "FighterItem", key: null, props }
  }

  function Gift() {
    return { type: "Gift", key: null, props: {} }
  }

  const selectable = {
    SkinType,
    UserSelectableColorsSet,
    SelectableColorCss,
    SelectableBuildingDataSet,
    SelectableFighterDataSet,
  }

  const mocks = {
    "../src-cjs/66154_SelectableFighterDataSet.js": selectable,
    "../src-restored/core/SelectableSkins.js": selectable,
    "../src-cjs/83430_InversifyContext.js": { useInjection },
    "../src-restored/ui/UIContext.js": { useInjection },
    "../src-cjs/95781_TypesGame.js": { TypesGame: { model: Symbol.for("TypesGame.model") } },
    "../src-restored/core/TypesGame.js": { TypesGame: { model: Symbol.for("TypesGame.model") } },
    "../src-cjs/83719_BuildingItem.js": { BuildingItem },
    "../src-restored/ui/BuildingItem.js": { BuildingItem },
    "../src-cjs/30851_FighterItem.js": { FighterItem },
    "../src-restored/ui/FighterItem.js": { FighterItem },
    "../src-cjs/36622_SVG.js": { Images: { Gift } },
    "../src-restored/ui/SVGAssets.js": { Images: { Gift } },
  }

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { GiftItem } = require(request)
    return normalizeVNode(renderFunctionVNodes(GiftItem({ reward })))
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

function renderFunctionVNodes(vnode) {
  if (Array.isArray(vnode)) return vnode.map(renderFunctionVNodes)
  if (!vnode || typeof vnode !== "object") return vnode

  if (typeof vnode.type === "function") {
    return renderFunctionVNodes(vnode.type(vnode.props || {}))
  }

  const props = Object.assign({}, vnode.props || {})
  if ("children" in props) props.children = renderFunctionVNodes(props.children)
  return Object.assign({}, vnode, { props })
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

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "symbol") return item.toString()
      return item
    }),
  )
}
