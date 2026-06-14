/**
 * Webpack Module #14134
 * @exports ReactionSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ReactionSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(51997) /* 51997_QueryBuilder */,
    o = (function (e) {
      function t(t) {
        var n = e.call(this) || this
        return (
          (n.entityAdded = function (e) {}),
          (n.entityRemoved = function (e) {}),
          (0, r.isQueryBuilder)(t)
            ? (n.query = t.build())
            : (0, r.isQueryPredicate)(t)
              ? (n.query = new r.Query(t))
              : (n.query = t),
          n
        )
      }
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "entities", {
          get: function () {
            return this.query.entities
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.onAddedToEngine = function () {
          ;(this.engine.addQuery(this.query),
            this.prepare(),
            this.query.onEntityAdded.connect(this.entityAdded),
            this.query.onEntityRemoved.connect(this.entityRemoved))
        }),
        (t.prototype.onRemovedFromEngine = function () {
          ;(this.engine.removeQuery(this.query),
            this.query.onEntityAdded.disconnect(this.entityAdded),
            this.query.onEntityRemoved.disconnect(this.entityRemoved),
            this.query.clear())
        }),
        (t.prototype.prepare = function () {}),
        t
      )
    })(n(99007) /* 99007_System */.System)
  t.ReactionSystem = o
}
