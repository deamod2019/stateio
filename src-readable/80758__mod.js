/**
 * Webpack Module #80758
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.typeConstraint = t.namedConstraint = t.taggedConstraint = t.traverseAncerstors = undefined))
  var i = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    r = n(47738) /* 47738_Metadata */,
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
      return false
    }
  }
}
