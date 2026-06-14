/**
 * Webpack Module #16458
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { hd: () => l, io: () => d, mg: () => u, nT: () => s })
  var i = n(21170) /* 21170__mod */,
    r = n(12343) /* 12343__mod */,
    o = n(55334) /* 55334__mod */,
    a = n(33391) /* 33391__mod */
  const s = 1e3,
    u = 3e4,
    l = 5e3
  class c extends o.gB {
    constructor(e, t, n, i) {
      ;(super(i), (this._pushActivity = e), (this._popActivity = t), (this.transactionSpanId = n))
    }
    add(e) {
      ;(e.spanId !== this.transactionSpanId &&
        ((e.finish = (t) => {
          ;((e.endTimestamp = "number" == typeof t ? t : (0, i._I)()), this._popActivity(e.spanId))
        }),
        undefined === e.endTimestamp && this._pushActivity(e.spanId)),
        super.add(e))
    }
  }
  class d extends a.Y {
    __init() {
      this.activities = {}
    }
    __init2() {
      this._heartbeatCounter = 0
    }
    __init3() {
      this._finished = false
    }
    __init4() {
      this._beforeFinishCallbacks = []
    }
    constructor(e, t, n = s, i = u, o = l, a = false) {
      ;(super(e, t),
        (this._idleHub = t),
        (this._idleTimeout = n),
        (this._finalTimeout = i),
        (this._heartbeatInterval = o),
        (this._onScope = a),
        d.prototype.__init.call(this),
        d.prototype.__init2.call(this),
        d.prototype.__init3.call(this),
        d.prototype.__init4.call(this),
        a &&
          (h(t),
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
          t.configureScope((e) => e.setSpan(this))),
        this._startIdleTimeout(),
        setTimeout(() => {
          this._finished || (this.setStatus("deadline_exceeded"), this.finish())
        }, this._finalTimeout))
    }
    finish(e = (0, i._I)()) {
      if (((this._finished = true), (this.activities = {}), this.spanRecorder)) {
        ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          r.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op)
        for (const t of this._beforeFinishCallbacks) t(this, e)
        ;((this.spanRecorder.spans = this.spanRecorder.spans.filter((t) => {
          if (t.spanId === this.spanId) return true
          t.endTimestamp ||
            ((t.endTimestamp = e),
            t.setStatus("cancelled"),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.kg.log(
                "[Tracing] cancelling span since transaction ended early",
                JSON.stringify(t, undefined, 2),
              ))
          const n = t.startTimestamp < e
          return (
            n ||
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.kg.log(
                  "[Tracing] discarding Span since it happened after Transaction was finished",
                  JSON.stringify(t, undefined, 2),
                )),
            n
          )
        })),
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.log("[Tracing] flushing IdleTransaction"))
      } else
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          r.kg.log("[Tracing] No active IdleTransaction")
      return (this._onScope && h(this._idleHub), super.finish(e))
    }
    registerBeforeFinishCallback(e) {
      this._beforeFinishCallbacks.push(e)
    }
    initSpanRecorder(e) {
      if (!this.spanRecorder) {
        const t = (e) => {
            this._finished || this._pushActivity(e)
          },
          n = (e) => {
            this._finished || this._popActivity(e)
          }
        ;((this.spanRecorder = new c(t, n, this.spanId, e)),
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.log("Starting heartbeat"),
          this._pingHeartbeat())
      }
      this.spanRecorder.add(this)
    }
    _cancelIdleTimeout() {
      this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), (this._idleTimeoutID = undefined))
    }
    _startIdleTimeout(e) {
      ;(this._cancelIdleTimeout(),
        (this._idleTimeoutID = setTimeout(() => {
          this._finished || 0 !== Object.keys(this.activities).length || this.finish(e)
        }, this._idleTimeout)))
    }
    _pushActivity(e) {
      ;(this._cancelIdleTimeout(),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          r.kg.log(`[Tracing] pushActivity: ${e}`),
        (this.activities[e] = true),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          r.kg.log("[Tracing] new activities count", Object.keys(this.activities).length))
    }
    _popActivity(e) {
      if (
        (this.activities[e] &&
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.log(`[Tracing] popActivity ${e}`),
          delete this.activities[e],
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
        0 === Object.keys(this.activities).length)
      ) {
        const e = (0, i._I)() + this._idleTimeout / 1e3
        this._startIdleTimeout(e)
      }
    }
    _beat() {
      if (this._finished) return
      const e = Object.keys(this.activities).join("")
      ;(e === this._prevHeartbeatString ? this._heartbeatCounter++ : (this._heartbeatCounter = 1),
        (this._prevHeartbeatString = e),
        this._heartbeatCounter >= 3
          ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
            this.setStatus("deadline_exceeded"),
            this.finish())
          : this._pingHeartbeat())
    }
    _pingHeartbeat() {
      ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        r.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
        setTimeout(() => {
          this._beat()
        }, this._heartbeatInterval))
    }
  }
  function h(e) {
    const t = e.getScope()
    if (t) {
      t.getTransaction() && t.setSpan(undefined)
    }
  }
}
