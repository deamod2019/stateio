"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesCore, TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const TARGETS = [
  "../src-cjs/78199_BattleResultsPopup.js",
  "../src-restored/ui/BattleResultsPopup.js",
  "../src-restored/ui/BattleResults.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("win popup renders continue branch", {
      win: true,
      invisible: false,
      continueType: "ContinueButton",
      expectedContinueValue: true,
    })
    await compareScenario("lose popup renders retry branch", {
      win: false,
      invisible: true,
      continueType: "Button",
      expectedContinueValue: false,
    })
    await compareScenario("missing win prop defaults to lose branch", {
      props: {},
      invisible: false,
      continueType: "Button",
      expectedContinueValue: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "BattleResultsPopup",
          scenarios: 3,
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
  const originalResult = await exercisePopup(loadOriginal, options)
  const restoredResult = await exercisePopup(loadRestored, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exercisePopup(loadModule, options) {
  const records = []
  const model = createModel()
  const dispatcher = {
    emit(eventName, payload) {
      records.push(["dispatcher.emit", eventName, payload])
    },
  }
  const mocks = createMocks({ records, model, dispatcher, invisible: options.invisible })

  return withMockedModules(mocks, async () => {
    const { BattleResultsPopup } = loadModule()
    const props =
      options.props ||
      {
        win: options.win,
        onContinue(value) {
          records.push(["onContinue", value])
          return Promise.resolve(`continued:${value}`)
        },
      }

    const vnode = BattleResultsPopup(props)
    const normalizedVNode = normalizeVNode(vnode)

    assert.equal(
      findVNodeByType(vnode, options.continueType) !== null,
      true,
      `${options.continueType} branch was not rendered`,
    )

    const control = findVNodeByType(vnode, options.continueType)
    const clickResult = await control.props.onClick()

    return normalize({
      vnode: normalizedVNode,
      records,
      clickResult,
    })
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/78199_BattleResultsPopup.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/ui/BattleResultsPopup.js")
}

function createMocks({ records, model, dispatcher, invisible }) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesCore.dispatcher) return dispatcher
    if (token === TypesGame.model) return model
    if (token === TypesSocial.model) return { me: {}, contextPlayers: [] }
    return undefined
  }

  function visibilityEffect(delay) {
    records.push(["visibilityEffect", delay])
    return [invisible]
  }

  function Button() {}
  function ContinueButton() {}
  function CoinsIndicator() {}
  function BattleResults() {}
  const uiContextMock = {
    UIEvents: { POPUP: "UIEvents.POPUP" },
    Button,
    useInjection,
    visibilityEffect,
  }

  return {
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/53527_ContinueButton.js": { ContinueButton },
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/62482_BattleResults.js": { BattleResults },
    "../src-restored/ui/BattleResults.js": { BattleResults },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
  }
}

function createModel() {
  return {
    cookie: { coins: 321 },
    currentContinent: {
      stageLevel: 4,
      isFinished: false,
      data: { id: "Europe" },
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

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      if (typeof item === "function") return "[function]"
      return item
    }),
  )
}

function tokenLabel(token) {
  if (token === TypesCore.dispatcher) return "TypesCore.dispatcher"
  if (token === TypesGame.model) return "TypesGame.model"
  if (token === TypesSocial.model) return "TypesSocial.model"
  return String(token)
}
