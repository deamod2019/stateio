"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesFlow, TypesSocial, TypesUI } = require("../src-cjs/86178__mod.js")
const { ScoreType } = require("../src-cjs/48616__mod.js")
const { HTMLUIModule: OriginalHTMLUIModule } = require("../src-cjs/70051_HTMLUIModule.js")
const { EndScreenAction: OriginalEndScreenAction } = require("../src-cjs/35567_EndScreenAction.js")
const { HTMLUIModule: RestoredHTMLUIModule } = require("../src-restored/ui/HTMLUIModule.js")
const { UIRoot: RestoredUIRoot } = require("../src-restored/ui/UIRoot.js")
const { SetupUIAction: RestoredSetupUIAction } = require("../src-restored/core/SetupUIAction.js")
const { StartScreenAction: RestoredStartScreenAction } = require("../src-restored/core/StartScreenAction.js")
const { EndScreenAction: RestoredEndScreenAction } = require("../src-restored/core/EndScreenAction.js")

assert.deepEqual(
  publicPrototypeMembers(RestoredEndScreenAction),
  publicPrototypeMembers(OriginalEndScreenAction),
  "EndScreenAction prototype surface differs",
)

compareModuleBindings()

Promise.resolve()
  .then(async () => {
    await compareScenario("group route opens leaderboard and onClose restarts level", {
      inGroup: true,
      won: false,
    })
    await compareScenario("won route opens win screen with random next match", {
      inGroup: false,
      won: true,
    })
    await compareScenario("lost solo route opens game over with random next match", {
      inGroup: false,
      inSolo: true,
      won: false,
    })
    await compareScenario("lost non-solo route opens game over without next match", {
      inGroup: false,
      inSolo: false,
      won: false,
    })

    console.log(
      JSON.stringify(
        {
          modules: ["EndScreenAction", "HTMLUIModule"],
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
  const originalResult = normalize(await exerciseAction(OriginalEndScreenAction, options))
  const restoredResult = normalize(await exerciseAction(RestoredEndScreenAction, options))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAction(Klass, options) {
  const records = []
  const action = new Klass()
  action.social = {
    inGroup: !!options.inGroup,
    inSolo: options.inSolo !== undefined ? options.inSolo : true,
    opponent: { id: "opponent-1" },
    contextPlayers: [{ id: "p1" }, { id: "p2" }],
    getRandomOpponent() {
      records.push(["social.getRandomOpponent"])
      return { id: "next-opponent" }
    },
  }
  action.levelStart = {
    run() {
      records.push(["levelStart.run"])
      return "level-start-result"
    },
  }
  action.dispatch = (eventName, payload) => {
    records.push(["dispatch", eventName, summarizePayload(payload)])
    if (payload?.props?.onClose) {
      records.push(["onClose.result", payload.props.onClose()])
    }
  }

  const result =
    options.hasOwnProperty("won") ? await action.execute(options.won) : await action.execute()
  return { records, result }
}

function summarizePayload(payload) {
  return {
    id: payload.id,
    props: {
      users: payload.props?.users,
      scoreType: payload.props?.scoreType === ScoreType.CONTEXT ? "ScoreType.CONTEXT" : payload.props?.scoreType,
      overlay: payload.props?.overlay,
      opponent: payload.props?.opponent,
      nextMatch: payload.props?.nextMatch,
      onClose: typeof payload.props?.onClose,
    },
  }
}

function compareModuleBindings() {
  const originalBindings = recordBindings(OriginalHTMLUIModule)
  const restoredBindings = recordBindings(RestoredHTMLUIModule)

  assert.deepEqual(
    restoredBindings.records,
    originalBindings.records,
    "restored HTMLUIModule binding topology differs",
  )

  for (const [token, originalTarget] of originalBindings.targets) {
    const restoredTarget = restoredBindings.targets.get(token)
    if (token === TypesUI.uiRootClass) {
      assert.equal(restoredTarget, RestoredUIRoot)
    } else if (token === TypesUI.setupAction) {
      assert.equal(restoredTarget, RestoredSetupUIAction)
    } else if (token === TypesUI.startScreenAction) {
      assert.equal(restoredTarget, RestoredStartScreenAction)
    } else if (token === TypesUI.endScreenAction) {
      assert.equal(restoredTarget, RestoredEndScreenAction)
    } else {
      assert.equal(restoredTarget, originalTarget, `unexpected HTMLUIModule target for ${tokenLabel(token)}`)
    }
  }
}

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry(
    (token) => {
      records.push(["bind", topologyTokenLabel(token)])
      return makeSyntax(records, targets, token)
    },
    (token) => records.push(["unbind", topologyTokenLabel(token)]),
    (token) => {
      records.push(["isBound", topologyTokenLabel(token)])
      return false
    },
    (token) => {
      records.push(["rebind", topologyTokenLabel(token)])
      return makeSyntax(records, targets, token)
    },
  )

  return { records, targets }
}

function makeSyntax(records, targets, token) {
  return {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return this
    },
    toConstantValue(target) {
      records.push(["toConstantValue"])
      targets.set(token, target)
      return this
    },
  }
}

function tokenLabel(token) {
  if (token === TypesFlow.LevelStart) return "TypesFlow.LevelStart"
  if (token === TypesSocial.model) return "TypesSocial.model"
  if (token === TypesUI.endScreenAction) return "TypesUI.endScreenAction"
  return String(token)
}

function topologyTokenLabel(token) {
  if (typeof token === "function") return "FunctionToken"
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

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
