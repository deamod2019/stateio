"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/44656__mod.js")
const restored = require("../src-restored/core/RuntimeCore.js")

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored).sort(), Object.keys(original).sort(), "exports differ")

    assert.equal(restored.CANVAS_ID, original.CANVAS_ID, "CANVAS_ID differs")
    assert.equal(restored.GAME_SCRIPT_ORIGIN, original.GAME_SCRIPT_ORIGIN, "GAME_SCRIPT_ORIGIN differs")
    assert.equal(restored.IS_ODR_BUILD, original.IS_ODR_BUILD, "IS_ODR_BUILD differs")
    assert.equal(restored.ODR_BUILD_ORIGIN, original.ODR_BUILD_ORIGIN, "ODR_BUILD_ORIGIN differs")
    assert.deepEqual(restored.CommonEvents, original.CommonEvents, "CommonEvents differs")

    assert.notEqual(restored.di, original.di, "restored DI container should be independent")
    assert.equal(typeof restored.lazyInject, typeof original.lazyInject, "lazyInject type differs")
    assert.equal(typeof restored.lazyGet, typeof original.lazyGet, "lazyGet type differs")
    assert.equal(typeof restored.lazyRun, typeof original.lazyRun, "lazyRun type differs")
    assert.deepEqual(
      await exerciseContainerHelpers(restored, "restored.runtime"),
      await exerciseContainerHelpers(original, "original.runtime"),
      "DI helper behavior differs",
    )

    assert.deepEqual(
      publicPrototypeMembers(restored.LazyAction),
      publicPrototypeMembers(original.LazyAction),
      "LazyAction prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restored.ParallelAction),
      publicPrototypeMembers(original.ParallelAction),
      "ParallelAction prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restored.SequenceAction),
      publicPrototypeMembers(original.SequenceAction),
      "SequenceAction prototype differs",
    )

    assert.deepEqual(
      await exerciseSmallActions(restored),
      await exerciseSmallActions(original),
      "small action behavior differs",
    )

    assert.deepEqual(
      normalizeCoreModuleBindings(moduleBindingSnapshot(restored.CoreModule)),
      normalizeCoreModuleBindings(moduleBindingSnapshot(original.CoreModule)),
      "CoreModule binding shape differs",
    )
    assert.equal(
      moduleBindingSnapshot(restored.CoreModule)[1][2],
      "EventDispatcher",
      "CoreModule should bind restored EventDispatcher",
    )
    assert.equal(
      moduleBindingSnapshot(restored.CoreModule)[3][2],
      "GlobalEventProvider",
      "CoreModule should bind restored GlobalEventProvider",
    )

    console.log(
      JSON.stringify(
        {
          module: "RuntimeCore",
          exports: Object.keys(restored).length,
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

function publicPrototypeMembers(constructor) {
  return Object.getOwnPropertyNames(constructor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}

async function exerciseSmallActions(runtime) {
  const records = []
  const lazyPromise = Promise.resolve("async-result")
  const lazySyncResult = await new runtime.LazyAction((data) => {
    records.push(["lazy.sync", data])
    return `sync:${data}`
  }).run("input")
  const lazyAsyncResult = await new runtime.LazyAction((data) => {
    records.push(["lazy.async", data])
    return lazyPromise
  }).run("input")

  const actions = [
    { run: () => records.push(["parallel.1"]) || "one" },
    { run: () => records.push(["parallel.2"]) || Promise.resolve("two") },
  ]
  const parallelResult = await new runtime.ParallelAction().run(actions)

  const sequenceActions = [
    { run: () => records.push(["sequence.1"]) },
    { run: () => records.push(["sequence.2"]) },
  ]
  const sequenceResult = await new runtime.SequenceAction().run(sequenceActions)

  return {
    lazySyncResult,
    lazyAsyncResult,
    parallelResult,
    sequenceResult,
    records,
  }
}

function moduleBindingSnapshot(moduleObject) {
  const records = []
  moduleObject.registry((token) => ({
    toConstantValue(value) {
      records.push(["toConstantValue", token, value])
      return this
    },
    to(value) {
      records.push(["to", token, value?.name])
      return this
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return this
    },
  }))
  return records
}

function normalizeCoreModuleBindings(records) {
  return records.map((record) => {
    if (record[0] !== "to") return record
    return [record[0], record[1], "<constructor>"]
  })
}

async function exerciseContainerHelpers(runtime, prefix) {
  const valueToken = `${prefix}.value`
  const actionToken = `${prefix}.action`
  const injectedToken = `${prefix}.injected`

  cleanupToken(runtime.di, valueToken)
  cleanupToken(runtime.di, actionToken)
  cleanupToken(runtime.di, injectedToken)

  const records = []
  const injectedValue = { id: injectedToken }

  class Consumer {}
  runtime.lazyInject(injectedToken)(Consumer.prototype, "injected")

  assert.equal(runtime.lazyGet(), undefined, "empty token should not resolve")
  assert.equal(runtime.lazyGet(valueToken), undefined, "unbound token should not resolve")
  runtime.di.bind(valueToken).toConstantValue({ id: "value" })
  runtime.di.bind(actionToken).toConstantValue({
    run(data) {
      records.push(["run", data])
      return `result:${data}`
    },
  })
  runtime.di.bind(injectedToken).toConstantValue(injectedValue)

  const consumer = new Consumer()
  const result = {
    lazyGetValue: runtime.lazyGet(valueToken),
    lazyRunResult: await runtime.lazyRun(actionToken, "payload"),
    lazyRunMissing: runtime.lazyRun(`${prefix}.missing`, "payload"),
    injectedIdentity: consumer.injected === injectedValue,
    records,
  }

  cleanupToken(runtime.di, valueToken)
  cleanupToken(runtime.di, actionToken)
  cleanupToken(runtime.di, injectedToken)
  return result
}

function cleanupToken(container, token) {
  if (container.isBound(token)) container.unbind(token)
}
