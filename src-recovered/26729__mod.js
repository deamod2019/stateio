/**
 * Webpack Module #26729
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = Object.prototype.hasOwnProperty,
    n = "~"
  function i() {}
  function r(e, t, n) {
    ;((this.fn = e), (this.context = t), (this.once = n || !1))
  }
  function o(e, t, i, o, a) {
    if ("function" != typeof i) throw new TypeError("The listener must be a function")
    var s = new r(i, o || e, a),
      u = n ? n + t : t
    return (
      e._events[u]
        ? e._events[u].fn
          ? (e._events[u] = [e._events[u], s])
          : e._events[u].push(s)
        : ((e._events[u] = s), e._eventsCount++),
      e
    )
  }
  function a(e, t) {
    0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t]
  }
  function s() {
    ;((this._events = new i()), (this._eventsCount = 0))
  }
  ;(Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
    (s.prototype.eventNames = function () {
      var e,
        i,
        r = []
      if (0 === this._eventsCount) return r
      for (i in (e = this._events)) t.call(e, i) && r.push(n ? i.slice(1) : i)
      return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
    }),
    (s.prototype.listeners = function (e) {
      var t = n ? n + e : e,
        i = this._events[t]
      if (!i) return []
      if (i.fn) return [i.fn]
      for (var r = 0, o = i.length, a = new Array(o); r < o; r++) a[r] = i[r].fn
      return a
    }),
    (s.prototype.listenerCount = function (e) {
      var t = n ? n + e : e,
        i = this._events[t]
      return i ? (i.fn ? 1 : i.length) : 0
    }),
    (s.prototype.emit = function (e, t, i, r, o, a) {
      var s = n ? n + e : e
      if (!this._events[s]) return !1
      var u,
        l,
        c = this._events[s],
        d = arguments.length
      if (c.fn) {
        switch ((c.once && this.removeListener(e, c.fn, void 0, !0), d)) {
          case 1:
            return (c.fn.call(c.context), !0)
          case 2:
            return (c.fn.call(c.context, t), !0)
          case 3:
            return (c.fn.call(c.context, t, i), !0)
          case 4:
            return (c.fn.call(c.context, t, i, r), !0)
          case 5:
            return (c.fn.call(c.context, t, i, r, o), !0)
          case 6:
            return (c.fn.call(c.context, t, i, r, o, a), !0)
        }
        for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = arguments[l]
        c.fn.apply(c.context, u)
      } else {
        var h,
          p = c.length
        for (l = 0; l < p; l++)
          switch ((c[l].once && this.removeListener(e, c[l].fn, void 0, !0), d)) {
            case 1:
              c[l].fn.call(c[l].context)
              break
            case 2:
              c[l].fn.call(c[l].context, t)
              break
            case 3:
              c[l].fn.call(c[l].context, t, i)
              break
            case 4:
              c[l].fn.call(c[l].context, t, i, r)
              break
            default:
              if (!u) for (h = 1, u = new Array(d - 1); h < d; h++) u[h - 1] = arguments[h]
              c[l].fn.apply(c[l].context, u)
          }
      }
      return !0
    }),
    (s.prototype.on = function (e, t, n) {
      return o(this, e, t, n, !1)
    }),
    (s.prototype.once = function (e, t, n) {
      return o(this, e, t, n, !0)
    }),
    (s.prototype.removeListener = function (e, t, i, r) {
      var o = n ? n + e : e
      if (!this._events[o]) return this
      if (!t) return (a(this, o), this)
      var s = this._events[o]
      if (s.fn) s.fn !== t || (r && !s.once) || (i && s.context !== i) || a(this, o)
      else {
        for (var u = 0, l = [], c = s.length; u < c; u++)
          (s[u].fn !== t || (r && !s[u].once) || (i && s[u].context !== i)) && l.push(s[u])
        l.length ? (this._events[o] = 1 === l.length ? l[0] : l) : a(this, o)
      }
      return this
    }),
    (s.prototype.removeAllListeners = function (e) {
      var t
      return (
        e
          ? ((t = n ? n + e : e), this._events[t] && a(this, t))
          : ((this._events = new i()), (this._eventsCount = 0)),
        this
      )
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.addListener = s.prototype.on),
    (s.prefixed = n),
    (s.EventEmitter = s),
    (e.exports = s))
}
