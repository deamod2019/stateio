"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/11617_DebugLevelPicker.js",
  "../src-cjs/39068_DebugPanelNotifications.js",
  "../src-cjs/64920_DebugPanel.js",
  "../src-restored/ui/DebugLevelPicker.js",
  "../src-restored/ui/DebugPanelNotifications.js",
  "../src-restored/ui/DebugPanel.js",
]

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

async function main() {
  compareDebugPanel()
  compareDebugPanelNotifications()
  await compareDebugLevelPicker()

  console.log(
    JSON.stringify(
      {
        module: "DebugPanel",
        scenarios: 3,
        status: "ok",
      },
      null,
      2,
    ),
  )
}

function compareDebugPanel() {
  const original = exercisePanel("../src-cjs/64920_DebugPanel.js", "DebugPanel")
  const restored = exercisePanel("../src-restored/ui/DebugPanel.js", "DebugPanel")
  assert.deepEqual(restored, original, "DebugPanel vnode differs")
}

function exercisePanel(request, exportName) {
  const records = []
  const mocks = createBaseMocks(records)
  mocks["../src-cjs/11617_DebugLevelPicker.js"] = { DebugLevelPicker: namedComponent("DebugLevelPicker") }
  mocks["../src-cjs/39068_DebugPanelNotifications.js"] = {
    DebugPanelNotifications: namedComponent("DebugPanelNotifications"),
  }
  mocks["../src-restored/ui/DebugLevelPicker.js"] = { DebugLevelPicker: namedComponent("DebugLevelPicker") }
  mocks["../src-restored/ui/DebugPanelNotifications.js"] = {
    DebugPanelNotifications: namedComponent("DebugPanelNotifications"),
  }

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const moduleExports = require(request)
    return normalizeVNode(moduleExports[exportName]())
  })
}

function compareDebugPanelNotifications() {
  const original = exerciseNotifications("../src-cjs/39068_DebugPanelNotifications.js")
  const restored = exerciseNotifications("../src-restored/ui/DebugPanelNotifications.js")
  assert.deepEqual(restored, original, "DebugPanelNotifications behavior differs")
}

function exerciseNotifications(request) {
  const records = []
  const mocks = createBaseMocks(records)
  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { DebugPanelNotifications } = require(request)
    const vnode = DebugPanelNotifications()
    const button = collectVNodesByType(vnode, "Button")[0]
    const clickResult = button.props.onClick()
    return normalize({ vnode: normalizeVNode(vnode), clickResult, records })
  })
}

function compareDebugLevelPicker() {
  return Promise.all([
    exerciseLevelPicker("../src-cjs/11617_DebugLevelPicker.js"),
    exerciseLevelPicker("../src-restored/ui/DebugLevelPicker.js"),
  ]).then(([original, restored]) => {
    assert.deepEqual(restored, original, "DebugLevelPicker behavior differs")
  })
}

function exerciseLevelPicker(request) {
  const records = []
  const environment = createLevelPickerEnvironment(records)
  const mocks = createBaseMocks(records, environment)

  return withMockedModules(mocks, () => {
    deleteTargetModules()
    const { DebugLevelPicker } = require(request)
    const vnode = DebugLevelPicker()
    const select = collectVNodesByType(vnode, "select")[0]
    const fileDrop = collectVNodesByType(vnode, "FileDropArea")[0]

    select.props.onChange(createSelectEvent("continent-a-stage-1"))
    select.props.onChange(createSelectEvent("continent-b-stage-1"))

    const beforeDrop = normalize({ vnode: normalizeVNode(vnode), records })
    fileDrop.props.handleDrop([{ name: "custom-level.svg" }, { name: "notes.txt" }])

    return drainMicrotasks().then(() =>
      normalize({
        beforeDrop,
        afterDrop: summarizeDropRecords(records),
        levels: Object.keys(environment.model.levels).sort(),
      }),
    )
  })
}

function createBaseMocks(records, environment = {}) {
  const notificationAction = {
    run() {
      records.push(["notification.run"])
      return "notification:sent"
    },
  }
  const runtime = {
    di: {
      get(token) {
        records.push(["di.get", tokenLabel(token)])
        if (token === "TypesGame.model") return environment.model
        if (token === "TypesGame.levelModel") return environment.levelModel
        if (token === "TypesFlow.LevelStart") return environment.levelStartAction
        return environment.model || {}
      },
    },
    lazyGet(token) {
      records.push(["lazyGet", tokenLabel(token)])
      return token === "TypesNotification.start" ? notificationAction : undefined
    },
  }
  const coreTypes = {
    TypesFlow: { LevelStart: "TypesFlow.LevelStart" },
    TypesNotification: { start: "TypesNotification.start" },
  }
  const typesGame = {
    TypesGame: {
      model: "TypesGame.model",
      levelModel: "TypesGame.levelModel",
    },
  }
  const gameModel = {
    GameModel: {
      LEVELS_PREDEFINED: ["continent-a-stage-1", "continent-b-stage-1"],
    },
  }
  const hooks = {
    useState(initialValue) {
      records.push(["useState", initialValue])
      return [
        initialValue,
        (value) => {
          records.push(["forceUpdate", value])
        },
      ]
    },
    useCallback(callback, deps) {
      records.push(["useCallback", deps])
      return callback
    },
  }
  const fileDrop = { FileDropArea: namedComponent("FileDropArea") }
  const uiContext = {
    Button: namedComponent("Button"),
  }
  const uiControls = {
    Button: namedComponent("Button"),
  }

  return {
    "../src-cjs/44656__mod.js": runtime,
    "../src-restored/core/RuntimeCore.js": runtime,
    "../src-cjs/86178__mod.js": coreTypes,
    "../src-restored/core/CoreTypes.js": coreTypes,
    "../src-cjs/95781_TypesGame.js": typesGame,
    "../src-restored/core/TypesGame.js": typesGame,
    "../src-cjs/94572_GameModel.js": gameModel,
    "../src-restored/core/GameModel.js": gameModel,
    "../src-cjs/30396__mod.js": hooks,
    "../src-restored/ui/preactHooks.js": hooks,
    "../src-cjs/11812_FileDropArea.js": fileDrop,
    "../src-restored/ui/FileDropArea.js": fileDrop,
    "../src-cjs/83430_InversifyContext.js": uiContext,
    "../src-restored/ui/UIControls.js": uiControls,
    "../src-cjs/13137__mod.js": environment.parser || { parseLevelSVG() {} },
    "../src-restored/core/LevelParser.js": environment.parser || { parseLevelSVG() {} },
  }
}

function createLevelPickerEnvironment(records) {
  const model = {
    currentContinent: { data: { id: "continent-a" } },
    levels: {
      "continent-a-custom": { data: { id: "continent-a-custom" } },
    },
    disposeCurrentLevel() {
      records.push(["disposeCurrentLevel"])
    },
  }
  const levelStartAction = {
    run(levelId) {
      records.push(["levelStart.run", levelId])
      return `start:${levelId}`
    },
  }
  const levelModel = {
    init(levelData) {
      records.push(["levelModel.init", levelData.id])
      return { data: { id: levelData.id } }
    },
  }
  const parser = {
    parseLevelSVG(document) {
      records.push(["parseLevelSVG", document.kind])
      return { id: "custom-level" }
    },
  }

  installFileReader(records)
  installDOMParser(records)

  return { model, levelModel, levelStartAction, parser }
}

function installFileReader(records) {
  global.FileReader = class FakeFileReader {
    readAsText(file, encoding) {
      records.push(["readAsText", file.name, encoding])
      Promise.resolve().then(() => {
        this.onload({ target: { result: `<svg data-file="${file.name}" />` } })
      })
    }
  }
}

function installDOMParser(records) {
  global.window.DOMParser = class FakeDOMParser {
    parseFromString(text, type) {
      records.push(["parseFromString", text, type])
      return { kind: "parsed-svg" }
    }
  }
}

function createSelectEvent(value) {
  return {
    currentTarget: {
      selectedIndex: 0,
      item() {
        return { value }
      },
    },
  }
}

function namedComponent(name) {
  function Component(props) {
    return { type: name, props: props || {}, key: null }
  }
  Component.displayName = name
  Object.defineProperty(Component, "name", { value: name })
  return Component
}

function withMockedModules(mocks, run) {
  const originals = new Map()
  const restore = () => {
    deleteTargetModules()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }

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
    const result = run()
    if (result && typeof result.then === "function") return result.finally(restore)
    restore()
    return result
  } catch (error) {
    restore()
    throw error
  }
}

function deleteTargetModules() {
  for (const target of TARGETS) delete require.cache[require.resolve(target)]
}

function collectVNodesByType(vnode, type) {
  if (!vnode || typeof vnode !== "object") return []
  const nodeType = typeof vnode.type === "function" ? vnode.type.displayName || vnode.type.name : vnode.type
  const matches = nodeType === type ? [vnode] : []
  const children = vnode.props?.children
  const childList = Array.isArray(children) ? children : [children]
  for (const child of childList) matches.push(...collectVNodesByType(child, type))
  return matches
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (!vnode || typeof vnode !== "object") return normalizeValue(vnode)

  return {
    type: typeof vnode.type === "function" ? "[function]" : vnode.type,
    key: vnode.key ?? null,
    props: normalizeProps(vnode.props || {}),
  }
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
  return JSON.parse(JSON.stringify(value, (_key, item) => {
    if (typeof item === "function") return "[function]"
    if (item === undefined) return "__undefined__"
    return item
  }))
}

function summarizeDropRecords(records) {
  return {
    readAsText: records.filter((record) => record[0] === "readAsText").map((record) => record.slice(1)),
    parseLevelSVG: records.filter((record) => record[0] === "parseLevelSVG").map((record) => record[1]),
    levelModelInit: records.filter((record) => record[0] === "levelModel.init").map((record) => record[1]),
    levelStartRun: records.filter((record) => record[0] === "levelStart.run").map((record) => record[1]),
    disposeCount: records.filter((record) => record[0] === "disposeCurrentLevel").length,
    forceUpdateCount: records.filter((record) => record[0] === "forceUpdate").length,
  }
}

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  return token
}

function drainMicrotasks() {
  return Promise.resolve().then(() => Promise.resolve()).then(() => Promise.resolve())
}
