/**
 * Webpack Module #6000
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i =
    (this && this.__spreadArray) ||
    function (e, t) {
      for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n]
      return e
    }
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getFunctionName = t.getBaseClassDependencyCount = t.getDependencies = void 0))
  var r = n(5744),
    o = n(16674),
    a = n(28421),
    s = n(6867),
    u = n(55800)
  Object.defineProperty(t, "getFunctionName", {
    enumerable: !0,
    get: function () {
      return u.getFunctionName
    },
  })
  var l = n(18924)
  function c(e, t, n, r) {
    var a = e.getConstructorMetadata(n),
      s = a.compilerGeneratedMetadata
    if (void 0 === s) {
      var u = o.MISSING_INJECTABLE_ANNOTATION + " " + t + "."
      throw new Error(u)
    }
    var l = a.userGeneratedMetadata,
      c = Object.keys(l),
      p = 0 === n.length && c.length > 0,
      f = c.length > n.length,
      _ = (function (e, t, n, i, r) {
        for (var o = [], a = 0; a < r; a++) {
          var s = d(a, e, t, n, i)
          null !== s && o.push(s)
        }
        return o
      })(r, t, s, l, p || f ? c.length : n.length),
      g = h(e, n)
    return i(i([], _), g)
  }
  function d(e, t, n, i, s) {
    var u = s[e.toString()] || [],
      c = p(u),
      d = !0 !== c.unmanaged,
      h = i[e],
      f = c.inject || c.multiInject
    if (((h = f || h) instanceof r.LazyServiceIdentifer && (h = h.unwrap()), d)) {
      if (!t && (h === Object || h === Function || void 0 === h)) {
        var _ = o.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + "."
        throw new Error(_)
      }
      var g = new l.Target(a.TargetTypeEnum.ConstructorArgument, c.targetName, h)
      return ((g.metadata = u), g)
    }
    return null
  }
  function h(e, t) {
    for (var n = e.getPropertiesMetadata(t), r = [], o = 0, s = Object.keys(n); o < s.length; o++) {
      var u = s[o],
        c = n[u],
        d = p(n[u]),
        f = d.targetName || u,
        _ = d.inject || d.multiInject,
        g = new l.Target(a.TargetTypeEnum.ClassProperty, f, _)
      ;((g.metadata = c), r.push(g))
    }
    var m = Object.getPrototypeOf(t.prototype).constructor
    if (m !== Object) {
      var v = h(e, m)
      r = i(i([], r), v)
    }
    return r
  }
  function p(e) {
    var t = {}
    return (
      e.forEach(function (e) {
        t[e.key.toString()] = e.value
      }),
      {
        inject: t[s.INJECT_TAG],
        multiInject: t[s.MULTI_INJECT_TAG],
        targetName: t[s.NAME_TAG],
        unmanaged: t[s.UNMANAGED_TAG],
      }
    )
  }
  ;((t.getDependencies = function (e, t) {
    return c(e, u.getFunctionName(t), t, !1)
  }),
    (t.getBaseClassDependencyCount = function e(t, n) {
      var i = Object.getPrototypeOf(n.prototype).constructor
      if (i !== Object) {
        var r = c(t, u.getFunctionName(i), i, !0),
          o = r.map(function (e) {
            return e.metadata.filter(function (e) {
              return e.key === s.UNMANAGED_TAG
            })
          }),
          a = [].concat.apply([], o).length,
          l = r.length - a
        return l > 0 ? l : e(t, i)
      }
      return 0
    }))
}
