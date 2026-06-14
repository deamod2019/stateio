/**
 * Webpack Module #33391
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Y: () => l })
  var i = n(45375) /* 45375__mod */,
    r = n(95659) /* 95659__mod */,
    o = n(21170) /* 21170__mod */,
    a = n(12343) /* 12343__mod */,
    s = n(20535) /* 20535__mod */,
    u = n(55334) /* 55334__mod */
  class l extends u.Dr {
    __init() {
      this._measurements = {}
    }
    __init2() {
      this._contexts = {}
    }
    __init3() {
      this._frozenDynamicSamplingContext = undefined
    }
    constructor(e, t) {
      ;(super(e),
        l.prototype.__init.call(this),
        l.prototype.__init2.call(this),
        l.prototype.__init3.call(this),
        (this._hub = t || (0, r.Gd)()),
        (this._name = e.name || ""),
        (this.metadata = {
          source: "custom",
          ...e.metadata,
          spanMetadata: {},
          changes: [],
          propagations: 0,
        }),
        (this._trimEnd = e.trimEnd),
        (this.transaction = this))
      const n = this.metadata.dynamicSamplingContext
      n && (this._frozenDynamicSamplingContext = { ...n })
    }
    get name() {
      return this._name
    }
    set name(e) {
      this.setName(e)
    }
    setName(e, t = "custom") {
      ;((e === this.name && t === this.metadata.source) ||
        this.metadata.changes.push({
          source: this.metadata.source,
          timestamp: (0, o.ph)(),
          propagations: this.metadata.propagations,
        }),
        (this._name = e),
        (this.metadata.source = t))
    }
    initSpanRecorder(e = 1e3) {
      ;(this.spanRecorder || (this.spanRecorder = new u.gB(e)), this.spanRecorder.add(this))
    }
    setContext(e, t) {
      null === t ? delete this._contexts[e] : (this._contexts[e] = t)
    }
    setMeasurement(e, t, n = "") {
      this._measurements[e] = { value: t, unit: n }
    }
    setMetadata(e) {
      this.metadata = { ...this.metadata, ...e }
    }
    finish(e) {
      if (undefined !== this.endTimestamp) return
      if (
        (this.name ||
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
          (this.name = "<unlabeled transaction>")),
        super.finish(e),
        true !== this.sampled)
      ) {
        ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log(
            "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
          )
        const e = this._hub.getClient()
        return void (e && e.recordDroppedEvent("sample_rate", "transaction"))
      }
      const t = this.spanRecorder
        ? this.spanRecorder.spans.filter((e) => e !== this && e.endTimestamp)
        : []
      this._trimEnd &&
        t.length > 0 &&
        (this.endTimestamp = t.reduce((e, t) =>
          e.endTimestamp && t.endTimestamp ? (e.endTimestamp > t.endTimestamp ? e : t) : e,
        ).endTimestamp)
      const n = this.metadata,
        i = {
          contexts: { ...this._contexts, trace: this.getTraceContext() },
          spans: t,
          start_timestamp: this.startTimestamp,
          tags: this.tags,
          timestamp: this.endTimestamp,
          transaction: this.name,
          type: "transaction",
          sdkProcessingMetadata: { ...n, dynamicSamplingContext: this.getDynamicSamplingContext() },
          ...(n.source && {
            transaction_info: {
              source: n.source,
              changes: n.changes,
              propagations: n.propagations,
            },
          }),
        }
      return (
        Object.keys(this._measurements).length > 0 &&
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log(
              "[Measurements] Adding measurements to transaction",
              JSON.stringify(this._measurements, undefined, 2),
            ),
          (i.measurements = this._measurements)),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
        this._hub.captureEvent(i)
      )
    }
    toContext() {
      const e = super.toContext()
      return (0, s.Jr)({ ...e, name: this.name, trimEnd: this._trimEnd })
    }
    updateWithContext(e) {
      return (
        super.updateWithContext(e),
        (this.name = (0, i.h)(e.name, () => "")),
        (this._trimEnd = e.trimEnd),
        this
      )
    }
    getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext
      const e = this._hub || (0, r.Gd)(),
        t = e && e.getClient()
      if (!t) return {}
      const { environment: n, release: i } = t.getOptions() || {},
        { publicKey: o } = t.getDsn() || {},
        a = this.metadata.sampleRate,
        u = undefined !== a ? a.toString() : undefined,
        l = e.getScope(),
        { segment: c } = (l && l.getUser()) || {},
        d = this.metadata.source,
        h = d && "url" !== d ? this.name : undefined
      return (0, s.Jr)({
        environment: n,
        release: i,
        transaction: h,
        user_segment: c,
        public_key: o,
        trace_id: this.traceId,
        sample_rate: u,
      })
    }
  }
}
