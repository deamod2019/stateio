"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesCore, TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const TARGETS = [
  "../src-cjs/8189_ShareLevelResultPopup.js",
  "../src-restored/ui/ShareLevelResultPopup.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("share image renders share/no-thanks branch", {
      shareImage: "data:image/png;base64,share",
      invisible: false,
      controlType: "NoThanksButton",
      triggerType: "ShareComponent",
      sharedValue: true,
    })
    await compareScenario("empty share image renders continue branch", {
      shareImage: "",
      invisible: false,
      controlType: "ContinueButton",
      triggerType: "ContinueButton",
      sharedValue: false,
    })
    await compareScenario("missing share image hides share component", {
      props: {},
      invisible: true,
      controlType: "ContinueButton",
      triggerType: "ContinueButton",
      sharedValue: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "ShareLevelResultPopup",
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
  const social = { me: { id: "me", name: "Player" } }
  const dispatcher = {
    emit(eventName, payload) {
      records.push(["dispatcher.emit", eventName, payload])
    },
  }
  const mocks = createMocks({ records, model, social, dispatcher, invisible: options.invisible })

  return withMockedModules(mocks, async () => {
    const { ShareLevelResultPopup } = loadModule()
    const props =
      options.props ||
      {
        shareImage: options.shareImage,
        onContinue(value) {
          records.push(["onContinue", value])
          return Promise.resolve(`continued:${value}`)
        },
      }

    const vnode = ShareLevelResultPopup(props)
    const normalizedVNode = normalizeVNode(vnode)

    assert.notEqual(findVNodeByType(vnode, "ShareComponent"), null, "share component was not rendered")
    assert.notEqual(findVNodeByType(vnode, options.controlType), null, `${options.controlType} was not rendered`)

    const trigger = findVNodeByType(vnode, options.triggerType)
    const click =
      options.triggerType === "ShareComponent"
        ? trigger.props.onShare
        : trigger.props.onClick
    const clickResult = await click(options.sharedValue)

    return normalize({
      vnode: normalizedVNode,
      records,
      clickResult,
    })
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/8189_ShareLevelResultPopup.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/ui/ShareLevelResultPopup.js")
}

function createMocks({ records, model, social, dispatcher, invisible }) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesCore.dispatcher) return dispatcher
    if (token === TypesGame.model) return model
    if (token === TypesSocial.model) return social
    return undefined
  }

  function setInvisible(value) {
    records.push(["setInvisible", value])
  }

  function visibilityEffect(delay) {
    records.push(["visibilityEffect", delay])
    return [invisible, setInvisible]
  }

  function ShareComponent() {}
  function CoinsIndicator() {}
  function NoThanksButton() {}
  function Winner() {}
  function WinRays() {}
  function WinStars() {}
  function ContinueButton() {}
  const uiContextMock = {
    UIEvents: { POPUP: "UIEvents.POPUP" },
    ShareComponent,
    useInjection,
    visibilityEffect,
  }

  return {
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/86602_NoThanksButton.js": { NoThanksButton },
    "../src-cjs/56612_Winner.js": { Winner },
    "../src-cjs/94571_WinRays.js": { WinRays },
    "../src-cjs/57103_WinStars.js": { WinStars },
    "../src-cjs/53527_ContinueButton.js": { ContinueButton },
    "../src-cjs/44656__mod.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
        },
      },
    },
    "../src-restored/core/WaitAction.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
        },
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
  }
}

function createModel() {
  return {
    cookie: { coins: 444 },
    screenshots: ["screen-1", "screen-2"],
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
