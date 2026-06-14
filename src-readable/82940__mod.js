/**
 * Webpack Module #82940
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  Object.defineProperty(t, "__esModule", { value: true })
  var n = (function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]
        ;((i.enumerable = i.enumerable || false),
          (i.configurable = true),
          "value" in i && (i.writable = true),
          Object.defineProperty(e, i.key, i))
      }
    }
    return function (t, n, i) {
      return (n && e(t.prototype, n), i && e(t, i), t)
    }
  })()
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var r = (function () {
    function e(t, n, r) {
      ;(undefined === n && (n = false),
        i(this, e),
        (this._fn = t),
        (this._once = n),
        (this._thisArg = r),
        (this._next = this._prev = this._owner = null))
    }
    return (
      n(e, [
        {
          key: "detach",
          value: function () {
            return null !== this._owner && (this._owner.detach(this), true)
          },
        },
      ]),
      e
    )
  })()
  function o(e, t) {
    return (
      e._head
        ? ((e._tail._next = t), (t._prev = e._tail), (e._tail = t))
        : ((e._head = t), (e._tail = t)),
      (t._owner = e),
      t
    )
  }
  var a = (function () {
    function e() {
      ;(i(this, e), (this._head = this._tail = undefined))
    }
    return (
      n(e, [
        {
          key: "handlers",
          value: function () {
            var e = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0],
              t = this._head
            if (e) return !!t
            for (var n = []; t; ) (n.push(t), (t = t._next))
            return n
          },
        },
        {
          key: "has",
          value: function (e) {
            if (!(e instanceof r))
              throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.")
            return e._owner === this
          },
        },
        {
          key: "dispatch",
          value: function () {
            var e = this._head
            if (!e) return false
            for (; e; )
              (e._once && this.detach(e), e._fn.apply(e._thisArg, arguments), (e = e._next))
            return true
          },
        },
        {
          key: "add",
          value: function (e) {
            var t = arguments.length <= 1 || undefined === arguments[1] ? null : arguments[1]
            if ("function" != typeof e)
              throw new Error("MiniSignal#add(): First arg must be a Function.")
            return o(this, new r(e, false, t))
          },
        },
        {
          key: "once",
          value: function (e) {
            var t = arguments.length <= 1 || undefined === arguments[1] ? null : arguments[1]
            if ("function" != typeof e)
              throw new Error("MiniSignal#once(): First arg must be a Function.")
            return o(this, new r(e, true, t))
          },
        },
        {
          key: "detach",
          value: function (e) {
            if (!(e instanceof r))
              throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.")
            return (
              e._owner !== this ||
                (e._prev && (e._prev._next = e._next),
                e._next && (e._next._prev = e._prev),
                e === this._head
                  ? ((this._head = e._next), null === e._next && (this._tail = null))
                  : e === this._tail && ((this._tail = e._prev), (this._tail._next = null)),
                (e._owner = null)),
              this
            )
          },
        },
        {
          key: "detachAll",
          value: function () {
            var e = this._head
            if (!e) return this
            for (this._head = this._tail = null; e; ) ((e._owner = null), (e = e._next))
            return this
          },
        },
      ]),
      e
    )
  })()
  ;((a.MiniSignalBinding = r), (t.default = a), (e.exports = t.default))
}
