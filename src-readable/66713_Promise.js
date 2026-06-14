/**
 * Webpack Module #66713
 * @exports Promise, Polyfill
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  var i
  !(function (r) {
    var o = r.Promise,
      a =
        o &&
        "resolve" in o &&
        "reject" in o &&
        "all" in o &&
        "race" in o &&
        (function () {
          var e
          return (
            new o(function (t) {
              e = t
            }),
            "function" == typeof e
          )
        })()
    t
      ? ((t.Promise = a ? o : L), (t.Polyfill = L))
      : undefined ===
          (i = function () {
            return a ? o : L
          }.call(t, n, t, e)) || (e.exports = i)
    var s = "pending",
      u = "sealed",
      l = "fulfilled",
      c = "rejected",
      d = function () {}
    function h(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }
    var p,
      f = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
      _ = []
    function g() {
      for (var e = 0; e < _.length; e++) _[e][0](_[e][1])
      ;((_ = []), (p = false))
    }
    function m(e, t) {
      ;(_.push([e, t]), p || ((p = true), f(g, 0)))
    }
    function v(e) {
      var t = e.owner,
        n = t.state_,
        i = t.data_,
        r = e[n],
        o = e.then
      if ("function" == typeof r) {
        n = l
        try {
          i = r(i)
        } catch (e) {
          w(o, e)
        }
      }
      y(o, i) || (n === l && C(o, i), n === c && w(o, i))
    }
    function y(e, t) {
      var n
      try {
        if (e === t) throw new TypeError("A promises callback cannot return that same promise.")
        if (t && ("function" == typeof t || "object" == typeof t)) {
          var i = t.then
          if ("function" == typeof i)
            return (
              i.call(
                t,
                function (i) {
                  n || ((n = true), t !== i ? C(e, i) : b(e, i))
                },
                function (t) {
                  n || ((n = true), w(e, t))
                },
              ),
              true
            )
        }
      } catch (t) {
        return (n || w(e, t), true)
      }
      return false
    }
    function C(e, t) {
      ;(e !== t && y(e, t)) || b(e, t)
    }
    function b(e, t) {
      e.state_ === s && ((e.state_ = u), (e.data_ = t), m(T, e))
    }
    function w(e, t) {
      e.state_ === s && ((e.state_ = u), (e.data_ = t), m(S, e))
    }
    function x(e) {
      var t = e.then_
      e.then_ = undefined
      for (var n = 0; n < t.length; n++) v(t[n])
    }
    function T(e) {
      ;((e.state_ = l), x(e))
    }
    function S(e) {
      ;((e.state_ = c), x(e))
    }
    function L(e) {
      if ("function" != typeof e)
        throw new TypeError("Promise constructor takes a function argument")
      if (this instanceof L == false)
        throw new TypeError(
          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
        )
      ;((this.then_ = []),
        (function (e, t) {
          function n(e) {
            w(t, e)
          }
          try {
            e(function (e) {
              C(t, e)
            }, n)
          } catch (e) {
            n(e)
          }
        })(e, this))
    }
    ;((L.prototype = {
      constructor: L,
      state_: s,
      then_: null,
      data_: undefined,
      then: function (e, t) {
        var n = { owner: this, then: new this.constructor(d), fulfilled: e, rejected: t }
        return (this.state_ === l || this.state_ === c ? m(v, n) : this.then_.push(n), n.then)
      },
      catch: function (e) {
        return this.then(null, e)
      },
    }),
      (L.all = function (e) {
        if (!h(e)) throw new TypeError("You must pass an array to Promise.all().")
        return new this(function (t, n) {
          var i = [],
            r = 0
          function o(e) {
            return (
              r++,
              function (n) {
                ;((i[e] = n), --r || t(i))
              }
            )
          }
          for (var a, s = 0; s < e.length; s++)
            (a = e[s]) && "function" == typeof a.then ? a.then(o(s), n) : (i[s] = a)
          r || t(i)
        })
      }),
      (L.race = function (e) {
        if (!h(e)) throw new TypeError("You must pass an array to Promise.race().")
        return new this(function (t, n) {
          for (var i, r = 0; r < e.length; r++)
            (i = e[r]) && "function" == typeof i.then ? i.then(t, n) : t(i)
        })
      }),
      (L.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === this
          ? e
          : new this(function (t) {
              t(e)
            })
      }),
      (L.reject = function (e) {
        return new this(function (t, n) {
          n(e)
        })
      }))
  })(
    "undefined" != typeof window
      ? window
      : undefined !== n.g
        ? n.g
        : "undefined" != typeof self
          ? self
          : this,
  )
}
