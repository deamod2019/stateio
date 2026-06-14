/**
 * Webpack Module #99261
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      getAnalytics: () => N,
      initializeAnalytics: () => D,
      isSupported: () => B,
      logEvent: () => V,
      setAnalyticsCollectionEnabled: () => j,
      setConsent: () => Z,
      setCurrentScreen: () => F,
      setDefaultEventParameters: () => H,
      setUserId: () => U,
      setUserProperties: () => G,
      settings: () => R,
    }))
  var i = n(32238) /* 32238__mod */,
    r = n(53333) /* 53333__mod */,
    o = n(74444) /* 74444__mod */,
    a = n(8463) /* 8463__mod */
  n(37578) /* 37578__mod */
  const s = "analytics",
    u = "https://www.googletagmanager.com/gtag/js",
    l = new r.Yd("@firebase/analytics")
  function c(e) {
    return Promise.all(e.map((e) => e.catch((e) => e)))
  }
  function d(e, t, n, i) {
    return async function (r, o, a) {
      try {
        "event" === r
          ? await (async function (e, t, n, i, r) {
              try {
                let o = []
                if (r && r.send_to) {
                  let e = r.send_to
                  Array.isArray(e) || (e = [e])
                  const i = await c(n)
                  for (const n of e) {
                    const e = i.find((e) => e.measurementId === n),
                      r = e && t[e.appId]
                    if (!r) {
                      o = []
                      break
                    }
                    o.push(r)
                  }
                }
                ;(0 === o.length && (o = Object.values(t)),
                  await Promise.all(o),
                  e("event", i, r || {}))
              } catch (e) {
                l.error(e)
              }
            })(e, t, n, o, a)
          : "config" === r
            ? await (async function (e, t, n, i, r, o) {
                const a = i[r]
                try {
                  if (a) await t[a]
                  else {
                    const e = (await c(n)).find((e) => e.measurementId === r)
                    e && (await t[e.appId])
                  }
                } catch (e) {
                  l.error(e)
                }
                e("config", r, o)
              })(e, t, n, i, o, a)
            : "consent" === r
              ? e("consent", "update", a)
              : e("set", o)
      } catch (e) {
        l.error(e)
      }
    }
  }
  const h = {
      "already-exists":
        "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
      "already-initialized":
        "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
      "already-initialized-settings":
        "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
      "interop-component-reg-failed":
        "Firebase Analytics Interop Component failed to instantiate: {$reason}",
      "invalid-analytics-context":
        "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
      "indexeddb-unavailable":
        "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
      "fetch-throttle":
        "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
      "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
      "no-api-key":
        'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
      "no-app-id":
        'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
    },
    p = new o.LL("analytics", "Analytics", h)
  const f = new (class {
    constructor(e = {}, t = 1e3) {
      ;((this.throttleMetadata = e), (this.intervalMillis = t))
    }
    getThrottleMetadata(e) {
      return this.throttleMetadata[e]
    }
    setThrottleMetadata(e, t) {
      this.throttleMetadata[e] = t
    }
    deleteThrottleMetadata(e) {
      delete this.throttleMetadata[e]
    }
  })()
  function _(e) {
    return new Headers({ Accept: "application/json", "x-goog-api-key": e })
  }
  async function g(e, t = f, n) {
    const { appId: i, apiKey: r, measurementId: o } = e.options
    if (!i) throw p.create("no-app-id")
    if (!r) {
      if (o) return { measurementId: o, appId: i }
      throw p.create("no-api-key")
    }
    const a = t.getThrottleMetadata(i) || { backoffCount: 0, throttleEndTimeMillis: Date.now() },
      s = new v()
    return (
      setTimeout(
        async () => {
          s.abort()
        },
        undefined !== n ? n : 6e4,
      ),
      m({ appId: i, apiKey: r, measurementId: o }, a, s, t)
    )
  }
  async function m(e, { throttleEndTimeMillis: t, backoffCount: n }, i, r = f) {
    var a
    const { appId: s, measurementId: u } = e
    try {
      await (function (e, t) {
        return new Promise((n, i) => {
          const r = Math.max(t - Date.now(), 0),
            o = setTimeout(n, r)
          e.addEventListener(() => {
            ;(clearTimeout(o), i(p.create("fetch-throttle", { throttleEndTimeMillis: t })))
          })
        })
      })(i, t)
    } catch (e) {
      if (u)
        return (
          l.warn(
            `Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null == e ? undefined : e.message}]`,
          ),
          { appId: s, measurementId: u }
        )
      throw e
    }
    try {
      const t = await (async function (e) {
        var t
        const { appId: n, apiKey: i } = e,
          r = { method: "GET", headers: _(i) },
          o = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace(
            "{app-id}",
            n,
          ),
          a = await fetch(o, r)
        if (200 !== a.status && 304 !== a.status) {
          let e = ""
          try {
            const n = await a.json()
            ;(null === (t = n.error) || undefined === t ? undefined : t.message) && (e = n.error.message)
          } catch (e) {}
          throw p.create("config-fetch-failed", { httpStatus: a.status, responseMessage: e })
        }
        return a.json()
      })(e)
      return (r.deleteThrottleMetadata(s), t)
    } catch (t) {
      const c = t
      if (
        !(function (e) {
          if (!(e instanceof o.ZR && e.customData)) return false
          const t = Number(e.customData.httpStatus)
          return 429 === t || 500 === t || 503 === t || 504 === t
        })(c)
      ) {
        if ((r.deleteThrottleMetadata(s), u))
          return (
            l.warn(
              `Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null == c ? undefined : c.message}]`,
            ),
            { appId: s, measurementId: u }
          )
        throw t
      }
      const d =
          503 ===
          Number(
            null === (a = null == c ? undefined : c.customData) || undefined === a
              ? undefined
              : a.httpStatus,
          )
            ? (0, o.$s)(n, r.intervalMillis, 30)
            : (0, o.$s)(n, r.intervalMillis),
        h = { throttleEndTimeMillis: Date.now() + d, backoffCount: n + 1 }
      return (
        r.setThrottleMetadata(s, h),
        l.debug(`Calling attemptFetch again in ${d} millis`),
        m(e, h, i, r)
      )
    }
  }
  class v {
    constructor() {
      this.listeners = []
    }
    addEventListener(e) {
      this.listeners.push(e)
    }
    abort() {
      this.listeners.forEach((e) => e())
    }
  }
  let y, C
  function b(e) {
    C = e
  }
  function w(e) {
    y = e
  }
  async function x(e, t, n, i, r, a, s) {
    var c
    const d = g(e)
    ;(d
      .then((t) => {
        ;((n[t.measurementId] = t.appId),
          e.options.measurementId &&
            t.measurementId !== e.options.measurementId &&
            l.warn(
              `The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`,
            ))
      })
      .catch((e) => l.error(e)),
      t.push(d))
    const h = (async function () {
        if (!(0, o.hl)())
          return (
            l.warn(
              p.create("indexeddb-unavailable", {
                errorInfo: "IndexedDB is not available in this environment.",
              }).message,
            ),
            false
          )
        try {
          await (0, o.eu)()
        } catch (e) {
          return (
            l.warn(
              p.create("indexeddb-unavailable", { errorInfo: null == e ? undefined : e.toString() })
                .message,
            ),
            false
          )
        }
        return true
      })().then((e) => (e ? i.getId() : undefined)),
      [f, _] = await Promise.all([d, h])
    ;((function (e) {
      const t = window.document.getElementsByTagName("script")
      for (const n of Object.values(t))
        if (n.src && n.src.includes(u) && n.src.includes(e)) return n
      return null
    })(a) ||
      (function (e, t) {
        const n = document.createElement("script")
        ;((n.src = `${u}?l=${e}&id=${t}`), (n.async = true), document.head.appendChild(n))
      })(a, f.measurementId),
      C && (r("consent", "default", C), b(undefined)),
      r("js", new Date()))
    const m = null !== (c = null == s ? undefined : s.config) && undefined !== c ? c : {}
    return (
      (m.origin = "firebase"),
      (m.update = true),
      null != _ && (m.firebase_id = _),
      r("config", f.measurementId, m),
      y && (r("set", y), w(undefined)),
      f.measurementId
    )
  }
  class T {
    constructor(e) {
      this.app = e
    }
    _delete() {
      return (delete S[this.app.options.appId], Promise.resolve())
    }
  }
  let S = {},
    L = []
  const E = {}
  let A,
    I,
    M = "dataLayer",
    P = "gtag",
    O = false
  function R(e) {
    if (O) throw p.create("already-initialized")
    ;(e.dataLayerName && (M = e.dataLayerName), e.gtagName && (P = e.gtagName))
  }
  function k(e, t, n) {
    !(function () {
      const e = []
      if (
        ((0, o.ru)() && e.push("This is a browser extension environment."),
        (0, o.zI)() || e.push("Cookies are not available."),
        e.length > 0)
      ) {
        const t = e.map((e, t) => `(${t + 1}) ${e}`).join(" "),
          n = p.create("invalid-analytics-context", { errorInfo: t })
        l.warn(n.message)
      }
    })()
    const i = e.options.appId
    if (!i) throw p.create("no-app-id")
    if (!e.options.apiKey) {
      if (!e.options.measurementId) throw p.create("no-api-key")
      l.warn(
        `The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`,
      )
    }
    if (null != S[i]) throw p.create("already-exists", { id: i })
    if (!O) {
      !(function (e) {
        let t = []
        Array.isArray(window[e]) ? (t = window[e]) : (window[e] = t)
      })(M)
      const { wrappedGtag: e, gtagCore: t } = (function (e, t, n, i, r) {
        let o = function (...e) {
          window[i].push(arguments)
        }
        return (
          window[r] && "function" == typeof window[r] && (o = window[r]),
          (window[r] = d(o, e, t, n)),
          { gtagCore: o, wrappedGtag: window[r] }
        )
      })(S, L, E, M, P)
      ;((I = e), (A = t), (O = true))
    }
    S[i] = x(e, L, E, t, A, M, n)
    return new T(e)
  }
  function N(e = (0, i.Mq)()) {
    e = (0, o.m9)(e)
    const t = (0, i.qX)(e, s)
    return t.isInitialized() ? t.getImmediate() : D(e)
  }
  function D(e, t = {}) {
    const n = (0, i.qX)(e, s)
    if (n.isInitialized()) {
      const e = n.getImmediate()
      if ((0, o.vZ)(t, n.getOptions())) return e
      throw p.create("already-initialized")
    }
    return n.initialize({ options: t })
  }
  async function B() {
    if ((0, o.ru)()) return false
    if (!(0, o.zI)()) return false
    if (!(0, o.hl)()) return false
    try {
      return await (0, o.eu)()
    } catch (e) {
      return false
    }
  }
  function F(e, t, n) {
    ;((e = (0, o.m9)(e)),
      (async function (e, t, n, i) {
        if (i && i.global) return (e("set", { screen_name: n }), Promise.resolve())
        e("config", await t, { update: true, screen_name: n })
      })(I, S[e.app.options.appId], t, n).catch((e) => l.error(e)))
  }
  function U(e, t, n) {
    ;((e = (0, o.m9)(e)),
      (async function (e, t, n, i) {
        if (i && i.global) return (e("set", { user_id: n }), Promise.resolve())
        e("config", await t, { update: true, user_id: n })
      })(I, S[e.app.options.appId], t, n).catch((e) => l.error(e)))
  }
  function G(e, t, n) {
    ;((e = (0, o.m9)(e)),
      (async function (e, t, n, i) {
        if (i && i.global) {
          const t = {}
          for (const e of Object.keys(n)) t[`user_properties.${e}`] = n[e]
          return (e("set", t), Promise.resolve())
        }
        e("config", await t, { update: true, user_properties: n })
      })(I, S[e.app.options.appId], t, n).catch((e) => l.error(e)))
  }
  function j(e, t) {
    ;((e = (0, o.m9)(e)),
      (async function (e, t) {
        const n = await e
        window[`ga-disable-${n}`] = !t
      })(S[e.app.options.appId], t).catch((e) => l.error(e)))
  }
  function H(e) {
    I ? I("set", e) : w(e)
  }
  function V(e, t, n, i) {
    ;((e = (0, o.m9)(e)),
      (async function (e, t, n, i, r) {
        if (r && r.global) e("event", n, i)
        else {
          const r = await t
          e("event", n, Object.assign(Object.assign({}, i), { send_to: r }))
        }
      })(I, S[e.app.options.appId], t, n, i).catch((e) => l.error(e)))
  }
  function Z(e) {
    I ? I("consent", "update", e) : b(e)
  }
  const z = "@firebase/analytics",
    Y = "0.9.0"
  ;((0, i.Xd)(
    new a.wA(
      s,
      (e, { options: t }) =>
        k(
          e.getProvider("app").getImmediate(),
          e.getProvider("installations-internal").getImmediate(),
          t,
        ),
      "PUBLIC",
    ),
  ),
    (0, i.Xd)(
      new a.wA(
        "analytics-internal",
        function (e) {
          try {
            const t = e.getProvider(s).getImmediate()
            return { logEvent: (e, n, i) => V(t, e, n, i) }
          } catch (e) {
            throw p.create("interop-component-reg-failed", { reason: e })
          }
        },
        "PRIVATE",
      ),
    ),
    (0, i.KN)(z, Y),
    (0, i.KN)(z, Y, "esm2017"))
}
