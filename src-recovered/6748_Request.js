/**
 * Webpack Module #6748
 * @exports Request
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Request = void 0))
  var i = n(37791),
    r = (function () {
      function e(e, t, n, r, o) {
        ;((this.id = i.id()),
          (this.serviceIdentifier = e),
          (this.parentContext = t),
          (this.parentRequest = n),
          (this.target = o),
          (this.childRequests = []),
          (this.bindings = Array.isArray(r) ? r : [r]),
          (this.requestScope = null === n ? new Map() : null))
      }
      return (
        (e.prototype.addChildRequest = function (t, n, i) {
          var r = new e(t, this.parentContext, this, n, i)
          return (this.childRequests.push(r), r)
        }),
        e
      )
    })()
  t.Request = r
}
