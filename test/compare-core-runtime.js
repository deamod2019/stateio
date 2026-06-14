"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const originalTypesCore = require("../src-cjs/73104_TypesCore.js")
const restoredTypesCore = require("../src-restored/core/TypesCore.js")
const originalEvent = require("../src-cjs/13011__mod.js")
const restoredEvent = {
  ...require("../src-restored/core/EventDispatcher.js"),
  ...require("../src-restored/core/GlobalEventProvider.js"),
}
const originalAction = require("../src-cjs/8734_Action.js")
const restoredAction = require("../src-restored/core/Action.js")

Promise.resolve()
  .then(async () => {
    assert.deepEqual(restoredTypesCore, originalTypesCore, "TypesCore exports differ")
    assert.deepEqual(Object.keys(restoredEvent), Object.keys(originalEvent), "event exports differ")
    assert.deepEqual(Object.keys(restoredAction), Object.keys(originalAction), "Action exports differ")

    assert.deepEqual(
      publicPrototypeMembers(restoredEvent.EventDispatcher),
      publicPrototypeMembers(originalEvent.EventDispatcher),
      "EventDispatcher prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restoredEvent.GlobalEventProvider),
      publicPrototypeMembers(originalEvent.GlobalEventProvider),
      "GlobalEventProvider prototype differs",
    )
    assert.deepEqual(
      publicPrototypeMembers(restoredAction.Action),
      publicPrototypeMembers(originalAction.Action),
      "Action prototype differs",
    )

    assert.deepEqual(
      exerciseGlobalEventProvider(restoredEvent.GlobalEventProvider),
      exerciseGlobalEventProvider(originalEvent.GlobalEventProvider),
      "GlobalEventProvider behavior differs",
    )
    assert.deepEqual(
      await exerciseAction(restoredAction.Action),
      await exerciseAction(originalAction.Action),
      "Action behavior differs",
    )

    console.log(
      JSON.stringify(
        {
          module: "CoreRuntime",
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

function exerciseGlobalEventProvider(GlobalEventProvider) {
  const records = []
  const warnings = []
  const originalWarn = console.warn
  console.warn = (...args) => warnings.push(args.join(" "))

  try {
    const provider = new GlobalEventProvider()
    Object.defineProperty(provider, "_dispatcher", {
      value: createDispatcher(records, provider),
      configurable: true,
    })

    function listener(payload) {
      records.push(["listener", payload, this === provider])
    }

    provider.addListener("event:a", listener)
    provider.addListener("event:a", listener)
    provider.dispatch("event:a", "payload-1")
    provider._dispatcher.emit("event:a", "payload-2")
    const afterAdd = snapshot(provider)

    provider.removeListener("event:a", listener)
    provider.removeListener("event:a", listener)
    const afterRemove = snapshot(provider)

    provider.addListenerOnce("event:b", listener)
    provider._dispatcher.emit("event:b", "payload-3")
    provider._dispatcher.emit("event:b", "payload-4")
    const afterOnce = snapshot(provider)

    provider.addListener("event:c", listener)
    provider.addListener("event:d", listener)
    provider.removeListeners("event:c")
    provider.removeListeners("event:none")
    provider.destroy()
    const afterDestroy = snapshot(provider)

    return {
      afterAdd,
      afterRemove,
      afterOnce,
      afterDestroy,
      records,
      warnings,
    }
  } finally {
    console.warn = originalWarn
  }
}

async function exerciseAction(Action) {
  const records = []

  class SuccessfulAction extends Action {
    async execute(data) {
      records.push(["execute", data])
      return `done:${data}`
    }
  }

  class FailedAction extends Action {
    async execute() {
      records.push(["execute.failed"])
      throw new Error("boom")
    }
  }

  class PendingAction extends Action {
    async execute() {
      records.push(["execute.pending"])
      return new Promise(() => {})
    }
  }

  const successful = new SuccessfulAction()
  Object.defineProperty(successful, "_dispatcher", {
    value: createDispatcher(records, successful),
    configurable: true,
  })
  successful.onFinish = () => records.push(["finish.success"])
  const successResult = await successful.run("ok")
  successful.destroy()

  const handledFailure = new FailedAction()
  Object.defineProperty(handledFailure, "_dispatcher", {
    value: createDispatcher(records, handledFailure),
    configurable: true,
  })
  handledFailure.onFailed = () => records.push(["failed.callback"])
  handledFailure.onFinish = () => records.push(["finish.failed"])
  const handledFailureResult = await handledFailure.run("ignored")

  const unhandledFailure = new FailedAction()
  Object.defineProperty(unhandledFailure, "_dispatcher", {
    value: createDispatcher(records, unhandledFailure),
    configurable: true,
  })
  let unhandledMessage
  try {
    await unhandledFailure.run()
  } catch (error) {
    unhandledMessage = error.message
  }

  const pending = new PendingAction()
  Object.defineProperty(pending, "_dispatcher", {
    value: createDispatcher(records, pending),
    configurable: true,
  })
  pending.onFailed = () => records.push(["failed.terminated"])
  pending.onFinish = () => records.push(["finish.terminated"])
  const pendingRun = pending.run("pending")
  pending.terminate(new Error("stopped"))
  const terminatedResult = await pendingRun

  return {
    successResult,
    handledFailureResult,
    unhandledMessage,
    terminatedResult,
    successDestroyed: {
      data: successful.data,
      resolve: successful._resolve,
      reject: successful._reject,
      onFinish: successful.onFinish,
      onFailed: successful.onFailed,
    },
    records,
  }
}

function createDispatcher(records, owner) {
  const listeners = new Map()

  return {
    on(event, listener, context) {
      records.push(["dispatcher.on", event, context === owner])
      if (!listeners.has(event)) listeners.set(event, [])
      listeners.get(event).push({ listener, context })
    },

    off(event, listener, context) {
      records.push(["dispatcher.off", event, context === owner])
      const items = listeners.get(event) || []
      listeners.set(
        event,
        items.filter((item) => item.listener !== listener || item.context !== context),
      )
    },

    emit(event, payload) {
      records.push(["dispatcher.emit", event, payload])
      for (const item of listeners.get(event) || []) {
        item.listener.call(item.context, payload)
      }
    },
  }
}

function snapshot(provider) {
  return {
    listenersMap: Object.fromEntries(
      Object.entries(provider.listenersMap).map(([event, listeners]) => [event, listeners.length]),
    ),
    hasListeners: provider.hasListeners(),
  }
}

function publicPrototypeMembers(value) {
  return Object.getOwnPropertyNames(value.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function installLocalReflectDecorate() {
  Reflect.decorate ??= function decorate(decorators, target, propertyKey, descriptor) {
    let result = descriptor ?? target
    for (let index = decorators.length - 1; index >= 0; index -= 1) {
      const decorator = decorators[index]
      const decorated =
        propertyKey === undefined
          ? decorator(result)
          : decorator(target, propertyKey, result)
      if (decorated !== undefined && decorated !== null) result = decorated
    }
    return result
  }
}
