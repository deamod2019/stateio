/**
 * Webpack Module #16584
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t), n.d(t, { Fragment: () => i.Fragment, jsx: () => o, jsxDEV: () => o, jsxs: () => o }))
  var i = n(6400),
    r = 0
  function o(e, t, n, o, a) {
    var s,
      u,
      l = {}
    for (u in t) "ref" == u ? (s = t[u]) : (l[u] = t[u])
    var c = {
      type: e,
      props: l,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --r,
      __source: a,
      __self: o,
    }
    if ("function" == typeof e && (s = e.defaultProps))
      for (u in s) void 0 === l[u] && (l[u] = s[u])
    return (i.options.vnode && i.options.vnode(c), c)
  }
}
