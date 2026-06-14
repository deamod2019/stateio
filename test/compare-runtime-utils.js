"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/84194__mod.js")
const restored = require("../src-restored/core/RuntimeUtils.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "runtime utility export order differs")
assert.deepEqual(
  Object.getOwnPropertyNames(restored.Random).sort(),
  Object.getOwnPropertyNames(original.Random).sort(),
  "Random static surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restored.UrlParser),
  publicPrototypeMembers(original.UrlParser),
  "UrlParser prototype differs",
)
assert.deepEqual(
  Object.getOwnPropertyNames(restored.Cookie).sort(),
  Object.getOwnPropertyNames(original.Cookie).sort(),
  "Cookie static surface differs",
)
assert.deepEqual(
  Object.keys(restored.log).sort(),
  Object.keys(original.log).sort(),
  "log surface differs",
)

compareScenario("Random deterministic helpers", (module) => {
  return {
    rangeFloatTwoArgs: withMathRandom([0.25], () => module.Random.rangeFloat(10, 20)),
    rangeFloatDefaultMax: withMathRandom([0.25], () => module.Random.rangeFloat(4)),
    range: withMathRandom([0.99], () => module.Random.range(1, 4)),
    boolDefault: withMathRandom([0.5], () => module.Random.bool()),
    boolCustom: withMathRandom([0.75], () => module.Random.bool(0.2)),
    signPositive: withMathRandom([0.1], () => module.Random.sign()),
    signNegative: withMathRandom([0.9], () => module.Random.sign()),
    fromArgs: withMathRandom([0.6], () => module.Random.from("a", "b", "c")),
    fromArray: withMathRandom([0.6], () => module.Random.from(["a", "b", "c"])),
    fromValue: module.Random.from("plain"),
    uuid: withMathRandom(Array(32).fill(0.125), () => module.Random.UUID(123456)),
  }
})

compareScenario("UrlParser query handling", (module) => {
  const previousWindow = global.window
  global.window = { location: { search: "?a=1&empty=&flag&encoded=x%20y" } }
  try {
    const parser = new module.UrlParser()
    parser.parseUri()
    return {
      params: parser.params,
      a: parser.getParam("a"),
      empty: parser.getParam("empty"),
      flag: parser.getParam("flag"),
      missing: parser.getParam("missing"),
    }
  } finally {
    global.window = previousWindow
  }
})

compareScenario("Cookie document.cookie access", (module) => {
  return withFixedDate(() => {
    const previousDocument = global.document
    const state = { cookie: "alpha=one; beta=two", writes: [] }
    global.document = {}
    Object.defineProperty(global.document, "cookie", {
      configurable: true,
      get() {
        return state.cookie
      },
      set(value) {
        state.writes.push(value)
        state.cookie = value
      },
    })

    try {
      const alpha = module.Cookie.get("alpha")
      const missing = module.Cookie.get("missing")
      module.Cookie.set("gamma", "three words", 30)
      const afterSet = state.cookie
      module.Cookie.clear("gamma")
      return { alpha, missing, afterSet, afterClear: state.cookie, writes: state.writes }
    } finally {
      global.document = previousDocument
    }
  })
})

console.log(
  JSON.stringify(
    {
      module: "RuntimeUtils",
      exports: Object.keys(restored),
      scenarios: 3,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const originalResult = normalize(run(original))
  const restoredResult = normalize(run(restored))
  assert.deepEqual(restoredResult, originalResult, name)
}

function withMathRandom(sequence, run) {
  const realRandom = Math.random
  let index = 0
  Math.random = () => sequence[Math.min(index++, sequence.length - 1)]
  try {
    return run()
  } finally {
    Math.random = realRandom
  }
}

function withFixedDate(run) {
  const RealDate = Date
  const fixed = new RealDate("2024-01-02T03:04:05.000Z")
  global.Date = class FixedDate extends RealDate {
    constructor(...args) {
      super(...(args.length ? args : [fixed]))
    }

    static now() {
      return fixed.getTime()
    }
  }
  try {
    return run()
  } finally {
    global.Date = RealDate
  }
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "undefined" ? "__undefined__" : item)))
}
