"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesSocial, TypesApp } = require("../src-cjs/86178__mod.js")
const { SocialModuleYandex: OriginalSocialModuleYandex } = require("../src-cjs/14562_SocialModuleYandex.js")
const { GameModuleYandex: OriginalGameModuleYandex } = require("../src-cjs/89286_GameModuleYandex.js")
const { SocialModuleYandex: RestoredSocialModuleYandex } = require("../src-restored/core/SocialModuleYandex.js")
const { GameModuleYandex: RestoredGameModuleYandex } = require("../src-restored/core/GameModuleYandex.js")
const { LeaderboardGlobalYandex } = require("../src-restored/core/LeaderboardGlobalYandex.js")
const { LeaderboardGlobalExternal } = require("../src-restored/core/LeaderboardGlobalExternal.js")
const { UserDataYandex } = require("../src-restored/core/UserDataYandex.js")
const { PaymentsModelYandex } = require("../src-restored/core/PaymentsModelYandex.js")
const { UserYandex } = require("../src-restored/core/UserYandex.js")
const { UserScore } = require("../src-restored/core/UserScore.js")
const { SocialModelYandex } = require("../src-restored/core/SocialModelYandex.js")
const { AdsModule } = require("../src-restored/core/AdsModule.js")

const originalSocial = recordBindings(OriginalSocialModuleYandex)
const restoredSocial = recordBindings(RestoredSocialModuleYandex)

assert.deepEqual(
  restoredSocial.records,
  originalSocial.records,
  "restored SocialModuleYandex binding topology differs",
)

for (const [token, originalTarget] of originalSocial.targets) {
  const restoredTarget = restoredSocial.targets.get(token)
  if (token === TypesSocial.leaderboardGlobal) {
    assert.equal(restoredTarget, LeaderboardGlobalYandex, "global leaderboard should use restored Yandex adapter")
  } else if (token === TypesSocial.leaderboardContext) {
    assert.equal(
      restoredTarget,
      LeaderboardGlobalExternal,
      "context leaderboard should use restored external adapter",
    )
  } else if (token === TypesSocial.cookie) {
    assert.equal(restoredTarget, UserDataYandex, "social cookie should use restored Yandex user-data adapter")
  } else if (token === TypesSocial.payments) {
    assert.equal(restoredTarget, PaymentsModelYandex, "social payments should use restored Yandex payments adapter")
  } else if (token === TypesSocial.user) {
    assert.equal(restoredTarget, UserYandex, "social user should use restored Yandex user wrapper")
  } else if (token === TypesSocial.userScore) {
    assert.equal(restoredTarget, UserScore, "social userScore should use restored score store")
  } else if (token === TypesSocial.model) {
    assert.equal(restoredTarget, SocialModelYandex, "social model should use restored Yandex social model")
  } else {
    assert.equal(restoredTarget, originalTarget, `unexpected social target for ${tokenLabel(token)}`)
  }
}

assert.equal(restoredSocial.targets.get(TypesSocial.model), SocialModelYandex)
assert.equal(restoredSocial.targets.get(TypesSocial.leaderboardGlobal), LeaderboardGlobalYandex)
assert.equal(restoredSocial.targets.get(TypesSocial.leaderboardContext), LeaderboardGlobalExternal)
assert.equal(restoredSocial.targets.get(TypesSocial.cookie), UserDataYandex)
assert.equal(restoredSocial.targets.get(TypesSocial.payments), PaymentsModelYandex)
assert.equal(restoredSocial.targets.get(TypesSocial.user), UserYandex)
assert.equal(restoredSocial.targets.get(TypesSocial.userScore), UserScore)

const originalDummy = exerciseDummyUserFactory(originalSocial.dynamicValues.get(TypesSocial.dummyUser))
const restoredDummy = exerciseDummyUserFactory(restoredSocial.dynamicValues.get(TypesSocial.dummyUser))
assert.deepEqual(restoredDummy, originalDummy, "restored dummy user dynamic value differs")

const originalGame = recordYandexGameModule(
  OriginalGameModuleYandex,
  require("../src-cjs/44656__mod.js").di,
)
const restoredGame = recordYandexGameModule(
  RestoredGameModuleYandex,
  require("../src-restored/core/RuntimeCore.js").di,
)

assert.deepEqual(restoredGame.records, originalGame.records, "restored GameModuleYandex topology differs")
assert.equal(restoredGame.loads[0][0], AdsModule, "GameModuleYandex should load restored AdsModule")
assert.equal(
  restoredGame.loads[1][1],
  RestoredSocialModuleYandex,
  "GameModuleYandex should load restored SocialModuleYandex",
)
assert.equal(restoredGame.bindTargets.get(TypesApp.authAction), originalGame.bindTargets.get(TypesApp.authAction))

console.log(
  JSON.stringify(
    {
      module: "SocialModuleYandex/GameModuleYandex",
      socialBindingEvents: restoredSocial.records.length,
      gameEvents: restoredGame.records.length,
      restoredTargetsChecked: 8,
      status: "ok",
    },
    null,
    2,
  ),
)

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()
  const dynamicValues = new Map()

  containerModule.registry(
    (token) => {
      records.push(["bind", topologyTokenLabel(token)])
      return makeBindSyntax(records, targets, dynamicValues, token)
    },
    (token) => records.push(["unbind", topologyTokenLabel(token)]),
    (token) => {
      records.push(["isBound", topologyTokenLabel(token)])
      return false
    },
    (token) => {
      records.push(["rebind", topologyTokenLabel(token)])
      return makeBindSyntax(records, targets, dynamicValues, token)
    },
  )

  return { records, targets, dynamicValues }
}

function makeBindSyntax(records, targets, dynamicValues, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
    toDynamicValue(factory) {
      records.push(["toDynamicValue"])
      dynamicValues.set(token, factory)
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
  }
  return syntax
}

function exerciseDummyUserFactory(factory) {
  const records = []
  let created = 0
  const context = {
    container: {
      get(token) {
        records.push(["container.get", topologyTokenLabel(token)])
        created += 1
        return {
          id: `dummy-${created}`,
          init(data) {
            records.push([
              "dummy.init",
              {
                id: data.getUniqueID(),
                photoType: typeof data.getPhoto(),
              },
            ])
          },
        }
      },
    },
  }
  const first = factory(context)
  const second = factory(context)
  return {
    same: first === second,
    records,
  }
}

function recordYandexGameModule(containerModule, di) {
  const records = []
  const loads = []
  const bindTargets = new Map()
  const originalLoad = di.load
  const originalBind = di.bind

  di.load = (...modules) => {
    records.push(["di.load", modules.length])
    loads.push(modules)
  }
  di.bind = (token) => {
    records.push(["di.bind", topologyTokenLabel(token)])
    return {
      to(target) {
        records.push(["to"])
        bindTargets.set(token, target)
        return this
      },
    }
  }

  try {
    containerModule.registry()
  } finally {
    di.load = originalLoad
    di.bind = originalBind
  }

  return { records, loads, bindTargets }
}

function tokenLabel(token) {
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}

function topologyTokenLabel(token) {
  if (typeof token === "function") return "FunctionToken"
  return String(token)
}
