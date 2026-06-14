"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesUI, AdEvents, AdResponse, TypesSocial } = require("../src-cjs/86178__mod.js")

const TARGETS = [
  "../src-cjs/41510_AlertsOverlay.js",
  "../src-restored/ui/AlertsOverlay.js",
  "../src-cjs/31651_SocialOverlay.js",
  "../src-restored/ui/SocialOverlay.js",
  "../src-cjs/7514_PauseOverlay.js",
  "../src-restored/ui/PauseOverlay.js",
  "../src-restored/ui/UIHooks.js",
]

Promise.resolve()
  .then(async () => {
    await compareAlertsScenario("alerts route custom and ad statuses", {
      state: { active: false, alertId: "alert-old" },
    })
    await compareSocialScenario("social overlay subscribes and cleans up", {
      hasSocial: true,
      active: false,
    })
    await compareSocialScenario("social overlay without model renders inactive", {
      hasSocial: false,
      active: true,
    })
    await comparePauseScenario("pause overlay listens and resumes", {
      showPauseOverlay: true,
      paused: true,
    })
    await comparePauseScenario("pause overlay can disable listener", {
      showPauseOverlay: false,
      paused: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "AlertsOverlay/SocialOverlay/PauseOverlay",
          scenarios: 5,
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

async function compareAlertsScenario(name, options) {
  const originalResult = await exerciseAlerts(loadOriginalAlerts, options)
  const restoredResult = await exerciseAlerts(loadRestoredAlerts, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareSocialScenario(name, options) {
  const originalResult = await exerciseSocial(loadOriginalSocial, options)
  const restoredResult = await exerciseSocial(loadRestoredSocial, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function comparePauseScenario(name, options) {
  const originalResult = await exercisePause(loadOriginalPause, options)
  const restoredResult = await exercisePause(loadRestoredPause, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAlerts(loadModule, options) {
  const records = []
  const handlers = new Map()
  const mocks = createAlertsMocks({ records, handlers, state: options.state })

  return withMockedModules(mocks, async () => {
    const { AlertsOverlay } = loadModule()
    const vnode = AlertsOverlay()
    const normalizedVNode = normalizeVNode(vnode)

    handlers.get(TypesUI.events.SHOW_CUSTOM_ALERT)({
      message: "bad",
      type: "error",
      options: { sticky: true },
    })
    handlers.get(TypesUI.events.SHOW_CUSTOM_ALERT)({ message: "ok", type: "success" })
    handlers.get(TypesUI.events.SHOW_CUSTOM_ALERT)({ message: "warn", type: "warning" })
    handlers.get(TypesUI.events.SHOW_CUSTOM_ALERT)({ message: "hello" })
    handlers.get(TypesUI.events.SHOW_CUSTOM_ALERT)({})
    handlers.get(AdEvents.STARTED)({})
    handlers.get(AdEvents.ENDED)({ reward: true, status: AdResponse.FAILED })
    handlers.get(AdEvents.ENDED)({ reward: true, status: AdResponse.NO_FILL })
    handlers.get(AdEvents.ENDED)({ reward: true, status: AdResponse.CANCELLED })
    handlers.get(AdEvents.ENDED)({ reward: false, status: AdResponse.FAILED })

    return normalize({
      vnode: normalizedVNode,
      records,
    })
  })
}

async function exerciseSocial(loadModule, options) {
  const records = []
  const social = createSocial(records)
  const mocks = createSocialMocks({ records, social, options })

  return withMockedModules(mocks, async () => {
    const { SocialOverlay } = loadModule()
    const vnode = SocialOverlay()
    const normalizedVNode = normalizeVNode(vnode)

    if (options.hasSocial) {
      social.handlers.SHOW_OVERLAY()
      social.handlers.HIDE_OVERLAY()
      for (const cleanup of social.cleanups) cleanup()
    }

    return normalize({
      vnode: normalizedVNode,
      records,
    })
  })
}

async function exercisePause(loadModule, options) {
  const records = []
  const handlers = new Map()
  const mocks = createPauseMocks({ records, handlers, options })

  return withMockedModules(mocks, async () => {
    const { PauseOverlay } = loadModule()
    const vnode = PauseOverlay()
    const normalizedVNode = normalizeVNode(vnode)

    if (handlers.has("pause")) handlers.get("pause")(false)
    const clickResult = await vnode.props.onClick()

    return normalize({
      vnode: normalizedVNode,
      records,
      clickResult,
    })
  })
}

function loadOriginalAlerts() {
  deleteTargetModules()
  return require("../src-cjs/41510_AlertsOverlay.js")
}

function loadRestoredAlerts() {
  deleteTargetModules()
  return require("../src-restored/ui/AlertsOverlay.js")
}

function loadOriginalSocial() {
  deleteTargetModules()
  return require("../src-cjs/31651_SocialOverlay.js")
}

function loadRestoredSocial() {
  deleteTargetModules()
  return require("../src-restored/ui/SocialOverlay.js")
}

function loadOriginalPause() {
  deleteTargetModules()
  return require("../src-cjs/7514_PauseOverlay.js")
}

function loadRestoredPause() {
  deleteTargetModules()
  return require("../src-restored/ui/PauseOverlay.js")
}

function createAlertsMocks({ records, handlers, state }) {
  function StatusAlertView() {}
  const uiContextMock = {
    useEventListener(eventName, handler) {
      records.push(["useEventListener", eventName, typeof handler])
      handlers.set(eventName, handler)
    },
  }

  return {
    "../src-cjs/30396__mod.js": createHooksMock({ records, state }),
    "../src-restored/ui/preactHooks.js": createHooksMock({ records, state }),
    "../src-cjs/19562__mod.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/63386_StatusAlertService.js": {
      __esModule: true,
      default: StatusAlertView,
      StatusAlertService: {
        showError(message, options) {
          records.push(["showError", message, normalize(options)])
          return `error:${message}`
        },
        showInfo(message, options) {
          records.push(["showInfo", message, normalize(options)])
          return `info:${message}`
        },
        showSuccess(message, options) {
          records.push(["showSuccess", message, normalize(options)])
          return `success:${message}`
        },
        showWarning(message, options) {
          records.push(["showWarning", message, normalize(options)])
          return `warning:${message}`
        },
        removeAlert(alertId) {
          records.push(["removeAlert", alertId])
        },
      },
    },
    "../src-restored/ui/StatusAlertExports.js": {
      default: StatusAlertView,
      StatusAlertService: {
        showError(message, options) {
          records.push(["showError", message, normalize(options)])
          return `error:${message}`
        },
        showInfo(message, options) {
          records.push(["showInfo", message, normalize(options)])
          return `info:${message}`
        },
        showSuccess(message, options) {
          records.push(["showSuccess", message, normalize(options)])
          return `success:${message}`
        },
        showWarning(message, options) {
          records.push(["showWarning", message, normalize(options)])
          return `warning:${message}`
        },
        removeAlert(alertId) {
          records.push(["removeAlert", alertId])
        },
      },
    },
    "../src-cjs/15853__mod.js": {},
    "../src-cjs/26604__mod.js": {},
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return key
        },
      },
    },
  }
}

function createSocial(records) {
  return {
    handlers: {},
    cleanups: [],
    on(eventName, handler) {
      records.push(["social.on", eventName, typeof handler])
      this.handlers[eventName] = handler
    },
    off(eventName, handler) {
      records.push(["social.off", eventName, typeof handler])
    },
  }
}

function createSocialMocks({ records, social, options }) {
  return {
    "../src-cjs/44656__mod.js": {
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.model && options.hasSocial) return social
        return null
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.model && options.hasSocial) return social
        return null
      },
    },
    "../src-cjs/30396__mod.js": createHooksMock({
      records,
      state: options.active,
      onCleanup(cleanup) {
        social.cleanups.push(cleanup)
      },
    }),
    "../src-restored/ui/preactHooks.js": createHooksMock({
      records,
      state: options.active,
      onCleanup(cleanup) {
        social.cleanups.push(cleanup)
      },
    }),
    "../src-cjs/48616__mod.js": {
      SocialEvents: {
        SHOW_OVERLAY: "SHOW_OVERLAY",
        HIDE_OVERLAY: "HIDE_OVERLAY",
      },
    },
    "../src-restored/core/SocialAppExports.js": {
      SocialEvents: {
        SHOW_OVERLAY: "SHOW_OVERLAY",
        HIDE_OVERLAY: "HIDE_OVERLAY",
      },
    },
    "../src-cjs/46262__mod.js": {},
  }
}

function createPauseMocks({ records, handlers, options }) {
  const uiContextMock = {
    useInjection(token) {
      records.push(["useInjection", tokenLabel(token)])
      if (token === TypesSocial.model) {
        return { showPauseOverlay: options.showPauseOverlay }
      }
      return undefined
    },
    useEventListener(eventName, handler, deps) {
      records.push(["useEventListener", eventName, typeof handler, normalize(deps)])
      handlers.set(eventName, handler)
    },
  }

  return {
    "../src-cjs/30396__mod.js": createHooksMock({ records, state: options.paused }),
    "../src-restored/ui/preactHooks.js": createHooksMock({ records, state: options.paused }),
    "../src-cjs/19562__mod.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/44656__mod.js": {
      CommonEvents: { PAUSE: "pause" },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.pauseAction) {
          return {
            run(value) {
              records.push(["pauseAction.run", value])
              return `pause:${value}`
            },
          }
        }
        return null
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      CommonEvents: { PAUSE: "pause" },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.pauseAction) {
          return {
            run(value) {
              records.push(["pauseAction.run", value])
              return `pause:${value}`
            },
          }
        }
        return null
      },
    },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-cjs/32115__mod.js": {},
  }
}

function createHooksMock({ records, state, onCleanup }) {
  return {
    useState(initialValue) {
      records.push(["useState", normalize(initialValue)])
      const currentState = state === undefined ? initialValue : state
      function setState(value) {
        const next = typeof value === "function" ? value(currentState) : value
        records.push(["setState", normalize(next)])
      }
      return [currentState, setState]
    },
    useEffect(effect, deps) {
      records.push(["useEffect", normalize(deps), typeof effect])
      const cleanup = effect()
      if (typeof cleanup === "function" && onCleanup) onCleanup(cleanup)
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
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (!vnode || typeof vnode !== "object") return vnode

  return {
    type: vnodeTypeName(vnode.type),
    key: vnode.key === undefined ? null : vnode.key,
    props: normalizeProps(vnode.props || {}),
  }
}

function normalizeProps(props) {
  const result = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") result.children = normalizeVNode(value)
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
