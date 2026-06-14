/**
 * Webpack Module #55800
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.circularDependencyToException =
      t.listMetadataForTarget =
      t.listRegisteredBindingsForServiceIdentifier =
      t.getServiceIdentifierAsString =
      t.getFunctionName =
        undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */
  function r(e) {
    return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
  }
  function o(e, t) {
    return (
      null !== e.parentRequest && (e.parentRequest.serviceIdentifier === t || o(e.parentRequest, t))
    )
  }
  function a(e) {
    if (e.name) return e.name
    var t = e.toString(),
      n = t.match(/^function\s*([^\s(]+)/)
    return n ? n[1] : "Anonymous function: " + t
  }
  ;((t.getServiceIdentifierAsString = r),
    (t.listRegisteredBindingsForServiceIdentifier = function (e, t, n) {
      var i = "",
        r = n(e, t)
      return (
        0 !== r.length &&
          ((i = "\nRegistered bindings:"),
          r.forEach(function (e) {
            var t = "Object"
            ;(null !== e.implementationType && (t = a(e.implementationType)),
              (i = i + "\n " + t),
              e.constraint.metaData && (i = i + " - " + e.constraint.metaData))
          })),
        i
      )
    }),
    (t.circularDependencyToException = function e(t) {
      t.childRequests.forEach(function (t) {
        if (o(t, t.serviceIdentifier)) {
          var n = (function (e) {
            var t = (function e(t, n) {
              undefined === n && (n = [])
              var i = r(t.serviceIdentifier)
              return (n.push(i), null !== t.parentRequest ? e(t.parentRequest, n) : n)
            })(e)
            return t.reverse().join(" --\x3e ")
          })(t)
          throw new Error(i.CIRCULAR_DEPENDENCY + " " + n)
        }
        e(t)
      })
    }),
    (t.listMetadataForTarget = function (e, t) {
      if (t.isTagged() || t.isNamed()) {
        var n = "",
          i = t.getNamedTag(),
          r = t.getCustomTags()
        return (
          null !== i && (n += i.toString() + "\n"),
          null !== r &&
            r.forEach(function (e) {
              n += e.toString() + "\n"
            }),
          " " + e + "\n " + e + " - " + n
        )
      }
      return " " + e
    }),
    (t.getFunctionName = a))
}
