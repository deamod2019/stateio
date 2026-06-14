/**
 * Webpack Module #63233
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { XL: () => a, x1: () => o, zu: () => r })
  var i = n(95659) /* 95659__mod */
  function r(e) {
    const t = (0, i.Gd)().getClient(),
      n = e || (t && t.getOptions())
    return !!n && ("tracesSampleRate" in n || "tracesSampler" in n)
  }
  function o(e) {
    const t = (e || (0, i.Gd)()).getScope()
    return t && t.getTransaction()
  }
  function a(e) {
    return e / 1e3
  }
}
