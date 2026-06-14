/**
 * Webpack Module #10350
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { c: () => h, s: () => c })
  var i = n(67597),
    r = n(21170),
    o = n(96893),
    a = n(12343),
    s = n(62844),
    u = n(71235),
    l = n(9015)
  class c {
    constructor() {
      ;((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}))
    }
    static clone(e) {
      const t = new c()
      return (
        e &&
          ((t._breadcrumbs = [...e._breadcrumbs]),
          (t._tags = { ...e._tags }),
          (t._extra = { ...e._extra }),
          (t._contexts = { ...e._contexts }),
          (t._user = e._user),
          (t._level = e._level),
          (t._span = e._span),
          (t._session = e._session),
          (t._transactionName = e._transactionName),
          (t._fingerprint = e._fingerprint),
          (t._eventProcessors = [...e._eventProcessors]),
          (t._requestSession = e._requestSession),
          (t._attachments = [...e._attachments]),
          (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata })),
        t
      )
    }
    addScopeListener(e) {
      this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
      return (this._eventProcessors.push(e), this)
    }
    setUser(e) {
      return (
        (this._user = e || {}),
        this._session && (0, l.CT)(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      )
    }
    getUser() {
      return this._user
    }
    getRequestSession() {
      return this._requestSession
    }
    setRequestSession(e) {
      return ((this._requestSession = e), this)
    }
    setTags(e) {
      return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this)
    }
    setTag(e, t) {
      return ((this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this)
    }
    setExtras(e) {
      return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this)
    }
    setExtra(e, t) {
      return ((this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this)
    }
    setFingerprint(e) {
      return ((this._fingerprint = e), this._notifyScopeListeners(), this)
    }
    setLevel(e) {
      return ((this._level = e), this._notifyScopeListeners(), this)
    }
    setTransactionName(e) {
      return ((this._transactionName = e), this._notifyScopeListeners(), this)
    }
    setContext(e, t) {
      return (
        null === t ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      )
    }
    setSpan(e) {
      return ((this._span = e), this._notifyScopeListeners(), this)
    }
    getSpan() {
      return this._span
    }
    getTransaction() {
      const e = this.getSpan()
      return e && e.transaction
    }
    setSession(e) {
      return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this)
    }
    getSession() {
      return this._session
    }
    update(e) {
      if (!e) return this
      if ("function" == typeof e) {
        const t = e(this)
        return t instanceof c ? t : this
      }
      return (
        e instanceof c
          ? ((this._tags = { ...this._tags, ...e._tags }),
            (this._extra = { ...this._extra, ...e._extra }),
            (this._contexts = { ...this._contexts, ...e._contexts }),
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint),
            e._requestSession && (this._requestSession = e._requestSession))
          : (0, i.PO)(e) &&
            ((this._tags = { ...this._tags, ...e.tags }),
            (this._extra = { ...this._extra, ...e.extra }),
            (this._contexts = { ...this._contexts, ...e.contexts }),
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint),
            e.requestSession && (this._requestSession = e.requestSession)),
        this
      )
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._span = void 0),
        (this._session = void 0),
        this._notifyScopeListeners(),
        (this._attachments = []),
        this
      )
    }
    addBreadcrumb(e, t) {
      const n = "number" == typeof t ? t : 100
      if (n <= 0) return this
      const i = { timestamp: (0, r.yW)(), ...e }
      return (
        (this._breadcrumbs = [...this._breadcrumbs, i].slice(-n)),
        this._notifyScopeListeners(),
        this
      )
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this)
    }
    addAttachment(e) {
      return (this._attachments.push(e), this)
    }
    getAttachments() {
      return this._attachments
    }
    clearAttachments() {
      return ((this._attachments = []), this)
    }
    applyToEvent(e, t = {}) {
      if (
        (this._extra &&
          Object.keys(this._extra).length &&
          (e.extra = { ...this._extra, ...e.extra }),
        this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }),
        this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }),
        this._contexts &&
          Object.keys(this._contexts).length &&
          (e.contexts = { ...this._contexts, ...e.contexts }),
        this._level && (e.level = this._level),
        this._transactionName && (e.transaction = this._transactionName),
        this._span)
      ) {
        e.contexts = { trace: this._span.getTraceContext(), ...e.contexts }
        const t = this._span.transaction && this._span.transaction.name
        t && (e.tags = { transaction: t, ...e.tags })
      }
      return (
        this._applyFingerprint(e),
        (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
        (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
        (e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata }),
        this._notifyEventProcessors([...d(), ...this._eventProcessors], e, t)
      )
    }
    setSDKProcessingMetadata(e) {
      return ((this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this)
    }
    _notifyEventProcessors(e, t, n, r = 0) {
      return new o.cW((o, s) => {
        const u = e[r]
        if (null === t || "function" != typeof u) o(t)
        else {
          const l = u({ ...t }, n)
          ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            u.id &&
            null === l &&
            a.kg.log(`Event processor "${u.id}" dropped event`),
            (0, i.J8)(l)
              ? l.then((t) => this._notifyEventProcessors(e, t, n, r + 1).then(o)).then(null, s)
              : this._notifyEventProcessors(e, l, n, r + 1)
                  .then(o)
                  .then(null, s))
        }
      })
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this)
        }),
        (this._notifyingListeners = !1))
    }
    _applyFingerprint(e) {
      ;((e.fingerprint = e.fingerprint ? (0, s.lE)(e.fingerprint) : []),
        this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint)
    }
  }
  function d() {
    return (0, u.YO)("globalEventProcessors", () => [])
  }
  function h(e) {
    d().push(e)
  }
}
