"use strict"

const assert = require("node:assert/strict")

const originalPath = require.resolve("../src-cjs/68313__mod.js")
const restoredPath = require.resolve("../src-restored/core/Logger.js")

const original = freshRequire(originalPath)
const restored = freshRequire(restoredPath)

assert.deepEqual(Object.keys(restored), Object.keys(original), "Logger export keys differ")
assert.equal(restored.__esModule, original.__esModule, "Logger __esModule marker differs")
assert.deepEqual(Object.keys(restored.log).sort(), Object.keys(original.log).sort(), "log surface differs")

assert.deepEqual(exerciseLogger(restoredPath), exerciseLogger(originalPath), "logger behavior differs")

console.log(
  JSON.stringify(
    {
      module: "Logger",
      exports: Object.keys(restored),
      status: "ok",
    },
    null,
    2,
  ),
)

function exerciseLogger(modulePath) {
  const calls = []
  const originals = {
    error: console.error,
    info: console.info,
    warn: console.warn,
    log: console.log,
  }

  console.error = (...args) => calls.push(["error", args])
  console.info = (...args) => calls.push(["info", args])
  console.warn = (...args) => calls.push(["warn", args])
  console.log = (...args) => calls.push(["log", args])

  try {
    const { log } = freshRequire(modulePath)

    log.debug("hidden")
    const defaultCalls = calls.slice()
    const setLevelResult = log.setLevel(6)

    log.info("hello", true, 3, 3.5, { ok: true })
    log.error("bad")
    log.warn("careful", false)
    log.debug("dbg", 7)
    log.trace("trace")
    log.fatal("fatal")
    log.scope("#scope").info("scoped")

    return normalize({ defaultCalls, setLevelResult, calls })
  } finally {
    console.error = originals.error
    console.info = originals.info
    console.warn = originals.warn
    console.log = originals.log
    delete require.cache[modulePath]
  }
}

function freshRequire(modulePath) {
  delete require.cache[modulePath]
  return require(modulePath)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}
