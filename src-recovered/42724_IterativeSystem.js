/**
 * Webpack Module #42724
 * @exports IterativeSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.IterativeSystem = void 0))
  var i = n(70655),
    r = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return ((n._removed = !1), n)
      }
      return (
        i.__extends(t, e),
        (t.prototype.update = function (e) {
          this.updateEntities(e)
        }),
        (t.prototype.onAddedToEngine = function () {
          ;((this._removed = !1), e.prototype.onAddedToEngine.call(this))
        }),
        (t.prototype.onRemovedFromEngine = function () {
          ;((this._removed = !0), e.prototype.onRemovedFromEngine.call(this))
        }),
        (t.prototype.updateEntities = function (e) {
          var t, n
          try {
            for (var r = i.__values(this.query.entities), o = r.next(); !o.done; o = r.next()) {
              var a = o.value
              if (this._removed) return
              this.updateEntity(a, e)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        t
      )
    })(n(14134).ReactionSystem)
  t.IterativeSystem = r
}
