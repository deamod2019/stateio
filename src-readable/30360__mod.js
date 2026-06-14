/**
 * Webpack Module #30360
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { $P: () => a, Sq: () => r, pE: () => i })
  function i(...e) {
    const t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1])
    return (e, n = 0) => {
      const i = []
      for (const r of e.split("\n").slice(n)) {
        const e = r.replace(/\(error: (.*)\)/, "$1")
        for (const n of t) {
          const t = n(e)
          if (t) {
            i.push(t)
            break
          }
        }
      }
      return (function (e) {
        if (!e.length) return []
        let t = e
        const n = t[0].function || "",
          i = t[t.length - 1].function || ""
        ;(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException")) ||
          (t = t.slice(1))
        ;-1 !== i.indexOf("sentryWrapped") && (t = t.slice(0, -1))
        return t
          .slice(0, 50)
          .map((e) => ({
            ...e,
            filename: e.filename || t[0].filename,
            function: e.function || "?",
          }))
          .reverse()
      })(i)
    }
  }
  function r(e) {
    return Array.isArray(e) ? i(...e) : e
  }
  const o = "<anonymous>"
  function a(e) {
    try {
      return (e && "function" == typeof e && e.name) || o
    } catch (e) {
      return o
    }
  }
}
