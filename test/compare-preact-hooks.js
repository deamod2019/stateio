"use strict"

const assert = require("node:assert/strict")
const { spawnSync } = require("node:child_process")

const original = runHooksScenario("./src-cjs/30396__mod.js")
const restored = runHooksScenario("./src-restored/ui/preactHooks.js")

assert.deepEqual(restored, original, "Preact hooks runtime behavior differs")

console.log(
  JSON.stringify(
    {
      module: "preactHooks",
      exports: restored.keys.length,
      records: restored.records.length,
      status: "ok",
    },
    null,
    2,
  ),
)

function runHooksScenario(modulePath) {
  const code = `
    const records = []
    const timers = []
    globalThis.setTimeout = (callback, delay) => {
      const id = "timer-" + timers.length
      records.push(["timer.set", delay])
      timers.push(callback)
      return id
    }
    globalThis.clearTimeout = (id) => {
      records.push(["timer.clear", id])
    }

    const preact = require("./src-cjs/6400__mod.js")
    const hooks = require(${JSON.stringify(modulePath)})

    preact.options.__e = (error) => { throw error }

    const context = preact.createContext("default-context")
    const provider = {
      props: { value: "provided-context" },
      sub(component) {
        records.push(["context.sub", component.name])
      },
    }
    const component = {
      name: "component",
      props: { marker: true },
      context: { [context.__c]: provider },
      __h: [],
      __P: true,
      setState(payload) {
        records.push(["setState", payload && Object.keys(payload).length])
      },
    }
    const vnode = { __c: component, __: null, __m: null }
    component.__v = vnode

    preact.options.__r(vnode)

    const state = hooks.useState(1)
    records.push(["state.initial", state[0]])
    state[1]((value) => value + 2)

    const reduced = hooks.useReducer((value, action) => value + action, 10)
    records.push(["reducer.initial", reduced[0]])
    reduced[1](5)

    const ref = hooks.useRef("ref-value")
    records.push(["ref.current", ref.current])

    const memo = hooks.useMemo(() => ({ value: "memo-value" }), ["memo-dep"])
    records.push(["memo.value", memo.value])

    const callback = hooks.useCallback(() => "callback-value", ["callback-dep"])
    records.push(["callback.value", callback()])

    const provided = hooks.useContext(context)
    records.push(["context.value", provided])

    const debugValues = []
    preact.options.useDebugValue = (value) => debugValues.push(value)
    hooks.useDebugValue("debug-input", (value) => value + "-formatted")
    records.push(["debug.value", debugValues[0]])

    const imperativeRef = { current: null }
    hooks.useImperativeHandle(imperativeRef, () => ({ api: "ready" }), ["imperative-dep"])

    hooks.useLayoutEffect(() => {
      records.push(["layout.run"])
      return () => records.push(["layout.cleanup"])
    }, ["layout-dep"])

    hooks.useEffect(() => {
      records.push(["effect.run"])
      return () => records.push(["effect.cleanup"])
    }, ["effect-dep"])

    const id = hooks.useId()
    records.push(["id", id])

    preact.options.__c(vnode, [component])
    preact.options.diffed(vnode)
    while (timers.length) timers.shift()()

    records.push(["imperative.current", imperativeRef.current && imperativeRef.current.api])
    records.push(["hook.count", component.__H.__.length])
    records.push(["layout.queue", component.__h.length])

    console.log(JSON.stringify({
      keys: Object.keys(hooks).sort(),
      records,
    }))
  `

  const result = spawnSync(process.execPath, ["-e", code], {
    cwd: process.cwd(),
    encoding: "utf8",
  })

  assert.equal(result.status, 0, result.stderr || result.stdout)
  return JSON.parse(result.stdout)
}
