/**
 * Webpack Module #85700
 * @exports ContainerSnapshot
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ContainerSnapshot = undefined))
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
