"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const TARGETS = [
  "../src-cjs/62482_BattleResults.js",
  "../src-restored/ui/BattleResults.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("stage ranking uses passed stage score", {
      passedStage: 1,
      isLevelFinished: false,
    })
    await compareScenario("finished ranking uses total score", {
      passedStage: 1,
      isLevelFinished: true,
    })
    await compareScenario("missing level-finished prop defaults to stage ranking", {
      passedStage: 2,
    })

    console.log(
      JSON.stringify(
        {
          module: "BattleResults",
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

async function compareScenario(name, props) {
  const originalResult = await exerciseBattleResults(loadOriginal, props)
  const restoredResult = await exerciseBattleResults(loadRestored, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseBattleResults(loadModule, props) {
  const records = []
  const model = createGameModel(records)
  const social = createSocialModel()
  const mocks = createMocks({ records, model, social })

  return withMockedModules(mocks, async () => {
    const { BattleResults } = loadModule()
    const vnode = BattleResults(props)
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/62482_BattleResults.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/ui/BattleResults.js")
}

function createMocks({ records, model, social }) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesSocial.model) return social
    if (token === TypesGame.model) return model
    return undefined
  }

  function LeaderBoardItem() {}

  return {
    "../src-cjs/83430_InversifyContext.js": { useInjection },
    "../src-restored/ui/UIContext.js": { useInjection },
    "../src-cjs/90211_LeaderBoardItem.js": { LeaderBoardItem },
    "../src-restored/ui/LeaderBoardItem.js": { LeaderBoardItem },
  }
}

function createSocialModel() {
  const me = makePlayer({
    id: "me",
    name: "Me",
    photo: "me.png",
  })
  const highStage = makePlayer({
    id: "high-stage",
    name: "High Stage",
    photo: "stage.png",
    history: { c: 2, l: "Asia", s: [1, 9, 3] },
  })
  const highTotal = makePlayer({
    id: "high-total",
    name: "High Total",
    photo: "total.png",
    history: { c: 2, l: "Asia", s: [8, 2, 8] },
  })
  const missingExtra = makePlayer({
    id: "missing-extra",
    name: "Missing Extra",
    photo: "missing.png",
    history: null,
  })

  return {
    me,
    contextPlayers: [missingExtra, highTotal, me, highStage],
  }
}

function createGameModel(records) {
  return {
    currentContinent: {
      stageLevel: 3,
      data: {
        id: "Europe",
        stages: [{}, {}, {}],
      },
      getHistory() {
        records.push(["getHistory"])
        return { c: 3, l: "Europe", s: [4, 5, 6] }
      },
    },
  }
}

function makePlayer({ id, name, photo, history }) {
  return {
    id,
    name,
    photo,
    scores: {
      getEntry(type) {
        return {
          getExtraData() {
            return history ? JSON.stringify(history) : undefined
          },
        }
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
    if ("id" in value && "name" in value && "score" in value) {
      return {
        id: value.id,
        name: value.name,
        image_url: value.image_url,
        score: value.score,
        originId: value.origin?.id,
      }
    }
    const result = {}
    for (const [key, item] of Object.entries(value)) {
      if (key !== "scores" && key !== "origin") result[key] = normalizeValue(item)
    }
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
  if (token === TypesSocial.model) return "TypesSocial.model"
  if (token === TypesGame.model) return "TypesGame.model"
  return String(token)
}
