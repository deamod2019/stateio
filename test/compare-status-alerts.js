"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/29518_StoreActionTypes.js",
  "../src-restored/ui/StatusAlertStore.js",
  "../src-cjs/54768__mod.js",
  "../src-restored/ui/StatusAlertHelpers.js",
  "../src-cjs/63386_StatusAlertService.js",
  "../src-restored/ui/StatusAlertExports.js",
  "../src-cjs/82288_StatusAlertView.js",
  "../src-restored/ui/StatusAlertView.js",
  "../src-cjs/84077_StatusAlertContainer.js",
  "../src-restored/ui/StatusAlertContainer.js",
  "../src-cjs/95252_StatusAlertItem.js",
  "../src-restored/ui/StatusAlertItem.js",
  "../src-cjs/99061_StatusAlertService.js",
  "../src-restored/ui/StatusAlertService.js",
  "../src-restored/ui/StatusAlertOptions.js",
]

Promise.resolve()
  .then(async () => {
    compareHelpers()
    compareStore()
    compareService()
    compareExports()
    compareContainer()
    compareItemRender()
    await compareItemLifecycle()
    compareView()

    console.log(
      JSON.stringify(
        {
          module: "StatusAlert",
          scenarios: 8,
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

function compareHelpers() {
  const original = freshRequire("../src-cjs/54768__mod.js")
  const restored = freshRequire("../src-restored/ui/StatusAlertHelpers.js")

  for (const type of ["success", "error", "warning", "info", "unknown"]) {
    assert.equal(restored.alertIcon(type), original.alertIcon(type), `alertIcon ${type}`)
    assert.equal(restored.boxClassName(type), original.boxClassName(type), `boxClassName ${type}`)
  }
}

function compareStore() {
  const original = exerciseStore("../src-cjs/29518_StoreActionTypes.js")
  const restored = exerciseStore("../src-restored/ui/StatusAlertStore.js")
  assert.deepEqual(restored, original, "store reducer and subscriptions differ")
}

function compareService() {
  const original = exerciseService("original")
  const restored = exerciseService("restored")
  assert.deepEqual(restored, original, "service dispatch sequence differs")
}

function compareExports() {
  const original = freshRequire("../src-cjs/63386_StatusAlertService.js")
  const restored = freshRequire("../src-restored/ui/StatusAlertExports.js")

  assert.deepEqual(
    {
      keys: Object.keys(restored).sort(),
      defaultType: typeof restored.default,
      serviceType: typeof restored.StatusAlertService.showInfo,
    },
    {
      keys: Object.keys(original).sort(),
      defaultType: typeof original.default,
      serviceType: typeof original.StatusAlertService.showInfo,
    },
    "barrel export shape differs",
  )
}

function compareContainer() {
  const original = exerciseContainer("../src-cjs/84077_StatusAlertContainer.js", "StatusAlertContainer")
  const restored = exerciseContainer("../src-restored/ui/StatusAlertContainer.js", "StatusAlertContainer")
  assert.deepEqual(restored, original, "container vnode differs")
}

function compareItemRender() {
  const alert = {
    id: "alert-1",
    message: { code: "E_FAIL" },
    type: "warning",
    options: { withCloseIcon: false },
  }

  const original = exerciseItemRender("../src-cjs/95252_StatusAlertItem.js", "StatusAlertItem", alert)
  const restored = exerciseItemRender("../src-restored/ui/StatusAlertItem.js", "StatusAlertItem", alert)
  assert.deepEqual(restored, original, "item render differs")
}

async function compareItemLifecycle() {
  const original = await exerciseItemLifecycle("../src-cjs/95252_StatusAlertItem.js", "StatusAlertItem")
  const restored = await exerciseItemLifecycle("../src-restored/ui/StatusAlertItem.js", "StatusAlertItem")
  assert.deepEqual(restored, original, "item lifecycle differs")
}

function compareView() {
  const original = exerciseView("../src-cjs/82288_StatusAlertView.js", "StatusAlertView")
  const restored = exerciseView("../src-restored/ui/StatusAlertView.js", "StatusAlertView")
  assert.deepEqual(restored, original, "view subscription/render differs")
}

function exerciseStore(request) {
  deleteTargetModules()
  const module = require(request)
  const store = module.default
  const { StoreActionTypes } = module
  const records = []
  const unsubscribe = store.subscribe(() => {
    records.push(["listener", normalize(store.getState())])
  })

  store.dispatch({
    type: StoreActionTypes.AddAlert,
    payload: { id: "a", message: "A", type: "info", options: {} },
  })
  store.dispatch({
    type: StoreActionTypes.AddAlert,
    payload: { id: "b", message: "B", type: "error", options: {} },
  })
  store.dispatch({ type: StoreActionTypes.RemoveAlert, payload: "a" })
  unsubscribe()
  store.dispatch({ type: StoreActionTypes.RemoveAllAlerts })

  return normalize({
    actionTypes: StoreActionTypes,
    records,
    finalState: store.getState(),
  })
}

function exerciseService(which) {
  const records = []
  const storeMock = {
    __esModule: true,
    StoreActionTypes: {
      AddAlert: "ADD_ALERT",
      RemoveAlert: "REMOVE_ALERT",
      RemoveAllAlerts: "REMOVE_ALL_ALERTS",
    },
    default: {
      dispatch(action) {
        records.push(normalizeAction(action))
      },
    },
  }

  const mocks =
    which === "original"
      ? {
          "../src-cjs/29518_StoreActionTypes.js": storeMock,
        }
      : {
          "../src-restored/ui/StatusAlertStore.js": storeMock,
        }

  return withStableIds(() => {
    return withMockedModules(mocks, () => {
      const request =
        which === "original"
          ? "../src-cjs/99061_StatusAlertService.js"
          : "../src-restored/ui/StatusAlertService.js"
      const { StatusAlertServiceClass } = freshRequire(request)
      const service = new StatusAlertServiceClass()

      const id1 = service.showSuccess("ok", { removeAllBeforeShow: false, sticky: true })
      const id2 = service.showError("bad")
      service.removeAlert("manual-id")
      service.removeAllAlerts()

      return normalize({
        id1: normalizeId(id1),
        id2: normalizeId(id2),
        records,
      })
    })
  })
}

function exerciseContainer(request, exportName) {
  deleteTargetModules()
  const ComponentClass = require(request)[exportName]
  const component = new ComponentClass({
    alerts: [
      { id: "a", message: "A", type: "info", options: {} },
      { id: "b", message: "B", type: "error", options: {} },
    ],
  })
  return normalizeVNode(component.render())
}

function exerciseItemRender(request, exportName, alert) {
  const mocks = statusAlertServiceMocks([])

  return withMockedModules(mocks, () => {
    const ComponentClass = freshRequire(request)[exportName]
    const component = new ComponentClass({ alert })
    return normalizeVNode(component.render())
  })
}

function exerciseItemLifecycle(request, exportName) {
  const records = []
  const alertNode = {
    classList: {
      add(className) {
        records.push(["class.add", className])
      },
      remove(className) {
        records.push(["class.remove", className])
      },
    },
  }
  const timerRestore = installTimerMock(records)
  const mocks = statusAlertServiceMocks(records)

  return withMockedModules(mocks, async () => {
    try {
      const ComponentClass = freshRequire(request)[exportName]
      const component = new ComponentClass({
        alert: {
          id: "alert-1",
          message: "Done",
          type: "success",
          options: { autoHideTime: 12 },
        },
      })
      component.statusAlert = alertNode
      component.componentDidMount()
      await component.showAlert()
      await component.removeAlert()
      return normalize(records)
    } finally {
      timerRestore()
    }
  })
}

function exerciseView(request, exportName) {
  const records = []
  let subscriber
  const storeMock = {
    __esModule: true,
    default: {
      getState() {
        records.push(["getState"])
        return [{ id: "a", message: "A", type: "info", options: {} }]
      },
      subscribe(handler) {
        records.push(["subscribe", typeof handler])
        subscriber = handler
        return () => {
          records.push(["unsubscribe"])
        }
      },
    },
  }

  const mocks = {
    "../src-cjs/29518_StoreActionTypes.js": storeMock,
    "../src-restored/ui/StatusAlertStore.js": storeMock,
  }

  return withMockedModules(mocks, () => {
    const rafRestore = installAnimationFrameMock(records)
    try {
      const ComponentClass = freshRequire(request)[exportName]
      const component = new ComponentClass({})
      component.setState = (nextState) => {
        records.push(["setState", normalize(nextState)])
        component.state = nextState
      }
      const renderedBefore = normalizeVNode(component.render())
      subscriber()
      const renderedAfter = normalizeVNode(component.render())
      component.componentWillUnmount()
      return normalize({ records, renderedBefore, renderedAfter })
    } finally {
      rafRestore()
    }
  })
}

function statusAlertServiceMocks(records) {
  const serviceMock = {
    StatusAlertService: {
      removeAlert(id) {
        records.push(["removeAlert", id])
      },
    },
  }

  return {
    "../src-cjs/99061_StatusAlertService.js": serviceMock,
    "../src-restored/ui/StatusAlertService.js": serviceMock,
  }
}

function installTimerMock(records) {
  const originalSetTimeout = globalThis.setTimeout
  globalThis.setTimeout = (callback, delay) => {
    records.push(["setTimeout", delay === undefined ? "__undefined__" : delay])
    if (typeof callback === "function") callback()
    return `timer:${delay === undefined ? "default" : delay}`
  }

  return () => {
    globalThis.setTimeout = originalSetTimeout
  }
}

function installAnimationFrameMock(records) {
  const originalRequest = globalThis.requestAnimationFrame
  const originalWindowRequest = globalThis.window.requestAnimationFrame
  const originalCancel = globalThis.window.cancelAnimationFrame
  let nextId = 0

  function requestAnimationFrameMock(callback) {
    nextId += 1
    const id = `frame:${nextId}`
    records.push(["requestAnimationFrame", id])
    callback()
    return id
  }

  globalThis.requestAnimationFrame = requestAnimationFrameMock
  globalThis.window.requestAnimationFrame = requestAnimationFrameMock
  globalThis.window.cancelAnimationFrame = (id) => {
    records.push(["cancelAnimationFrame", id])
  }

  return () => {
    globalThis.requestAnimationFrame = originalRequest
    globalThis.window.requestAnimationFrame = originalWindowRequest
    globalThis.window.cancelAnimationFrame = originalCancel
  }
}

function withStableIds(run) {
  const OriginalDate = globalThis.Date
  const originalRandom = Math.random
  const originalPerformance = globalThis.performance
  let nowCalls = 0

  class FixedDate extends OriginalDate {
    constructor(...args) {
      super(...(args.length ? args : [1700000000000]))
    }

    static now() {
      return 1700000000000
    }

    getTime() {
      return 1700000000000
    }
  }

  globalThis.Date = FixedDate
  Math.random = () => 0.42
  globalThis.performance = {
    now() {
      nowCalls += 1
      return nowCalls
    },
  }

  try {
    return run()
  } finally {
    globalThis.Date = OriginalDate
    Math.random = originalRandom
    globalThis.performance = originalPerformance
  }
}

function normalizeAction(action) {
  return normalize({
    type: action.type,
    payload:
      action.payload && typeof action.payload === "object" && "id" in action.payload
        ? {
            ...action.payload,
            id: normalizeId(action.payload.id),
          }
        : action.payload,
  })
}

function normalizeId(id) {
  assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  return "__uuid__"
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

  function restore() {
    deleteTargetModules()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }

  try {
    const result = run()
    if (result && typeof result.then === "function") {
      return result.finally(restore)
    }
    restore()
    return result
  } catch (error) {
    restore()
    throw error
  }
}

function freshRequire(request) {
  delete require.cache[require.resolve(request)]
  return require(request)
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    try {
      delete require.cache[require.resolve(target)]
    } catch {
      // Some targets are intentionally absent in older snapshots.
    }
  }
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (vnode && typeof vnode === "object") {
    return {
      type: typeof vnode.type === "function" ? "[function]" : vnode.type,
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

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}
