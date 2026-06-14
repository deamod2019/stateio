/**
 * Webpack Module #47738
 * @exports Metadata
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Metadata = void 0))
  var i = n(6867),
    r = (function () {
      function e(e, t) {
        ;((this.key = e), (this.value = t))
      }
      return (
        (e.prototype.toString = function () {
          return this.key === i.NAMED_TAG
            ? "named: " + this.value.toString() + " "
            : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
        }),
        e
      )
    })()
  t.Metadata = r
}
