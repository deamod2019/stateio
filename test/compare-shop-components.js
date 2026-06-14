"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")

const ShopType = {
  BUILDING: "BUILDING",
  FIGHTER: "FIGHTER",
  COLOR: "COLOR",
}
const AdResponse = { PLAYED: "PLAYED" }

const TARGETS = [
  "../src-cjs/44698_ShopPreview.js",
  "../src-restored/ui/ShopPreview.js",
  "../src-cjs/83643_ShopMenu.js",
  "../src-restored/ui/ShopMenu.js",
  "../src-cjs/76282_ShopItem.js",
  "../src-restored/ui/ShopItem.js",
  "../src-cjs/83719_BuildingItem.js",
  "../src-restored/ui/BuildingItem.js",
  "../src-cjs/30851_FighterItem.js",
  "../src-restored/ui/FighterItem.js",
  "../src-cjs/92068_ColorItem.js",
  "../src-restored/ui/ColorItem.js",
  "../src-cjs/62415_TexturedShopItem.js",
  "../src-restored/ui/TexturedShopItem.js",
  "../src-cjs/37079_ShopTabHeader.js",
  "../src-restored/ui/ShopTabHeader.js",
]

Promise.resolve()
  .then(async () => {
    await compareMenuScenario("shop menu builds tabs and handles selection/unlocks")
    await compareItemScenario("shop item renders color entry", {
      type: ShopType.COLOR,
      stored: false,
      isSelected: true,
      colorData: ["#111", "#222"],
    })
    await compareItemScenario("shop item renders building entry", {
      type: ShopType.BUILDING,
      stored: true,
      textureUrl: "building.svg",
      colorClassName: "red",
      selectedColorSet: ["#a", "#b"],
    })
    await compareItemScenario("shop item renders fighter entry", {
      type: ShopType.FIGHTER,
      stored: false,
      textureUrl: "fighter.svg",
      colorClassName: "blue",
      selectedColorSet: ["#c", "#d"],
    })
    await compareBuildingScenario("building item wraps textured shop item")
    await compareFighterScenario("fighter item renders three textured units")
    await compareColorScenario("color item renders swatch")
    await compareTexturedScenario("textured shop item renders image branch", {
      textureUrl: "unit.svg",
      className: "red",
      playerColor: ["#a", "#b"],
      useImage: true,
    })
    await compareTexturedScenario("textured shop item renders object branch and applies color", {
      textureUrl: "unit.svg",
      className: "red",
      playerColor: ["#a", "#b"],
      useImage: false,
    })
    await compareTabHeaderScenario("shop tab header renders notification", {
      className: "active",
      title: "FIGHTER",
      showNotification: true,
    })
    await comparePreviewScenario("shop preview updates selected skins and animation listeners")

    console.log(
      JSON.stringify(
        {
          module: "ShopMenu/ShopPreview/ShopItem/BuildingItem/FighterItem/ColorItem/TexturedShopItem/ShopTabHeader",
          scenarios: 11,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

async function compareMenuScenario(name) {
  const originalResult = await exerciseMenu(loadOriginalMenu)
  const restoredResult = await exerciseMenu(loadRestoredMenu)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareItemScenario(name, props) {
  const originalResult = await exerciseShopItem(loadOriginalItem, props)
  const restoredResult = await exerciseShopItem(loadRestoredItem, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareBuildingScenario(name) {
  const originalResult = await exerciseBuildingItem(loadOriginalBuilding, {
    textureUrl: "building.svg",
    className: "green",
    playerColor: ["#1", "#2"],
  })
  const restoredResult = await exerciseBuildingItem(loadRestoredBuilding, {
    textureUrl: "building.svg",
    className: "green",
    playerColor: ["#1", "#2"],
  })
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareFighterScenario(name) {
  const props = {
    textureUrl: "fighter.svg",
    className: "blue",
    playerColor: ["#1", "#2"],
  }
  const originalResult = await exerciseFighterItem(loadOriginalFighter, props)
  const restoredResult = await exerciseFighterItem(loadRestoredFighter, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareColorScenario(name) {
  const props = { colorData: ["#123456", "#abcdef"] }
  const originalResult = await exerciseColorItem(loadOriginalColor, props)
  const restoredResult = await exerciseColorItem(loadRestoredColor, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareTexturedScenario(name, props) {
  const originalResult = await exerciseTexturedItem(loadOriginalTextured, props)
  const restoredResult = await exerciseTexturedItem(loadRestoredTextured, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareTabHeaderScenario(name, props) {
  const originalResult = await exerciseTabHeader(loadOriginalTabHeader, props)
  const restoredResult = await exerciseTabHeader(loadRestoredTabHeader, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function comparePreviewScenario(name) {
  const originalResult = await exercisePreview(loadOriginalPreview)
  const restoredResult = await exercisePreview(loadRestoredPreview)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseMenu(loadModule) {
  const records = []
  const model = createGameModel(records)
  const skinManager = createSkinManager()
  const stateCaptures = []
  const mocks = createMocks({ records, model, skinManager, stateCaptures })

  return withMockedModules(mocks, async () => {
    const { ShopMenu } = loadModule()
    const vnode = ShopMenu()
    const tabs = stateCaptures.find((entry) => entry.shopItems)?.shopItems || []

    tabs[1].header.onClick()
    tabs[1].items[0].content.onClick()
    tabs[1].items[1].content.onClick()
    tabs[0].items[0].content.onClick()
    tabs[2].items[0].content.onClick()
    await settleAsyncWork()

    return normalize({
      vnode: normalizeVNode(vnode),
      generatedTabs: tabs,
      records,
      cookie: model.cookie,
    })
  })
}

async function exerciseShopItem(loadModule, props) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ShopItem } = loadModule()
    const onClick = () => records.push(["item.onClick"])
    const vnode = ShopItem({ className: "extra", onClick, ...props })
    vnode.props.onClick()
    return normalize({
      vnode: normalizeShopItemVNode(vnode),
      records,
    })
  })
}

async function exerciseBuildingItem(loadModule, props) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { BuildingItem } = loadModule()
    const vnode = BuildingItem(props)
    return normalize({
      vnode: normalizeShopItemVNode(vnode),
      records,
    })
  })
}

async function exerciseFighterItem(loadModule, props) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { FighterItem } = loadModule()
    const vnode = FighterItem(props)
    return normalize({
      vnode: normalizeShopItemVNode(vnode),
      records,
    })
  })
}

async function exerciseColorItem(loadModule, props) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ColorItem } = loadModule()
    const vnode = ColorItem(props)
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseTexturedItem(loadModule, props) {
  const records = []
  const objectElement = createTexturedObjectElement(records)
  const mocks = createMocks({ records, refElements: [objectElement] })

  return withMockedModules(mocks, async () => {
    const { TexturedShopItem } = loadModule()
    const vnode = TexturedShopItem(props)
    const objectVNode = findVNodeByType(vnode, "object")
    if (objectVNode) objectVNode.props.onLoad()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      object: objectElement.snapshot(),
    })
  })
}

async function exerciseTabHeader(loadModule, props) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ShopTabHeader } = loadModule()
    const onClick = () => records.push(["tab.onClick"])
    const vnode = ShopTabHeader({ onClick, ...props })
    vnode.props.onClick()
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exercisePreview(loadModule) {
  const records = []
  const model = createGameModel(records)
  const refElements = createPreviewRefElements(records)
  const cleanups = []
  const listeners = []
  const stateCaptures = []
  const mocks = createMocks({ records, model, refElements, cleanups, listeners, stateCaptures })

  return withMockedModules(mocks, async () => {
    const { ShopPreview } = loadModule()
    const vnode = ShopPreview()

    const eventListener = listeners.find((entry) => entry.event === GameEvents.SELECTABLE_ITEM_CHANGED)
    assert.notEqual(eventListener, undefined, "selectable item listener was not registered")
    eventListener.handler()

    const fighterOne = refElements[0]
    fighterOne.listeners.animationstart()
    fighterOne.listeners.animationiteration()
    for (const cleanup of cleanups) cleanup()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      refs: refElements.map((element) => element.snapshot()),
      stateCaptures,
    })
  })
}

function loadOriginalPreview() {
  deleteTargetModules()
  return require("../src-cjs/44698_ShopPreview.js")
}

function loadRestoredPreview() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopPreview.js")
}

function loadOriginalMenu() {
  deleteTargetModules()
  return require("../src-cjs/83643_ShopMenu.js")
}

function loadRestoredMenu() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopMenu.js")
}

function loadOriginalItem() {
  deleteTargetModules()
  return require("../src-cjs/76282_ShopItem.js")
}

function loadRestoredItem() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopItem.js")
}

function loadOriginalBuilding() {
  deleteTargetModules()
  return require("../src-cjs/83719_BuildingItem.js")
}

function loadRestoredBuilding() {
  deleteTargetModules()
  return require("../src-restored/ui/BuildingItem.js")
}

function loadOriginalFighter() {
  deleteTargetModules()
  return require("../src-cjs/30851_FighterItem.js")
}

function loadRestoredFighter() {
  deleteTargetModules()
  return require("../src-restored/ui/FighterItem.js")
}

function loadOriginalColor() {
  deleteTargetModules()
  return require("../src-cjs/92068_ColorItem.js")
}

function loadRestoredColor() {
  deleteTargetModules()
  return require("../src-restored/ui/ColorItem.js")
}

function loadOriginalTextured() {
  deleteTargetModules()
  return require("../src-cjs/62415_TexturedShopItem.js")
}

function loadRestoredTextured() {
  deleteTargetModules()
  return require("../src-restored/ui/TexturedShopItem.js")
}

function loadOriginalTabHeader() {
  deleteTargetModules()
  return require("../src-cjs/37079_ShopTabHeader.js")
}

function loadRestoredTabHeader() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopTabHeader.js")
}

function createGameModel(records) {
  return {
    cookie: {
      selected_fighter_id: "fighter-owned",
      selected_building_id: "building-owned",
      selected_color_set_id: "color-owned",
      selectedFighter: { id: "fighter-owned", ui_textureUrl: "fighter.svg" },
      selectedBuilding: { id: "building-owned", ui_textureUrl: "building.svg" },
      selectedColorSet: { id: "color-owned", data: ["#left", "#unit"] },
      availableColors: [
        { id: "color-owned", selected: false, stored: true, data: ["#1", "#2"] },
        { id: "color-locked", selected: false, stored: false, data: ["#3", "#4"] },
      ],
      addUserFighter(id) {
        records.push(["cookie.addUserFighter", id])
      },
      addUserBuilding(id) {
        records.push(["cookie.addUserBuilding", id])
      },
    },
  }
}

function createSkinManager() {
  return {
    availableBuildings: [
      {
        id: "building-owned",
        ui_textureUrl: "building-owned.svg",
        selected: false,
        stored: true,
      },
      {
        id: "building-locked",
        ui_textureUrl: "building-locked.svg",
        selected: false,
        stored: false,
      },
    ],
    availableFighters: [
      {
        id: "fighter-owned",
        ui_textureUrl: "fighter-owned.svg",
        selected: false,
        stored: true,
      },
      {
        id: "fighter-locked",
        ui_textureUrl: "fighter-locked.svg",
        selected: false,
        stored: false,
      },
    ],
  }
}

function createPreviewRefElements(records) {
  return [
    createPreviewElement(records, "fighter-one", "img"),
    createPreviewElement(records, "fighter-two", "img"),
    createPreviewElement(records, "fighter-three", "img"),
    createPreviewElement(records, "building-one", "img"),
    createPreviewElement(records, "building-two", "img"),
    createPreviewElement(records, "left-state", "svg"),
    createPreviewElement(records, "right-state", "svg"),
  ]
}

function createPreviewElement(records, name, childTag) {
  const listeners = {}
  const classes = new Set()
  const child = createChildElement(records, name, childTag)
  return {
    name,
    listeners,
    child,
    classList: {
      toggle(className) {
        records.push(["classList.toggle", name, className])
        if (classes.has(className)) classes.delete(className)
        else classes.add(className)
      },
      contains(className) {
        records.push(["classList.contains", name, className, classes.has(className)])
        return classes.has(className)
      },
      remove(...classNames) {
        records.push(["classList.remove", name, classNames])
        for (const className of classNames) classes.delete(className)
      },
      add(className) {
        records.push(["classList.add", name, className])
        classes.add(className)
      },
    },
    addEventListener(event, handler) {
      records.push(["addEventListener", name, event])
      listeners[event] = handler
    },
    removeEventListener(event, handler) {
      records.push(["removeEventListener", name, event, handler === listeners[event]])
    },
    getElementsByTagName(tag) {
      records.push(["getElementsByTagName", name, tag])
      if (tag === childTag) return [child]
      return []
    },
    snapshot() {
      return {
        name,
        classes: Array.from(classes).sort(),
        child: child.snapshot(),
      }
    },
  }
}

function createChildElement(records, owner, tag) {
  const attrs = {}
  const child = {
    tag,
    attrs,
    setAttribute(key, value) {
      records.push(["setAttribute", owner, tag, key, value])
      attrs[key] = value
    },
    snapshot() {
      return {
        tag,
        attrs,
        src: child.src,
        className: child.className,
      }
    },
  }
  Object.defineProperty(child, "src", {
    get() {
      return attrs.src
    },
    set(value) {
      records.push(["setSrc", owner, value])
      attrs.src = value
    },
  })
  Object.defineProperty(child, "className", {
    get() {
      return attrs.className
    },
    set(value) {
      records.push(["setClassName", owner, value])
      attrs.className = value
    },
  })
  return child
}

function createTexturedObjectElement(records) {
  const svg = createChildElement(records, "object-document", "svg")
  return {
    name: "textured-object",
    contentDocument: {
      getElementsByTagName(tag) {
        records.push(["contentDocument.getElementsByTagName", tag])
        return tag === "svg" ? [svg] : []
      },
    },
    snapshot() {
      return {
        name: "textured-object",
        svg: svg.snapshot(),
      }
    },
  }
}

function createMocks({
  records,
  model = createGameModel(records),
  skinManager = createSkinManager(),
  refElements = [],
  cleanups = [],
  listeners = [],
  stateCaptures = [],
} = {}) {
  let refIndex = 0

  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesGame.model) return model
    if (token === TypesGame.skinManager) return skinManager
    return undefined
  }

  function useState(initialValue) {
    records.push(["useState", typeof initialValue === "function" ? "function" : normalize(initialValue)])
    const initialState = typeof initialValue === "function" ? initialValue() : initialValue
    function setState(value) {
      const next = typeof value === "function" ? value(initialState) : value
      stateCaptures.push(next)
      records.push(["setState", normalize(next)])
    }
    return [initialState, setState]
  }

  function useEffect(effect, deps) {
    records.push(["useEffect", normalize(deps), typeof effect])
    const cleanup = effect()
    records.push(["useEffect.cleanup", typeof cleanup])
    if (typeof cleanup === "function") cleanups.push(cleanup)
  }

  function useLayoutEffect(effect, deps) {
    records.push(["useLayoutEffect", normalize(deps), typeof effect])
    const cleanup = effect()
    records.push(["useLayoutEffect.cleanup", typeof cleanup])
    if (typeof cleanup === "function") cleanups.push(cleanup)
  }

  function useRef(initialValue) {
    records.push(["useRef", normalize(initialValue)])
    return { current: refElements[refIndex++] || initialValue }
  }

  function useEventListener(event, handler) {
    records.push(["useEventListener", event, typeof handler])
    listeners.push({ event, handler })
  }

  function visibilityEffect(delay) {
    records.push(["visibilityEffect", delay])
    return [false]
  }

  function ShopItem() {}
  function BuildingItem() {}
  function FighterItem() {}
  function ColorItem() {}
  function ShopTabHeader() {}
  function TexturedShopItem() {}
  function ExclamationMarkNotificator() {}
  function Video() {}
  const uiContextMock = {
    useInjection,
    useEventListener,
    visibilityEffect,
  }

  return {
    "../src-cjs/30396__mod.js": { useState, useEffect, useLayoutEffect, useRef },
    "../src-restored/ui/preactHooks.js": { useState, useEffect, useLayoutEffect, useRef },
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
    "../src-cjs/86178__mod.js": { AdResponse },
    "../src-restored/core/CoreTypes.js": { AdResponse },
    "../src-cjs/66154_SelectableFighterDataSet.js": {
      SelectableColorCss: [{ id: "color-owned", className: "color-owned-class" }],
    },
    "../src-restored/core/SelectableSkins.js": {
      SelectableColorCss: [{ id: "color-owned", className: "color-owned-class" }],
    },
    "../src-cjs/37725__mod.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
      async showReward() {
        records.push(["showReward"])
        return AdResponse.PLAYED
      },
    },
    "../src-cjs/74083_UIConstants.js": {
      ShopType,
      UIConstants: {
        shop: {
          defaultTabType: ShopType.BUILDING,
          tabTypes: [ShopType.BUILDING, ShopType.FIGHTER, ShopType.COLOR],
        },
      },
    },
    "../src-cjs/36622_SVG.js": { SVG: { Video } },
    "../src-restored/ui/SVGAssets.js": { SVG: { Video } },
    "../src-cjs/37079_ShopTabHeader.js": { ShopTabHeader },
    "../src-restored/ui/ShopTabHeader.js": { ShopTabHeader },
    "../src-cjs/47283_GameEvents.js": {
      GameEvents: { SELECTABLE_ITEM_CHANGED: GameEvents.SELECTABLE_ITEM_CHANGED },
    },
    "../src-restored/core/GameEvents.js": {
      GameEvents: { SELECTABLE_ITEM_CHANGED: GameEvents.SELECTABLE_ITEM_CHANGED },
    },
    "../src-cjs/76282_ShopItem.js": { ShopItem },
    "../src-restored/ui/ShopItem.js": { ShopItem },
    "../src-cjs/83719_BuildingItem.js": { BuildingItem },
    "../src-restored/ui/BuildingItem.js": { BuildingItem },
    "../src-cjs/30851_FighterItem.js": { FighterItem },
    "../src-restored/ui/FighterItem.js": { FighterItem },
    "../src-cjs/92068_ColorItem.js": { ColorItem },
    "../src-restored/ui/ColorItem.js": { ColorItem },
    "../src-cjs/62415_TexturedShopItem.js": { TexturedShopItem },
    "../src-restored/ui/TexturedShopItem.js": { TexturedShopItem },
    "../src-cjs/5777_ExclamationMarkNotificator.js": { ExclamationMarkNotificator },
    "../src-cjs/69181__mod.js": {},
    "../src-cjs/70535__mod.js": {},
    "../src-cjs/10471__mod.js": {},
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

function findVNodeByType(vnode, typeName) {
  if (!vnode || typeof vnode !== "object") return null
  if (vnodeTypeName(vnode.type) === typeName) return vnode

  const children = vnode.props?.children
  const childList = Array.isArray(children) ? children : [children]
  for (const child of childList) {
    const result = findVNodeByType(child, typeName)
    if (result) return result
  }
  return null
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

function normalizeShopItemVNode(vnode) {
  const normalized = normalizeVNode(vnode)
  maskShopItemChildTypes(normalized)
  return normalized
}

function maskShopItemChildTypes(node) {
  if (Array.isArray(node)) {
    for (const child of node) maskShopItemChildTypes(child)
    return
  }
  if (!node || typeof node !== "object") return
  const props = node.props || {}
  if (
    Object.prototype.hasOwnProperty.call(props, "textureUrl") ||
    Object.prototype.hasOwnProperty.call(props, "colorData")
  ) {
    node.type = "[component]"
  }
  maskShopItemChildTypes(props.children)
}

function normalizeProps(props) {
  const result = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") result.children = normalizeVNode(value)
    else if (key === "ref") result[key] = "[ref]"
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

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}

async function settleAsyncWork() {
  await Promise.resolve()
  await Promise.resolve()
  await Promise.resolve()
}
