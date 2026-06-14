/**
 * Webpack Module #62758
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { ro: () => g, lb: () => _ })
  var i = n(95659) /* 95659__mod */,
    r = n(12343) /* 12343__mod */,
    o = n(67597) /* 67597__mod */,
    a = n(92448) /* 92448__mod */,
    s = n(9732) /* 9732__mod */,
    u = n(63233) /* 63233__mod */
  function l() {
    const e = (0, u.x1)()
    if (e) {
      const t = "internal_error"
      ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        r.kg.log(`[Tracing] Transaction: ${t} -> Global error occured`),
        e.setStatus(t))
    }
  }
  var c = n(16458) /* 16458__mod */,
    d = n(33391) /* 33391__mod */
  function h() {
    const e = this.getScope()
    if (e) {
      const t = e.getSpan()
      if (t) return { "sentry-trace": t.toTraceparent() }
    }
    return {}
  }
  function p(e, t, n) {
    if (!(0, u.zu)(t)) return ((e.sampled = false), e)
    if (undefined !== e.sampled) return (e.setMetadata({ sampleRate: Number(e.sampled) }), e)
    let i
    return (
      "function" == typeof t.tracesSampler
        ? ((i = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(i) }))
        : undefined !== n.parentSampled
          ? (i = n.parentSampled)
          : ((i = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(i) })),
      (function (e) {
        if ((0, o.i2)(e) || ("number" != typeof e && "boolean" != typeof e))
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.kg.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
              ),
            false
          )
        if (e < 0 || e > 1)
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.kg.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`,
              ),
            false
          )
        return true
      })(i)
        ? i
          ? ((e.sampled = Math.random() < i),
            e.sampled
              ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.kg.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
                e)
              : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.kg.log(
                    `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
                  ),
                e))
          : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.kg.log(
                "[Tracing] Discarding transaction because " +
                  ("function" == typeof t.tracesSampler
                    ? "tracesSampler returned 0 or false"
                    : "a negative sampling decision was inherited or tracesSampleRate is set to 0"),
              ),
            (e.sampled = false),
            e)
        : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
          (e.sampled = false),
          e)
    )
  }
  function f(e, t) {
    const n = this.getClient(),
      i = (n && n.getOptions()) || {},
      o = i.instrumenter || "sentry",
      a = e.instrumenter || "sentry"
    o !== a &&
      (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        r.kg.error(
          `A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${o}\` instrumenter.\nThe transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`,
        ),
      (e.sampled = false))
    let s = new d.Y(e, this)
    return (
      (s = p(s, i, { parentSampled: e.parentSampled, transactionContext: e, ...t })),
      s.sampled && s.initSpanRecorder(i._experiments && i._experiments.maxSpans),
      s
    )
  }
  function _(e, t, n, i, r, o, a) {
    const s = e.getClient(),
      u = (s && s.getOptions()) || {}
    let l = new c.io(t, e, n, i, a, r)
    return (
      (l = p(l, u, { parentSampled: t.parentSampled, transactionContext: t, ...o })),
      l.sampled && l.initSpanRecorder(u._experiments && u._experiments.maxSpans),
      l
    )
  }
  function g() {
    ;(!(function () {
      const e = (0, i.cu)()
      e.__SENTRY__ &&
        ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
        e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = f),
        e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = h))
    })(),
      (0, a.KV)() &&
        (function () {
          const t = (0, i.cu)()
          if (!t.__SENTRY__) return
          const n = {
              mongodb: () => new ((0, a.l$)(e, "./integrations/node/mongo").Mongo)(),
              mongoose: () =>
                new ((0, a.l$)(e, "./integrations/node/mongo").Mongo)({ mongoose: true }),
              mysql: () => new ((0, a.l$)(e, "./integrations/node/mysql").Mysql)(),
              pg: () => new ((0, a.l$)(e, "./integrations/node/postgres").Postgres)(),
            },
            r = Object.keys(n)
              .filter((e) => !!(0, a.$y)(e))
              .map((e) => {
                try {
                  return n[e]()
                } catch (e) {
                  return
                }
              })
              .filter((e) => e)
          r.length > 0 && (t.__SENTRY__.integrations = [...(t.__SENTRY__.integrations || []), ...r])
        })(),
      (0, s.o)("error", l),
      (0, s.o)("unhandledrejection", l))
  }
  e = n.hmd(e)
}
