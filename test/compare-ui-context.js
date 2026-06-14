"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/83430_InversifyContext.js")
const restored = require("../src-restored/ui/UIContext.js")
const { TypesUI } = require("../src-restored/core/CoreTypes")

const originalKeys = Object.keys(original).sort()
const restoredKeys = Object.keys(restored).sort()

assert.deepEqual(restoredKeys, originalKeys, "UIContext export keys differ")
assert.deepEqual(restored.UIEvents, original.UIEvents, "UIEvents differ")
assert.equal(restored.UIEvents, require("../src-restored/ui/UIEvents").UIEvents)
assert.equal(restored.UIEvents.POPUP, TypesUI.events.POPUP)
assert.equal(restored.UIEvents.SCREEN_CHANGED, TypesUI.events.SCREEN_CHANGED)
assert.equal(restored.UIEvents.SHOW_CUSTOM_ALERT, TypesUI.events.SHOW_CUSTOM_ALERT)
assert.equal(restored.buttonTypeConst.primary, original.buttonTypeConst.primary)
assert.equal(restored.buttonTypeConst.glassy, original.buttonTypeConst.glassy)
assert.equal(restored.buttonShapeConst.circle, original.buttonShapeConst.circle)
assert.equal(restored.buttonShapeConst.oval, original.buttonShapeConst.oval)
assert.equal(typeof restored.InversifyContext.Provider, "function")
assert.equal(
  restored.InversifyContext,
  require("../src-restored/ui/InversifyContext").InversifyContext,
)
assert.equal(typeof restored.useInjection, "function")
assert.equal(typeof restored.useEventListener, "function")
assert.equal(typeof restored.visibilityEffect, "function")
assert.equal(restored.HTMLUIModule, require("../src-restored/ui/HTMLUIModule").HTMLUIModule)
assert.equal(
  restored.GlobalEventProviderComponent,
  require("../src-restored/ui/GlobalEventProviderComponent").GlobalEventProviderComponent,
)
assert.deepEqual(
  exerciseGlobalEventProvider(restored.GlobalEventProviderComponent),
  exerciseGlobalEventProvider(original.GlobalEventProviderComponent),
  "GlobalEventProviderComponent behavior differs",
)
assert.deepEqual(
  exerciseUIHooks("restored"),
  exerciseUIHooks("original"),
  "UI hook behavior differs",
)
assert.deepEqual(
  exerciseUIContextComponents(restored),
  exerciseUIContextComponents(original),
  "UIContext component vnode behavior differs",
)

console.log(
  JSON.stringify(
    {
      module: "UIContext",
      exports: restoredKeys.length,
      globalEventProviderScenarios: 1,
      hookScenarios: 1,
      componentScenarios: 1,
      status: "ok",
    },
    null,
    2,
  ),
)

function exerciseUIContextComponents(moduleExports) {
  return {
    countDefault: normalizeVNode(moduleExports.Count({ className: "badge", title: "coins" })),
    countSupplied: normalizeVNode(moduleExports.Count({ className: "badge", count: 7, id: "count-id" })),
    claimWithCount: normalizeVNode(
      moduleExports.Claim({
        className: "claim-now",
        buttonType: "glassy",
        type: "coins",
        count: 15,
        ads: true,
        id: "claim-id",
        children: "Claim",
      }),
    ),
    claimPlain: normalizeVNode(moduleExports.Claim({ children: "Plain" })),
    share: normalizeVNode(
      moduleExports.ShareComponent({
        invisible: true,
        screenshot: "shot.png",
        onShare() {},
      }),
    ),
  }
}

function exerciseGlobalEventProvider(Component) {
  const records = []
  const warnings = []
  const originalWarn = console.warn
  console.warn = (message) => warnings.push(String(message))

  const dispatcher = {
    emit(eventName, payload) {
      records.push(["emit", eventName, payload])
    },
    on(eventName, listener, context) {
      records.push(["on", eventName, listenerName(listener), context === instance])
    },
    off(eventName, listener, context) {
      records.push(["off", eventName, listenerName(listener), context === instance])
    },
  }
  const instance = new Component()
  instance._dispatcher = dispatcher

  function listener(payload) {
    records.push(["listener", payload, this === instance])
  }
  function duplicate() {}
  function missing() {}

  try {
    records.push(["initialHasListeners", instance.hasListeners()])
    instance.dispatch("event:dispatch", { ok: true })
    instance.addListener("event:a", listener)
    instance.addListener("event:a", duplicate)
    instance.addListener("event:a", duplicate)
    records.push(["afterAdd", normalizeListenerMap(instance.listenersMap), instance.hasListeners()])

    instance.addListenerOnce("event:once", listener)
    const once = instance.listenersMap["event:once"][0]
    once("payload-once")
    records.push(["afterOnce", normalizeListenerMap(instance.listenersMap)])

    instance.removeListener("event:a", missing)
    instance.removeListener("event:a", duplicate)
    records.push(["afterRemoveDuplicate", normalizeListenerMap(instance.listenersMap)])

    instance.removeListeners("event:a")
    instance.removeListeners("missing:event")
    records.push(["afterRemoveListeners", normalizeListenerMap(instance.listenersMap)])

    instance.addListener("event:cleanup", listener)
    instance.componentWillUnmount()
    records.push(["afterUnmount", normalizeListenerMap(instance.listenersMap), instance.hasListeners()])

    return normalize({ records, warnings })
  } finally {
    console.warn = originalWarn
  }
}

function normalizeListenerMap(map) {
  const result = {}
  for (const key of Object.keys(map).sort()) {
    result[key] = map[key].map(listenerName)
  }
  return result
}

function listenerName(listener) {
  const name = listener.name || "[anonymous]"
  return name === "i" || name === "once" ? "[once]" : name
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_key, item) => {
    if (typeof item === "function") return item.name || "[function]"
    if (item === undefined) return "__undefined__"
    return item
  }))
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

function exerciseUIHooks(kind) {
  const isRestored = kind === "restored"
  const records = []
  const cleanups = []
  const originalSetTimeout = globalThis.setTimeout
  const originalClearTimeout = globalThis.clearTimeout

  const targetRequests = isRestored
    ? ["../src-restored/ui/UIHooks.js"]
    : [
        "../src-cjs/76702__mod.js",
        "../src-cjs/50961__mod.js",
        "../src-cjs/55854__mod.js",
      ]
  const hookRequest = isRestored ? "../src-restored/ui/preactHooks.js" : "../src-cjs/30396__mod.js"
  const contextRequest = isRestored
    ? "../src-restored/ui/InversifyContext.js"
    : "../src-cjs/83430_InversifyContext.js"
  const typesRequest = isRestored
    ? "../src-restored/core/CoreTypes.js"
    : "../src-cjs/86178__mod.js"
  const resolvedEntries = [hookRequest, contextRequest, ...targetRequests].map((request) => {
    const resolved = require.resolve(request)
    return [resolved, require.cache[resolved]]
  })
  const { TypesCore } = require(typesRequest)
  const dispatcher = {
    addListener(eventName, handler) {
      records.push(["dispatcher.addListener", eventName, typeof handler])
    },
    removeListener(eventName, handler) {
      records.push(["dispatcher.removeListener", eventName, typeof handler])
    },
  }
  const contextValue = {
    get(token) {
      records.push(["context.get", token === TypesCore.dispatcher ? "dispatcher" : "other"])
      if (token === TypesCore.dispatcher) return dispatcher
      return { token }
    },
  }

  globalThis.setTimeout = (callback, delay) => {
    records.push(["setTimeout", delay])
    callback()
    return "timeout-id"
  }
  globalThis.clearTimeout = (id) => {
    records.push(["clearTimeout", id])
  }

  require.cache[require.resolve(hookRequest)] = {
    id: require.resolve(hookRequest),
    filename: require.resolve(hookRequest),
    loaded: true,
    exports: {
      useContext(context) {
        records.push(["useContext", context === "context-token" ? "context-token" : typeof context])
        return contextValue
      },
      useLayoutEffect(effect, deps) {
        records.push(["useLayoutEffect", normalize(deps)])
        const cleanup = effect()
        records.push(["layoutEffectResult", typeof cleanup])
        if (typeof cleanup === "function") {
          cleanups.push(cleanup)
          cleanup()
        }
      },
      useState(initialValue) {
        records.push(["useState", initialValue])
        return [
          initialValue,
          (nextValue) => records.push(["setState", nextValue]),
        ]
      },
    },
  }
  require.cache[require.resolve(contextRequest)] = {
    id: require.resolve(contextRequest),
    filename: require.resolve(contextRequest),
    loaded: true,
    exports: { InversifyContext: "context-token" },
  }
  for (const request of targetRequests) delete require.cache[require.resolve(request)]

  try {
    const hooksModule = isRestored
      ? require("../src-restored/ui/UIHooks.js")
      : {
          useInjection: require("../src-cjs/76702__mod.js").useInjection,
          useEventListener: require("../src-cjs/50961__mod.js").useEventListener,
          visibilityEffect: require("../src-cjs/55854__mod.js").visibilityEffect,
        }
    const injected = hooksModule.useInjection(TypesCore.dispatcher, true)
    records.push(["injectedIsDispatcher", injected === dispatcher])
    hooksModule.useEventListener("event:name", () => {}, ["dep"])
    const visibility = hooksModule.visibilityEffect(25, true, ["visible"])
    records.push([
      "visibility",
      visibility[0],
      typeof visibility[1],
      cleanups.length,
    ])
    return normalize(records)
  } finally {
    globalThis.setTimeout = originalSetTimeout
    globalThis.clearTimeout = originalClearTimeout
    for (const [resolved, cached] of resolvedEntries) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }
}
