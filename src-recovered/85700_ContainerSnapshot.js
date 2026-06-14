/**
 * Webpack Module #85700
 * @exports ContainerSnapshot
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContainerSnapshot = void 0))
  var n = (function () {
    function e() {}
    return (
      (e.of = function (t, n) {
        var i = new e()
        return ((i.bindings = t), (i.middleware = n), i)
      }),
      e
    )
  })()
  t.ContainerSnapshot = n
}
