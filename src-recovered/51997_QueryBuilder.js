/**
 * Webpack Module #51997
 * @exports QueryBuilder, Query
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isQueryBuilder = t.isQueryPredicate = t.QueryBuilder = t.Query = void 0))
  var i = n(70655),
    r = n(79574),
    o = n(63017),
    a = n(33210),
    s = n(17797),
    u = n(71644),
    l = (function () {
      function e(e) {
        var t = this
        ;((this.onEntityAdded = new s.Signal()),
          (this.onEntityRemoved = new s.Signal()),
          (this._helper = new o.Entity()),
          (this._snapshot = new o.EntitySnapshot()),
          (this._entities = []),
          (this.entityAdded = function (e) {
            ;-1 === t._entities.indexOf(e) &&
              t._predicate(e) &&
              (t._entities.push(e),
              t.onEntityAdded.hasHandlers &&
                (e.takeSnapshot(t._snapshot), t.onEntityAdded.emit(t._snapshot)))
          }),
          (this.entityRemoved = function (e) {
            var n = t._entities.indexOf(e)
            ;-1 !== n &&
              (t._entities.splice(n, 1),
              t.onEntityRemoved.hasHandlers &&
                (e.takeSnapshot(t._snapshot), t.onEntityRemoved.emit(t._snapshot)))
          }),
          (this.entityComponentAdded = function (e, n, i) {
            var r = t.onEntityAdded.hasHandlers,
              o = t.onEntityRemoved.hasHandlers
            t.updateHelper(e, n, i)
            var a = t._entities.indexOf(e),
              s = t._predicate(t._helper)
            ;-1 === a && s
              ? (t._entities.push(e),
                r && (e.takeSnapshot(t._snapshot, n, i), t.onEntityAdded.emit(t._snapshot)))
              : -1 === a ||
                s ||
                (t._entities.splice(a, 1),
                o && (e.takeSnapshot(t._snapshot, n, i), t.onEntityRemoved.emit(t._snapshot)))
          }),
          (this.entityComponentRemoved = function (e, n, i) {
            var r = t.onEntityAdded.hasHandlers,
              o = t.onEntityRemoved.hasHandlers
            t.updateHelper(e, n, i)
            var a = t._entities.indexOf(e)
            ;-1 !== a && t._predicate(t._helper) && !t._predicate(e)
              ? (t._entities.splice(a, 1),
                o && (e.takeSnapshot(t._snapshot, n, i), t.onEntityRemoved.emit(t._snapshot)))
              : -1 === a &&
                t._predicate(e) &&
                !t._predicate(t._helper) &&
                (t._entities.push(e),
                r && (e.takeSnapshot(t._snapshot, n, i), t.onEntityAdded.emit(t._snapshot)))
          }),
          (this._predicate = e))
      }
      return (
        Object.defineProperty(e.prototype, "entities", {
          get: function () {
            return this._entities
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "first", {
          get: function () {
            if (0 !== this._entities.length) return this._entities[0]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "last", {
          get: function () {
            if (0 !== this._entities.length) return this._entities[this._entities.length - 1]
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "length", {
          get: function () {
            return this._entities.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.countBy = function (e) {
          var t,
            n,
            r = 0
          try {
            for (var o = i.__values(this._entities), a = o.next(); !a.done; a = o.next()) {
              e(a.value) && r++
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o)
            } finally {
              if (t) throw t.error
            }
          }
          return r
        }),
        (e.prototype.find = function (e) {
          return this._entities.find(e)
        }),
        (e.prototype.filter = function (e) {
          return this._entities.filter(e)
        }),
        (e.prototype.has = function (e) {
          return -1 !== this._entities.indexOf(e)
        }),
        (e.prototype.matchEntities = function (e) {
          var t = this
          e.forEach(function (e) {
            return t.entityAdded(e)
          })
        }),
        Object.defineProperty(e.prototype, "isEmpty", {
          get: function () {
            return 0 == this.entities.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.clear = function () {
          this._entities = []
        }),
        (e.prototype.validateEntity = function (e) {
          var t = this.entities.indexOf(e),
            n = this._predicate(e)
          ;-1 === t || n ? this.entityAdded(e) : this.entityRemoved(e)
        }),
        (e.prototype.updateHelper = function (e, t, n) {
          ;(this._helper.clear(),
            this._helper.copyFrom(e),
            (0, u.isLinkedComponent)(t)
              ? this._helper.has((0, r.getComponentClass)(t, n)) || this._helper.append(t)
              : this._helper.add(t))
        }),
        e
      )
    })()
  t.Query = l
  var c = (function () {
    function e() {
      ;((this._components = new Set()), (this._tags = new Set()))
    }
    return (
      (e.prototype.contains = function () {
        for (var e, t, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]
        try {
          for (var s = i.__values(n), u = s.next(); !u.done; u = s.next()) {
            var l = u.value
            if ((0, a.isTag)(l)) this._tags.has(l) || this._tags.add(l)
            else {
              var c = (0, r.getComponentId)(l, !0)
              this._components.has(c) || this._components.add(c)
            }
          }
        } catch (t) {
          e = { error: t }
        } finally {
          try {
            u && !u.done && (t = s.return) && t.call(s)
          } finally {
            if (e) throw e.error
          }
        }
        return this
      }),
      (e.prototype.build = function () {
        var e = this
        return new l(function (t) {
          return (function (e, t, n) {
            var r, o, a, s
            if (t.size > 0)
              try {
                for (var u = i.__values(t), l = u.next(); !l.done; l = u.next()) {
                  var c = l.value
                  if (void 0 === e.components[c]) return !1
                }
              } catch (e) {
                r = { error: e }
              } finally {
                try {
                  l && !l.done && (o = u.return) && o.call(u)
                } finally {
                  if (r) throw r.error
                }
              }
            if (n.size > 0)
              try {
                for (var d = i.__values(n), h = d.next(); !h.done; h = d.next()) {
                  var p = h.value
                  if (!e.tags.has(p)) return !1
                }
              } catch (e) {
                a = { error: e }
              } finally {
                try {
                  h && !h.done && (s = d.return) && s.call(d)
                } finally {
                  if (a) throw a.error
                }
              }
            return !0
          })(t, e._components, e._tags)
        })
      }),
      (e.prototype.getComponents = function () {
        return this._components
      }),
      (e.prototype.getTags = function () {
        return this._tags
      }),
      e
    )
  })()
  ;((t.QueryBuilder = c),
    (t.isQueryPredicate = function (e) {
      return "function" == typeof e
    }),
    (t.isQueryBuilder = function (e) {
      return e instanceof c
    }))
}
