/**
 * Webpack Module #9732
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { o: () => h })
  var i = n(67597) /* 67597__mod */,
    r = n(12343) /* 12343__mod */,
    o = n(20535) /* 20535__mod */,
    a = n(30360) /* 30360__mod */,
    s = n(8823) /* 8823__mod */
  const u = (0, n(71235) /* 71235__mod */.Rf)(),
    l = {},
    c = {}
  function d(e) {
    if (!c[e])
      switch (((c[e] = true), e)) {
        case "console":
          !(function () {
            if (!("console" in u)) return
            r.RU.forEach(function (e) {
              e in u.console &&
                (0, o.hl)(u.console, e, function (t) {
                  return function (...n) {
                    ;(p("console", { args: n, level: e }), t && t.apply(u.console, n))
                  }
                })
            })
          })()
          break
        case "dom":
          !(function () {
            if (!("document" in u)) return
            const e = p.bind(null, "dom"),
              t = y(e, true)
            ;(u.document.addEventListener("click", t, false),
              u.document.addEventListener("keypress", t, false),
              ["EventTarget", "Node"].forEach((t) => {
                const n = u[t] && u[t].prototype
                n &&
                  n.hasOwnProperty &&
                  n.hasOwnProperty("addEventListener") &&
                  ((0, o.hl)(n, "addEventListener", function (t) {
                    return function (n, i, r) {
                      if ("click" === n || "keypress" == n)
                        try {
                          const i = this,
                            o = (i.__sentry_instrumentation_handlers__ =
                              i.__sentry_instrumentation_handlers__ || {}),
                            a = (o[n] = o[n] || { refCount: 0 })
                          if (!a.handler) {
                            const i = y(e)
                            ;((a.handler = i), t.call(this, n, i, r))
                          }
                          a.refCount++
                        } catch (e) {}
                      return t.call(this, n, i, r)
                    }
                  }),
                  (0, o.hl)(n, "removeEventListener", function (e) {
                    return function (t, n, i) {
                      if ("click" === t || "keypress" == t)
                        try {
                          const n = this,
                            r = n.__sentry_instrumentation_handlers__ || {},
                            o = r[t]
                          o &&
                            (o.refCount--,
                            o.refCount <= 0 &&
                              (e.call(this, t, o.handler, i), (o.handler = undefined), delete r[t]),
                            0 === Object.keys(r).length &&
                              delete n.__sentry_instrumentation_handlers__)
                        } catch (e) {}
                      return e.call(this, t, n, i)
                    }
                  }))
              }))
          })()
          break
        case "xhr":
          !(function () {
            if (!("XMLHttpRequest" in u)) return
            const e = XMLHttpRequest.prototype
            ;((0, o.hl)(e, "open", function (e) {
              return function (...t) {
                const n = this,
                  r = t[1],
                  a = (n.__sentry_xhr__ = {
                    method: (0, i.HD)(t[0]) ? t[0].toUpperCase() : t[0],
                    url: t[1],
                  })
                ;(0, i.HD)(r) &&
                  "POST" === a.method &&
                  r.match(/sentry_key/) &&
                  (n.__sentry_own_request__ = true)
                const s = function () {
                  if (4 === n.readyState) {
                    try {
                      a.status_code = n.status
                    } catch (e) {}
                    p("xhr", {
                      args: t,
                      endTimestamp: Date.now(),
                      startTimestamp: Date.now(),
                      xhr: n,
                    })
                  }
                }
                return (
                  "onreadystatechange" in n && "function" == typeof n.onreadystatechange
                    ? (0, o.hl)(n, "onreadystatechange", function (e) {
                        return function (...t) {
                          return (s(), e.apply(n, t))
                        }
                      })
                    : n.addEventListener("readystatechange", s),
                  e.apply(n, t)
                )
              }
            }),
              (0, o.hl)(e, "send", function (e) {
                return function (...t) {
                  return (
                    this.__sentry_xhr__ && undefined !== t[0] && (this.__sentry_xhr__.body = t[0]),
                    p("xhr", { args: t, startTimestamp: Date.now(), xhr: this }),
                    e.apply(this, t)
                  )
                }
              }))
          })()
          break
        case "fetch":
          !(function () {
            if (!(0, s.t$)()) return
            ;(0, o.hl)(u, "fetch", function (e) {
              return function (...t) {
                const n = {
                  args: t,
                  fetchData: { method: f(t), url: _(t) },
                  startTimestamp: Date.now(),
                }
                return (
                  p("fetch", { ...n }),
                  e.apply(u, t).then(
                    (e) => (p("fetch", { ...n, endTimestamp: Date.now(), response: e }), e),
                    (e) => {
                      throw (p("fetch", { ...n, endTimestamp: Date.now(), error: e }), e)
                    },
                  )
                )
              }
            })
          })()
          break
        case "history":
          !(function () {
            if (!(0, s.Bf)()) return
            const e = u.onpopstate
            function t(e) {
              return function (...t) {
                const n = t.length > 2 ? t[2] : undefined
                if (n) {
                  const e = g,
                    t = String(n)
                  ;((g = t), p("history", { from: e, to: t }))
                }
                return e.apply(this, t)
              }
            }
            ;((u.onpopstate = function (...t) {
              const n = u.location.href,
                i = g
              if (((g = n), p("history", { from: i, to: n }), e))
                try {
                  return e.apply(this, t)
                } catch (e) {}
            }),
              (0, o.hl)(u.history, "pushState", t),
              (0, o.hl)(u.history, "replaceState", t))
          })()
          break
        case "error":
          ;((C = u.onerror),
            (u.onerror = function (e, t, n, i, r) {
              return (
                p("error", { column: i, error: r, line: n, msg: e, url: t }),
                !!C && C.apply(this, arguments)
              )
            }))
          break
        case "unhandledrejection":
          ;((b = u.onunhandledrejection),
            (u.onunhandledrejection = function (e) {
              return (p("unhandledrejection", e), !b || b.apply(this, arguments))
            }))
          break
        default:
          return void (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.warn("unknown instrumentation type:", e)
          )
      }
  }
  function h(e, t) {
    ;((l[e] = l[e] || []), l[e].push(t), d(e))
  }
  function p(e, t) {
    if (e && l[e])
      for (const n of l[e] || [])
        try {
          n(t)
        } catch (t) {
          ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.error(
              `Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0, a.$P)(n)}\nError:`,
              t,
            )
        }
  }
  function f(e = []) {
    return "Request" in u && (0, i.V9)(e[0], Request) && e[0].method
      ? String(e[0].method).toUpperCase()
      : e[1] && e[1].method
        ? String(e[1].method).toUpperCase()
        : "GET"
  }
  function _(e = []) {
    return "string" == typeof e[0]
      ? e[0]
      : "Request" in u && (0, i.V9)(e[0], Request)
        ? e[0].url
        : String(e[0])
  }
  let g
  let m, v
  function y(e, t = false) {
    return (n) => {
      if (!n || v === n) return
      if (
        (function (e) {
          if ("keypress" !== e.type) return false
          try {
            const t = e.target
            if (!t || !t.tagName) return true
            if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return false
          } catch (e) {}
          return true
        })(n)
      )
        return
      const i = "keypress" === n.type ? "input" : n.type
      ;((undefined === m ||
        (function (e, t) {
          if (!e) return true
          if (e.type !== t.type) return true
          try {
            if (e.target !== t.target) return true
          } catch (e) {}
          return false
        })(v, n)) &&
        (e({ event: n, name: i, global: t }), (v = n)),
        clearTimeout(m),
        (m = u.setTimeout(() => {
          m = undefined
        }, 1e3)))
    }
  }
  let C = null
  let b = null
}
