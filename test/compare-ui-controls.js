"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { iconsMap: originalIconsMap } = require("../src-cjs/56959__mod.js")
const { Icon: OriginalIcon } = require("../src-cjs/37909_Icon.js")
const { Graphics: OriginalGraphics } = require("../src-cjs/73134_Graphics.js")
const {
  Button: OriginalButton,
  buttonShapeConst: originalButtonShapeConst,
  buttonTypeConst: originalButtonTypeConst,
} = require("../src-cjs/8407_Button.js")
const {
  Button: RestoredButton,
  Icon: RestoredIcon,
  buttonShapeConst: restoredButtonShapeConst,
  buttonTypeConst: restoredButtonTypeConst,
  iconsMap: restoredIconsMap,
} = require("../src-restored/ui/UIControls.js")
const { Graphics: RestoredGraphics } = require("../src-restored/ui/Graphics.js")
const playSvg = { default: require("../src-cjs/66823__mod.js") }

assert.deepEqual(restoredButtonTypeConst, originalButtonTypeConst, "button type constants differ")
assert.deepEqual(restoredButtonShapeConst, originalButtonShapeConst, "button shape constants differ")
assert.deepEqual(mapKeys(restoredIconsMap), mapKeys(originalIconsMap), "iconsMap keys differ")

for (const type of ["play", "gear", "placeholder-avatar"]) {
  assert.deepEqual(
    normalizeVNode(restoredIconsMap.get(type)({
      className: `icon-${type}`,
      inline: false,
      width: 24,
    })),
    normalizeVNode(originalIconsMap.get(type)({
      className: `icon-${type}`,
      inline: false,
      width: 24,
    })),
    `${type} icon map renderer differs`,
  )
}

for (const type of ["play", "gear", "placeholder-avatar"]) {
  assert.deepEqual(
    normalizeVNode(RestoredIcon({ type, className: "main-icon", height: 32 })),
    normalizeVNode(OriginalIcon({ type, className: "main-icon", height: 32 })),
    `${type} Icon vnode differs`,
  )
}

for (const inline of [undefined, false]) {
  assert.deepEqual(
    normalizeVNode(RestoredGraphics({ svg: playSvg, className: "graphic", inline })),
    normalizeVNode(OriginalGraphics({ svg: playSvg, className: "graphic", inline })),
    `Graphics inline=${inline} differs`,
  )
}

const customIcon = { type: "custom", props: { id: "already-rendered" } }
const buttonScenarios = [
  {
    label: "primary oval string icon",
    props: {
      id: "continue",
      className: "wide",
      icon: "play",
      shape: "oval",
      type: "primary",
      block: true,
      bordered: true,
      revertDir: true,
      children: "Continue",
    },
  },
  {
    label: "glassy circle custom icon",
    props: {
      className: "round",
      icon: customIcon,
      shape: "circle",
      type: "glassy",
      htmlType: "submit",
      children: "OK",
    },
  },
  {
    label: "plain button",
    props: {
      "aria-label": "close",
      onClick() {},
    },
  },
]

for (const scenario of buttonScenarios) {
  assert.deepEqual(
    normalizeVNode(RestoredButton(scenario.props)),
    normalizeVNode(OriginalButton(scenario.props)),
    `${scenario.label} Button vnode differs`,
  )
}

for (const value of [false, true]) {
  assert.deepEqual(
    exerciseToggleControl("../src-restored/ui/ToggleControl.js", value),
    exerciseToggleControl("../src-cjs/75953_ToggleControl.js", value),
    `ToggleControl value=${value} differs`,
  )
}

const versionScenarios = [
  {
    label: "fb sdk version",
    config: { version: "1.2.3" },
    social: { socialPlatform: "fb" },
    sdkVersion: "9.9.9",
  },
  {
    label: "non-fb localhost fallback",
    config: {},
    social: { socialPlatform: "ya" },
    sdkVersion: null,
  },
]

for (const scenario of versionScenarios) {
  assert.deepEqual(
    exerciseVersionLabel("restored", scenario),
    exerciseVersionLabel("original", scenario),
    `${scenario.label} VersionLabel differs`,
  )
}

console.log(
  JSON.stringify(
    {
      module: "UIControls",
      icons: restoredIconsMap.size,
      graphicsScenarios: 2,
      buttonScenarios: buttonScenarios.length,
      toggleScenarios: 2,
      versionScenarios: versionScenarios.length,
      status: "ok",
    },
    null,
    2,
  ),
)

function mapKeys(map) {
  return Array.from(map.keys()).sort()
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
    const value = props[key]
    if (key === "children") result.children = normalizeVNode(value)
    else result[key] = normalizeValue(value)
  }
  return result
}

function normalizeValue(value) {
  if (Array.isArray(value)) return value.map(normalizeValue)
  if (typeof value === "function") return "[function]"
  if (typeof value === "symbol") return value.toString()
  if (value === undefined) return "__undefined__"
  if (value && typeof value === "object") {
    const result = {}
    for (const key of Object.keys(value).sort()) result[key] = normalizeValue(value[key])
    return result
  }
  return value
}

function exerciseToggleControl(request, value) {
  const records = []
  const hooksRequest = "../src-cjs/30396__mod.js"
  const uiHooksRequest = "../src-restored/ui/UIHooks.js"
  const preactHooksRequest = "../src-restored/ui/preactHooks.js"
  const hooksResolved = require.resolve(hooksRequest)
  const uiHooksResolved = require.resolve(uiHooksRequest)
  const preactHooksResolved = require.resolve(preactHooksRequest)
  const targetResolved = require.resolve(request)
  const originalHooksCache = require.cache[hooksResolved]
  const originalUIHooksCache = require.cache[uiHooksResolved]
  const originalPreactHooksCache = require.cache[preactHooksResolved]
  const originalTargetCache = require.cache[targetResolved]

  const hooksMock = {
    useState(initialValue) {
      records.push(["useState", initialValue])
      return [
        initialValue,
        (nextValue) => records.push(["setState", nextValue]),
      ]
    },
  }
  require.cache[hooksResolved] = {
    id: hooksResolved,
    filename: hooksResolved,
    loaded: true,
    exports: hooksMock,
  }
  require.cache[preactHooksResolved] = {
    id: preactHooksResolved,
    filename: preactHooksResolved,
    loaded: true,
    exports: hooksMock,
  }
  delete require.cache[uiHooksResolved]
  delete require.cache[targetResolved]

  try {
    const { ToggleControl } = require(request)
    const vnode = ToggleControl({
      className: "music",
      value,
      onChange(nextValue) {
        records.push(["onChange", nextValue])
      },
    })
    vnode.props.onClick()
    return normalizeValue({ vnode: normalizeVNode(vnode), records })
  } finally {
    if (originalTargetCache) require.cache[targetResolved] = originalTargetCache
    else delete require.cache[targetResolved]
    if (originalUIHooksCache) require.cache[uiHooksResolved] = originalUIHooksCache
    else delete require.cache[uiHooksResolved]
    if (originalPreactHooksCache) require.cache[preactHooksResolved] = originalPreactHooksCache
    else delete require.cache[preactHooksResolved]
    if (originalHooksCache) require.cache[hooksResolved] = originalHooksCache
    else delete require.cache[hooksResolved]
  }
}

function exerciseVersionLabel(kind, scenario) {
  const isRestored = kind === "restored"
  const targetRequest = isRestored
    ? "../src-restored/ui/VersionLabel.js"
    : "../src-cjs/73793_VersionLabel.js"
  const hookRequest = isRestored
    ? "../src-restored/ui/UIContext.js"
    : "../src-cjs/19562__mod.js"
  const typesRequest = isRestored
    ? "../src-restored/core/CoreTypes.js"
    : "../src-cjs/86178__mod.js"
  const targetResolved = require.resolve(targetRequest)
  const hookResolved = require.resolve(hookRequest)
  const targetCache = require.cache[targetResolved]
  const hookCache = require.cache[hookResolved]
  const { TypesCore, TypesSocial } = require(typesRequest)
  const originalFBInstant = globalThis.FBInstant

  if (scenario.sdkVersion) {
    globalThis.FBInstant = {
      getSDKVersion() {
        return scenario.sdkVersion
      },
    }
  } else {
    delete globalThis.FBInstant
  }

  require.cache[hookResolved] = {
    id: hookResolved,
    filename: hookResolved,
    loaded: true,
    exports: {
      useInjection(token) {
        if (token === TypesCore.gameConfig) return scenario.config
        if (token === TypesSocial.model) return scenario.social
        return undefined
      },
    },
  }
  delete require.cache[targetResolved]

  try {
    const { VersionLabel } = require(targetRequest)
    return normalizeVNode(VersionLabel())
  } finally {
    if (targetCache) require.cache[targetResolved] = targetCache
    else delete require.cache[targetResolved]
    if (hookCache) require.cache[hookResolved] = hookCache
    else delete require.cache[hookResolved]
    if (originalFBInstant === undefined) delete globalThis.FBInstant
    else globalThis.FBInstant = originalFBInstant
  }
}
