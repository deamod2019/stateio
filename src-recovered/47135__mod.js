/**
 * Webpack Module #47135
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      activate: () => g,
      ensureInitialized: () => m,
      fetchAndActivate: () => k,
      fetchConfig: () => v,
      getAll: () => y,
      getBoolean: () => C,
      getNumber: () => b,
      getRemoteConfig: () => _,
      getString: () => w,
      getValue: () => x,
      isSupported: () => N,
      setLogLevel: () => T,
    }))
  var i = n(32238),
    r = n(74444),
    o = n(8463),
    a = n(53333)
  n(37578)
  const s = "@firebase/remote-config",
    u = "0.4.0"
  class l {
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
  const c = "remote-config",
    d = {
      "registration-window":
        "Undefined window object. This SDK only supports usage in a browser environment.",
      "registration-project-id": "Undefined project identifier. Check Firebase app initialization.",
      "registration-api-key": "Undefined API key. Check Firebase app initialization.",
      "registration-app-id": "Undefined app identifier. Check Firebase app initialization.",
      "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
      "storage-get":
        "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
      "storage-set":
        "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
      "storage-delete":
        "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
      "fetch-client-network":
        "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
      "fetch-timeout":
        'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',
      "fetch-throttle":
        'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
      "fetch-client-parse":
        "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
      "fetch-status": "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
      "indexed-db-unavailable": "Indexed DB is not supported by current browser",
    },
    h = new r.LL("remoteconfig", "Remote Config", d)
  const p = ["1", "true", "t", "yes", "y", "on"]
  class f {
    constructor(e, t = "") {
      ;((this._source = e), (this._value = t))
    }
    asString() {
      return this._value
    }
    asBoolean() {
      return "static" !== this._source && p.indexOf(this._value.toLowerCase()) >= 0
    }
    asNumber() {
      if ("static" === this._source) return 0
      let e = Number(this._value)
      return (isNaN(e) && (e = 0), e)
    }
    getSource() {
      return this._source
    }
  }
  function _(e = (0, i.Mq)()) {
    e = (0, r.m9)(e)
    return (0, i.qX)(e, c).getImmediate()
  }
  async function g(e) {
    const t = (0, r.m9)(e),
      [n, i] = await Promise.all([
        t._storage.getLastSuccessfulFetchResponse(),
        t._storage.getActiveConfigEtag(),
      ])
    return (
      !!(n && n.config && n.eTag && n.eTag !== i) &&
      (await Promise.all([
        t._storageCache.setActiveConfig(n.config),
        t._storage.setActiveConfigEtag(n.eTag),
      ]),
      !0)
    )
  }
  function m(e) {
    const t = (0, r.m9)(e)
    return (
      t._initializePromise ||
        (t._initializePromise = t._storageCache.loadFromStorage().then(() => {
          t._isInitializationComplete = !0
        })),
      t._initializePromise
    )
  }
  async function v(e) {
    const t = (0, r.m9)(e),
      n = new l()
    setTimeout(async () => {
      n.abort()
    }, t.settings.fetchTimeoutMillis)
    try {
      ;(await t._client.fetch({
        cacheMaxAgeMillis: t.settings.minimumFetchIntervalMillis,
        signal: n,
      }),
        await t._storageCache.setLastFetchStatus("success"))
    } catch (e) {
      const n = (function (e, t) {
        return e instanceof r.ZR && -1 !== e.code.indexOf(t)
      })(e, "fetch-throttle")
        ? "throttle"
        : "failure"
      throw (await t._storageCache.setLastFetchStatus(n), e)
    }
  }
  function y(e) {
    const t = (0, r.m9)(e)
    return (function (e = {}, t = {}) {
      return Object.keys(Object.assign(Object.assign({}, e), t))
    })(t._storageCache.getActiveConfig(), t.defaultConfig).reduce(
      (t, n) => ((t[n] = x(e, n)), t),
      {},
    )
  }
  function C(e, t) {
    return x((0, r.m9)(e), t).asBoolean()
  }
  function b(e, t) {
    return x((0, r.m9)(e), t).asNumber()
  }
  function w(e, t) {
    return x((0, r.m9)(e), t).asString()
  }
  function x(e, t) {
    const n = (0, r.m9)(e)
    n._isInitializationComplete ||
      n._logger.debug(
        `A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`,
      )
    const i = n._storageCache.getActiveConfig()
    return i && void 0 !== i[t]
      ? new f("remote", i[t])
      : n.defaultConfig && void 0 !== n.defaultConfig[t]
        ? new f("default", String(n.defaultConfig[t]))
        : (n._logger.debug(
            `Returning static value for key "${t}". Define a default or remote value if this is unintentional.`,
          ),
          new f("static"))
  }
  function T(e, t) {
    const n = (0, r.m9)(e)
    switch (t) {
      case "debug":
        n._logger.logLevel = a.in.DEBUG
        break
      case "silent":
        n._logger.logLevel = a.in.SILENT
        break
      default:
        n._logger.logLevel = a.in.ERROR
    }
  }
  class S {
    constructor(e, t, n, i) {
      ;((this.client = e), (this.storage = t), (this.storageCache = n), (this.logger = i))
    }
    isCachedDataFresh(e, t) {
      if (!t) return (this.logger.debug("Config fetch cache check. Cache unpopulated."), !1)
      const n = Date.now() - t,
        i = n <= e
      return (
        this.logger.debug(
          `Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`,
        ),
        i
      )
    }
    async fetch(e) {
      const [t, n] = await Promise.all([
        this.storage.getLastSuccessfulFetchTimestampMillis(),
        this.storage.getLastSuccessfulFetchResponse(),
      ])
      if (n && this.isCachedDataFresh(e.cacheMaxAgeMillis, t)) return n
      e.eTag = n && n.eTag
      const i = await this.client.fetch(e),
        r = [this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())]
      return (
        200 === i.status && r.push(this.storage.setLastSuccessfulFetchResponse(i)),
        await Promise.all(r),
        i
      )
    }
  }
  function L(e = navigator) {
    return (e.languages && e.languages[0]) || e.language
  }
  class E {
    constructor(e, t, n, i, r, o) {
      ;((this.firebaseInstallations = e),
        (this.sdkVersion = t),
        (this.namespace = n),
        (this.projectId = i),
        (this.apiKey = r),
        (this.appId = o))
    }
    async fetch(e) {
      const [t, n] = await Promise.all([
          this.firebaseInstallations.getId(),
          this.firebaseInstallations.getToken(),
        ]),
        i = `${window.FIREBASE_REMOTE_CONFIG_URL_BASE || "https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,
        r = {
          "Content-Type": "application/json",
          "Content-Encoding": "gzip",
          "If-None-Match": e.eTag || "*",
        },
        o = {
          sdk_version: this.sdkVersion,
          app_instance_id: t,
          app_instance_id_token: n,
          app_id: this.appId,
          language_code: L(),
        },
        a = { method: "POST", headers: r, body: JSON.stringify(o) },
        s = fetch(i, a),
        u = new Promise((t, n) => {
          e.signal.addEventListener(() => {
            const e = new Error("The operation was aborted.")
            ;((e.name = "AbortError"), n(e))
          })
        })
      let l
      try {
        ;(await Promise.race([s, u]), (l = await s))
      } catch (e) {
        let t = "fetch-client-network"
        throw (
          "AbortError" === (null == e ? void 0 : e.name) && (t = "fetch-timeout"),
          h.create(t, { originalErrorMessage: null == e ? void 0 : e.message })
        )
      }
      let c = l.status
      const d = l.headers.get("ETag") || void 0
      let p, f
      if (200 === l.status) {
        let e
        try {
          e = await l.json()
        } catch (e) {
          throw h.create("fetch-client-parse", {
            originalErrorMessage: null == e ? void 0 : e.message,
          })
        }
        ;((p = e.entries), (f = e.state))
      }
      if (
        ("INSTANCE_STATE_UNSPECIFIED" === f
          ? (c = 500)
          : "NO_CHANGE" === f
            ? (c = 304)
            : ("NO_TEMPLATE" !== f && "EMPTY_CONFIG" !== f) || (p = {}),
        304 !== c && 200 !== c)
      )
        throw h.create("fetch-status", { httpStatus: c })
      return { status: c, eTag: d, config: p }
    }
  }
  class A {
    constructor(e, t) {
      ;((this.client = e), (this.storage = t))
    }
    async fetch(e) {
      const t = (await this.storage.getThrottleMetadata()) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now(),
      }
      return this.attemptFetch(e, t)
    }
    async attemptFetch(e, { throttleEndTimeMillis: t, backoffCount: n }) {
      await (function (e, t) {
        return new Promise((n, i) => {
          const r = Math.max(t - Date.now(), 0),
            o = setTimeout(n, r)
          e.addEventListener(() => {
            ;(clearTimeout(o), i(h.create("fetch-throttle", { throttleEndTimeMillis: t })))
          })
        })
      })(e.signal, t)
      try {
        const t = await this.client.fetch(e)
        return (await this.storage.deleteThrottleMetadata(), t)
      } catch (t) {
        if (
          !(function (e) {
            if (!(e instanceof r.ZR && e.customData)) return !1
            const t = Number(e.customData.httpStatus)
            return 429 === t || 500 === t || 503 === t || 504 === t
          })(t)
        )
          throw t
        const i = { throttleEndTimeMillis: Date.now() + (0, r.$s)(n), backoffCount: n + 1 }
        return (await this.storage.setThrottleMetadata(i), this.attemptFetch(e, i))
      }
    }
  }
  class I {
    constructor(e, t, n, i, r) {
      ;((this.app = e),
        (this._client = t),
        (this._storageCache = n),
        (this._storage = i),
        (this._logger = r),
        (this._isInitializationComplete = !1),
        (this.settings = { fetchTimeoutMillis: 6e4, minimumFetchIntervalMillis: 432e5 }),
        (this.defaultConfig = {}))
    }
    get fetchTimeMillis() {
      return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1
    }
    get lastFetchStatus() {
      return this._storageCache.getLastFetchStatus() || "no-fetch-yet"
    }
  }
  function M(e, t) {
    const n = e.target.error || void 0
    return h.create(t, { originalErrorMessage: n && (null == n ? void 0 : n.message) })
  }
  const P = "app_namespace_store"
  class O {
    constructor(
      e,
      t,
      n,
      i = (function () {
        return new Promise((e, t) => {
          try {
            const n = indexedDB.open("firebase_remote_config", 1)
            ;((n.onerror = (e) => {
              t(M(e, "storage-open"))
            }),
              (n.onsuccess = (t) => {
                e(t.target.result)
              }),
              (n.onupgradeneeded = (e) => {
                const t = e.target.result
                0 === e.oldVersion && t.createObjectStore(P, { keyPath: "compositeKey" })
              }))
          } catch (e) {
            t(h.create("storage-open", { originalErrorMessage: null == e ? void 0 : e.message }))
          }
        })
      })(),
    ) {
      ;((this.appId = e), (this.appName = t), (this.namespace = n), (this.openDbPromise = i))
    }
    getLastFetchStatus() {
      return this.get("last_fetch_status")
    }
    setLastFetchStatus(e) {
      return this.set("last_fetch_status", e)
    }
    getLastSuccessfulFetchTimestampMillis() {
      return this.get("last_successful_fetch_timestamp_millis")
    }
    setLastSuccessfulFetchTimestampMillis(e) {
      return this.set("last_successful_fetch_timestamp_millis", e)
    }
    getLastSuccessfulFetchResponse() {
      return this.get("last_successful_fetch_response")
    }
    setLastSuccessfulFetchResponse(e) {
      return this.set("last_successful_fetch_response", e)
    }
    getActiveConfig() {
      return this.get("active_config")
    }
    setActiveConfig(e) {
      return this.set("active_config", e)
    }
    getActiveConfigEtag() {
      return this.get("active_config_etag")
    }
    setActiveConfigEtag(e) {
      return this.set("active_config_etag", e)
    }
    getThrottleMetadata() {
      return this.get("throttle_metadata")
    }
    setThrottleMetadata(e) {
      return this.set("throttle_metadata", e)
    }
    deleteThrottleMetadata() {
      return this.delete("throttle_metadata")
    }
    async get(e) {
      const t = await this.openDbPromise
      return new Promise((n, i) => {
        const r = t.transaction([P], "readonly").objectStore(P),
          o = this.createCompositeKey(e)
        try {
          const e = r.get(o)
          ;((e.onerror = (e) => {
            i(M(e, "storage-get"))
          }),
            (e.onsuccess = (e) => {
              const t = e.target.result
              n(t ? t.value : void 0)
            }))
        } catch (e) {
          i(h.create("storage-get", { originalErrorMessage: null == e ? void 0 : e.message }))
        }
      })
    }
    async set(e, t) {
      const n = await this.openDbPromise
      return new Promise((i, r) => {
        const o = n.transaction([P], "readwrite").objectStore(P),
          a = this.createCompositeKey(e)
        try {
          const e = o.put({ compositeKey: a, value: t })
          ;((e.onerror = (e) => {
            r(M(e, "storage-set"))
          }),
            (e.onsuccess = () => {
              i()
            }))
        } catch (e) {
          r(h.create("storage-set", { originalErrorMessage: null == e ? void 0 : e.message }))
        }
      })
    }
    async delete(e) {
      const t = await this.openDbPromise
      return new Promise((n, i) => {
        const r = t.transaction([P], "readwrite").objectStore(P),
          o = this.createCompositeKey(e)
        try {
          const e = r.delete(o)
          ;((e.onerror = (e) => {
            i(M(e, "storage-delete"))
          }),
            (e.onsuccess = () => {
              n()
            }))
        } catch (e) {
          i(h.create("storage-delete", { originalErrorMessage: null == e ? void 0 : e.message }))
        }
      })
    }
    createCompositeKey(e) {
      return [this.appId, this.appName, this.namespace, e].join()
    }
  }
  class R {
    constructor(e) {
      this.storage = e
    }
    getLastFetchStatus() {
      return this.lastFetchStatus
    }
    getLastSuccessfulFetchTimestampMillis() {
      return this.lastSuccessfulFetchTimestampMillis
    }
    getActiveConfig() {
      return this.activeConfig
    }
    async loadFromStorage() {
      const e = this.storage.getLastFetchStatus(),
        t = this.storage.getLastSuccessfulFetchTimestampMillis(),
        n = this.storage.getActiveConfig(),
        i = await e
      i && (this.lastFetchStatus = i)
      const r = await t
      r && (this.lastSuccessfulFetchTimestampMillis = r)
      const o = await n
      o && (this.activeConfig = o)
    }
    setLastFetchStatus(e) {
      return ((this.lastFetchStatus = e), this.storage.setLastFetchStatus(e))
    }
    setLastSuccessfulFetchTimestampMillis(e) {
      return (
        (this.lastSuccessfulFetchTimestampMillis = e),
        this.storage.setLastSuccessfulFetchTimestampMillis(e)
      )
    }
    setActiveConfig(e) {
      return ((this.activeConfig = e), this.storage.setActiveConfig(e))
    }
  }
  async function k(e) {
    return ((e = (0, r.m9)(e)), await v(e), g(e))
  }
  async function N() {
    if (!(0, r.hl)()) return !1
    try {
      return await (0, r.eu)()
    } catch (e) {
      return !1
    }
  }
  ;((0, i.Xd)(
    new o.wA(
      c,
      function (e, { instanceIdentifier: t }) {
        const n = e.getProvider("app").getImmediate(),
          o = e.getProvider("installations-internal").getImmediate()
        if ("undefined" == typeof window) throw h.create("registration-window")
        if (!(0, r.hl)()) throw h.create("indexed-db-unavailable")
        const { projectId: u, apiKey: l, appId: c } = n.options
        if (!u) throw h.create("registration-project-id")
        if (!l) throw h.create("registration-api-key")
        if (!c) throw h.create("registration-app-id")
        t = t || "firebase"
        const d = new O(c, n.name, t),
          p = new R(d),
          f = new a.Yd(s)
        f.logLevel = a.in.ERROR
        const _ = new E(o, i.Jn, t, u, l, c),
          g = new A(_, d),
          v = new S(g, d, p, f),
          y = new I(n, v, p, d, f)
        return (m(y), y)
      },
      "PUBLIC",
    ).setMultipleInstances(!0),
  ),
    (0, i.KN)(s, u),
    (0, i.KN)(s, u, "esm2017"))
}
