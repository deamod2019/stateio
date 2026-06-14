/**
 * Webpack Module #95659
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Gd: () => f, Xb: () => d, cu: () => h, pj: () => p, vi: () => g })
  var i = n(62844) /* 62844__mod */,
    r = n(21170) /* 21170__mod */,
    o = n(12343) /* 12343__mod */,
    a = n(71235) /* 71235__mod */,
    s = n(92448) /* 92448__mod */,
    u = n(10350) /* 10350__mod */,
    l = n(9015) /* 9015__mod */
  const c = 100
  class d {
    __init() {
      this._stack = [{}]
    }
    constructor(e, t = new u.s(), n = 4) {
      ;((this._version = n),
        d.prototype.__init.call(this),
        (this.getStackTop().scope = t),
        e && this.bindClient(e))
    }
    isOlderThan(e) {
      return this._version < e
    }
    bindClient(e) {
      ;((this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations())
    }
    pushScope() {
      const e = u.s.clone(this.getScope())
      return (this.getStack().push({ client: this.getClient(), scope: e }), e)
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop()
    }
    withScope(e) {
      const t = this.pushScope()
      try {
        e(t)
      } finally {
        this.popScope()
      }
    }
    getClient() {
      return this.getStackTop().client
    }
    getScope() {
      return this.getStackTop().scope
    }
    getStack() {
      return this._stack
    }
    getStackTop() {
      return this._stack[this._stack.length - 1]
    }
    captureException(e, t) {
      const n = (this._lastEventId = t && t.event_id ? t.event_id : (0, i.DM)()),
        r = new Error("Sentry syntheticException")
      return (
        this._withClient((i, o) => {
          i.captureException(
            e,
            { originalException: e, syntheticException: r, ...t, event_id: n },
            o,
          )
        }),
        n
      )
    }
    captureMessage(e, t, n) {
      const r = (this._lastEventId = n && n.event_id ? n.event_id : (0, i.DM)()),
        o = new Error(e)
      return (
        this._withClient((i, a) => {
          i.captureMessage(
            e,
            t,
            { originalException: e, syntheticException: o, ...n, event_id: r },
            a,
          )
        }),
        r
      )
    }
    captureEvent(e, t) {
      const n = t && t.event_id ? t.event_id : (0, i.DM)()
      return (
        "transaction" !== e.type && (this._lastEventId = n),
        this._withClient((i, r) => {
          i.captureEvent(e, { ...t, event_id: n }, r)
        }),
        n
      )
    }
    lastEventId() {
      return this._lastEventId
    }
    addBreadcrumb(e, t) {
      const { scope: n, client: i } = this.getStackTop()
      if (!n || !i) return
      const { beforeBreadcrumb: a = null, maxBreadcrumbs: s = c } =
        (i.getOptions && i.getOptions()) || {}
      if (s <= 0) return
      const u = { timestamp: (0, r.yW)(), ...e },
        l = a ? (0, o.Cf)(() => a(u, t)) : u
      null !== l && n.addBreadcrumb(l, s)
    }
    setUser(e) {
      const t = this.getScope()
      t && t.setUser(e)
    }
    setTags(e) {
      const t = this.getScope()
      t && t.setTags(e)
    }
    setExtras(e) {
      const t = this.getScope()
      t && t.setExtras(e)
    }
    setTag(e, t) {
      const n = this.getScope()
      n && n.setTag(e, t)
    }
    setExtra(e, t) {
      const n = this.getScope()
      n && n.setExtra(e, t)
    }
    setContext(e, t) {
      const n = this.getScope()
      n && n.setContext(e, t)
    }
    configureScope(e) {
      const { scope: t, client: n } = this.getStackTop()
      t && n && e(t)
    }
    run(e) {
      const t = p(this)
      try {
        e(this)
      } finally {
        p(t)
      }
    }
    getIntegration(e) {
      const t = this.getClient()
      if (!t) return null
      try {
        return t.getIntegration(e)
      } catch (t) {
        return (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            o.kg.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
          null
        )
      }
    }
    startTransaction(e, t) {
      return this._callExtensionMethod("startTransaction", e, t)
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders")
    }
    captureSession(e = false) {
      if (e) return this.endSession()
      this._sendSessionUpdate()
    }
    endSession() {
      const e = this.getStackTop(),
        t = e && e.scope,
        n = t && t.getSession()
      ;(n && (0, l.RJ)(n), this._sendSessionUpdate(), t && t.setSession())
    }
    startSession(e) {
      const { scope: t, client: n } = this.getStackTop(),
        { release: i, environment: r } = (n && n.getOptions()) || {},
        { userAgent: o } = a.n2.navigator || {},
        s = (0, l.Hv)({
          release: i,
          environment: r,
          ...(t && { user: t.getUser() }),
          ...(o && { userAgent: o }),
          ...e,
        })
      if (t) {
        const e = t.getSession && t.getSession()
        ;(e && "ok" === e.status && (0, l.CT)(e, { status: "exited" }),
          this.endSession(),
          t.setSession(s))
      }
      return s
    }
    shouldSendDefaultPii() {
      const e = this.getClient(),
        t = e && e.getOptions()
      return Boolean(t && t.sendDefaultPii)
    }
    _sendSessionUpdate() {
      const { scope: e, client: t } = this.getStackTop()
      if (!e) return
      const n = e.getSession()
      n && t && t.captureSession && t.captureSession(n)
    }
    _withClient(e) {
      const { scope: t, client: n } = this.getStackTop()
      n && e(n, t)
    }
    _callExtensionMethod(e, ...t) {
      const n = h().__SENTRY__
      if (n && n.extensions && "function" == typeof n.extensions[e])
        return n.extensions[e].apply(this, t)
      ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        o.kg.warn(`Extension method ${e} couldn't be found, doing nothing.`)
    }
  }
  function h() {
    return ((a.n2.__SENTRY__ = a.n2.__SENTRY__ || { extensions: {}, hub: undefined }), a.n2)
  }
  function p(e) {
    const t = h(),
      n = g(t)
    return (m(t, e), n)
  }
  function f() {
    const e = h()
    return (
      (_(e) && !g(e).isOlderThan(4)) || m(e, new d()),
      (0, s.KV)()
        ? (function (e) {
            try {
              const t = h().__SENTRY__,
                n = t && t.extensions && t.extensions.domain && t.extensions.domain.active
              if (!n) return g(e)
              if (!_(n) || g(n).isOlderThan(4)) {
                const t = g(e).getStackTop()
                m(n, new d(t.client, u.s.clone(t.scope)))
              }
              return g(n)
            } catch (t) {
              return g(e)
            }
          })(e)
        : g(e)
    )
  }
  function _(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
  }
  function g(e) {
    return (0, a.YO)("hub", () => new d(), e)
  }
  function m(e, t) {
    if (!e) return false
    return (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), true)
  }
}
