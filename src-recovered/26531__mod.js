/**
 * Webpack Module #26531
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { X3: () => _ })
  let i, r
  const o = new WeakMap(),
    a = new WeakMap(),
    s = new WeakMap(),
    u = new WeakMap(),
    l = new WeakMap()
  let c = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return a.get(e)
        if ("objectStoreNames" === t) return e.objectStoreNames || s.get(e)
        if ("store" === t)
          return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
      }
      return p(e[t])
    },
    set: (e, t, n) => ((e[t] = n), !0),
    has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e,
  }
  function d(e) {
    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
      ? (
          r ||
          (r = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
        ? function (...t) {
            return (e.apply(f(this), t), p(o.get(this)))
          }
        : function (...t) {
            return p(e.apply(f(this), t))
          }
      : function (t, ...n) {
          const i = e.call(f(this), t, ...n)
          return (s.set(i, t.sort ? t.sort() : [t]), p(i))
        }
  }
  function h(e) {
    return "function" == typeof e
      ? d(e)
      : (e instanceof IDBTransaction &&
          (function (e) {
            if (a.has(e)) return
            const t = new Promise((t, n) => {
              const i = () => {
                  ;(e.removeEventListener("complete", r),
                    e.removeEventListener("error", o),
                    e.removeEventListener("abort", o))
                },
                r = () => {
                  ;(t(), i())
                },
                o = () => {
                  ;(n(e.error || new DOMException("AbortError", "AbortError")), i())
                }
              ;(e.addEventListener("complete", r),
                e.addEventListener("error", o),
                e.addEventListener("abort", o))
            })
            a.set(e, t)
          })(e),
        (t = e),
        (i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some(
          (e) => t instanceof e,
        )
          ? new Proxy(e, c)
          : e)
    var t
  }
  function p(e) {
    if (e instanceof IDBRequest)
      return (function (e) {
        const t = new Promise((t, n) => {
          const i = () => {
              ;(e.removeEventListener("success", r), e.removeEventListener("error", o))
            },
            r = () => {
              ;(t(p(e.result)), i())
            },
            o = () => {
              ;(n(e.error), i())
            }
          ;(e.addEventListener("success", r), e.addEventListener("error", o))
        })
        return (
          t
            .then((t) => {
              t instanceof IDBCursor && o.set(t, e)
            })
            .catch(() => {}),
          l.set(t, e),
          t
        )
      })(e)
    if (u.has(e)) return u.get(e)
    const t = h(e)
    return (t !== e && (u.set(e, t), l.set(t, e)), t)
  }
  const f = (e) => l.get(e)
  function _(e, t, { blocked: n, upgrade: i, blocking: r, terminated: o } = {}) {
    const a = indexedDB.open(e, t),
      s = p(a)
    return (
      i &&
        a.addEventListener("upgradeneeded", (e) => {
          i(p(a.result), e.oldVersion, e.newVersion, p(a.transaction))
        }),
      n && a.addEventListener("blocked", () => n()),
      s
        .then((e) => {
          ;(o && e.addEventListener("close", () => o()),
            r && e.addEventListener("versionchange", () => r()))
        })
        .catch(() => {}),
      s
    )
  }
  const g = ["get", "getKey", "getAll", "getAllKeys", "count"],
    m = ["put", "add", "delete", "clear"],
    v = new Map()
  function y(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return
    if (v.get(t)) return v.get(t)
    const n = t.replace(/FromIndex$/, ""),
      i = t !== n,
      r = m.includes(n)
    if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || (!r && !g.includes(n))) return
    const o = async function (e, ...t) {
      const o = this.transaction(e, r ? "readwrite" : "readonly")
      let a = o.store
      return (i && (a = a.index(t.shift())), (await Promise.all([a[n](...t), r && o.done]))[0])
    }
    return (v.set(t, o), o)
  }
  c = ((e) => ({
    ...e,
    get: (t, n, i) => y(t, n) || e.get(t, n, i),
    has: (t, n) => !!y(t, n) || e.has(t, n),
  }))(c)
}
