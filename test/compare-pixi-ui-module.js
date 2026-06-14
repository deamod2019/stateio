"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Types2D } = require("../src-cjs/86178__mod.js")
const { PIXIUIModule: OriginalPIXIUIModule } = require("../src-cjs/90399_PIXIUIModule.js")
const { PIXIUIModule: RestoredPIXIUIModule } = require("../src-restored/core/PIXIUIModule.js")
const originalPixiUi = require("../src-cjs/80672__mod.js")
const restoredPixiUi = require("../src-restored/core/PixiUIExports.js")
const { PreloadAssetsAction } = require("../src-restored/core/PreloadAssetsAction.js")
const { RootView } = require("../src-restored/core/RootView.js")
const { RootMediator } = require("../src-restored/core/RootMediator.js")
const { ScreenshotAction } = require("../src-restored/core/ScreenshotAction.js")

const originalBindings = recordBindings(OriginalPIXIUIModule)
const restoredBindings = recordBindings(RestoredPIXIUIModule)

assert.deepEqual(
  restoredBindings.records,
  originalBindings.records,
  "restored PIXIUIModule binding topology differs",
)

const expectedRestoredTargets = new Map([
  [Types2D.screenContainer, restoredPixiUi.ScreenContainer],
  [Types2D.overlay, restoredPixiUi.Overlay],
  [Types2D.finger, restoredPixiUi.FingerView],
  [Types2D.preloadAssetsAction, PreloadAssetsAction],
  [Types2D.screenShotAction, ScreenshotAction],
  [Types2D.spinner, restoredPixiUi.Spinner],
  [Types2D.userPic, restoredPixiUi.UserPic],
  [Types2D.circleAvatar, restoredPixiUi.CircleAvatar],
  [Types2D.rootView, RootView],
])

assert.notEqual(restoredPixiUi.ScreenContainer, originalPixiUi.ScreenContainer)
assert.notEqual(restoredPixiUi.Overlay, originalPixiUi.Overlay)
assert.notEqual(restoredPixiUi.Spinner, originalPixiUi.Spinner)
assert.notEqual(RootView, require("../src-cjs/93710_RootView.js").RootView)
assert.notEqual(RootMediator, require("../src-cjs/65743_RootMediator.js").RootMediator)

for (const [token, target] of expectedRestoredTargets) {
  assert.equal(
    restoredBindings.targets.get(token),
    target,
    `restored PIXIUIModule target mismatch for ${String(token)}`,
  )
}

const rootBinding = restoredBindings.activationTargets.get(Types2D.rootView)
assert.equal(rootBinding, RootMediator)

for (const token of [Types2D.blackSquareGraphics, Types2D.whiteSquareGraphics]) {
  const factory = restoredBindings.dynamicValues.get(token)
  assert.equal(typeof factory, "function", `missing dynamic graphics factory for ${String(token)}`)
  assert.ok(factory(), `dynamic graphics factory returned empty value for ${String(token)}`)
}

console.log(
  JSON.stringify(
    {
      module: "PIXIUIModule",
      bindingEvents: restoredBindings.records.length,
      restoredTargetsChecked: expectedRestoredTargets.size,
      dynamicFactoriesChecked: 2,
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
  const activationTargets = new Map()

  containerModule.registry(
    makeBind("bind", records, targets, dynamicValues, activationTargets),
    (token) => records.push(["unbind", topologyTokenLabel(token)]),
    (token) => {
      records.push(["isBound", topologyTokenLabel(token)])
      return false
    },
    makeBind("rebind", records, targets, dynamicValues, activationTargets),
  )

  return { records, targets, dynamicValues, activationTargets }
}

function makeBind(kind, records, targets, dynamicValues, activationTargets) {
  return function bind(token) {
    records.push([kind, topologyTokenLabel(token)])
    return makeSyntax(records, targets, dynamicValues, activationTargets, token)
  }
}

function makeSyntax(records, targets, dynamicValues, activationTargets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
    toDynamicValue(factory) {
      records.push(["toDynamicValue", typeof factory])
      dynamicValues.set(token, factory)
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
    onActivation(callback) {
      records.push(["onActivation", typeof callback])
      const fakeBindingContext = {
        container: {
          isBound() {
            return false
          },
          bind() {
            return {
              toSelf() {
                return undefined
              },
            }
          },
          get() {
            return RootMediator
          },
        },
      }
      const viewCtor = targets.get(token)
      const target = viewCtor ? { mediator: undefined } : {}
      callback(fakeBindingContext, target)
      activationTargets.set(token, target.mediator)
      return syntax
    },
  }
  return syntax
}

function topologyTokenLabel(token) {
  if (typeof token === "function") return "FunctionToken"
  return String(token)
}
