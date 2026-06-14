"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/68719__mod.js")
const restored = require("../src-restored/core/TournamentActions.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "Tournament action export keys differ")

compareClassShape("TournamentPostScoreAction")
compareClassShape("TournamentCreateAction")
compareClassShape("TournamentShareAction")

;(async () => {
  await comparePostScore()
  await compareCreate()
  await compareShare()

  console.log(
    JSON.stringify(
      {
        module: "TournamentActions",
        exports: Object.keys(restored).length,
        scenarios: 6,
        status: "ok",
      },
      null,
      2,
    ),
  )
})().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

function compareClassShape(name) {
  assert.deepEqual(
    Object.getOwnPropertyNames(restored[name].prototype),
    Object.getOwnPropertyNames(original[name].prototype),
    `${name} prototype differs`,
  )
  assert.equal(typeof restored[name], typeof original[name], `${name} export type differs`)
}

async function comparePostScore() {
  for (const platform of ["fb", "web"]) {
    const originalHarness = makeHarness(original.TournamentPostScoreAction, platform)
    const restoredHarness = makeHarness(restored.TournamentPostScoreAction, platform)
    installFBInstant(originalHarness.records)
    const originalResult = await originalHarness.action.execute()
    installFBInstant(restoredHarness.records)
    const restoredResult = await restoredHarness.action.execute()
    assert.equal(restoredResult, originalResult, `post result differs for ${platform}`)
    assert.deepEqual(restoredHarness.records, originalHarness.records, `post records differ for ${platform}`)
  }
}

async function compareCreate() {
  for (const platform of ["fb", "web"]) {
    const originalHarness = makeHarness(original.TournamentCreateAction, platform)
    const restoredHarness = makeHarness(restored.TournamentCreateAction, platform)
    originalHarness.action.generateTournamentImage = async () => "image-container"
    restoredHarness.action.generateTournamentImage = async () => "image-container"
    installFBInstant(originalHarness.records)
    const originalResult = await originalHarness.action.execute()
    installFBInstant(restoredHarness.records)
    const restoredResult = await restoredHarness.action.execute()
    assert.equal(restoredResult, originalResult, `create result differs for ${platform}`)
    assert.deepEqual(restoredHarness.records, originalHarness.records, `create records differ for ${platform}`)
  }
}

async function compareShare() {
  for (const platform of ["fb", "web"]) {
    const originalHarness = makeHarness(original.TournamentShareAction, platform)
    const restoredHarness = makeHarness(restored.TournamentShareAction, platform)
    installFBInstant(originalHarness.records)
    const originalResult = await originalHarness.action.execute()
    installFBInstant(restoredHarness.records)
    const restoredResult = await restoredHarness.action.execute()
    assert.equal(restoredResult, originalResult, `share result differs for ${platform}`)
    assert.deepEqual(restoredHarness.records, originalHarness.records, `share records differ for ${platform}`)
  }
}

function makeHarness(ActionClass, socialPlatform) {
  const records = []
  const action = new ActionClass()
  action.social = { socialPlatform }
  action.model = {
    currentContinent: {
      data: { id: "map-1" },
      stageLevel: 2,
      getTotalScore() {
        records.push(["getTotalScore"])
        return 123
      },
      getHistory() {
        records.push(["getHistory"])
        return ["h1", "h2"]
      },
    },
  }
  action.rootView = {
    app: {
      renderer: {
        extract: {
          base64(container) {
            records.push(["base64", container])
            return "image-data"
          },
        },
      },
    },
  }

  return { action, records }
}

function installFBInstant(records) {
  global.FBInstant = {
    tournament: {
      postScoreAsync(score) {
        records.push(["postScoreAsync", score])
        return Promise.resolve(true)
      },
      createAsync(payload) {
        records.push(["createAsync", payload])
        return Promise.resolve(true)
      },
      shareAsync(payload) {
        records.push(["shareAsync", payload])
        return Promise.resolve(true)
      },
    },
  }
}
