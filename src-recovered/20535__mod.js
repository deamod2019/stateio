/**
 * Webpack Module #20535
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, {
    $Q: () => u,
    HK: () => l,
    Jr: () => _,
    Sh: () => d,
    _j: () => c,
    hl: () => a,
    xp: () => s,
    zf: () => f,
  })
  var i = n(58464),
    r = n(67597),
    o = n(57321)
  function a(e, t, n) {
    if (!(t in e)) return
    const i = e[t],
      r = n(i)
    if ("function" == typeof r)
      try {
        u(r, i)
      } catch (e) {}
    e[t] = r
  }
  function s(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 })
  }
  function u(e, t) {
    const n = t.prototype || {}
    ;((e.prototype = t.prototype = n), s(e, "__sentry_original__", t))
  }
  function l(e) {
    return e.__sentry_original__
  }
  function c(e) {
    return Object.keys(e)
      .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
      .join("&")
  }
  function d(e) {
    if ((0, r.VZ)(e)) return { message: e.message, name: e.name, stack: e.stack, ...p(e) }
    if ((0, r.cO)(e)) {
      const t = { type: e.type, target: h(e.target), currentTarget: h(e.currentTarget), ...p(e) }
      return (
        "undefined" != typeof CustomEvent && (0, r.V9)(e, CustomEvent) && (t.detail = e.detail),
        t
      )
    }
    return e
  }
  function h(e) {
    try {
      return (0, r.kK)(e) ? (0, i.Rt)(e) : Object.prototype.toString.call(e)
    } catch (e) {
      return "<unknown>"
    }
  }
  function p(e) {
    if ("object" == typeof e && null !== e) {
      const t = {}
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      return t
    }
    return {}
  }
  function f(e, t = 40) {
    const n = Object.keys(d(e))
    if ((n.sort(), !n.length)) return "[object has no keys]"
    if (n[0].length >= t) return (0, o.$G)(n[0], t)
    for (let e = n.length; e > 0; e--) {
      const i = n.slice(0, e).join(", ")
      if (!(i.length > t)) return e === n.length ? i : (0, o.$G)(i, t)
    }
    return ""
  }
  function _(e) {
    return g(e, new Map())
  }
  function g(e, t) {
    if ((0, r.PO)(e)) {
      const n = t.get(e)
      if (void 0 !== n) return n
      const i = {}
      t.set(e, i)
      for (const n of Object.keys(e)) void 0 !== e[n] && (i[n] = g(e[n], t))
      return i
    }
    if (Array.isArray(e)) {
      const n = t.get(e)
      if (void 0 !== n) return n
      const i = []
      return (
        t.set(e, i),
        e.forEach((e) => {
          i.push(g(e, t))
        }),
        i
      )
    }
    return e
  }
}
