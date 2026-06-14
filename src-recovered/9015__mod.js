/**
 * Webpack Module #9015
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { CT: () => s, Hv: () => a, RJ: () => u })
  var i = n(21170),
    r = n(62844),
    o = n(20535)
  function a(e) {
    const t = (0, i.ph)(),
      n = {
        sid: (0, r.DM)(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () =>
          (function (e) {
            return (0, o.Jr)({
              sid: `${e.sid}`,
              init: e.init,
              started: new Date(1e3 * e.started).toISOString(),
              timestamp: new Date(1e3 * e.timestamp).toISOString(),
              status: e.status,
              errors: e.errors,
              did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
              duration: e.duration,
              attrs: {
                release: e.release,
                environment: e.environment,
                ip_address: e.ipAddress,
                user_agent: e.userAgent,
              },
            })
          })(n),
      }
    return (e && s(n, e), n)
  }
  function s(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || (0, i.ph)()),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, r.DM)()),
      void 0 !== t.init && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      "number" == typeof t.started && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0
    else if ("number" == typeof t.duration) e.duration = t.duration
    else {
      const t = e.timestamp - e.started
      e.duration = t >= 0 ? t : 0
    }
    ;(t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      "number" == typeof t.errors && (e.errors = t.errors),
      t.status && (e.status = t.status))
  }
  function u(e, t) {
    let n = {}
    ;(t ? (n = { status: t }) : "ok" === e.status && (n = { status: "exited" }), s(e, n))
  }
}
