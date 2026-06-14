/**
 * Restored Preact hooks runtime from Webpack Module #30396.
 */
"use strict"

const preact = require("./preactRuntime")

let currentIndex
let currentComponent
let previousComponent
let hookType = 0
let requestAnimationFrameRef

const EMPTY = []
const PENDING = []
const oldBeforeDiff = preact.options.__b
const oldBeforeRender = preact.options.__r
const oldDiffed = preact.options.diffed
const oldCommit = preact.options.__c
const oldUnmount = preact.options.unmount

function getHookState(index, type) {
  if (preact.options.__h) preact.options.__h(currentComponent, index, hookType || type)
  hookType = 0

  const hooks = currentComponent.__H || (currentComponent.__H = { __: [], __h: [] })
  if (index >= hooks.__.length) hooks.__.push({ __V: PENDING })
  return hooks.__[index]
}

function useState(initialState) {
  hookType = 1
  return useReducer(invokeOrReturn, initialState)
}

function useReducer(reducer, initialState, init) {
  const hookState = getHookState(currentIndex++, 2)
  hookState.t = reducer

  if (!hookState.__c) {
    hookState.__ = [
      init ? init(initialState) : invokeOrReturn(undefined, initialState),
      (action) => {
        const currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0]
        const nextValue = hookState.t(currentValue, action)
        if (currentValue !== nextValue) {
          hookState.__N = [nextValue, hookState.__[1]]
          hookState.__c.setState({})
        }
      },
    ]
    hookState.__c = currentComponent

    if (!currentComponent.u) {
      currentComponent.u = true
      const oldShouldComponentUpdate = currentComponent.shouldComponentUpdate
      currentComponent.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, context) {
        if (!hookState.__c.__H) return true
        const stateHooks = hookState.__c.__H.__.filter((state) => state.__c)
        if (stateHooks.every((state) => !state.__N)) {
          return !oldShouldComponentUpdate || oldShouldComponentUpdate.call(this, nextProps, nextState, context)
        }

        let hasChanged = false
        stateHooks.forEach((state) => {
          if (state.__N) {
            const previousValue = state.__[0]
            state.__ = state.__N
            state.__N = undefined
            if (previousValue !== state.__[0]) hasChanged = true
          }
        })

        return (
          !(hasChanged === false && hookState.__c.props === nextProps) &&
          (!oldShouldComponentUpdate || oldShouldComponentUpdate.call(this, nextProps, nextState, context))
        )
      }
    }
  }

  return hookState.__N || hookState.__
}

function useEffect(effect, deps) {
  const hookState = getHookState(currentIndex++, 3)
  if (!preact.options.__s && argsChanged(hookState.__H, deps)) {
    hookState.__ = effect
    hookState.i = deps
    currentComponent.__H.__h.push(hookState)
  }
}

function useLayoutEffect(effect, deps) {
  const hookState = getHookState(currentIndex++, 4)
  if (!preact.options.__s && argsChanged(hookState.__H, deps)) {
    hookState.__ = effect
    hookState.i = deps
    currentComponent.__h.push(hookState)
  }
}

function useRef(initialValue) {
  hookType = 5
  return useMemo(() => ({ current: initialValue }), [])
}

function useImperativeHandle(ref, createHandle, deps) {
  hookType = 6
  useLayoutEffect(
    () => {
      if (typeof ref === "function") {
        ref(createHandle())
        return () => ref(null)
      }
      if (ref) {
        ref.current = createHandle()
        return () => {
          ref.current = null
        }
      }
      return undefined
    },
    deps == null ? deps : deps.concat(ref),
  )
}

function useMemo(factory, deps) {
  const hookState = getHookState(currentIndex++, 7)
  if (argsChanged(hookState.__H, deps)) {
    hookState.__V = factory()
    hookState.i = deps
    hookState.__h = factory
    return hookState.__V
  }
  return hookState.__
}

function useCallback(callback, deps) {
  hookType = 8
  return useMemo(() => callback, deps)
}

function useContext(context) {
  const provider = currentComponent.context[context.__c]
  const hookState = getHookState(currentIndex++, 9)
  hookState.c = context
  if (!provider) return context.__

  if (hookState.__ == null) {
    hookState.__ = true
    provider.sub(currentComponent)
  }
  return provider.props.value
}

function useDebugValue(value, formatter) {
  if (preact.options.useDebugValue) preact.options.useDebugValue(formatter ? formatter(value) : value)
}

function useErrorBoundary(callback) {
  const hookState = getHookState(currentIndex++, 10)
  const state = useState()
  hookState.__ = callback

  if (!currentComponent.componentDidCatch) {
    currentComponent.componentDidCatch = (error, errorInfo) => {
      if (hookState.__) hookState.__(error, errorInfo)
      state[1](error)
    }
  }

  return [
    state[0],
    () => {
      state[1](undefined)
    },
  ]
}

function useId() {
  const hookState = getHookState(currentIndex++, 11)
  if (!hookState.__) {
    let vnode = currentComponent.__v
    while (vnode !== null && !vnode.__m && vnode.__ !== null) vnode = vnode.__
    const idState = vnode.__m || (vnode.__m = [0, 0])
    hookState.__ = `P${idState[0]}-${idState[1]++}`
  }
  return hookState.__
}

function flushAfterPaintEffects() {
  let component
  while ((component = EMPTY.shift())) {
    if (component.__P && component.__H) {
      try {
        component.__H.__h.forEach(cleanupHook)
        component.__H.__h.forEach(invokeHook)
        component.__H.__h = []
      } catch (error) {
        component.__H.__h = []
        preact.options.__e(error, component.__v)
      }
    }
  }
}

preact.options.__b = (vnode) => {
  currentComponent = null
  if (oldBeforeDiff) oldBeforeDiff(vnode)
}

preact.options.__r = (vnode) => {
  if (oldBeforeRender) oldBeforeRender(vnode)
  currentIndex = 0
  currentComponent = vnode.__c
  const hooks = currentComponent.__H

  if (hooks) {
    if (previousComponent === currentComponent) {
      hooks.__h = []
      currentComponent.__h = []
      hooks.__.forEach((hookState) => {
        if (hookState.__N) hookState.__ = hookState.__N
        hookState.__V = PENDING
        hookState.__N = hookState.i = undefined
      })
    } else {
      hooks.__h.forEach(cleanupHook)
      hooks.__h.forEach(invokeHook)
      hooks.__h = []
    }
  }

  previousComponent = currentComponent
}

preact.options.diffed = (vnode) => {
  if (oldDiffed) oldDiffed(vnode)
  const component = vnode.__c

  if (component && component.__H) {
    if (component.__H.__h.length) {
      const queueSize = EMPTY.push(component)
      if (queueSize === 1 || requestAnimationFrameRef !== preact.options.requestAnimationFrame) {
        requestAnimationFrameRef = preact.options.requestAnimationFrame
        ;(requestAnimationFrameRef || scheduleAfterPaint)(flushAfterPaintEffects)
      }
    }

    component.__H.__.forEach((hookState) => {
      if (hookState.i) hookState.__H = hookState.i
      if (hookState.__V !== PENDING) hookState.__ = hookState.__V
      hookState.i = undefined
      hookState.__V = PENDING
    })
  }

  previousComponent = currentComponent = null
}

preact.options.__c = (vnode, commitQueue) => {
  commitQueue.some((component) => {
    try {
      component.__h.forEach(cleanupHook)
      component.__h = component.__h.filter((hookState) => !hookState.__ || invokeHook(hookState))
    } catch (error) {
      commitQueue.some((queuedComponent) => {
        if (queuedComponent.__h) queuedComponent.__h = []
      })
      commitQueue = []
      preact.options.__e(error, component.__v)
    }
  })

  if (oldCommit) oldCommit(vnode, commitQueue)
}

preact.options.unmount = (vnode) => {
  if (oldUnmount) oldUnmount(vnode)
  let error
  const component = vnode.__c

  if (component && component.__H) {
    component.__H.__.forEach((hookState) => {
      try {
        cleanupHook(hookState)
      } catch (caught) {
        error = caught
      }
    })
    component.__H = undefined
    if (error) preact.options.__e(error, component.__v)
  }
}

const hasRequestAnimationFrame = typeof requestAnimationFrame === "function"

function scheduleAfterPaint(callback) {
  let animationFrame
  const run = () => {
    clearTimeout(timeout)
    if (hasRequestAnimationFrame) cancelAnimationFrame(animationFrame)
    setTimeout(callback)
  }
  const timeout = setTimeout(run, 100)

  if (hasRequestAnimationFrame) animationFrame = requestAnimationFrame(run)
}

function cleanupHook(hookState) {
  const previousComponent = currentComponent
  const cleanup = hookState.__c
  if (typeof cleanup === "function") {
    hookState.__c = undefined
    cleanup()
  }
  currentComponent = previousComponent
}

function invokeHook(hookState) {
  const previousComponent = currentComponent
  hookState.__c = hookState.__()
  currentComponent = previousComponent
}

function argsChanged(oldArgs, newArgs) {
  return (
    !oldArgs ||
    oldArgs.length !== newArgs.length ||
    newArgs.some((arg, index) => arg !== oldArgs[index])
  )
}

function invokeOrReturn(previousValue, nextValue) {
  return typeof nextValue === "function" ? nextValue(previousValue) : nextValue
}

module.exports = {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
}
