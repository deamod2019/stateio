/**
 * Webpack Module #30396
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      useCallback: () => T,
      useContext: () => S,
      useDebugValue: () => L,
      useEffect: () => y,
      useErrorBoundary: () => E,
      useId: () => A,
      useImperativeHandle: () => w,
      useLayoutEffect: () => C,
      useMemo: () => x,
      useReducer: () => v,
      useRef: () => b,
      useState: () => m,
    }))
  var i,
    r,
    o,
    a,
    s = n(6400) /* 6400__mod */,
    u = 0,
    l = [],
    c = [],
    d = s.options.__b,
    h = s.options.__r,
    p = s.options.diffed,
    f = s.options.__c,
    _ = s.options.unmount
  function g(e, t) {
    ;(s.options.__h && s.options.__h(r, e, u || t), (u = 0))
    var n = r.__H || (r.__H = { __: [], __h: [] })
    return (e >= n.__.length && n.__.push({ __V: c }), n.__[e])
  }
  function m(e) {
    return ((u = 1), v(N, e))
  }
  function v(e, t, n) {
    var o = g(i++, 2)
    if (
      ((o.t = e),
      !o.__c &&
        ((o.__ = [
          n ? n(t) : N(undefined, t),
          function (e) {
            var t = o.__N ? o.__N[0] : o.__[0],
              n = o.t(t, e)
            t !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}))
          },
        ]),
        (o.__c = r),
        !r.u))
    ) {
      r.u = true
      var a = r.shouldComponentUpdate
      r.shouldComponentUpdate = function (e, t, n) {
        if (!o.__c.__H) return true
        var i = o.__c.__H.__.filter(function (e) {
          return e.__c
        })
        if (
          i.every(function (e) {
            return !e.__N
          })
        )
          return !a || a.call(this, e, t, n)
        var r = false
        return (
          i.forEach(function (e) {
            if (e.__N) {
              var t = e.__[0]
              ;((e.__ = e.__N), (e.__N = undefined), t !== e.__[0] && (r = true))
            }
          }),
          !(!r && o.__c.props === e) && (!a || a.call(this, e, t, n))
        )
      }
    }
    return o.__N || o.__
  }
  function y(e, t) {
    var n = g(i++, 3)
    !s.options.__s && k(n.__H, t) && ((n.__ = e), (n.i = t), r.__H.__h.push(n))
  }
  function C(e, t) {
    var n = g(i++, 4)
    !s.options.__s && k(n.__H, t) && ((n.__ = e), (n.i = t), r.__h.push(n))
  }
  function b(e) {
    return (
      (u = 5),
      x(function () {
        return { current: e }
      }, [])
    )
  }
  function w(e, t, n) {
    ;((u = 6),
      C(
        function () {
          return "function" == typeof e
            ? (e(t()),
              function () {
                return e(null)
              })
            : e
              ? ((e.current = t()),
                function () {
                  return (e.current = null)
                })
              : undefined
        },
        null == n ? n : n.concat(e),
      ))
  }
  function x(e, t) {
    var n = g(i++, 7)
    return k(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__
  }
  function T(e, t) {
    return (
      (u = 8),
      x(function () {
        return e
      }, t)
    )
  }
  function S(e) {
    var t = r.context[e.__c],
      n = g(i++, 9)
    return ((n.c = e), t ? (null == n.__ && ((n.__ = true), t.sub(r)), t.props.value) : e.__)
  }
  function L(e, t) {
    s.options.useDebugValue && s.options.useDebugValue(t ? t(e) : e)
  }
  function E(e) {
    var t = g(i++, 10),
      n = m()
    return (
      (t.__ = e),
      r.componentDidCatch ||
        (r.componentDidCatch = function (e, i) {
          ;(t.__ && t.__(e, i), n[1](e))
        }),
      [
        n[0],
        function () {
          n[1](undefined)
        },
      ]
    )
  }
  function A() {
    var e = g(i++, 11)
    if (!e.__) {
      for (var t = r.__v; null !== t && !t.__m && null !== t.__; ) t = t.__
      var n = t.__m || (t.__m = [0, 0])
      e.__ = "P" + n[0] + "-" + n[1]++
    }
    return e.__
  }
  function I() {
    for (var e; (e = l.shift()); )
      if (e.__P && e.__H)
        try {
          ;(e.__H.__h.forEach(O), e.__H.__h.forEach(R), (e.__H.__h = []))
        } catch (t) {
          ;((e.__H.__h = []), s.options.__e(t, e.__v))
        }
  }
  ;((s.options.__b = function (e) {
    ;((r = null), d && d(e))
  }),
    (s.options.__r = function (e) {
      ;(h && h(e), (i = 0))
      var t = (r = e.__c).__H
      ;(t &&
        (o === r
          ? ((t.__h = []),
            (r.__h = []),
            t.__.forEach(function (e) {
              ;(e.__N && (e.__ = e.__N), (e.__V = c), (e.__N = e.i = undefined))
            }))
          : (t.__h.forEach(O), t.__h.forEach(R), (t.__h = []))),
        (o = r))
    }),
    (s.options.diffed = function (e) {
      p && p(e)
      var t = e.__c
      ;(t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== l.push(t) && a === s.options.requestAnimationFrame) ||
            ((a = s.options.requestAnimationFrame) || P)(I)),
        t.__H.__.forEach(function (e) {
          ;(e.i && (e.__H = e.i), e.__V !== c && (e.__ = e.__V), (e.i = undefined), (e.__V = c))
        })),
        (o = r = null))
    }),
    (s.options.__c = function (e, t) {
      ;(t.some(function (e) {
        try {
          ;(e.__h.forEach(O),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || R(e)
            })))
        } catch (n) {
          ;(t.some(function (e) {
            e.__h && (e.__h = [])
          }),
            (t = []),
            s.options.__e(n, e.__v))
        }
      }),
        f && f(e, t))
    }),
    (s.options.unmount = function (e) {
      _ && _(e)
      var t,
        n = e.__c
      n &&
        n.__H &&
        (n.__H.__.forEach(function (e) {
          try {
            O(e)
          } catch (e) {
            t = e
          }
        }),
        (n.__H = undefined),
        t && s.options.__e(t, n.__v))
    }))
  var M = "function" == typeof requestAnimationFrame
  function P(e) {
    var t,
      n = function () {
        ;(clearTimeout(i), M && cancelAnimationFrame(t), setTimeout(e))
      },
      i = setTimeout(n, 100)
    M && (t = requestAnimationFrame(n))
  }
  function O(e) {
    var t = r,
      n = e.__c
    ;("function" == typeof n && ((e.__c = undefined), n()), (r = t))
  }
  function R(e) {
    var t = r
    ;((e.__c = e.__()), (r = t))
  }
  function k(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n]
      })
    )
  }
  function N(e, t) {
    return "function" == typeof t ? t(e) : t
  }
}
