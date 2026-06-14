/**
 * Webpack Module #55334
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Dr: () => l, Zd: () => c, gB: () => u })
  var i = n(45375) /* 45375__mod */,
    r = n(62844) /* 62844__mod */,
    o = n(21170) /* 21170__mod */,
    a = n(12343) /* 12343__mod */,
    s = n(20535) /* 20535__mod */
  class u {
    __init() {
      this.spans = []
    }
    constructor(e = 1e3) {
      ;(u.prototype.__init.call(this), (this._maxlen = e))
    }
    add(e) {
      this.spans.length > this._maxlen ? (e.spanRecorder = undefined) : this.spans.push(e)
    }
  }
  class l {
    __init2() {
      this.traceId = (0, r.DM)()
    }
    __init3() {
      this.spanId = (0, r.DM)().substring(16)
    }
    __init4() {
      this.startTimestamp = (0, o._I)()
    }
    __init5() {
      this.tags = {}
    }
    __init6() {
      this.data = {}
    }
    __init7() {
      this.instrumenter = "sentry"
    }
    constructor(e) {
      if (
        (l.prototype.__init2.call(this),
        l.prototype.__init3.call(this),
        l.prototype.__init4.call(this),
        l.prototype.__init5.call(this),
        l.prototype.__init6.call(this),
        l.prototype.__init7.call(this),
        !e)
      )
        return this
      ;(e.traceId && (this.traceId = e.traceId),
        e.spanId && (this.spanId = e.spanId),
        e.parentSpanId && (this.parentSpanId = e.parentSpanId),
        "sampled" in e && (this.sampled = e.sampled),
        e.op && (this.op = e.op),
        e.description && (this.description = e.description),
        e.data && (this.data = e.data),
        e.tags && (this.tags = e.tags),
        e.status && (this.status = e.status),
        e.startTimestamp && (this.startTimestamp = e.startTimestamp),
        e.endTimestamp && (this.endTimestamp = e.endTimestamp),
        e.instrumenter && (this.instrumenter = e.instrumenter))
    }
    startChild(e) {
      const t = new l({
        ...e,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId,
      })
      if (
        ((t.spanRecorder = this.spanRecorder),
        t.spanRecorder && t.spanRecorder.add(t),
        (t.transaction = this.transaction),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t.transaction)
      ) {
        const n = `[Tracing] Starting '${(e && e.op) || "< unknown op >"}' span on transaction '${t.transaction.name || "< unknown name >"}' (${t.transaction.spanId}).`
        ;((t.transaction.metadata.spanMetadata[t.spanId] = { logMessage: n }), a.kg.log(n))
      }
      return t
    }
    setTag(e, t) {
      return ((this.tags = { ...this.tags, [e]: t }), this)
    }
    setData(e, t) {
      return ((this.data = { ...this.data, [e]: t }), this)
    }
    setStatus(e) {
      return ((this.status = e), this)
    }
    setHttpStatus(e) {
      this.setTag("http.status_code", String(e))
      const t = c(e)
      return ("unknown_error" !== t && this.setStatus(t), this)
    }
    isSuccess() {
      return "ok" === this.status
    }
    finish(e) {
      if (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        this.transaction &&
        this.transaction.spanId !== this.spanId
      ) {
        const { logMessage: e } = this.transaction.metadata.spanMetadata[this.spanId]
        e && a.kg.log(e.replace("Starting", "Finishing"))
      }
      this.endTimestamp = "number" == typeof e ? e : (0, o._I)()
    }
    toTraceparent() {
      let e = ""
      return (
        undefined !== this.sampled && (e = this.sampled ? "-1" : "-0"),
        `${this.traceId}-${this.spanId}${e}`
      )
    }
    toContext() {
      return (0, s.Jr)({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId,
      })
    }
    updateWithContext(e) {
      return (
        (this.data = (0, i.h)(e.data, () => ({}))),
        (this.description = e.description),
        (this.endTimestamp = e.endTimestamp),
        (this.op = e.op),
        (this.parentSpanId = e.parentSpanId),
        (this.sampled = e.sampled),
        (this.spanId = (0, i.h)(e.spanId, () => this.spanId)),
        (this.startTimestamp = (0, i.h)(e.startTimestamp, () => this.startTimestamp)),
        (this.status = e.status),
        (this.tags = (0, i.h)(e.tags, () => ({}))),
        (this.traceId = (0, i.h)(e.traceId, () => this.traceId)),
        this
      )
    }
    getTraceContext() {
      return (0, s.Jr)({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        trace_id: this.traceId,
      })
    }
    toJSON() {
      return (0, s.Jr)({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        timestamp: this.endTimestamp,
        trace_id: this.traceId,
      })
    }
  }
  function c(e) {
    if (e < 400 && e >= 100) return "ok"
    if (e >= 400 && e < 500)
      switch (e) {
        case 401:
          return "unauthenticated"
        case 403:
          return "permission_denied"
        case 404:
          return "not_found"
        case 409:
          return "already_exists"
        case 413:
          return "failed_precondition"
        case 429:
          return "resource_exhausted"
        default:
          return "invalid_argument"
      }
    if (e >= 500 && e < 600)
      switch (e) {
        case 501:
          return "unimplemented"
        case 503:
          return "unavailable"
        case 504:
          return "deadline_exceeded"
        default:
          return "internal_error"
      }
    return "unknown_error"
  }
}
