/**
 * Webpack Module #24473
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.lazyRun = t.lazyGet = t.lazyInject = t.di = void 0))
  var i = n(70655),
    r = n(86700),
    o = i.__importDefault(n(84879)),
    a = new r.Container()
  t.di = a
  var s = (0, o.default)(a).lazyInject
  t.lazyInject = s
  var u = function (e) {
    return e && a.isBound(e) ? a.get(e) : void 0
  }
  t.lazyGet = u
  t.lazyRun = function (e, t) {
    var n
    return null === (n = u(e)) || void 0 === n ? void 0 : n.run(t)
  }
}
