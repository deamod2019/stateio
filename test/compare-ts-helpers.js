"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/70655__mod.js")
const restored = require("../src-restored/core/TSHelpers.js")

assert.deepEqual(Object.keys(restored).sort(), Object.keys(original).sort(), "TS helper export surface differs")

compareScenario("assign/rest/read/spread helpers", (helpers) => {
  const symbol = Symbol("kept")
  const source = { a: 1, b: 2 }
  source[symbol] = 3
  const sparse = [1, , 3]
  return {
    assign: helpers.__assign({ a: 0 }, { b: 2 }, { a: 1 }),
    rest: helpers.__rest(source, ["b"]),
    read: helpers.__read(new Set(["x", "y", "z"]), 2),
    spread: helpers.__spread(["a"], new Set(["b", "c"])),
    spreadArrays: helpers.__spreadArrays(["a"], ["b", "c"]),
    spreadArrayPacked: helpers.__spreadArray(["x"], sparse, true),
    values: [...helpers.__values(["p", "q"])],
  }
})

compareScenario("extends/import helpers", (helpers) => {
  function Base(value) {
    this.value = value
  }
  Base.staticValue = "base"
  Base.prototype.label = function label() {
    return `base:${this.value}`
  }
  function Child(value) {
    Base.call(this, value)
  }
  helpers.__extends(Child, Base)

  const commonjs = { a: 1 }
  const esModule = { __esModule: true, default: "default", named: "named" }
  return {
    inheritedStatic: Child.staticValue,
    inheritedMethod: new Child("v").label(),
    importDefault: helpers.__importDefault(commonjs),
    importStarKeys: Object.keys(helpers.__importStar(commonjs)).sort(),
    importStarEsModule: helpers.__importStar(esModule) === esModule,
  }
})

compareScenario("decorator helpers", (helpers) => {
  const calls = []
  function classDecorator(target) {
    calls.push(["class", target.name])
  }
  function propertyDecorator(target, key) {
    calls.push(["property", key])
  }
  function parameterDecorator(target, key, index) {
    calls.push(["parameter", key, index])
  }
  class Decorated {}
  helpers.__decorate([classDecorator], Decorated)
  helpers.__decorate([propertyDecorator], Decorated.prototype, "field")
  helpers.__param(2, parameterDecorator)(Decorated.prototype, "method")
  return calls
})

Promise.resolve()
  .then(async () => {
    assert.deepEqual(
      await exerciseAsync(restored),
      await exerciseAsync(original),
      "async helper behavior differs",
    )
    assert.deepEqual(
      exercisePrivateHelpers(restored),
      exercisePrivateHelpers(original),
      "private field helper behavior differs",
    )
    console.log(
      JSON.stringify(
        {
          module: "TSHelpers",
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

function compareScenario(name, run) {
  assert.deepEqual(normalize(run(restored)), normalize(run(original)), name)
}

function exerciseAsync(helpers) {
  return helpers.__awaiter(undefined, undefined, undefined, function* asyncExercise() {
    const first = yield Promise.resolve(2)
    const generated = helpers.__generator(this, function generatorBody(state) {
      switch (state.label) {
        case 0:
          return [4, first + 1]
        case 1:
          return [2, state.sent() + 1]
      }
    })
    return {
      awaited: first,
      generatorNext: generated.next(),
      generatorDone: generated.next(4),
    }
  })
}

function exercisePrivateHelpers(helpers) {
  const map = new WeakMap()
  const receiver = {}
  map.set(receiver, 1)
  const accessor = { value: 2 }
  const setterRecords = []
  return {
    inMap: helpers.__classPrivateFieldIn(map, receiver),
    getMap: helpers.__classPrivateFieldGet(receiver, map, "f"),
    setMap: helpers.__classPrivateFieldSet(receiver, map, 3, "f"),
    afterSetMap: map.get(receiver),
    getAccessor: helpers.__classPrivateFieldGet(receiver, map, "f", accessor),
    setAccessor: helpers.__classPrivateFieldSet(receiver, map, 4, "f", accessor),
    afterSetAccessor: accessor.value,
    getGetter: helpers.__classPrivateFieldGet(receiver, map, "a", function get() {
      return 5
    }),
    setSetter: helpers.__classPrivateFieldSet(receiver, map, 6, "a", function set(value) {
      setterRecords.push(value)
    }),
    setterRecords,
  }
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => (typeof item === "undefined" ? "__undefined__" : item)),
  )
}
