/**
 * Webpack Module #8823
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Ak: () => o, Bf: () => u, Du: () => a, t$: () => s })
  var i = n(12343)
  const r = (0, n(71235).Rf)()
  function o() {
    if (!("fetch" in r)) return !1
    try {
      return (new Headers(), new Request("http://www.example.com"), new Response(), !0)
    } catch (e) {
      return !1
    }
  }
  function a(e) {
    return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  }
  function s() {
    if (!o()) return !1
    if (a(r.fetch)) return !0
    let e = !1
    const t = r.document
    if (t && "function" == typeof t.createElement)
      try {
        const n = t.createElement("iframe")
        ;((n.hidden = !0),
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
