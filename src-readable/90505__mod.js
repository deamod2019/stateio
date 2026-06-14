/**
 * Webpack Module #90505
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      Breadcrumbs: () => Le,
      BrowserClient: () => et,
      Dedupe: () => ke,
      FunctionToString: () => s,
      GlobalHandlers: () => le,
      HttpContext: () => Re,
      Hub: () => _.Xb,
      InboundFilters: () => h,
      Integrations: () => Rt,
      LinkedErrors: () => Pe,
      SDK_VERSION: () => f,
      Scope: () => X.s,
      TryCatch: () => ge,
      WINDOW: () => q,
      addBreadcrumb: () => C,
      addGlobalEventProcessor: () => X.c,
      captureEvent: () => v,
      captureException: () => g,
      captureMessage: () => m,
      chromeStackLineParser: () => lt,
      close: () => It,
      configureScope: () => y,
      createTransport: () => Y,
      defaultIntegrations: () => wt,
      defaultStackLineParsers: () => yt,
      defaultStackParser: () => Ct,
      flush: () => At,
      forceLoad: () => Lt,
      geckoStackLineParser: () => ht,
      getCurrentHub: () => _.Gd,
      getHubFromCarrier: () => _.vi,
      init: () => xt,
      lastEventId: () => St,
      makeFetchTransport: () => it,
      makeMain: () => _.pj,
      makeXHRTransport: () => rt,
      onLoad: () => Et,
      opera10StackLineParser: () => gt,
      opera11StackLineParser: () => vt,
      setContext: () => b,
      setExtra: () => x,
      setExtras: () => w,
      setTag: () => S,
      setTags: () => T,
      setUser: () => L,
      showReportDialog: () => Tt,
      startTransaction: () => A,
      winjsStackLineParser: () => ft,
      withScope: () => E,
      wrap: () => Mt,
    }))
  var i = {}
  ;(n.r(i), n.d(i, { FunctionToString: () => s, InboundFilters: () => h }))
  var r = {}
  ;(n.r(r),
    n.d(r, {
      Breadcrumbs: () => Le,
      Dedupe: () => ke,
      GlobalHandlers: () => le,
      HttpContext: () => Re,
      LinkedErrors: () => Pe,
      TryCatch: () => ge,
    }))
  var o = n(20535) /* 20535__mod */
  let a
  class s {
    constructor() {
      s.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "FunctionToString"
    }
    __init() {
      this.name = s.id
    }
    setupOnce() {
      ;((a = Function.prototype.toString),
        (Function.prototype.toString = function (...e) {
          const t = (0, o.HK)(this) || this
          return a.apply(t, e)
        }))
    }
  }
  s.__initStatic()
  var u = n(12343) /* 12343__mod */,
    l = n(62844) /* 62844__mod */,
    c = n(57321) /* 57321__mod */
  const d = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
  class h {
    static __initStatic() {
      this.id = "InboundFilters"
    }
    __init() {
      this.name = h.id
    }
    constructor(e = {}) {
      ;((this._options = e), h.prototype.__init.call(this))
    }
    setupOnce(e, t) {
      const n = (e) => {
        const n = t()
        if (n) {
          const t = n.getIntegration(h)
          if (t) {
            const i = n.getClient(),
              r = i ? i.getOptions() : {},
              o = (function (e = {}, t = {}) {
                return {
                  allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                  denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                  ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...d],
                  ignoreInternal: undefined === e.ignoreInternal || e.ignoreInternal,
                }
              })(t._options, r)
            return (function (e, t) {
              if (
                t.ignoreInternal &&
                (function (e) {
                  try {
                    return "SentryError" === e.exception.values[0].type
                  } catch (e) {}
                  return false
                })(e)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.warn(
                      `Event dropped due to being internal Sentry Error.\nEvent: ${(0, l.jH)(e)}`,
                    ),
                  true
                )
              if (
                (function (e, t) {
                  if (!t || !t.length) return false
                  return (function (e) {
                    if (e.message) return [e.message]
                    if (e.exception)
                      try {
                        const { type: t = "", value: n = "" } =
                          (e.exception.values && e.exception.values[0]) || {}
                        return [`${n}`, `${t}: ${n}`]
                      } catch (t) {
                        return (
                          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                            u.kg.error(`Cannot extract message for event ${(0, l.jH)(e)}`),
                          []
                        )
                      }
                    return []
                  })(e).some((e) => (0, c.U0)(e, t))
                })(e, t.ignoreErrors)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.warn(
                      `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, l.jH)(e)}`,
                    ),
                  true
                )
              if (
                (function (e, t) {
                  if (!t || !t.length) return false
                  const n = p(e)
                  return !!n && (0, c.U0)(n, t)
                })(e, t.denyUrls)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.warn(
                      `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, l.jH)(e)}.\nUrl: ${p(e)}`,
                    ),
                  true
                )
              if (
                !(function (e, t) {
                  if (!t || !t.length) return true
                  const n = p(e)
                  return !n || (0, c.U0)(n, t)
                })(e, t.allowUrls)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.warn(
                      `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, l.jH)(e)}.\nUrl: ${p(e)}`,
                    ),
                  true
                )
              return false
            })(e, o)
              ? null
              : e
          }
        }
        return e
      }
      ;((n.id = this.name), e(n))
    }
  }
  function p(e) {
    try {
      let t
      try {
        t = e.exception.values[0].stacktrace.frames
      } catch (e) {}
      return t
        ? (function (e = []) {
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t]
              if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                return n.filename || null
            }
            return null
          })(t)
        : null
    } catch (t) {
      return (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.error(`Cannot extract url for event ${(0, l.jH)(e)}`),
        null
      )
    }
  }
  h.__initStatic()
  const f = "7.24.2"
  var _ = n(95659) /* 95659__mod */
  function g(e, t) {
    return (0, _.Gd)().captureException(e, { captureContext: t })
  }
  function m(e, t) {
    const n = "string" == typeof t ? t : undefined,
      i = "string" != typeof t ? { captureContext: t } : undefined
    return (0, _.Gd)().captureMessage(e, n, i)
  }
  function v(e, t) {
    return (0, _.Gd)().captureEvent(e, t)
  }
  function y(e) {
    ;(0, _.Gd)().configureScope(e)
  }
  function C(e) {
    ;(0, _.Gd)().addBreadcrumb(e)
  }
  function b(e, t) {
    ;(0, _.Gd)().setContext(e, t)
  }
  function w(e) {
    ;(0, _.Gd)().setExtras(e)
  }
  function x(e, t) {
    ;(0, _.Gd)().setExtra(e, t)
  }
  function T(e) {
    ;(0, _.Gd)().setTags(e)
  }
  function S(e, t) {
    ;(0, _.Gd)().setTag(e, t)
  }
  function L(e) {
    ;(0, _.Gd)().setUser(e)
  }
  function E(e) {
    ;(0, _.Gd)().withScope(e)
  }
  function A(e, t) {
    return (0, _.Gd)().startTransaction({ ...e }, t)
  }
  class I extends Error {
    constructor(e, t = "warn") {
      ;(super(e),
        (this.message = e),
        (this.name = new.target.prototype.constructor.name),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.logLevel = t))
    }
  }
  var M = n(96893) /* 96893__mod */
  function P(e) {
    const t = []
    function n(e) {
      return t.splice(t.indexOf(e), 1)[0]
    }
    return {
      $: t,
      add: function (i) {
        if (!(undefined === e || t.length < e))
          return (0, M.$2)(new I("Not adding Promise because buffer limit was reached."))
        const r = i()
        return (
          -1 === t.indexOf(r) && t.push(r),
          r.then(() => n(r)).then(null, () => n(r).then(null, () => {})),
          r
        )
      },
      drain: function (e) {
        return new M.cW((n, i) => {
          let r = t.length
          if (!r) return n(true)
          const o = setTimeout(() => {
            e && e > 0 && n(false)
          }, e)
          t.forEach((e) => {
            ;(0, M.WD)(e).then(() => {
              --r || (clearTimeout(o), n(true))
            }, i)
          })
        })
      },
    }
  }
  var O = n(67597) /* 67597__mod */
  var R = n(30360) /* 30360__mod */
  function k(e, t = 1 / 0, n = 1 / 0) {
    try {
      return D("", e, t, n)
    } catch (e) {
      return { ERROR: `**non-serializable** (${e})` }
    }
  }
  function N(e, t = 3, n = 102400) {
    const i = k(e, t)
    return (
      (r = i),
      (function (e) {
        return ~-encodeURI(e).split(/%..|./).length
      })(JSON.stringify(r)) > n
        ? N(e, t - 1, n)
        : i
    )
    var r
  }
  function D(
    e,
    t,
    i = 1 / 0,
    r = 1 / 0,
    a = (function () {
      const e = "function" == typeof WeakSet,
        t = e ? new WeakSet() : []
      return [
        function (n) {
          if (e) return !!t.has(n) || (t.add(n), false)
          for (let e = 0; e < t.length; e++) if (t[e] === n) return true
          return (t.push(n), false)
        },
        function (n) {
          if (e) t.delete(n)
          else
            for (let e = 0; e < t.length; e++)
              if (t[e] === n) {
                t.splice(e, 1)
                break
              }
        },
      ]
    })(),
  ) {
    const [s, u] = a
    if (null === t || (["number", "boolean", "string"].includes(typeof t) && !(0, O.i2)(t)))
      return t
    const l = (function (e, t) {
      try {
        return "domain" === e && t && "object" == typeof t && t._events
          ? "[Domain]"
          : "domainEmitter" === e
            ? "[DomainEmitter]"
            : undefined !== n.g && t === n.g
              ? "[Global]"
              : "undefined" != typeof window && t === window
                ? "[Window]"
                : "undefined" != typeof document && t === document
                  ? "[Document]"
                  : (0, O.Cy)(t)
                    ? "[SyntheticEvent]"
                    : "number" == typeof t && t != t
                      ? "[NaN]"
                      : undefined === t
                        ? "[undefined]"
                        : "function" == typeof t
                          ? `[Function: ${(0, R.$P)(t)}]`
                          : "symbol" == typeof t
                            ? `[${String(t)}]`
                            : "bigint" == typeof t
                              ? `[BigInt: ${String(t)}]`
                              : `[object ${Object.getPrototypeOf(t).constructor.name}]`
      } catch (e) {
        return `**non-serializable** (${e})`
      }
    })(e, t)
    if (!l.startsWith("[object ")) return l
    if (t.__sentry_skip_normalization__) return t
    if (0 === i) return l.replace("object ", "")
    if (s(t)) return "[Circular ~]"
    const c = t
    if (c && "function" == typeof c.toJSON)
      try {
        return D("", c.toJSON(), i - 1, r, a)
      } catch (e) {}
    const d = Array.isArray(t) ? [] : {}
    let h = 0
    const p = (0, o.Sh)(t)
    for (const e in p) {
      if (!Object.prototype.hasOwnProperty.call(p, e)) continue
      if (h >= r) {
        d[e] = "[MaxProperties ~]"
        break
      }
      const t = p[e]
      ;((d[e] = D(e, t, i - 1, r, a)), h++)
    }
    return (u(t), d)
  }
  function B(e, t = []) {
    return [e, t]
  }
  function F(e, t) {
    const [n, i] = e
    return [n, [...i, t]]
  }
  function U(e, t) {
    e[1].forEach((e) => {
      const n = e[0].type
      t(e, n)
    })
  }
  function G(e, t) {
    return (t || new TextEncoder()).encode(e)
  }
  function j(e, t) {
    const [n, i] = e
    let r = JSON.stringify(n)
    function o(e) {
      "string" == typeof r
        ? (r = "string" == typeof e ? r + e : [G(r, t), e])
        : r.push("string" == typeof e ? G(e, t) : e)
    }
    for (const e of i) {
      const [t, n] = e
      if ((o(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array)) o(n)
      else {
        let e
        try {
          e = JSON.stringify(n)
        } catch (t) {
          e = JSON.stringify(k(n))
        }
        o(e)
      }
    }
    return "string" == typeof r
      ? r
      : (function (e) {
          const t = e.reduce((e, t) => e + t.length, 0),
            n = new Uint8Array(t)
          let i = 0
          for (const t of e) (n.set(t, i), (i += t.length))
          return n
        })(r)
  }
  function H(e, t) {
    const n = "string" == typeof e.data ? G(e.data, t) : e.data
    return [
      (0, o.Jr)({
        type: "attachment",
        length: n.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType,
      }),
      n,
    ]
  }
  const V = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
  }
  function Z(e) {
    return V[e]
  }
  function z(e, { statusCode: t, headers: n }, i = Date.now()) {
    const r = { ...e },
      o = n && n["x-sentry-rate-limits"],
      a = n && n["retry-after"]
    if (o)
      for (const e of o.trim().split(",")) {
        const [t, n] = e.split(":", 2),
          o = parseInt(t, 10),
          a = 1e3 * (isNaN(o) ? 60 : o)
        if (n) for (const e of n.split(";")) r[e] = i + a
        else r.all = i + a
      }
    else
      a
        ? (r.all =
            i +
            (function (e, t = Date.now()) {
              const n = parseInt(`${e}`, 10)
              if (!isNaN(n)) return 1e3 * n
              const i = Date.parse(`${e}`)
              return isNaN(i) ? 6e4 : i - t
            })(a, i))
        : 429 === t && (r.all = i + 6e4)
    return r
  }
  function Y(e, t, n = P(e.bufferSize || 30)) {
    let i = {}
    return {
      send: function (r) {
        const o = []
        if (
          (U(r, (t, n) => {
            const r = Z(n)
            if (
              (function (e, t, n = Date.now()) {
                return (
                  (function (e, t) {
                    return e[t] || e.all || 0
                  })(e, t) > n
                )
              })(i, r)
            ) {
              const i = W(t, n)
              e.recordDroppedEvent("ratelimit_backoff", r, i)
            } else o.push(t)
          }),
          0 === o.length)
        )
          return (0, M.WD)()
        const a = B(r[0], o),
          s = (t) => {
            U(a, (n, i) => {
              const r = W(n, i)
              e.recordDroppedEvent(t, Z(i), r)
            })
          }
        return n
          .add(() =>
            t({ body: j(a, e.textEncoder) }).then(
              (e) => {
                ;(undefined !== e.statusCode &&
                  (e.statusCode < 200 || e.statusCode >= 300) &&
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  u.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                  (i = z(i, e)))
              },
              (e) => {
                ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  u.kg.error("Failed while sending event:", e),
                  s("network_error"))
              },
            ),
          )
          .then(
            (e) => e,
            (e) => {
              if (e instanceof I)
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.error("Skipped sending event because buffer is full."),
                  s("queue_overflow"),
                  (0, M.WD)()
                )
              throw e
            },
          )
      },
      flush: (e) => n.drain(e),
    }
  }
  function W(e, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : undefined
  }
  var X = n(10350) /* 10350__mod */
  const q = n(71235) /* 71235__mod */.n2
  let K = 0
  function $() {
    return K > 0
  }
  function J() {
    ;(K++,
      setTimeout(() => {
        K--
      }))
  }
  function Q(e, t = {}, n) {
    if ("function" != typeof e) return e
    try {
      const t = e.__sentry_wrapped__
      if (t) return t
      if ((0, o.HK)(e)) return e
    } catch (t) {
      return e
    }
    const i = function () {
      const i = Array.prototype.slice.call(arguments)
      try {
        n && "function" == typeof n && n.apply(this, arguments)
        const r = i.map((e) => Q(e, t))
        return e.apply(this, r)
      } catch (e) {
        throw (
          J(),
          E((n) => {
            ;(n.addEventProcessor(
              (e) => (
                t.mechanism && ((0, l.Db)(e, undefined, undefined), (0, l.EG)(e, t.mechanism)),
                (e.extra = { ...e.extra, arguments: i }),
                e
              ),
            ),
              g(e))
          }),
          e
        )
      }
    }
    try {
      for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t])
    } catch (e) {}
    ;((0, o.$Q)(i, e), (0, o.xp)(e, "__sentry_wrapped__", i))
    try {
      Object.getOwnPropertyDescriptor(i, "name").configurable &&
        Object.defineProperty(i, "name", { get: () => e.name })
    } catch (e) {}
    return i
  }
  var ee = n(9732) /* 9732__mod */,
    te = n(58464) /* 58464__mod */
  function ne(e, t) {
    const n = re(e, t),
      i = { type: t && t.name, value: ae(t) }
    return (
      n.length && (i.stacktrace = { frames: n }),
      undefined === i.type && "" === i.value && (i.value = "Unrecoverable error caught"),
      i
    )
  }
  function ie(e, t) {
    return { exception: { values: [ne(e, t)] } }
  }
  function re(e, t) {
    const n = t.stacktrace || t.stack || "",
      i = (function (e) {
        if (e) {
          if ("number" == typeof e.framesToPop) return e.framesToPop
          if (oe.test(e.message)) return 1
        }
        return 0
      })(t)
    try {
      return e(n, i)
    } catch (e) {}
    return []
  }
  const oe = /Minified React error #\d+;/i
  function ae(e) {
    const t = e && e.message
    return t
      ? t.error && "string" == typeof t.error.message
        ? t.error.message
        : t
      : "No error message"
  }
  function se(e, t, n, i, r) {
    let a
    if ((0, O.VW)(t) && t.error) {
      return ie(e, t.error)
    }
    if ((0, O.TX)(t) || (0, O.fm)(t)) {
      const r = t
      if ("stack" in t) a = ie(e, t)
      else {
        const t = r.name || ((0, O.TX)(r) ? "DOMError" : "DOMException"),
          o = r.message ? `${t}: ${r.message}` : t
        ;((a = ue(e, o, n, i)), (0, l.Db)(a, o))
      }
      return ("code" in r && (a.tags = { ...a.tags, "DOMException.code": `${r.code}` }), a)
    }
    if ((0, O.VZ)(t)) return ie(e, t)
    if ((0, O.PO)(t) || (0, O.cO)(t)) {
      return (
        (a = (function (e, t, n, i) {
          const r = (0, _.Gd)().getClient(),
            a = r && r.getOptions().normalizeDepth,
            s = {
              exception: {
                values: [
                  {
                    type: (0, O.cO)(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${i ? "promise rejection" : "exception"} captured with keys: ${(0, o.zf)(t)}`,
                  },
                ],
              },
              extra: { __serialized__: N(t, a) },
            }
          if (n) {
            const t = re(e, n)
            t.length && (s.exception.values[0].stacktrace = { frames: t })
          }
          return s
        })(e, t, n, r)),
        (0, l.EG)(a, { synthetic: true }),
        a
      )
    }
    return ((a = ue(e, t, n, i)), (0, l.Db)(a, `${t}`, undefined), (0, l.EG)(a, { synthetic: true }), a)
  }
  function ue(e, t, n, i) {
    const r = { message: t }
    if (i && n) {
      const i = re(e, n)
      i.length && (r.exception = { values: [{ value: t, stacktrace: { frames: i } }] })
    }
    return r
  }
  class le {
    static __initStatic() {
      this.id = "GlobalHandlers"
    }
    __init() {
      this.name = le.id
    }
    __init2() {
      this._installFunc = { onerror: ce, onunhandledrejection: de }
    }
    constructor(e) {
      ;(le.prototype.__init.call(this),
        le.prototype.__init2.call(this),
        (this._options = { onerror: true, onunhandledrejection: true, ...e }))
    }
    setupOnce() {
      Error.stackTraceLimit = 50
      const e = this._options
      for (const n in e) {
        const i = this._installFunc[n]
        i &&
          e[n] &&
          ((t = n),
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            u.kg.log(`Global Handler attached: ${t}`),
          i(),
          (this._installFunc[n] = undefined))
      }
      var t
    }
  }
  function ce() {
    ;(0, ee.o)("error", (e) => {
      const [t, n, i] = fe()
      if (!t.getIntegration(le)) return
      const { msg: r, url: o, line: a, column: s, error: u } = e
      if ($() || (u && u.__sentry_own_request__)) return
      const l =
        undefined === u && (0, O.HD)(r)
          ? (function (e, t, n, i) {
              const r =
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
              let o = (0, O.VW)(e) ? e.message : e,
                a = "Error"
              const s = o.match(r)
              s && ((a = s[1]), (o = s[2]))
              const u = { exception: { values: [{ type: a, value: o }] } }
              return he(u, t, n, i)
            })(r, o, a, s)
          : he(se(n, u || r, undefined, i, false), o, a, s)
      ;((l.level = "error"), pe(t, u, l, "onerror"))
    })
  }
  function de() {
    ;(0, ee.o)("unhandledrejection", (e) => {
      const [t, n, i] = fe()
      if (!t.getIntegration(le)) return
      let r = e
      try {
        "reason" in e
          ? (r = e.reason)
          : "detail" in e && "reason" in e.detail && (r = e.detail.reason)
      } catch (e) {}
      if ($() || (r && r.__sentry_own_request__)) return true
      const o = (0, O.pt)(r)
        ? {
            exception: {
              values: [
                {
                  type: "UnhandledRejection",
                  value: `Non-Error promise rejection captured with value: ${String(r)}`,
                },
              ],
            },
          }
        : se(n, r, undefined, i, true)
      ;((o.level = "error"), pe(t, r, o, "onunhandledrejection"))
    })
  }
  function he(e, t, n, i) {
    const r = (e.exception = e.exception || {}),
      o = (r.values = r.values || []),
      a = (o[0] = o[0] || {}),
      s = (a.stacktrace = a.stacktrace || {}),
      u = (s.frames = s.frames || []),
      l = isNaN(parseInt(i, 10)) ? undefined : i,
      c = isNaN(parseInt(n, 10)) ? undefined : n,
      d = (0, O.HD)(t) && t.length > 0 ? t : (0, te.l4)()
    return (
      0 === u.length && u.push({ colno: l, filename: d, function: "?", in_app: true, lineno: c }),
      e
    )
  }
  function pe(e, t, n, i) {
    ;((0, l.EG)(n, { handled: false, type: i }), e.captureEvent(n, { originalException: t }))
  }
  function fe() {
    const e = (0, _.Gd)(),
      t = e.getClient(),
      n = (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: false }
    return [e, n.stackParser, n.attachStacktrace]
  }
  le.__initStatic()
  const _e = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ]
  class ge {
    static __initStatic() {
      this.id = "TryCatch"
    }
    __init() {
      this.name = ge.id
    }
    constructor(e) {
      ;(ge.prototype.__init.call(this),
        (this._options = {
          XMLHttpRequest: true,
          eventTarget: true,
          requestAnimationFrame: true,
          setInterval: true,
          setTimeout: true,
          ...e,
        }))
    }
    setupOnce() {
      ;(this._options.setTimeout && (0, o.hl)(q, "setTimeout", me),
        this._options.setInterval && (0, o.hl)(q, "setInterval", me),
        this._options.requestAnimationFrame && (0, o.hl)(q, "requestAnimationFrame", ve),
        this._options.XMLHttpRequest &&
          "XMLHttpRequest" in q &&
          (0, o.hl)(XMLHttpRequest.prototype, "send", ye))
      const e = this._options.eventTarget
      if (e) {
        ;(Array.isArray(e) ? e : _e).forEach(Ce)
      }
    }
  }
  function me(e) {
    return function (...t) {
      const n = t[0]
      return (
        (t[0] = Q(n, {
          mechanism: { data: { function: (0, R.$P)(e) }, handled: true, type: "instrument" },
        })),
        e.apply(this, t)
      )
    }
  }
  function ve(e) {
    return function (t) {
      return e.apply(this, [
        Q(t, {
          mechanism: {
            data: { function: "requestAnimationFrame", handler: (0, R.$P)(e) },
            handled: true,
            type: "instrument",
          },
        }),
      ])
    }
  }
  function ye(e) {
    return function (...t) {
      const n = this
      return (
        ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
          e in n &&
            "function" == typeof n[e] &&
            (0, o.hl)(n, e, function (t) {
              const n = {
                  mechanism: {
                    data: { function: e, handler: (0, R.$P)(t) },
                    handled: true,
                    type: "instrument",
                  },
                },
                i = (0, o.HK)(t)
              return (i && (n.mechanism.data.handler = (0, R.$P)(i)), Q(t, n))
            })
        }),
        e.apply(this, t)
      )
    }
  }
  function Ce(e) {
    const t = q,
      n = t[e] && t[e].prototype
    n &&
      n.hasOwnProperty &&
      n.hasOwnProperty("addEventListener") &&
      ((0, o.hl)(n, "addEventListener", function (t) {
        return function (n, i, r) {
          try {
            "function" == typeof i.handleEvent &&
              (i.handleEvent = Q(i.handleEvent, {
                mechanism: {
                  data: { function: "handleEvent", handler: (0, R.$P)(i), target: e },
                  handled: true,
                  type: "instrument",
                },
              }))
          } catch (e) {}
          return t.apply(this, [
            n,
            Q(i, {
              mechanism: {
                data: { function: "addEventListener", handler: (0, R.$P)(i), target: e },
                handled: true,
                type: "instrument",
              },
            }),
            r,
          ])
        }
      }),
      (0, o.hl)(n, "removeEventListener", function (e) {
        return function (t, n, i) {
          const r = n
          try {
            const n = r && r.__sentry_wrapped__
            n && e.call(this, t, n, i)
          } catch (e) {}
          return e.call(this, t, r, i)
        }
      }))
  }
  ge.__initStatic()
  const be = ["fatal", "error", "warning", "log", "info", "debug"]
  function we(e) {
    return "warn" === e ? "warning" : be.includes(e) ? e : "log"
  }
  var xe = n(26956) /* 26956__mod */
  const Te = 1024,
    Se = "Breadcrumbs"
  class Le {
    static __initStatic() {
      this.id = Se
    }
    __init() {
      this.name = Le.id
    }
    constructor(e) {
      ;(Le.prototype.__init.call(this),
        (this.options = {
          console: true,
          dom: true,
          fetch: true,
          history: true,
          sentry: true,
          xhr: true,
          ...e,
        }))
    }
    setupOnce() {
      ;(this.options.console && (0, ee.o)("console", Ee),
        this.options.dom &&
          (0, ee.o)(
            "dom",
            (function (e) {
              function t(t) {
                let n,
                  i = "object" == typeof e ? e.serializeAttribute : undefined,
                  r =
                    "object" == typeof e && "number" == typeof e.maxStringLength
                      ? e.maxStringLength
                      : undefined
                ;(r &&
                  r > Te &&
                  (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.warn(
                      `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${r} was configured. Sentry will use 1024 instead.`,
                    ),
                  (r = Te)),
                  "string" == typeof i && (i = [i]))
                try {
                  n = t.event.target
                    ? (0, te.Rt)(t.event.target, { keyAttrs: i, maxStringLength: r })
                    : (0, te.Rt)(t.event, { keyAttrs: i, maxStringLength: r })
                } catch (e) {
                  n = "<unknown>"
                }
                0 !== n.length &&
                  (0, _.Gd)().addBreadcrumb(
                    { category: `ui.${t.name}`, message: n },
                    { event: t.event, name: t.name, global: t.global },
                  )
              }
              return t
            })(this.options.dom),
          ),
        this.options.xhr && (0, ee.o)("xhr", Ae),
        this.options.fetch && (0, ee.o)("fetch", Ie),
        this.options.history && (0, ee.o)("history", Me))
    }
    addSentryBreadcrumb(e) {
      this.options.sentry &&
        (0, _.Gd)().addBreadcrumb(
          {
            category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
            event_id: e.event_id,
            level: e.level,
            message: (0, l.jH)(e),
          },
          { event: e },
        )
    }
  }
  function Ee(e) {
    for (let t = 0; t < e.args.length; t++)
      if ("ref=Ref<" === e.args[t]) {
        e.args[t + 1] = "viewRef"
        break
      }
    const t = {
      category: "console",
      data: { arguments: e.args, logger: "console" },
      level: we(e.level),
      message: (0, c.nK)(e.args, " "),
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) return
      ;((t.message = `Assertion failed: ${(0, c.nK)(e.args.slice(1), " ") || "console.assert"}`),
        (t.data.arguments = e.args.slice(1)))
    }
    ;(0, _.Gd)().addBreadcrumb(t, { input: e.args, level: e.level })
  }
  function Ae(e) {
    if (e.endTimestamp) {
      if (e.xhr.__sentry_own_request__) return
      const { method: t, url: n, status_code: i, body: r } = e.xhr.__sentry_xhr__ || {}
      ;(0, _.Gd)().addBreadcrumb(
        { category: "xhr", data: { method: t, url: n, status_code: i }, type: "http" },
        { xhr: e.xhr, input: r },
      )
    } else;
  }
  function Ie(e) {
    e.endTimestamp &&
      ((e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method) ||
        (e.error
          ? (0, _.Gd)().addBreadcrumb(
              { category: "fetch", data: e.fetchData, level: "error", type: "http" },
              { data: e.error, input: e.args },
            )
          : (0, _.Gd)().addBreadcrumb(
              {
                category: "fetch",
                data: { ...e.fetchData, status_code: e.response.status },
                type: "http",
              },
              { input: e.args, response: e.response },
            )))
  }
  function Me(e) {
    let t = e.from,
      n = e.to
    const i = (0, xe.en)(q.location.href)
    let r = (0, xe.en)(t)
    const o = (0, xe.en)(n)
    ;(r.path || (r = i),
      i.protocol === o.protocol && i.host === o.host && (n = o.relative),
      i.protocol === r.protocol && i.host === r.host && (t = r.relative),
      (0, _.Gd)().addBreadcrumb({ category: "navigation", data: { from: t, to: n } }))
  }
  Le.__initStatic()
  class Pe {
    static __initStatic() {
      this.id = "LinkedErrors"
    }
    __init() {
      this.name = Pe.id
    }
    constructor(e = {}) {
      ;(Pe.prototype.__init.call(this),
        (this._key = e.key || "cause"),
        (this._limit = e.limit || 5))
    }
    setupOnce() {
      const e = (0, _.Gd)().getClient()
      e &&
        (0, X.c)((t, n) => {
          const i = (0, _.Gd)().getIntegration(Pe)
          return i
            ? (function (e, t, n, i, r) {
                if (
                  !(i.exception && i.exception.values && r && (0, O.V9)(r.originalException, Error))
                )
                  return i
                const o = Oe(e, n, r.originalException, t)
                return ((i.exception.values = [...o, ...i.exception.values]), i)
              })(e.getOptions().stackParser, i._key, i._limit, t, n)
            : t
        })
    }
  }
  function Oe(e, t, n, i, r = []) {
    if (!(0, O.V9)(n[i], Error) || r.length + 1 >= t) return r
    const o = ne(e, n[i])
    return Oe(e, t, n[i], i, [o, ...r])
  }
  Pe.__initStatic()
  class Re {
    constructor() {
      Re.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "HttpContext"
    }
    __init() {
      this.name = Re.id
    }
    setupOnce() {
      ;(0, X.c)((e) => {
        if ((0, _.Gd)().getIntegration(Re)) {
          if (!q.navigator && !q.location && !q.document) return e
          const t = (e.request && e.request.url) || (q.location && q.location.href),
            { referrer: n } = q.document || {},
            { userAgent: i } = q.navigator || {},
            r = {
              ...(t && { url: t }),
              headers: {
                ...(e.request && e.request.headers),
                ...(n && { Referer: n }),
                ...(i && { "User-Agent": i }),
              },
            }
          return { ...e, request: r }
        }
        return e
      })
    }
  }
  Re.__initStatic()
  class ke {
    constructor() {
      ke.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "Dedupe"
    }
    __init() {
      this.name = ke.id
    }
    setupOnce(e, t) {
      const n = (e) => {
        const n = t().getIntegration(ke)
        if (n) {
          try {
            if (
              (function (e, t) {
                if (!t) return false
                if (
                  (function (e, t) {
                    const n = e.message,
                      i = t.message
                    if (!n && !i) return false
                    if ((n && !i) || (!n && i)) return false
                    if (n !== i) return false
                    if (!De(e, t)) return false
                    if (!Ne(e, t)) return false
                    return true
                  })(e, t)
                )
                  return true
                if (
                  (function (e, t) {
                    const n = Be(t),
                      i = Be(e)
                    if (!n || !i) return false
                    if (n.type !== i.type || n.value !== i.value) return false
                    if (!De(e, t)) return false
                    if (!Ne(e, t)) return false
                    return true
                  })(e, t)
                )
                  return true
                return false
              })(e, n._previousEvent)
            )
              return (
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  u.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                null
              )
          } catch (t) {
            return (n._previousEvent = e)
          }
          return (n._previousEvent = e)
        }
        return e
      }
      ;((n.id = this.name), e(n))
    }
  }
  function Ne(e, t) {
    let n = Fe(e),
      i = Fe(t)
    if (!n && !i) return true
    if ((n && !i) || (!n && i)) return false
    if (i.length !== n.length) return false
    for (let e = 0; e < i.length; e++) {
      const t = i[e],
        r = n[e]
      if (
        t.filename !== r.filename ||
        t.lineno !== r.lineno ||
        t.colno !== r.colno ||
        t.function !== r.function
      )
        return false
    }
    return true
  }
  function De(e, t) {
    let n = e.fingerprint,
      i = t.fingerprint
    if (!n && !i) return true
    if ((n && !i) || (!n && i)) return false
    try {
      return !(n.join("") !== i.join(""))
    } catch (e) {
      return false
    }
  }
  function Be(e) {
    return e.exception && e.exception.values && e.exception.values[0]
  }
  function Fe(e) {
    const t = e.exception
    if (t)
      try {
        return t.values[0].stacktrace.frames
      } catch (e) {
        return
      }
  }
  ke.__initStatic()
  var Ue = n(64307) /* 64307__mod */
  const Ge = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
  function je(e, t = false) {
    const { host: n, path: i, pass: r, port: o, projectId: a, protocol: s, publicKey: u } = e
    return `${s}://${u}${t && r ? `:${r}` : ""}@${n}${o ? `:${o}` : ""}/${i ? `${i}/` : i}${a}`
  }
  function He(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || "",
      pass: e.pass || "",
      host: e.host,
      port: e.port || "",
      path: e.path || "",
      projectId: e.projectId,
    }
  }
  function Ve(e) {
    const t =
      "string" == typeof e
        ? (function (e) {
            const t = Ge.exec(e)
            if (!t) throw new I(`Invalid Sentry Dsn: ${e}`)
            const [n, i, r = "", o, a = "", s] = t.slice(1)
            let u = "",
              l = s
            const c = l.split("/")
            if ((c.length > 1 && ((u = c.slice(0, -1).join("/")), (l = c.pop())), l)) {
              const e = l.match(/^\d+/)
              e && (l = e[0])
            }
            return He({
              host: o,
              pass: r,
              path: u,
              projectId: l,
              port: a,
              protocol: n,
              publicKey: i,
            })
          })(e)
        : He(e)
    return (
      (function (e) {
        if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return
        const { port: t, projectId: n, protocol: i } = e
        if (
          (["protocol", "publicKey", "host", "projectId"].forEach((t) => {
            if (!e[t]) throw new I(`Invalid Sentry Dsn: ${t} missing`)
          }),
          !n.match(/^\d+$/))
        )
          throw new I(`Invalid Sentry Dsn: Invalid projectId ${n}`)
        if (
          !(function (e) {
            return "http" === e || "https" === e
          })(i)
        )
          throw new I(`Invalid Sentry Dsn: Invalid protocol ${i}`)
        if (t && isNaN(parseInt(t, 10))) throw new I(`Invalid Sentry Dsn: Invalid port ${t}`)
      })(t),
      t
    )
  }
  var Ze = n(21170) /* 21170__mod */
  function ze(e) {
    const t = e.protocol ? `${e.protocol}:` : "",
      n = e.port ? `:${e.port}` : ""
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
  }
  function Ye(e, t = {}) {
    const n = "string" == typeof t ? t : t.tunnel,
      i = "string" != typeof t && t._metadata ? t._metadata.sdk : undefined
    return (
      n ||
      `${(function (e) {
        return `${ze(e)}${e.projectId}/envelope/`
      })(e)}?${(function (e, t) {
        return (0, o._j)({
          sentry_key: e.publicKey,
          sentry_version: "7",
          ...(t && { sentry_client: `${t.name}/${t.version}` }),
        })
      })(e, i)}`
    )
  }
  function We(e) {
    if (!e || !e.sdk) return
    const { name: t, version: n } = e.sdk
    return { name: t, version: n }
  }
  function Xe(e, t, n, i) {
    const r = We(n),
      a = e.type || "event"
    !(function (e, t) {
      t &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || t.name),
        (e.sdk.version = e.sdk.version || t.version),
        (e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
        (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]))
    })(e, n && n.sdk)
    const s = (function (e, t, n, i) {
      const r = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext
      return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!n && { dsn: je(i) }),
        ...("transaction" === e.type && r && { trace: (0, o.Jr)({ ...r }) }),
      }
    })(e, r, i, t)
    delete e.sdkProcessingMetadata
    return B(s, [[{ type: a }, e]])
  }
  const qe = []
  function Ke(e) {
    const t = e.defaultIntegrations || [],
      n = e.integrations
    let i
    ;(t.forEach((e) => {
      e.isDefaultInstance = true
    }),
      (i = Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? (0, l.lE)(n(t)) : t))
    const r = (function (e) {
        const t = {}
        return (
          e.forEach((e) => {
            const { name: n } = e,
              i = t[n]
            ;(i && !i.isDefaultInstance && e.isDefaultInstance) || (t[n] = e)
          }),
          Object.values(t)
        )
      })(i),
      o = r.findIndex((e) => "Debug" === e.name)
    if (-1 !== o) {
      const [e] = r.splice(o, 1)
      r.push(e)
    }
    return r
  }
  var $e = n(9015) /* 9015__mod */
  const Je = "Not capturing exception because it's already been captured."
  class Qe {
    __init() {
      this._integrations = {}
    }
    __init2() {
      this._integrationsInitialized = false
    }
    __init3() {
      this._numProcessing = 0
    }
    __init4() {
      this._outcomes = {}
    }
    constructor(e) {
      if (
        (Qe.prototype.__init.call(this),
        Qe.prototype.__init2.call(this),
        Qe.prototype.__init3.call(this),
        Qe.prototype.__init4.call(this),
        (this._options = e),
        e.dsn)
      ) {
        this._dsn = Ve(e.dsn)
        const t = Ye(this._dsn, e)
        this._transport = e.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...e.transportOptions,
          url: t,
        })
      } else
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.warn("No DSN provided, client will not do anything.")
    }
    captureException(e, t, n) {
      if ((0, l.YO)(e))
        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log(Je))
      let i = t && t.event_id
      return (
        this._process(
          this.eventFromException(e, t)
            .then((e) => this._captureEvent(e, t, n))
            .then((e) => {
              i = e
            }),
        ),
        i
      )
    }
    captureMessage(e, t, n, i) {
      let r = n && n.event_id
      const o = (0, O.pt)(e)
        ? this.eventFromMessage(String(e), t, n)
        : this.eventFromException(e, n)
      return (
        this._process(
          o
            .then((e) => this._captureEvent(e, n, i))
            .then((e) => {
              r = e
            }),
        ),
        r
      )
    }
    captureEvent(e, t, n) {
      if (t && t.originalException && (0, l.YO)(t.originalException))
        return void (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log(Je))
      let i = t && t.event_id
      return (
        this._process(
          this._captureEvent(e, t, n).then((e) => {
            i = e
          }),
        ),
        i
      )
    }
    captureSession(e) {
      this._isEnabled()
        ? "string" != typeof e.release
          ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            u.kg.warn("Discarded session because of missing or non-string release")
          : (this.sendSession(e), (0, $e.CT)(e, { init: false }))
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.warn("SDK not enabled, will not capture session.")
    }
    getDsn() {
      return this._dsn
    }
    getOptions() {
      return this._options
    }
    getTransport() {
      return this._transport
    }
    flush(e) {
      const t = this._transport
      return t
        ? this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e))
        : (0, M.WD)(true)
    }
    close(e) {
      return this.flush(e).then((e) => ((this.getOptions().enabled = false), e))
    }
    setupIntegrations() {
      this._isEnabled() &&
        !this._integrationsInitialized &&
        ((this._integrations = (function (e) {
          const t = {}
          return (
            e.forEach((e) => {
              ;((t[e.name] = e),
                -1 === qe.indexOf(e.name) &&
                  (e.setupOnce(X.c, _.Gd),
                  qe.push(e.name),
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    u.kg.log(`Integration installed: ${e.name}`)))
            }),
            t
          )
        })(this._options.integrations)),
        (this._integrationsInitialized = true))
    }
    getIntegrationById(e) {
      return this._integrations[e]
    }
    getIntegration(e) {
      try {
        return this._integrations[e.id] || null
      } catch (t) {
        return (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            u.kg.warn(`Cannot retrieve integration ${e.id} from the current Client`),
          null
        )
      }
    }
    sendEvent(e, t = {}) {
      if (this._dsn) {
        let n = Xe(e, this._dsn, this._options._metadata, this._options.tunnel)
        for (const e of t.attachments || [])
          n = F(
            n,
            H(e, this._options.transportOptions && this._options.transportOptions.textEncoder),
          )
        this._sendEnvelope(n)
      }
    }
    sendSession(e) {
      if (this._dsn) {
        const t = (function (e, t, n, i) {
          const r = We(n)
          return B(
            { sent_at: new Date().toISOString(), ...(r && { sdk: r }), ...(!!i && { dsn: je(t) }) },
            ["aggregates" in e ? [{ type: "sessions" }, e] : [{ type: "session" }, e]],
          )
        })(e, this._dsn, this._options._metadata, this._options.tunnel)
        this._sendEnvelope(t)
      }
    }
    recordDroppedEvent(e, t, n) {
      if (this._options.sendClientReports) {
        const n = `${e}:${t}`
        ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.log(`Adding outcome: "${n}"`),
          (this._outcomes[n] = this._outcomes[n] + 1 || 1))
      }
    }
    _updateSessionFromEvent(e, t) {
      let n = false,
        i = false
      const r = t.exception && t.exception.values
      if (r) {
        i = true
        for (const e of r) {
          const t = e.mechanism
          if (t && false === t.handled) {
            n = true
            break
          }
        }
      }
      const o = "ok" === e.status
      ;((o && 0 === e.errors) || (o && n)) &&
        ((0, $e.CT)(e, { ...(n && { status: "crashed" }), errors: e.errors || Number(i || n) }),
        this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
      return new M.cW((t) => {
        let n = 0
        const i = setInterval(() => {
          0 == this._numProcessing
            ? (clearInterval(i), t(true))
            : ((n += 1), e && n >= e && (clearInterval(i), t(false)))
        }, 1)
      })
    }
    _isEnabled() {
      return false !== this.getOptions().enabled && undefined !== this._dsn
    }
    _prepareEvent(e, t, n) {
      const { normalizeDepth: i = 3, normalizeMaxBreadth: r = 1e3 } = this.getOptions(),
        o = {
          ...e,
          event_id: e.event_id || t.event_id || (0, l.DM)(),
          timestamp: e.timestamp || (0, Ze.yW)(),
        }
      ;(this._applyClientOptions(o), this._applyIntegrationsMetadata(o))
      let a = n
      t.captureContext && (a = X.s.clone(a).update(t.captureContext))
      let s = (0, M.WD)(o)
      if (a && a.getAttachments) {
        const e = [...(t.attachments || []), ...a.getAttachments()]
        ;(e.length && (t.attachments = e), (s = a.applyToEvent(o, t)))
      }
      return s.then((e) => ("number" == typeof i && i > 0 ? this._normalizeEvent(e, i, r) : e))
    }
    _normalizeEvent(e, t, n) {
      if (!e) return null
      const i = {
        ...e,
        ...(e.breadcrumbs && {
          breadcrumbs: e.breadcrumbs.map((e) => ({
            ...e,
            ...(e.data && { data: k(e.data, t, n) }),
          })),
        }),
        ...(e.user && { user: k(e.user, t, n) }),
        ...(e.contexts && { contexts: k(e.contexts, t, n) }),
        ...(e.extra && { extra: k(e.extra, t, n) }),
      }
      return (
        e.contexts &&
          e.contexts.trace &&
          i.contexts &&
          ((i.contexts.trace = e.contexts.trace),
          e.contexts.trace.data && (i.contexts.trace.data = k(e.contexts.trace.data, t, n))),
        e.spans && (i.spans = e.spans.map((e) => (e.data && (e.data = k(e.data, t, n)), e))),
        i
      )
    }
    _applyClientOptions(e) {
      const t = this.getOptions(),
        { environment: n, release: i, dist: r, maxValueLength: o = 250 } = t
      ;("environment" in e || (e.environment = "environment" in t ? n : "production"),
        undefined === e.release && undefined !== i && (e.release = i),
        undefined === e.dist && undefined !== r && (e.dist = r),
        e.message && (e.message = (0, c.$G)(e.message, o)))
      const a = e.exception && e.exception.values && e.exception.values[0]
      a && a.value && (a.value = (0, c.$G)(a.value, o))
      const s = e.request
      s && s.url && (s.url = (0, c.$G)(s.url, o))
    }
    _applyIntegrationsMetadata(e) {
      const t = Object.keys(this._integrations)
      t.length > 0 &&
        ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]))
    }
    _captureEvent(e, t = {}, n) {
      return this._processEvent(e, t, n).then(
        (e) => e.event_id,
        (e) => {
          if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
            const t = e
            "log" === t.logLevel ? u.kg.log(t.message) : u.kg.warn(t)
          }
        },
      )
    }
    _processEvent(e, t, n) {
      const i = this.getOptions(),
        { sampleRate: r } = i
      if (!this._isEnabled())
        return (0, M.$2)(new I("SDK not enabled, will not capture event.", "log"))
      const o = "transaction" === e.type,
        a = o ? "beforeSendTransaction" : "beforeSend",
        s = i[a]
      return !o && "number" == typeof r && Math.random() > r
        ? (this.recordDroppedEvent("sample_rate", "error", e),
          (0, M.$2)(
            new I(
              `Discarding event because it's not included in the random sample (sampling rate = ${r})`,
              "log",
            ),
          ))
        : this._prepareEvent(e, t, n)
            .then((n) => {
              if (null === n)
                throw (
                  this.recordDroppedEvent("event_processor", e.type || "error", e),
                  new I("An event processor returned `null`, will not send event.", "log")
                )
              if ((t.data && true === t.data.__sentry__) || !s) return n
              return (function (e, t) {
                const n = `\`${t}\` must return \`null\` or a valid event.`
                if ((0, O.J8)(e))
                  return e.then(
                    (e) => {
                      if (!(0, O.PO)(e) && null !== e) throw new I(n)
                      return e
                    },
                    (e) => {
                      throw new I(`\`${t}\` rejected with ${e}`)
                    },
                  )
                if (!(0, O.PO)(e) && null !== e) throw new I(n)
                return e
              })(s(n, t), a)
            })
            .then((i) => {
              if (null === i)
                throw (
                  this.recordDroppedEvent("before_send", e.type || "error", e),
                  new I(`\`${a}\` returned \`null\`, will not send event.`, "log")
                )
              const r = n && n.getSession()
              !o && r && this._updateSessionFromEvent(r, i)
              const s = i.transaction_info
              if (o && s && i.transaction !== e.transaction) {
                const e = "custom"
                i.transaction_info = {
                  ...s,
                  source: e,
                  changes: [
                    ...s.changes,
                    { source: e, timestamp: i.timestamp, propagations: s.propagations },
                  ],
                }
              }
              return (this.sendEvent(i, t), i)
            })
            .then(null, (e) => {
              if (e instanceof I) throw e
              throw (
                this.captureException(e, { data: { __sentry__: true }, originalException: e }),
                new I(
                  `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
                )
              )
            })
    }
    _process(e) {
      ;(this._numProcessing++,
        e.then(
          (e) => (this._numProcessing--, e),
          (e) => (this._numProcessing--, e),
        ))
    }
    _sendEnvelope(e) {
      this._transport && this._dsn
        ? this._transport.send(e).then(null, (e) => {
            ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              u.kg.error("Error while sending event:", e)
          })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.error("Transport disabled")
    }
    _clearOutcomes() {
      const e = this._outcomes
      return (
        (this._outcomes = {}),
        Object.keys(e).map((t) => {
          const [n, i] = t.split(":")
          return { reason: n, category: i, quantity: e[t] }
        })
      )
    }
  }
  class et extends Qe {
    constructor(e) {
      ;((e._metadata = e._metadata || {}),
        (e._metadata.sdk = e._metadata.sdk || {
          name: "sentry.javascript.browser",
          packages: [{ name: "npm:@sentry/browser", version: f }],
          version: f,
        }),
        super(e),
        e.sendClientReports &&
          q.document &&
          q.document.addEventListener("visibilitychange", () => {
            "hidden" === q.document.visibilityState && this._flushOutcomes()
          }))
    }
    eventFromException(e, t) {
      return (function (e, t, n, i) {
        const r = se(e, t, (n && n.syntheticException) || undefined, i)
        return (
          (0, l.EG)(r),
          (r.level = "error"),
          n && n.event_id && (r.event_id = n.event_id),
          (0, M.WD)(r)
        )
      })(this._options.stackParser, e, t, this._options.attachStacktrace)
    }
    eventFromMessage(e, t = "info", n) {
      return (function (e, t, n = "info", i, r) {
        const o = ue(e, t, (i && i.syntheticException) || undefined, r)
        return ((o.level = n), i && i.event_id && (o.event_id = i.event_id), (0, M.WD)(o))
      })(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    sendEvent(e, t) {
      const n = this.getIntegrationById(Se)
      ;((0, Ue.x)([n, "optionalAccess", (e) => e.addSentryBreadcrumb, "optionalCall", (t) => t(e)]),
        super.sendEvent(e, t))
    }
    _prepareEvent(e, t, n) {
      return ((e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n))
    }
    _flushOutcomes() {
      const e = this._clearOutcomes()
      if (0 === e.length)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.log("No outcomes to send")
        )
      if (!this._dsn)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.log("No dsn provided, will not send outcomes")
        )
      ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        u.kg.log("Sending outcomes:", e)
      const t = Ye(this._dsn, this._options),
        n =
          ((i = e),
          B((r = this._options.tunnel && je(this._dsn)) ? { dsn: r } : {}, [
            [{ type: "client_report" }, { timestamp: o || (0, Ze.yW)(), discarded_events: i }],
          ]))
      var i, r, o
      try {
        const e = "[object Navigator]" === Object.prototype.toString.call(q && q.navigator)
        if (e && "function" == typeof q.navigator.sendBeacon && !this._options.transportOptions) {
          q.navigator.sendBeacon.bind(q.navigator)(t, j(n))
        } else this._sendEnvelope(n)
      } catch (e) {
        ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.error(e)
      }
    }
  }
  var tt = n(8823) /* 8823__mod */
  let nt
  function it(
    e,
    t = (function () {
      if (nt) return nt
      if ((0, tt.Du)(q.fetch)) return (nt = q.fetch.bind(q))
      const e = q.document
      let t = q.fetch
      if (e && "function" == typeof e.createElement)
        try {
          const n = e.createElement("iframe")
          ;((n.hidden = true), e.head.appendChild(n))
          const i = n.contentWindow
          ;(i && i.fetch && (t = i.fetch), e.head.removeChild(n))
        } catch (e) {
          ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            u.kg.warn(
              "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
              e,
            )
        }
      return (nt = t.bind(q))
    })(),
  ) {
    return Y(e, function (n) {
      const i = {
        body: n.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: e.headers,
        keepalive: n.body.length <= 65536,
        ...e.fetchOptions,
      }
      try {
        return t(e.url, i).then((e) => ({
          statusCode: e.status,
          headers: {
            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": e.headers.get("Retry-After"),
          },
        }))
      } catch (e) {
        return ((nt = undefined), (0, M.$2)(e))
      }
    })
  }
  function rt(e) {
    return Y(e, function (t) {
      return new M.cW((n, i) => {
        const r = new XMLHttpRequest()
        ;((r.onerror = i),
          (r.onreadystatechange = () => {
            4 === r.readyState &&
              n({
                statusCode: r.status,
                headers: {
                  "x-sentry-rate-limits": r.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": r.getResponseHeader("Retry-After"),
                },
              })
          }),
          r.open("POST", e.url))
        for (const t in e.headers)
          Object.prototype.hasOwnProperty.call(e.headers, t) && r.setRequestHeader(t, e.headers[t])
        r.send(t.body)
      })
    })
  }
  const ot = "?"
  function at(e, t, n, i) {
    const r = { filename: e, function: t, in_app: true }
    return (undefined !== n && (r.lineno = n), undefined !== i && (r.colno = i), r)
  }
  const st =
      /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    ut = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    lt = [
      30,
      (e) => {
        const t = st.exec(e)
        if (t) {
          if (t[2] && 0 === t[2].indexOf("eval")) {
            const e = ut.exec(t[2])
            e && ((t[2] = e[1]), (t[3] = e[2]), (t[4] = e[3]))
          }
          const [e, n] = bt(t[1] || ot, t[2])
          return at(n, e, t[3] ? +t[3] : undefined, t[4] ? +t[4] : undefined)
        }
      },
    ],
    ct =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    dt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    ht = [
      50,
      (e) => {
        const t = ct.exec(e)
        if (t) {
          if (t[3] && t[3].indexOf(" > eval") > -1) {
            const e = dt.exec(t[3])
            e && ((t[1] = t[1] || "eval"), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ""))
          }
          let e = t[3],
            n = t[1] || ot
          return (([n, e] = bt(n, e)), at(e, n, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined))
        }
      },
    ],
    pt =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    ft = [
      40,
      (e) => {
        const t = pt.exec(e)
        return t ? at(t[2], t[1] || ot, +t[3], t[4] ? +t[4] : undefined) : undefined
      },
    ],
    _t = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    gt = [
      10,
      (e) => {
        const t = _t.exec(e)
        return t ? at(t[2], t[3] || ot, +t[1]) : undefined
      },
    ],
    mt =
      / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    vt = [
      20,
      (e) => {
        const t = mt.exec(e)
        return t ? at(t[5], t[3] || t[4] || ot, +t[1], +t[2]) : undefined
      },
    ],
    yt = [lt, ht, ft],
    Ct = (0, R.pE)(...yt),
    bt = (e, t) => {
      const n = -1 !== e.indexOf("safari-extension"),
        i = -1 !== e.indexOf("safari-web-extension")
      return n || i
        ? [
            -1 !== e.indexOf("@") ? e.split("@")[0] : ot,
            n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
          ]
        : [e, t]
    }
  const wt = [new h(), new s(), new ge(), new Le(), new le(), new Pe(), new ke(), new Re()]
  function xt(e = {}) {
    ;(undefined === e.defaultIntegrations && (e.defaultIntegrations = wt),
      undefined === e.release &&
        ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__),
        q.SENTRY_RELEASE && q.SENTRY_RELEASE.id && (e.release = q.SENTRY_RELEASE.id)),
      undefined === e.autoSessionTracking && (e.autoSessionTracking = true),
      undefined === e.sendClientReports && (e.sendClientReports = true))
    const t = {
      ...e,
      stackParser: (0, R.Sq)(e.stackParser || Ct),
      integrations: Ke(e),
      transport: e.transport || ((0, tt.Ak)() ? it : rt),
    }
    ;(!(function (e, t) {
      true === t.debug &&
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? u.kg.enable()
          : console.warn(
              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
            ))
      const n = (0, _.Gd)(),
        i = n.getScope()
      i && i.update(t.initialScope)
      const r = new e(t)
      n.bindClient(r)
    })(et, t),
      e.autoSessionTracking &&
        (function () {
          if (undefined === q.document)
            return void (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              u.kg.warn(
                "Session tracking in non-browser environment with @sentry/browser is not supported.",
              )
            )
          const e = (0, _.Gd)()
          if (!e.captureSession) return
          ;(Pt(e),
            (0, ee.o)("history", ({ from: e, to: t }) => {
              undefined !== e && e !== t && Pt((0, _.Gd)())
            }))
        })())
  }
  function Tt(e = {}, t = (0, _.Gd)()) {
    if (!q.document)
      return void (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        u.kg.error("Global document not defined in showReportDialog call")
      )
    const { client: n, scope: i } = t.getStackTop(),
      r = e.dsn || (n && n.getDsn())
    if (!r)
      return void (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        u.kg.error("DSN not configured for showReportDialog call")
      )
    ;(i && (e.user = { ...i.getUser(), ...e.user }), e.eventId || (e.eventId = t.lastEventId()))
    const o = q.document.createElement("script")
    ;((o.async = true),
      (o.src = (function (e, t) {
        const n = Ve(e),
          i = `${ze(n)}embed/error-page/`
        let r = `dsn=${je(n)}`
        for (const e in t)
          if ("dsn" !== e)
            if ("user" === e) {
              const e = t.user
              if (!e) continue
              ;(e.name && (r += `&name=${encodeURIComponent(e.name)}`),
                e.email && (r += `&email=${encodeURIComponent(e.email)}`))
            } else r += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`
        return `${i}?${r}`
      })(r, e)),
      e.onLoad && (o.onload = e.onLoad))
    const a = q.document.head || q.document.body
    a
      ? a.appendChild(o)
      : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        u.kg.error("Not injecting report dialog. No injection point found in HTML")
  }
  function St() {
    return (0, _.Gd)().lastEventId()
  }
  function Lt() {}
  function Et(e) {
    e()
  }
  function At(e) {
    const t = (0, _.Gd)().getClient()
    return t
      ? t.flush(e)
      : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.warn("Cannot flush events. No client defined."),
        (0, M.WD)(false))
  }
  function It(e) {
    const t = (0, _.Gd)().getClient()
    return t
      ? t.close(e)
      : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          u.kg.warn("Cannot flush events and disable SDK. No client defined."),
        (0, M.WD)(false))
  }
  function Mt(e) {
    return Q(e)()
  }
  function Pt(e) {
    ;(e.startSession({ ignoreDuration: true }), e.captureSession())
  }
  let Ot = {}
  q.Sentry && q.Sentry.Integrations && (Ot = q.Sentry.Integrations)
  const Rt = { ...Ot, ...i, ...r }
}
