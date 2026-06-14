/**
 * Webpack Module #8823
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Ak: () => o, Bf: () => u, Du: () => a, t$: () => s })
  var i = n(12343) /* 12343__mod */
  const r = (0, n(71235) /* 71235__mod */.Rf)()
  function o() {
    if (!("fetch" in r)) return false
    try {
      return (new Headers(), new Request("http://www.example.com"), new Response(), true)
    } catch (e) {
      return false
    }
  }
  function a(e) {
    return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  }
  function s() {
    if (!o()) return false
    if (a(r.fetch)) return true
    let e = false
    const t = r.document
    if (t && "function" == typeof t.createElement)
      try {
        const n = t.createElement("iframe")
        ;((n.hidden = true),
          t.head.appendChild(n),
          n.contentWindow && n.contentWindow.fetch && (e = a(n.contentWindow.fetch)),
          t.head.removeChild(n))
      } catch (e) {
        ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          i.kg.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            e,
          )
      }
    return e
  }
  function u() {
    const e = r.chrome,
      t = e && e.app && e.app.runtime,
      n = "history" in r && !!r.history.pushState && !!r.history.replaceState
    return !t && n
  }
}
