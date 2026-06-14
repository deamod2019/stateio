/**
 * Webpack Module #71644
 * @exports LinkedComponent
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isLinkedComponent = t.LinkedComponent = void 0))
  var n = function (e) {
    ;((this.id = e), (this.next = void 0))
  }
  ;((t.LinkedComponent = n),
    (t.isLinkedComponent = function (e) {
      return void 0 !== e && e.hasOwnProperty("next")
    }))
}
