"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { Entity: OriginalEntity } = require("../src-cjs/75111__mod.js")
const { Entity: RestoredEntity } = require("../src-restored/core/ECSCore.js")
const { Field: OriginalField } = require("../src-cjs/26903_Field.js")
const { DestroyFieldAction: OriginalDestroyFieldAction } = require("../src-cjs/196_DestroyFieldAction.js")
const { Field: RestoredField } = require("../src-restored/core/Field.js")
const { DestroyFieldAction: RestoredDestroyFieldAction } = require("../src-restored/core/DestroyFieldAction.js")

const originalDeps = {
  Entity: OriginalEntity,
  Field: OriginalField,
  DestroyFieldAction: OriginalDestroyFieldAction,
}
const restoredDeps = {
  Entity: RestoredEntity,
  Field: RestoredField,
  DestroyFieldAction: RestoredDestroyFieldAction,
  RuntimeCore: restoredCore,
}
originalDeps.RuntimeCore = core

const originalEnv = {
  isBound: core.di.isBound,
  get: core.di.get,
  unbind: core.di.unbind,
  restoredIsBound: restoredCore.di.isBound,
  restoredGet: restoredCore.di.get,
  restoredUnbind: restoredCore.di.unbind,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.Field),
  publicPrototypeMembers(originalDeps.Field),
  "restored Field public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.DestroyFieldAction),
  publicPrototypeMembers(originalDeps.DestroyFieldAction),
  "restored DestroyFieldAction public prototype differs",
)

const pendingComparisons = []

compareScenario("Field init stores field id and returns itself", async (deps) => {
  const field = new deps.Field()
  const before = snapshotField(field)
  const returned = field.init({ data: { id: "field-alpha" } })
  return {
    before,
    after: snapshotField(field),
    returnedSelf: returned === field,
    isEntity: field instanceof deps.Entity,
  }
})

compareScenario("DestroyFieldAction is a no-op when field instance is unbound", async (deps) => {
  const h = makeDestroyHarness(deps, { bound: false })
  await h.action.execute()
  return h.records
})

compareScenario("DestroyFieldAction removes and unbinds the current field instance", async (deps) => {
  const field = {
    id: "field-instance",
    parent: {
      removeChild(child) {
        currentHarness.records.push(["parent.removeChild", child.id])
      },
    },
  }
  const h = makeDestroyHarness(deps, { bound: true, field })
  await h.action.execute()
  return h.records
})

compareScenario("DestroyFieldAction still unbinds when resolved field is null", async (deps) => {
  const h = makeDestroyHarness(deps, { bound: true, field: null })
  await h.action.execute()
  return h.records
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          module: "Field lifecycle",
          prototypes: {
            Field: publicPrototypeMembers(restoredDeps.Field),
            DestroyFieldAction: publicPrototypeMembers(restoredDeps.DestroyFieldAction),
          },
          scenarios: pendingComparisons.length,
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
  .finally(() => {
    restoreEnvironment()
    currentHarness = null
  })

function compareScenario(name, run) {
  pendingComparisons.push(async () => {
    currentHarness = null
    patchEnvironment(originalDeps.RuntimeCore)
    const originalResult = normalize(await run(originalDeps))
    currentHarness = null
    patchEnvironment(restoredDeps.RuntimeCore)
    const restoredResult = normalize(await run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeDestroyHarness(deps, { bound, field }) {
  const records = []
  const action = new deps.DestroyFieldAction()
  currentHarness = { action, bound, field, records }
  return currentHarness
}

function patchEnvironment(runtime) {
  runtime.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", token === TypesGame.views.fieldInstance])
    return token === TypesGame.views.fieldInstance && Boolean(currentHarness?.bound)
  }
  runtime.di.get = function get(token) {
    currentHarness?.records.push(["di.get", token === TypesGame.views.fieldInstance])
    return token === TypesGame.views.fieldInstance ? currentHarness?.field : undefined
  }
  runtime.di.unbind = function unbind(token) {
    currentHarness?.records.push(["di.unbind", token === TypesGame.views.fieldInstance])
  }
}

function restoreEnvironment() {
  core.di.isBound = originalEnv.isBound
  core.di.get = originalEnv.get
  core.di.unbind = originalEnv.unbind
  restoredCore.di.isBound = originalEnv.restoredIsBound
  restoredCore.di.get = originalEnv.restoredGet
  restoredCore.di.unbind = originalEnv.restoredUnbind
}

function snapshotField(field) {
  return {
    ownKeys: Object.getOwnPropertyNames(field)
      .filter((key) => key !== "id")
      .sort(),
    idType: typeof field.id,
    fieldId: field._fieldId,
  }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
