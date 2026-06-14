"use strict"

const assert = require("node:assert/strict")

const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const OriginalEventEmitter = require("../src-cjs/26729__mod.js")
const RestoredEventEmitter = require("../src-restored/core/EventEmitter.js")

assert.deepEqual(
  Object.getOwnPropertyNames(RestoredEventEmitter).sort(),
  Object.getOwnPropertyNames(OriginalEventEmitter).sort(),
  "EventEmitter static surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(RestoredEventEmitter),
  publicPrototypeMembers(OriginalEventEmitter),
  "EventEmitter prototype differs",
)
assert.equal(RestoredEventEmitter.EventEmitter, RestoredEventEmitter, "restored self export differs")

assert.deepEqual(
  exerciseEmitter(RestoredEventEmitter),
  exerciseEmitter(OriginalEventEmitter),
  "EventEmitter behavior differs",
)

console.log(
  JSON.stringify(
    {
      module: "EventEmitter",
      prefixed: RestoredEventEmitter.prefixed,
      status: "ok",
    },
    null,
    2,
  ),
)

function exerciseEmitter(EventEmitter) {
  const records = []
  const context = { name: "ctx" }
  const symbolEvent = Symbol("symbol:event")
  const emitter = new EventEmitter()

  function first(a, b, c, d, e, f) {
    records.push(["first", this === context, a, b, c, d, e, f])
  }

  function second(value) {
    records.push(["second", this === emitter, value])
  }

  function once(value) {
    records.push(["once", value])
  }

  function symbolListener(value) {
    records.push(["symbol", value])
  }

  const invalidMessage = captureError(() => emitter.on("bad", "nope"))
  const emptyEmit = emitter.emit("missing")

  emitter.on("multi", first, context)
  emitter.on("multi", second)
  const afterAdd = snapshot(emitter, "multi")
  const emitTwo = emitter.emit("multi", "a", "b")
  const emitSix = emitter.emit("multi", 1, 2, 3, 4, 5, 6)

  emitter.once("single", once)
  const beforeOnce = snapshot(emitter, "single")
  emitter.emit("single", "first")
  emitter.emit("single", "second")
  const afterOnce = snapshot(emitter, "single")

  emitter.on(symbolEvent, symbolListener)
  emitter.emit(symbolEvent, "payload")
  const namesWithSymbol = emitter.eventNames().map((event) =>
    typeof event === "symbol" ? event.description : event,
  )

  emitter.removeListener("multi", first, context)
  const afterRemoveFirst = snapshot(emitter, "multi")
  emitter.off("multi", second)
  const afterRemoveSecond = snapshot(emitter, "multi")

  emitter.on("clear:a", second)
  emitter.on("clear:b", second)
  emitter.removeAllListeners("clear:a")
  const afterRemoveNamed = {
    clearA: snapshot(emitter, "clear:a"),
    clearB: snapshot(emitter, "clear:b"),
  }
  emitter.removeAllListeners()
  const afterRemoveAll = {
    names: emitter.eventNames(),
    clearB: snapshot(emitter, "clear:b"),
  }

  return normalize({
    invalidMessage,
    emptyEmit,
    afterAdd,
    emitTwo,
    emitSix,
    beforeOnce,
    afterOnce,
    namesWithSymbol,
    afterRemoveFirst,
    afterRemoveSecond,
    afterRemoveNamed,
    afterRemoveAll,
    records,
  })
}

function snapshot(emitter, event) {
  return {
    count: emitter.listenerCount(event),
    listeners: emitter.listeners(event).length,
    names: emitter.eventNames().map((name) => (typeof name === "symbol" ? name.description : name)),
  }
}

function captureError(run) {
  try {
    run()
    return null
  } catch (error) {
    return error.message
  }
}

function publicPrototypeMembers(value) {
  return Object.getOwnPropertyNames(value.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}
