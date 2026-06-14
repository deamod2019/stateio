"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesNotification } = require("../src-cjs/86178__mod.js")
const original = {
  NotificationAction: require("../src-cjs/97158_NotificationAction.js").NotificationAction,
  NAStart: require("../src-cjs/92406_NAStart.js").NAStart,
  NAFinish: require("../src-cjs/33154_NAFinish.js").NAFinish,
  NALeave: require("../src-cjs/54799_NALeave.js").NALeave,
  NotificationsModule: require("../src-cjs/70669_NotificationsModule.js").NotificationsModule,
}
const restored = {
  ...require("../src-restored/core/NotificationActions.js"),
  NotificationsModule: require("../src-restored/core/NotificationsModule.js").NotificationsModule,
}

assert.deepEqual(
  publicPrototypeMembers(restored.NotificationAction),
  publicPrototypeMembers(original.NotificationAction),
  "NotificationAction public prototype differs",
)
assert.deepEqual(publicPrototypeMembers(restored.NAStart), publicPrototypeMembers(original.NAStart))
assert.deepEqual(publicPrototypeMembers(restored.NAFinish), publicPrototypeMembers(original.NAFinish))
assert.deepEqual(publicPrototypeMembers(restored.NALeave), publicPrototypeMembers(original.NALeave))

const cases = []

compareScenario("base payload uses play_turn template", async (deps) => {
  const action = makeAction(deps.NotificationAction)
  action.getImage = async () => "image://base"
  return action.getPayload()
})

compareScenario("emoji and replacements are applied to every locale", async (deps) => {
  deps.NotificationAction.EMOJI = "!"
  const action = makeAction(deps.NotificationAction, { name: "Ada", scoreSession: 17 })
  try {
    return action.getText()
  } finally {
    deps.NotificationAction.EMOJI = ""
  }
})

compareScenario("NAStart switches strategy to LAST", async (deps) => snapshotAction(makeAction(deps.NAStart)))
compareScenario("NALeave inherits the base notification defaults", async (deps) =>
  snapshotAction(makeAction(deps.NALeave)),
)

for (const [isWon, scoreSession, key] of [
  [true, 8, "play_won_0"],
  [true, 0, "play_won_1"],
  [false, 5, "play_won_2"],
  [false, 0, "play_won_3"],
]) {
  compareScenario(`NAFinish i18n key ${key}`, async (deps) => {
    const action = makeAction(deps.NAFinish, { scoreSession })
    action.data = { isWon }
    return {
      key: action.getI18NKey(),
      text: action.getText(),
      snapshot: snapshotAction(action),
    }
  })
}

compareScenario("execute sends payload and resolves without a return value", async (deps) => {
  const action = makeAction(deps.NotificationAction)
  const calls = []
  action.getPayload = async () => ({ text: "hello", strategy: "LAST" })
  action.social.notify = async (payload) => {
    calls.push(payload)
    return true
  }
  const result = await action.execute({ level: 3 })
  return { calls, data: action.data, result }
})

compareScenario("loadImage uses and bypasses cache like the original", async (deps) => {
  installImageHarness()
  deps.NotificationAction.IMAGES_CACHE = {}
  const action = new deps.NotificationAction()
  const first = await action.loadImage("asset-a")
  const second = await action.loadImage("asset-a")
  const third = await action.loadImage("asset-a", false)
  return {
    first,
    second,
    third,
    cache: deps.NotificationAction.IMAGES_CACHE,
    createdImages: globalThis.__imageHarness.createdImages,
    removedImages: globalThis.__imageHarness.removedImages,
  }
})

compareScenario("NotificationsModule binding topology", async (deps) => recordBindings(deps))

Promise.resolve()
  .then(async () => {
    for (const run of cases) await run()
    console.log(
      JSON.stringify(
        {
          module: "NotificationActions",
          scenarios: cases.length,
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

function compareScenario(name, run) {
  cases.push(async () => {
    const originalResult = normalize(await run(original))
    const restoredResult = normalize(await run(restored))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeAction(ActionClass, user = {}) {
  const action = new ActionClass()
  action.i18n = {
    play_turn: {
      default: "{username} turn {score}",
      localizations: { zh_CN: "{username} 分数 {score}" },
    },
    play_won_0: {
      default: "{username} won {score}",
      localizations: { zh_CN: "{username} 赢 {score}" },
    },
    play_won_1: {
      default: "{username} wins",
      localizations: { zh_CN: "{username} 赢了" },
    },
    play_won_2: {
      default: "{username} scored {score}",
      localizations: { zh_CN: "{username} 得分 {score}" },
    },
    play_won_3: {
      default: "beat {username}",
      localizations: { zh_CN: "打败 {username}" },
    },
  }
  action.social = {
    me: {
      name: user.name ?? "Player",
      scoreSession: user.scoreSession ?? 12,
    },
    notify: async () => true,
  }
  return action
}

function snapshotAction(action) {
  return {
    action: action.action,
    cta: action.cta,
    notification: action.notification,
    strategy: action.strategy,
    template: action.template,
  }
}

function recordBindings(deps) {
  const records = []
  deps.NotificationsModule.registry((token) => {
    records.push(["bind", tokenLabel(token)])
    return {
      to(target) {
        records.push(["to", notificationTargetLabel(target, deps)])
      },
      toConstantValue(value) {
        records.push(["toConstantValue", Object.keys(value)])
      },
    }
  })
  return records
}

function notificationTargetLabel(target, deps) {
  if (target === deps.NAStart) return "NAStart"
  if (target === deps.NALeave) return "NALeave"
  if (target === deps.NAFinish) return "NAFinish"
  return target.name
}

function installImageHarness() {
  const harness = {
    createdImages: [],
    removedImages: [],
    dataUrls: 0,
  }
  globalThis.__imageHarness = harness
  globalThis.Image = class Image {
    constructor() {
      this.crossOrigin = ""
      this.height = 9
      this.width = 16
      this.style = {}
      harness.createdImages.push(this)
    }

    addEventListener(type, handler) {
      if (type === "load") setTimeout(handler, 0)
    }
  }
  globalThis.document.body.appendChild = () => {}
  globalThis.document.body.removeChild = (image) => {
    harness.removedImages.push(image.src)
  }
  globalThis.document.createElement = (tag) => {
    if (tag !== "canvas") return { style: {} }
    return {
      width: 0,
      height: 0,
      getContext: () => ({ drawImage() {} }),
      toDataURL: () => `data:image/jpeg;base64,${++harness.dataUrls}`,
    }
  }
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype).sort()
}

function tokenLabel(token) {
  if (token === TypesNotification.i18n) return "TypesNotification.i18n"
  if (token === TypesNotification.start) return "TypesNotification.start"
  if (token === TypesNotification.leave) return "TypesNotification.leave"
  if (token === TypesNotification.finish) return "TypesNotification.finish"
  return String(token)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}
