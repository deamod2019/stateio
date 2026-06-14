/**
 * Webpack Module #80758
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.typeConstraint = t.namedConstraint = t.taggedConstraint = t.traverseAncerstors = void 0))
  var i = n(6867),
    r = n(47738),
    o = function (e, t) {
      var n = e.parentRequest
      return null !== n && (!!t(n) || o(n, t))
    }
  t.traverseAncerstors = o
  var a = function (e) {
    return function (t) {
      var n = function (n) {
        return null !== n && null !== n.target && n.target.matchesTag(e)(t)
      }
      return ((n.metaData = new r.Metadata(e, t)), n)
    }
  }
  t.taggedConstraint = a
  var s = a(i.NAMED_TAG)
  t.namedConstraint = s
  t.typeConstraint = function (e) {
    return function (t) {
      var n = null
      if (null !== t) {
        if (((n = t.bindings[0]), "string" == typeof e)) return n.serviceIdentifier === e
        var i = t.bindings[0].implementationType
        return e === i
      }
      return !1
    }
  }
}
