"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const parser = require("../src-cjs/13137__mod.js")
const restoredParser = require("../src-restored/core/LevelParser.js")
const { LoadLevelAction: OriginalLoadLevelAction } = require("../src-cjs/27588_LoadLevelAction.js")
const { LoadLevelAction: RestoredLoadLevelAction } = require("../src-restored/core/LoadLevelAction.js")

const originalEnv = {
  fetch: globalThis.fetch,
  DOMParser: window.DOMParser,
  parseLevelSVG: parser.parseLevelSVG,
  restoredParseLevelSVG: restoredParser.parseLevelSVG,
}

let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(RestoredLoadLevelAction),
  publicPrototypeMembers(OriginalLoadLevelAction),
  "LoadLevelAction prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("adds svg suffix for bare level ids", { levelId: "Europe" })
    await compareScenario("keeps existing svg suffix", { levelId: "Asia.svg" })
    await compareScenario("missing level id becomes undefined.svg", { callWithoutArg: true })
    await compareScenario("fetch failure is wrapped as Error", {
      levelId: "Broken",
      fetchMode: "throw",
    })

    console.log(
      JSON.stringify(
        {
          module: "LoadLevelAction",
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
  .finally(restoreEnvironment)

async function compareScenario(name, options) {
  restoreEnvironment()
  const originalResult = normalize(await exerciseAction(OriginalLoadLevelAction, options))
  restoreEnvironment()
  const restoredResult = normalize(await exerciseAction(RestoredLoadLevelAction, options))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAction(Klass, options) {
  const records = []
  currentHarness = { records, fetchMode: options.fetchMode || "success" }
  patchEnvironment()

  const action = new Klass()
  try {
    const result = options.callWithoutArg
      ? await action.execute()
      : await action.execute(options.levelId)
    return { records, result }
  } catch (error) {
    return {
      records,
      error: {
        name: error.name,
        message: error.message,
      },
    }
  }
}

function patchEnvironment() {
  globalThis.fetch = async function fetch(url) {
    currentHarness.records.push(["fetch", url])
    if (currentHarness.fetchMode === "throw") throw new Error("network down")
    return {
      async text() {
        currentHarness.records.push(["response.text"])
        return "<svg id=\"fixture\"></svg>"
      },
    }
  }
  window.DOMParser = class DOMParser {
    parseFromString(text, type) {
      currentHarness.records.push(["DOMParser.parseFromString", text, type])
      return { parsed: true, text, type }
    }
  }
  parser.parseLevelSVG = function parseLevelSVG(document) {
    currentHarness.records.push(["parseLevelSVG", document])
    return { id: "parsed-level", fromDocument: document.parsed }
  }
  restoredParser.parseLevelSVG = function parseLevelSVG(document) {
    currentHarness.records.push(["parseLevelSVG", document])
    return { id: "parsed-level", fromDocument: document.parsed }
  }
}

function restoreEnvironment() {
  globalThis.fetch = originalEnv.fetch
  window.DOMParser = originalEnv.DOMParser
  parser.parseLevelSVG = originalEnv.parseLevelSVG
  restoredParser.parseLevelSVG = originalEnv.restoredParseLevelSVG
  currentHarness = null
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
