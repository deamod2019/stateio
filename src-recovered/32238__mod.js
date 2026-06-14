/**
 * Webpack Module #32238
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, {
    Af: () => p,
    C6: () => E,
    H9: () => _,
    Jn: () => T,
    KN: () => I,
    Mq: () => L,
    P2: () => A,
    TP: () => M,
    Ub: () => P,
    Vr: () => g,
    Xd: () => m,
    Z8: () => C,
    ZF: () => S,
    ZR: () => o.ZR,
    l4: () => d,
    lz: () => f,
    qX: () => v,
    wN: () => y,
  })
  var i = n(8463),
    r = n(53333),
    o = n(74444),
    a = n(26531)
  class s {
    constructor(e) {
      this.container = e
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((e) => {
          if (
            (function (e) {
              const t = e.getComponent()
              return "VERSION" === (null == t ? void 0 : t.type)
            })(e)
          ) {
            const t = e.getImmediate()
            return `${t.library}/${t.version}`
          }
          return null
        })
        .filter((e) => e)
        .join(" ")
    }
  }
  const u = "@firebase/app",
    l = "0.9.0",
    c = new r.Yd("@firebase/app"),
    d = "[DEFAULT]",
    h = {
      [u]: "fire-core",
      "@firebase/app-compat": "fire-core-compat",
      "@firebase/analytics": "fire-analytics",
      "@firebase/analytics-compat": "fire-analytics-compat",
      "@firebase/app-check": "fire-app-check",
      "@firebase/app-check-compat": "fire-app-check-compat",
      "@firebase/auth": "fire-auth",
      "@firebase/auth-compat": "fire-auth-compat",
      "@firebase/database": "fire-rtdb",
      "@firebase/database-compat": "fire-rtdb-compat",
      "@firebase/functions": "fire-fn",
      "@firebase/functions-compat": "fire-fn-compat",
      "@firebase/installations": "fire-iid",
      "@firebase/installations-compat": "fire-iid-compat",
      "@firebase/messaging": "fire-fcm",
      "@firebase/messaging-compat": "fire-fcm-compat",
      "@firebase/performance": "fire-perf",
      "@firebase/performance-compat": "fire-perf-compat",
      "@firebase/remote-config": "fire-rc",
      "@firebase/remote-config-compat": "fire-rc-compat",
      "@firebase/storage": "fire-gcs",
      "@firebase/storage-compat": "fire-gcs-compat",
      "@firebase/firestore": "fire-fst",
      "@firebase/firestore-compat": "fire-fst-compat",
      "fire-js": "fire-js",
      firebase: "fire-js-all",
    },
    p = new Map(),
    f = new Map()
  function _(e, t) {
    try {
      e.container.addComponent(t)
    } catch (n) {
      c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
  }
  function g(e, t) {
    e.container.addOrOverwriteComponent(t)
  }
  function m(e) {
    const t = e.name
    if (f.has(t)) return (c.debug(`There were multiple attempts to register component ${t}.`), !1)
    f.set(t, e)
    for (const t of p.values()) _(t, e)
    return !0
  }
  function v(e, t) {
    const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 })
    return (n && n.triggerHeartbeat(), e.container.getProvider(t))
  }
  function y(e, t, n = d) {
    v(e, t).clearInstance(n)
  }
  function C() {
    f.clear()
  }
  const b = {
      "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app":
        "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "no-options": "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument":
        "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get":
        "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete":
        "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    },
    w = new o.LL("app", "Firebase", b)
  class x {
    constructor(e, t, n) {
      ;((this._isDeleted = !1),
        (this._options = Object.assign({}, e)),
        (this._config = Object.assign({}, t)),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new i.wA("app", () => this, "PUBLIC")))
    }
    get automaticDataCollectionEnabled() {
      return (this.checkDestroyed(), this._automaticDataCollectionEnabled)
    }
    set automaticDataCollectionEnabled(e) {
      ;(this.checkDestroyed(), (this._automaticDataCollectionEnabled = e))
    }
    get name() {
      return (this.checkDestroyed(), this._name)
    }
    get options() {
      return (this.checkDestroyed(), this._options)
    }
    get config() {
      return (this.checkDestroyed(), this._config)
    }
    get container() {
      return this._container
    }
    get isDeleted() {
      return this._isDeleted
    }
    set isDeleted(e) {
      this._isDeleted = e
    }
    checkDestroyed() {
      if (this.isDeleted) throw w.create("app-deleted", { appName: this._name })
    }
  }
  const T = "9.15.0"
  function S(e, t = {}) {
    let n = e
    if ("object" != typeof t) {
      t = { name: t }
    }
    const r = Object.assign({ name: d, automaticDataCollectionEnabled: !1 }, t),
      a = r.name
    if ("string" != typeof a || !a) throw w.create("bad-app-name", { appName: String(a) })
    if ((n || (n = (0, o.aH)()), !n)) throw w.create("no-options")
    const s = p.get(a)
    if (s) {
      if ((0, o.vZ)(n, s.options) && (0, o.vZ)(r, s.config)) return s
      throw w.create("duplicate-app", { appName: a })
    }
    const u = new i.H0(a)
    for (const e of f.values()) u.addComponent(e)
    const l = new x(n, r, u)
    return (p.set(a, l), l)
  }
  function L(e = d) {
    const t = p.get(e)
    if (!t && e === d) return S()
    if (!t) throw w.create("no-app", { appName: e })
    return t
  }
  function E() {
    return Array.from(p.values())
  }
  async function A(e) {
    const t = e.name
    p.has(t) &&
      (p.delete(t),
      await Promise.all(e.container.getProviders().map((e) => e.delete())),
      (e.isDeleted = !0))
  }
  function I(e, t, n) {
    var r
    let o = null !== (r = h[e]) && void 0 !== r ? r : e
    n && (o += `-${n}`)
    const a = o.match(/\s|\//),
      s = t.match(/\s|\//)
    if (a || s) {
      const e = [`Unable to register library "${o}" with version "${t}":`]
      return (
        a && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),
        a && s && e.push("and"),
        s && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
        void c.warn(e.join(" "))
      )
    }
    m(new i.wA(`${o}-version`, () => ({ library: o, version: t }), "VERSION"))
  }
  function M(e, t) {
    if (null !== e && "function" != typeof e) throw w.create("invalid-log-argument")
    ;(0, r.Am)(e, t)
  }
  function P(e) {
    ;(0, r.Ub)(e)
  }
  const O = "firebase-heartbeat-store"
  let R = null
  function k() {
    return (
      R ||
        (R = (0, a.X3)("firebase-heartbeat-database", 1, {
          upgrade: (e, t) => {
            if (0 === t) e.createObjectStore(O)
          },
        }).catch((e) => {
          throw w.create("idb-open", { originalErrorMessage: e.message })
        })),
      R
    )
  }
  async function N(e, t) {
    try {
      const n = (await k()).transaction(O, "readwrite"),
        i = n.objectStore(O)
      return (await i.put(t, D(e)), n.done)
    } catch (e) {
      if (e instanceof o.ZR) c.warn(e.message)
      else {
        const t = w.create("idb-set", { originalErrorMessage: null == e ? void 0 : e.message })
        c.warn(t.message)
      }
    }
  }
  function D(e) {
    return `${e.name}!${e.options.appId}`
  }
  class B {
    constructor(e) {
      ;((this.container = e), (this._heartbeatsCache = null))
      const t = this.container.getProvider("app").getImmediate()
      ;((this._storage = new U(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e))))
    }
    async triggerHeartbeat() {
      const e = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        t = F()
      if (
        (null === this._heartbeatsCache &&
          (this._heartbeatsCache = await this._heartbeatsCachePromise),
        this._heartbeatsCache.lastSentHeartbeatDate !== t &&
          !this._heartbeatsCache.heartbeats.some((e) => e.date === t))
      )
        return (
          this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
          (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e) => {
            const t = new Date(e.date).valueOf()
            return Date.now() - t <= 2592e6
          })),
          this._storage.overwrite(this._heartbeatsCache)
        )
    }
    async getHeartbeatsHeader() {
      if (
        (null === this._heartbeatsCache && (await this._heartbeatsCachePromise),
        null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length)
      )
        return ""
      const e = F(),
        { heartbeatsToSend: t, unsentEntries: n } = (function (e, t = 1024) {
          const n = []
          let i = e.slice()
          for (const r of e) {
            const e = n.find((e) => e.agent === r.agent)
            if (e) {
              if ((e.dates.push(r.date), G(n) > t)) {
                e.dates.pop()
                break
              }
            } else if ((n.push({ agent: r.agent, dates: [r.date] }), G(n) > t)) {
              n.pop()
              break
            }
            i = i.slice(1)
          }
          return { heartbeatsToSend: n, unsentEntries: i }
        })(this._heartbeatsCache.heartbeats),
        i = (0, o.L)(JSON.stringify({ version: 2, heartbeats: t }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = e),
        n.length > 0
          ? ((this._heartbeatsCache.heartbeats = n),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      )
    }
  }
  function F() {
    return new Date().toISOString().substring(0, 10)
  }
  class U {
    constructor(e) {
      ;((this.app = e), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()))
    }
    async runIndexedDBEnvironmentCheck() {
      return (
        !!(0, o.hl)() &&
        (0, o.eu)()
          .then(() => !0)
          .catch(() => !1)
      )
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        return (
          (await (async function (e) {
            try {
              return (await k()).transaction(O).objectStore(O).get(D(e))
            } catch (e) {
              if (e instanceof o.ZR) c.warn(e.message)
              else {
                const t = w.create("idb-get", {
                  originalErrorMessage: null == e ? void 0 : e.message,
                })
                c.warn(t.message)
              }
            }
          })(this.app)) || { heartbeats: [] }
        )
      }
      return { heartbeats: [] }
    }
    async overwrite(e) {
      var t
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read()
        return N(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        })
      }
    }
    async add(e) {
      var t
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read()
        return N(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
          heartbeats: [...n.heartbeats, ...e.heartbeats],
        })
      }
    }
  }
  function G(e) {
    return (0, o.L)(JSON.stringify({ version: 2, heartbeats: e })).length
  }
  var j
  ;((j = ""),
    m(new i.wA("platform-logger", (e) => new s(e), "PRIVATE")),
    m(new i.wA("heartbeat", (e) => new B(e), "PRIVATE")),
    I(u, l, j),
    I(u, l, "esm2017"),
    I("fire-js", ""))
}
