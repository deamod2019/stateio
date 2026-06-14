/**
 * Webpack Module #71235
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  function i(e) {
    return e && e.Math == Math ? e : void 0
  }
  n.d(t, { Rf: () => o, YO: () => a, n2: () => r })
  const r =
    ("object" == typeof globalThis && i(globalThis)) ||
    ("object" == typeof window && i(window)) ||
    ("object" == typeof self && i(self)) ||
    ("object" == typeof n.g && i(n.g)) ||
    (function () {
      return this
    })() ||
    {}
  function o() {
    return r
  }
  function a(e, t, n) {
    const i = n || r,
      o = (i.__SENTRY__ = i.__SENTRY__ || {})
    return o[e] || (o[e] = t())
  }
}
