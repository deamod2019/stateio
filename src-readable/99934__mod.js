/**
 * Webpack Module #99934
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.tagProperty = t.tagParameter = t.decorate = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */
  function o(e, t, n, r, o) {
    var a = {},
      s = "number" == typeof o,
      u = undefined !== o && s ? o.toString() : n
    if (s && undefined !== n) throw new Error(i.INVALID_DECORATOR_OPERATION)
    Reflect.hasOwnMetadata(e, t) && (a = Reflect.getMetadata(e, t))
    var l = a[u]
    if (Array.isArray(l))
      for (var c = 0, d = l; c < d.length; c++) {
        var h = d[c]
        if (h.key === r.key) throw new Error(i.DUPLICATED_METADATA + " " + h.key.toString())
      }
    else l = []
    ;(l.push(r), (a[u] = l), Reflect.defineMetadata(e, a, t))
  }
  function a(e, t) {
    Reflect.decorate(e, t)
  }
  function s(e, t) {
    return function (n, i) {
      t(n, i, e)
    }
  }
  ;((t.tagParameter = function (e, t, n, i) {
    o(r.TAGGED, e, t, i, n)
  }),
    (t.tagProperty = function (e, t, n) {
      o(r.TAGGED_PROP, e.constructor, t, n)
    }),
    (t.decorate = function (e, t, n) {
      "number" == typeof n
        ? a([s(n, e)], t)
        : "string" == typeof n
          ? Reflect.decorate([e], t, n)
          : a([e], t)
    }))
}
