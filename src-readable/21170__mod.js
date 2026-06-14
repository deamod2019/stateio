/**
 * Webpack Module #21170
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Z1: () => p, _I: () => d, ph: () => c, yW: () => l })
  var i = n(92448) /* 92448__mod */,
    r = n(71235) /* 71235__mod */
  e = n.hmd(e)
  const o = (0, r.Rf)(),
    a = { nowSeconds: () => Date.now() / 1e3 }
  const s = (0, i.KV)()
      ? (function () {
          try {
            return (0, i.l$)(e, "perf_hooks").performance
          } catch (e) {
            return
          }
        })()
      : (function () {
          const { performance: e } = o
          if (!e || !e.now) return
          return { now: () => e.now(), timeOrigin: Date.now() - e.now() }
        })(),
    u = undefined === s ? a : { nowSeconds: () => (s.timeOrigin + s.now()) / 1e3 },
    l = a.nowSeconds.bind(a),
    c = u.nowSeconds.bind(u),
    d = c
  let h
  const p = (() => {
    const { performance: e } = o
    if (!e || !e.now) return void (h = "none")
    const t = 36e5,
      n = e.now(),
      i = Date.now(),
      r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t,
      a = r < t,
      s = e.timing && e.timing.navigationStart,
      u = "number" == typeof s ? Math.abs(s + n - i) : t
    return a || u < t
      ? r <= u
        ? ((h = "timeOrigin"), e.timeOrigin)
        : ((h = "navigationStart"), s)
      : ((h = "dateNow"), i)
  })()
}
