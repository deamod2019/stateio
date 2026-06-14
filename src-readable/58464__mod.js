/**
 * Webpack Module #58464
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Rt: () => o, l4: () => s, qT: () => u })
  var i = n(67597) /* 67597__mod */
  const r = (0, n(71235) /* 71235__mod */.Rf)()
  function o(e, t = {}) {
    try {
      let n = e
      const i = 5,
        r = []
      let o = 0,
        s = 0
      const u = " > ",
        l = u.length
      let c
      const d = Array.isArray(t) ? t : t.keyAttrs,
        h = (!Array.isArray(t) && t.maxStringLength) || 80
      for (
        ;
        n &&
        o++ < i &&
        ((c = a(n, d)), !("html" === c || (o > 1 && s + r.length * l + c.length >= h)));
      )
        (r.push(c), (s += c.length), (n = n.parentNode))
      return r.reverse().join(u)
    } catch (e) {
      return "<unknown>"
    }
  }
  function a(e, t) {
    const n = e,
      r = []
    let o, a, s, u, l
    if (!n || !n.tagName) return ""
    r.push(n.tagName.toLowerCase())
    const c =
      t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null
    if (c && c.length)
      c.forEach((e) => {
        r.push(`[${e[0]}="${e[1]}"]`)
      })
    else if ((n.id && r.push(`#${n.id}`), (o = n.className), o && (0, i.HD)(o)))
      for (a = o.split(/\s+/), l = 0; l < a.length; l++) r.push(`.${a[l]}`)
    const d = ["type", "name", "title", "alt"]
    for (l = 0; l < d.length; l++)
      ((s = d[l]), (u = n.getAttribute(s)), u && r.push(`[${s}="${u}"]`))
    return r.join("")
  }
  function s() {
    try {
      return r.document.location.href
    } catch (e) {
      return ""
    }
  }
  function u(e) {
    return r.document && r.document.querySelector ? r.document.querySelector(e) : null
  }
}
