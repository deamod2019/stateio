"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesUI } = require("../src-cjs/86178__mod.js")

const TARGETS = [
  "../src-cjs/94776_Popups.js",
  "../src-cjs/99836_Screens.js",
  "../src-restored/ui/Popups.js",
  "../src-restored/ui/Screens.js",
  "../src-restored/ui/UIHooks.js",
  "../src-restored/ui/preactRuntime.js",
]

const modules = [
  {
    name: "Popups",
    eventName: TypesUI.events.POPUP,
    original: () => require("../src-cjs/94776_Popups.js").Popups,
    restored: () => require("../src-restored/ui/Popups.js").Popups,
  },
  {
    name: "Screens",
    eventName: TypesUI.events.SCREEN_CHANGED,
    original: () => require("../src-cjs/99836_Screens.js").Screens,
    restored: () => require("../src-restored/ui/Screens.js").Screens,
  },
]

for (const mod of modules) {
  compareScenario(`${mod.name} registers route event and updates state`, mod, {
    state: null,
    eventPayload: { id: `${mod.name}.target`, props: { value: 7 } },
  })
  compareScenario(`${mod.name} renders current component`, mod, {
    state: { Current: ExistingComponent, CurrentProps: { ready: true } },
    eventPayload: { id: `${mod.name}.next`, props: { value: 9 } },
  })
  compareScenario(`${mod.name} handles null route target`, mod, {
    state: { Current: ExistingComponent, CurrentProps: { ready: false } },
    eventPayload: { id: null, props: undefined },
  })
}

console.log(
  JSON.stringify(
    {
      modules: modules.map((mod) => mod.name),
      scenarios: modules.length * 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, mod, options) {
  const originalResult = exerciseContainer(mod.original, mod.eventName, options)
  const restoredResult = exerciseContainer(mod.restored, mod.eventName, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

function exerciseContainer(loadContainer, expectedEventName, options) {
  const records = []
  const state =
    options.state ||
    {
      Current: null,
      CurrentProps: null,
    }
  const mocks = createMocks({ records, state, eventPayload: options.eventPayload })

  return withMockedModules(mocks, () => {
    const Container = loadContainer()
    const vnode = Container()
    return normalize({
      vnode: normalizeVNode(vnode),
      records: records.map((record) =>
        record[0] === "useEventListener" && record[1] === expectedEventName
          ? ["useEventListener", "expected-event", record[2]]
          : record,
      ),
    })
  })
}

function createMocks({ records, state, eventPayload }) {
  function ResolvedComponent() {}
  const uiContextMock = {
    useEventListener(eventName, handler, deps) {
      records.push(["useEventListener", eventName, deps])
      handler(eventPayload)
    },
  }

  return {
    "../src-cjs/30396__mod.js": {
      useState(initializer) {
        const initialValue = typeof initializer === "function" ? initializer() : initializer
        records.push(["useState", summarizeState(initialValue)])
        return [
          state,
          (next) => {
            records.push(["setState", summarizeState(next)])
          },
        ]
      },
    },
    "../src-restored/ui/preactHooks.js": {
      useState(initializer) {
        const initialValue = typeof initializer === "function" ? initializer() : initializer
        records.push(["useState", summarizeState(initialValue)])
        return [
          state,
          (next) => {
            records.push(["setState", summarizeState(next)])
          },
        ]
      },
    },
    "../src-cjs/19562__mod.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/44656__mod.js": {
      lazyGet(token) {
        records.push(["lazyGet", token])
        return token === null ? null : ResolvedComponent
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      lazyGet(token) {
        records.push(["lazyGet", token])
        return token === null ? null : ResolvedComponent
      },
    },
    "../src-cjs/6400__mod.js": {
      h(type, props) {
        records.push(["h", componentName(type), normalizeProps(props)])
        return { type, props }
      },
    },
    "../src-restored/ui/preactRuntime.js": {
      h(type, props) {
        records.push(["h", componentName(type), normalizeProps(props)])
        return { type, props }
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
    deleteTargetModules()
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

function ExistingComponent() {}

function summarizeState(value) {
  return {
    Current: componentName(value?.Current),
    CurrentProps: normalizeProps(value?.CurrentProps),
  }
}

function normalizeVNode(vnode) {
  if (!vnode) return vnode
  return {
    type: componentName(vnode.type),
    props: normalizeProps(vnode.props),
  }
}

function normalizeProps(props) {
  if (props === undefined) return "__undefined__"
  if (props === null) return null
  const result = {}
  for (const [key, value] of Object.entries(props)) result[key] = value
  return result
}

function componentName(component) {
  if (!component) return component === null ? null : "__undefined__"
  if (typeof component === "function") return component.name || "[anonymous]"
  return String(component)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "function") return componentName(item)
      return item
    }),
  )
}
