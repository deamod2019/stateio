"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesUI } = require("../src-cjs/86178__mod.js")

const TARGETS = [
  "../src-cjs/94732_SetupUIAction.js",
  "../src-restored/core/SetupUIAction.js",
  "../src-restored/ui/preactRuntime.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("renders into explicit container and binds root", {
      platform: "ya",
      explicitContainer: true,
      odr: false,
    })
    await compareScenario("renders into default canvas parent", {
      platform: "web",
      explicitContainer: false,
      odr: false,
    })
    await compareScenario("vk odr build adds odr class", {
      platform: "vk",
      explicitContainer: true,
      odr: true,
    })
    await compareScenario("missing base only binds root", {
      platform: "gd",
      explicitContainer: true,
      odr: true,
      rootHasBase: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "SetupUIAction",
          scenarios: 4,
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

async function compareScenario(name, options) {
  const originalResult = await exerciseAction(loadOriginal, options)
  const restoredResult = await exerciseAction(loadRestored, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAction(loadModule, options) {
  const records = []
  const root = createRoot(records, options.rootHasBase !== false)
  const container = { id: "explicit-container" }
  const defaultParent = { id: "default-parent" }
  const mocks = createMocks({ records, root, odr: options.odr })

  return withMockedModules(mocks, async () => {
    const originalGetElementById = document.getElementById
    document.getElementById = (id) => {
      records.push(["document.getElementById", id])
      return { parentElement: defaultParent }
    }

    try {
      const { SetupUIAction } = loadModule()
      function UIRootClass() {}

      const action = new SetupUIAction()
      action.social = { socialPlatform: options.platform }
      action.UIRootClass = UIRootClass

      const result = options.explicitContainer
        ? await action.execute(container)
        : await action.execute()

      return normalize({
        records,
        result,
      })
    } finally {
      document.getElementById = originalGetElementById
    }
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/94732_SetupUIAction.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/core/SetupUIAction.js")
}

function createMocks({ records, root, odr }) {
  const fakeCore = {
    Action: function Action() {},
    CANVAS_ID: "game-canvas",
    IS_ODR_BUILD: odr,
    di: {
      bind(token) {
        records.push(["di.bind", tokenLabel(token)])
        return {
          toConstantValue(value) {
            records.push(["di.toConstantValue", summarizeRoot(value)])
          },
        }
      },
    },
    lazyInject() {
      return function lazyInjectDecorator() {}
    },
  }

  const fakePreact = {
    h(type, props) {
      records.push(["h", functionName(type), normalizeProps(props)])
      return { type, props }
    },
    render(vnode, target) {
      records.push(["render", functionName(vnode.type), target?.id])
      vnode.props.ref(root)
    },
  }

  return {
    "../src-cjs/44656__mod.js": fakeCore,
    "../src-restored/core/RuntimeCore.js": fakeCore,
    "../src-cjs/6400__mod.js": fakePreact,
    "../src-restored/ui/preactRuntime.js": fakePreact,
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

function createRoot(records, hasBase) {
  const root = { id: "ui-root" }
  if (hasBase) {
    root.base = {
      classList: {
        add(className) {
          records.push(["classList.add", className])
        },
      },
    }
  }
  return root
}

function normalizeProps(props) {
  return Object.fromEntries(
    Object.entries(props || {}).map(([key, value]) => [
      key,
      typeof value === "function" ? "[function]" : value,
    ]),
  )
}

function functionName(value) {
  return typeof value === "function" ? value.name || "[anonymous]" : String(value)
}

function summarizeRoot(root) {
  return root?.id || "[root]"
}

function tokenLabel(token) {
  if (token === TypesUI.root) return "TypesUI.root"
  return String(token)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "function") return "[function]"
      return item
    }),
  )
}
