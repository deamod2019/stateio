/**
 * Webpack Module #92448
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  function i() {
    return (
      !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) &&
      "[object process]" ===
        Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    )
  }
  function r(e, t) {
    return e.require(t)
  }
  function o(t) {
    let n
    try {
      n = r(e, t)
    } catch (e) {}
    try {
      const { cwd: i } = r(e, "process")
      n = r(e, `${i()}/node_modules/${t}`)
    } catch (e) {}
    return n
  }
  ;(n.d(t, { l$: () => r, KV: () => i, $y: () => o }), (e = n.hmd(e)))
}
