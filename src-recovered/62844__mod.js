/**
 * Webpack Module #62844
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { DM: () => o, Db: () => u, EG: () => l, YO: () => c, jH: () => s, lE: () => d })
  var i = n(20535),
    r = n(71235)
  function o() {
    const e = r.n2,
      t = e.crypto || e.msCrypto
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "")
    const n =
      t && t.getRandomValues
        ? () => t.getRandomValues(new Uint8Array(1))[0]
        : () => 16 * Math.random()
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) =>
      (e ^ ((15 & n()) >> (e / 4))).toString(16),
    )
  }
  function a(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
  }
  function s(e) {
    const { message: t, event_id: n } = e
    if (t) return t
    const i = a(e)
    return i
      ? i.type && i.value
        ? `${i.type}: ${i.value}`
        : i.type || i.value || n || "<unknown>"
      : n || "<unknown>"
  }
  function u(e, t, n) {
    const i = (e.exception = e.exception || {}),
      r = (i.values = i.values || []),
      o = (r[0] = r[0] || {})
    ;(o.value || (o.value = t || ""), o.type || (o.type = n || "Error"))
  }
  function l(e, t) {
    const n = a(e)
    if (!n) return
    const i = n.mechanism
    if (((n.mechanism = { type: "generic", handled: !0, ...i, ...t }), t && "data" in t)) {
      const e = { ...(i && i.data), ...t.data }
      n.mechanism.data = e
    }
  }
  function c(e) {
    if (e && e.__sentry_captured__) return !0
    try {
      ;(0, i.xp)(e, "__sentry_captured__", !0)
    } catch (e) {}
    return !1
  }
  function d(e) {
    return Array.isArray(e) ? e : [e]
  }
}
