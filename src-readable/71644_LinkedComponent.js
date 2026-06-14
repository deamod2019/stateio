/**
 * Webpack Module #71644
 * @exports LinkedComponent
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.isLinkedComponent = t.LinkedComponent = undefined))
  var n = function (e) {
    ;((this.id = e), (this.next = undefined))
  }
  ;((t.LinkedComponent = n),
    (t.isLinkedComponent = function (e) {
      return undefined !== e && e.hasOwnProperty("next")
    }))
}
