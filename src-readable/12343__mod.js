/**
 * Webpack Module #12343
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Cf: () => o, RU: () => r, kg: () => s })
  var i = n(71235) /* 71235__mod */
  const r = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  function o(e) {
    if (!("console" in i.n2)) return e()
    const t = i.n2.console,
      n = {}
    r.forEach((e) => {
      const i = t[e] && t[e].__sentry_original__
      e in t && i && ((n[e] = t[e]), (t[e] = i))
    })
    try {
      return e()
    } finally {
      Object.keys(n).forEach((e) => {
        t[e] = n[e]
      })
    }
  }
  function a() {
    let e = false
    const t = {
      enable: () => {
        e = true
      },
      disable: () => {
        e = false
      },
    }
    return (
      "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        ? r.forEach((n) => {
            t[n] = (...t) => {
              e &&
                o(() => {
                  i.n2.console[n](`Sentry Logger [${n}]:`, ...t)
                })
            }
          })
        : r.forEach((e) => {
            t[e] = () => {}
          }),
      t
    )
  }
  let s
  s = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, i.YO)("logger", a) : a()
}
