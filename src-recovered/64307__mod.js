/**
 * Webpack Module #64307
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  function i(e) {
    let t,
      n = e[0],
      i = 1
    for (; i < e.length; ) {
      const r = e[i],
        o = e[i + 1]
      if (((i += 2), ("optionalAccess" === r || "optionalCall" === r) && null == n)) return
      "access" === r || "optionalAccess" === r
        ? ((t = n), (n = o(n)))
        : ("call" !== r && "optionalCall" !== r) ||
          ((n = o((...e) => n.call(t, ...e))), (t = void 0))
    }
    return n
  }
  n.d(t, { x: () => i })
}
