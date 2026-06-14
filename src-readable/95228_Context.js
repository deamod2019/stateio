/**
 * Webpack Module #95228
 * @exports Context
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Context = undefined))
  var i = n(37791) /* 37791__mod */,
    r = (function () {
      function e(e) {
        ;((this.id = i.id()), (this.container = e))
      }
      return (
        (e.prototype.addPlan = function (e) {
          this.plan = e
        }),
        (e.prototype.setCurrentRequest = function (e) {
          this.currentRequest = e
        }),
        e
      )
    })()
  t.Context = r
}
