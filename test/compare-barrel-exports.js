"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installReflectDecorateShim()

compareBarrel("RuntimeActionExports", "../src-cjs/29503__mod.js", "../src-restored/core/RuntimeActionExports.js", {
  Action: "../src-restored/core/Action.js",
  LazyAction: "../src-restored/core/LazyAction.js",
  ParallelAction: "../src-restored/core/ParallelAction.js",
  SequenceAction: "../src-restored/core/SequenceAction.js",
  WaitAction: "../src-restored/core/WaitAction.js",
})

compareBarrel("UIFlowActionExports", "../src-cjs/20167__mod.js", "../src-restored/core/UIFlowActionExports.js", {
  EndScreenAction: "../src-restored/core/EndScreenAction.js",
  PauseAction: "../src-restored/core/PauseAction.js",
  SetupUIAction: "../src-restored/core/SetupUIAction.js",
  StartScreenAction: "../src-restored/core/StartScreenAction.js",
})

compareBarrel("AppAuthExports", "../src-cjs/98109__mod.js", "../src-restored/core/AppExports.js", {
  LoginAction: "../src-restored/core/LoginAction.js",
  AuthActionBase: "../src-restored/core/AuthActionBase.js",
})

compareBarrel("AppExports", "../src-cjs/4421__mod.js", "../src-restored/core/AppExports.js", {
  PageModel: "../src-restored/core/PageModel.js",
  LoginAction: "../src-restored/core/LoginAction.js",
  AuthActionBase: "../src-restored/core/AuthActionBase.js",
  AppModel: "../src-restored/core/AppModel.js",
  AppModule: "../src-restored/core/AppModule.js",
})

console.log(
  JSON.stringify(
    {
      module: "barrel exports",
      scenarios: 4,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareBarrel(name, originalRequest, restoredRequest, expectedTargets) {
  const original = require(originalRequest)
  const restored = require(restoredRequest)
  assert.deepEqual(
    Object.keys(restored).filter((key) => key in expectedTargets),
    Object.keys(original),
    `${name} export keys differ`,
  )

  for (const [exportName, targetRequest] of Object.entries(expectedTargets)) {
    assert.equal(restored[exportName], require(targetRequest)[exportName], `${name}.${exportName} target differs`)
  }
}

function installReflectDecorateShim() {
  Reflect.decorate ??= function decorate(decorators, target, propertyKey, descriptor) {
    let result = descriptor
    for (let index = decorators.length - 1; index >= 0; index--) {
      const decorator = decorators[index]
      const next =
        propertyKey === undefined
          ? decorator(target)
          : decorator(target, propertyKey, result)
      if (next !== undefined) result = next
    }
    return propertyKey === undefined ? result || target : result
  }
}
