/**
 * Webpack Module #37578
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i = n(32238) /* 32238__mod */,
    r = n(8463) /* 8463__mod */,
    o = n(74444) /* 74444__mod */,
    a = n(26531) /* 26531__mod */
  const s = "@firebase/installations",
    u = "0.6.0",
    l = 1e4,
    c = `w:${u}`,
    d = "FIS_v2",
    h = 36e5,
    p = {
      "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
      "not-registered": "Firebase Installation is not registered.",
      "installation-not-found": "Firebase Installation not found.",
      "request-failed":
        '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
      "app-offline": "Could not process request. Application offline.",
      "delete-pending-registration":
        "Can't delete installation while there is a pending registration request.",
    },
    f = new o.LL("installations", "Installations", p)
  function _(e) {
    return e instanceof o.ZR && e.code.includes("request-failed")
  }
  function g({ projectId: e }) {
    return `https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`
  }
  function m(e) {
    return {
      token: e.token,
      requestStatus: 2,
      expiresIn: ((t = e.expiresIn), Number(t.replace("s", "000"))),
      creationTime: Date.now(),
    }
    var t
  }
  async function v(e, t) {
    const n = (await t.json()).error
    return f.create("request-failed", {
      requestName: e,
      serverCode: n.code,
      serverMessage: n.message,
      serverStatus: n.status,
    })
  }
  function y({ apiKey: e }) {
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": e,
    })
  }
  function C(e, { refreshToken: t }) {
    const n = y(e)
    return (
      n.append(
        "Authorization",
        (function (e) {
          return `${d} ${e}`
        })(t),
      ),
      n
    )
  }
  async function b(e) {
    const t = await e()
    return t.status >= 500 && t.status < 600 ? e() : t
  }
  function w(e) {
    return new Promise((t) => {
      setTimeout(t, e)
    })
  }
  const x = /^[cdef][\w-]{21}$/
  function T() {
    try {
      const e = new Uint8Array(17)
      ;((self.crypto || self.msCrypto).getRandomValues(e), (e[0] = 112 + (e[0] % 16)))
      const t = (function (e) {
        const t =
          ((n = e),
          btoa(String.fromCharCode(...n))
            .replace(/\+/g, "-")
            .replace(/\//g, "_"))
        var n
        return t.substr(0, 22)
      })(e)
      return x.test(t) ? t : ""
    } catch (e) {
      return ""
    }
  }
  function S(e) {
    return `${e.appName}!${e.appId}`
  }
  const L = new Map()
  function E(e, t) {
    const n = S(e)
    ;(A(n, t),
      (function (e, t) {
        const n = M()
        n && n.postMessage({ key: e, fid: t })
        P()
      })(n, t))
  }
  function A(e, t) {
    const n = L.get(e)
    if (n) for (const e of n) e(t)
  }
  let I = null
  function M() {
    return (
      !I &&
        "BroadcastChannel" in self &&
        ((I = new BroadcastChannel("[Firebase] FID Change")),
        (I.onmessage = (e) => {
          A(e.data.key, e.data.fid)
        })),
      I
    )
  }
  function P() {
    0 === L.size && I && (I.close(), (I = null))
  }
  const O = "firebase-installations-store"
  let R = null
  function k() {
    return (
      R ||
        (R = (0, a.X3)("firebase-installations-database", 1, {
          upgrade: (e, t) => {
            if (0 === t) e.createObjectStore(O)
          },
        })),
      R
    )
  }
  async function N(e, t) {
    const n = S(e),
      i = (await k()).transaction(O, "readwrite"),
      r = i.objectStore(O),
      o = await r.get(n)
    return (await r.put(t, n), await i.done, (o && o.fid === t.fid) || E(e, t.fid), t)
  }
  async function D(e) {
    const t = S(e),
      n = (await k()).transaction(O, "readwrite")
    ;(await n.objectStore(O).delete(t), await n.done)
  }
  async function B(e, t) {
    const n = S(e),
      i = (await k()).transaction(O, "readwrite"),
      r = i.objectStore(O),
      o = await r.get(n),
      a = t(o)
    return (
      undefined === a ? await r.delete(n) : await r.put(a, n),
      await i.done,
      !a || (o && o.fid === a.fid) || E(e, a.fid),
      a
    )
  }
  async function F(e) {
    let t
    const n = await B(e.appConfig, (n) => {
      const i = (function (e) {
          const t = e || { fid: T(), registrationStatus: 0 }
          return j(t)
        })(n),
        r = (function (e, t) {
          if (0 === t.registrationStatus) {
            if (!navigator.onLine) {
              return {
                installationEntry: t,
                registrationPromise: Promise.reject(f.create("app-offline")),
              }
            }
            const n = { fid: t.fid, registrationStatus: 1, registrationTime: Date.now() },
              i = (async function (e, t) {
                try {
                  const n = await (async function (
                    { appConfig: e, heartbeatServiceProvider: t },
                    { fid: n },
                  ) {
                    const i = g(e),
                      r = y(e),
                      o = t.getImmediate({ optional: true })
                    if (o) {
                      const e = await o.getHeartbeatsHeader()
                      e && r.append("x-firebase-client", e)
                    }
                    const a = { fid: n, authVersion: d, appId: e.appId, sdkVersion: c },
                      s = { method: "POST", headers: r, body: JSON.stringify(a) },
                      u = await b(() => fetch(i, s))
                    if (u.ok) {
                      const e = await u.json()
                      return {
                        fid: e.fid || n,
                        registrationStatus: 2,
                        refreshToken: e.refreshToken,
                        authToken: m(e.authToken),
                      }
                    }
                    throw await v("Create Installation", u)
                  })(e, t)
                  return N(e.appConfig, n)
                } catch (n) {
                  throw (
                    _(n) && 409 === n.customData.serverCode
                      ? await D(e.appConfig)
                      : await N(e.appConfig, { fid: t.fid, registrationStatus: 0 }),
                    n
                  )
                }
              })(e, n)
            return { installationEntry: n, registrationPromise: i }
          }
          return 1 === t.registrationStatus
            ? { installationEntry: t, registrationPromise: U(e) }
            : { installationEntry: t }
        })(e, i)
      return ((t = r.registrationPromise), r.installationEntry)
    })
    return "" === n.fid
      ? { installationEntry: await t }
      : { installationEntry: n, registrationPromise: t }
  }
  async function U(e) {
    let t = await G(e.appConfig)
    for (; 1 === t.registrationStatus; ) (await w(100), (t = await G(e.appConfig)))
    if (0 === t.registrationStatus) {
      const { installationEntry: t, registrationPromise: n } = await F(e)
      return n || t
    }
    return t
  }
  function G(e) {
    return B(e, (e) => {
      if (!e) throw f.create("installation-not-found")
      return j(e)
    })
  }
  function j(e) {
    return 1 === (t = e).registrationStatus && t.registrationTime + l < Date.now()
      ? { fid: e.fid, registrationStatus: 0 }
      : e
    var t
  }
  async function H({ appConfig: e, heartbeatServiceProvider: t }, n) {
    const i = (function (e, { fid: t }) {
        return `${g(e)}/${t}/authTokens:generate`
      })(e, n),
      r = C(e, n),
      o = t.getImmediate({ optional: true })
    if (o) {
      const e = await o.getHeartbeatsHeader()
      e && r.append("x-firebase-client", e)
    }
    const a = { installation: { sdkVersion: c, appId: e.appId } },
      s = { method: "POST", headers: r, body: JSON.stringify(a) },
      u = await b(() => fetch(i, s))
    if (u.ok) {
      return m(await u.json())
    }
    throw await v("Generate Auth Token", u)
  }
  async function V(e, t = false) {
    let n
    const i = await B(e.appConfig, (i) => {
      if (!z(i)) throw f.create("not-registered")
      const r = i.authToken
      if (
        !t &&
        (function (e) {
          return (
            2 === e.requestStatus &&
            !(function (e) {
              const t = Date.now()
              return t < e.creationTime || e.creationTime + e.expiresIn < t + h
            })(e)
          )
        })(r)
      )
        return i
      if (1 === r.requestStatus)
        return (
          (n = (async function (e, t) {
            let n = await Z(e.appConfig)
            for (; 1 === n.authToken.requestStatus; ) (await w(100), (n = await Z(e.appConfig)))
            const i = n.authToken
            return 0 === i.requestStatus ? V(e, t) : i
          })(e, t)),
          i
        )
      {
        if (!navigator.onLine) throw f.create("app-offline")
        const t = (function (e) {
          const t = { requestStatus: 1, requestTime: Date.now() }
          return Object.assign(Object.assign({}, e), { authToken: t })
        })(i)
        return (
          (n = (async function (e, t) {
            try {
              const n = await H(e, t),
                i = Object.assign(Object.assign({}, t), { authToken: n })
              return (await N(e.appConfig, i), n)
            } catch (n) {
              if (!_(n) || (401 !== n.customData.serverCode && 404 !== n.customData.serverCode)) {
                const n = Object.assign(Object.assign({}, t), { authToken: { requestStatus: 0 } })
                await N(e.appConfig, n)
              } else await D(e.appConfig)
              throw n
            }
          })(e, t)),
          t
        )
      }
    })
    return n ? await n : i.authToken
  }
  function Z(e) {
    return B(e, (e) => {
      if (!z(e)) throw f.create("not-registered")
      const t = e.authToken
      return 1 === (n = t).requestStatus && n.requestTime + l < Date.now()
        ? Object.assign(Object.assign({}, e), { authToken: { requestStatus: 0 } })
        : e
      var n
    })
  }
  function z(e) {
    return undefined !== e && 2 === e.registrationStatus
  }
  async function Y(e, t = false) {
    const n = e
    await (async function (e) {
      const { registrationPromise: t } = await F(e)
      t && (await t)
    })(n)
    return (await V(n, t)).token
  }
  function W(e) {
    return f.create("missing-app-config-values", { valueName: e })
  }
  const X = "installations",
    q = (e) => {
      const t = e.getProvider("app").getImmediate(),
        n = (function (e) {
          if (!e || !e.options) throw W("App Configuration")
          if (!e.name) throw W("App Name")
          const t = ["projectId", "apiKey", "appId"]
          for (const n of t) if (!e.options[n]) throw W(n)
          return {
            appName: e.name,
            projectId: e.options.projectId,
            apiKey: e.options.apiKey,
            appId: e.options.appId,
          }
        })(t)
      return {
        app: t,
        appConfig: n,
        heartbeatServiceProvider: (0, i.qX)(t, "heartbeat"),
        _delete: () => Promise.resolve(),
      }
    },
    K = (e) => {
      const t = e.getProvider("app").getImmediate(),
        n = (0, i.qX)(t, X).getImmediate()
      return {
        getId: () =>
          (async function (e) {
            const t = e,
              { installationEntry: n, registrationPromise: i } = await F(t)
            return (i ? i.catch(console.error) : V(t).catch(console.error), n.fid)
          })(n),
        getToken: (e) => Y(n, e),
      }
    }
  ;((0, i.Xd)(new r.wA(X, q, "PUBLIC")),
    (0, i.Xd)(new r.wA("installations-internal", K, "PRIVATE")),
    (0, i.KN)(s, u),
    (0, i.KN)(s, u, "esm2017"))
}
