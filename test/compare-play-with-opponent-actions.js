"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { SOCIAL_POPUP } = require("../src-cjs/48616__mod.js")
const { PlayWithOpponentAction: OriginalPlayWithOpponentAction } = require("../src-cjs/49295_PlayWithOpponentAction.js")
const { PlayWithOpponentActionSIO: OriginalPlayWithOpponentActionSIO } = require("../src-cjs/65897_PlayWithOpponentActionSIO.js")
const { PlayWithOpponentAction: RestoredPlayWithOpponentAction } = require("../src-restored/core/PlayWithOpponentAction.js")
const { PlayWithOpponentActionSIO: RestoredPlayWithOpponentActionSIO } = require("../src-restored/core/PlayWithOpponentActionSIO.js")

const originalDeps = {
  PlayWithOpponentAction: OriginalPlayWithOpponentAction,
  PlayWithOpponentActionSIO: OriginalPlayWithOpponentActionSIO,
}
const restoredDeps = {
  PlayWithOpponentAction: RestoredPlayWithOpponentAction,
  PlayWithOpponentActionSIO: RestoredPlayWithOpponentActionSIO,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PlayWithOpponentAction),
  publicPrototypeMembers(originalDeps.PlayWithOpponentAction),
  "PlayWithOpponentAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PlayWithOpponentActionSIO),
  publicPrototypeMembers(originalDeps.PlayWithOpponentActionSIO),
  "PlayWithOpponentActionSIO prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("base accepted flow", (deps) =>
      exercise(deps.PlayWithOpponentAction, SOCIAL_POPUP.ACCEPTED),
    )
    await compareScenario("base cancelled flow", (deps) =>
      exercise(deps.PlayWithOpponentAction, SOCIAL_POPUP.CANCELLED),
    )
    await compareScenario("sio accepted flow", (deps) =>
      exercise(deps.PlayWithOpponentActionSIO, SOCIAL_POPUP.ACCEPTED),
    )
    await compareScenario("sio rejected flow", (deps) =>
      exercise(deps.PlayWithOpponentActionSIO, SOCIAL_POPUP.REJECTED),
    )

    console.log(
      JSON.stringify(
        {
          modules: ["PlayWithOpponentAction", "PlayWithOpponentActionSIO"],
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

async function compareScenario(name, run) {
  const originalResult = normalize(await run(originalDeps))
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exercise(Klass, popupResult) {
  const records = []
  const action = new Klass()

  action.social = {
    async playWith(opponent, includeCurrentContext) {
      records.push(["social.playWith", opponent, includeCurrentContext])
      return popupResult
    },
  }
  action.levelStart = {
    async run() {
      records.push(["levelStart.run"])
    },
  }
  action.model = {
    startStage() {
      records.push(["model.startStage"])
    },
  }

  const result = await action.execute({ userId: "opponent-1" })
  return { records, result }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
