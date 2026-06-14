/**
 * Webpack Module #24473
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.lazyRun = t.lazyGet = t.lazyInject = t.di = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = i.__importDefault(n(84879) /* 84879__mod */),
    a = new r.Container()
  t.di = a
  var s = (0, o.default)(a).lazyInject
  t.lazyInject = s
  var u = function (e) {
    return e && a.isBound(e) ? a.get(e) : undefined
  }
  t.lazyGet = u
  t.lazyRun = function (e, t) {
    var n
    return null === (n = u(e)) || undefined === n ? undefined : n.run(t)
  }
}
