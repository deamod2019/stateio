/**
 * Webpack Module #26956
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  function i(e) {
    if (!e) return {}
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
    if (!t) return {}
    const n = t[6] || "",
      i = t[8] || ""
    return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + i }
  }
  function r(e) {
    return e.split(/[\?#]/, 1)[0]
  }
  function o(e) {
    return e.split(/\\?\//).filter((e) => e.length > 0 && "," !== e).length
  }
  n.d(t, { $A: () => o, en: () => i, rt: () => r })
}
