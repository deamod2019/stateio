/**
 * Restored source for Webpack Modules #76702, #50961, #55854, and #19562.
 */
"use strict"

const hooks = require("./preactHooks")
const { TypesCore } = require("../core/CoreTypes")

function useInjection(token, optional) {
  if (optional === undefined) optional = false
  return hooks.useContext(require("./InversifyContext").InversifyContext).get(token)
}

function useState(initialValue) {
  return hooks.useState(initialValue)
}

function useCallback(callback, deps) {
  return hooks.useCallback ? hooks.useCallback(callback, deps) : callback
}

function useEffect(effect, deps) {
  return hooks.useEffect(effect, deps)
}

function useLayoutEffect(effect, deps) {
  return useLayoutEffectCompat(effect, deps)
}

function useEventListener(eventName, handler, deps) {
  const dispatcher = useInjection(TypesCore.dispatcher)
  useLayoutEffectCompat(
    () => {
      dispatcher.addListener(eventName, handler)
      return () => dispatcher.removeListener(eventName, handler)
    },
    deps,
  )
}

function visibilityEffect(delay, initialVisible, deps) {
  if (delay === undefined) delay = 1
  if (initialVisible === undefined) initialVisible = true
  if (deps === undefined) deps = []
  const [visible, setVisible] = hooks.useState(initialVisible)

  if (initialVisible) {
    useLayoutEffectCompat(() => {
      const timeout = setTimeout(() => setVisible(false), delay)
      return () => clearTimeout(timeout)
    }, deps)
  }

  return [visible, setVisible]
}

function useLayoutEffectCompat(effect, deps) {
  const hook = hooks.useLayoutEffect || hooks.useEffect
  return hook(effect, deps)
}

module.exports = {
  useCallback,
  useEffect,
  useEventListener,
  useInjection,
  useLayoutEffect,
  useState,
  visibilityEffect,
}
