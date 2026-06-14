/**
 * Webpack Module #32492
 * @exports Engine
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Engine = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(63017) /* 63017_EntitySnapshot */,
    o = n(29017) /* 29017_Subscription */,
    a = n(17797) /* 17797_Signal */,
    s = (function () {
      function e() {
        var e = this
        ;((this.onEntityAdded = new a.Signal()),
          (this.onEntityRemoved = new a.Signal()),
          (this._entityMap = new Map()),
          (this._entities = []),
          (this._systems = []),
          (this._queries = []),
          (this._subscriptions = []),
          (this._sharedConfig = new r.Entity()),
          (this.onComponentAdded = function (t, n, i) {
            e._queries.forEach(function (e) {
              return e.entityComponentAdded(t, n, i)
            })
          }),
          (this.onInvalidationRequested = function (t) {
            e._queries.forEach(function (e) {
              return e.validateEntity(t)
            })
          }),
          (this.onComponentRemoved = function (t, n, i) {
            e._queries.forEach(function (e) {
              return e.entityComponentRemoved(t, n, i)
            })
          }),
          this.connectEntity(this._sharedConfig))
      }
      return (
        Object.defineProperty(e.prototype, "entities", {
          get: function () {
            return Array.from(this._entities)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "systems", {
          get: function () {
            return this._systems
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "queries", {
          get: function () {
            return this._queries
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "subscriptions", {
          get: function () {
            return this._subscriptions
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "sharedConfig", {
          get: function () {
            return this._sharedConfig
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.addEntity = function (e) {
          return (
            this._entityMap.has(e.id) ||
              (this._entities.push(e),
              this._entityMap.set(e.id, e),
              this.onEntityAdded.emit(e),
              this.connectEntity(e)),
            this
          )
        }),
        (e.prototype.removeEntity = function (e) {
          if (!this._entityMap.has(e.id)) return this
          var t = this._entities.indexOf(e)
          return (
            this._entities.splice(t, 1),
            this._entityMap.delete(e.id),
            this.onEntityRemoved.emit(e),
            this.disconnectEntity(e),
            this
          )
        }),
        (e.prototype.removeSystem = function (e) {
          var t = this._systems.indexOf(e)
          return (
            -1 === t || (this._systems.splice(t, 1), e.onRemovedFromEngine(), e.setEngine(undefined)),
            this
          )
        }),
        (e.prototype.getEntityById = function (e) {
          return this._entityMap.get(e)
        }),
        (e.prototype.getSystem = function (e) {
          return this._systems.find(function (t) {
            return t instanceof e
          })
        }),
        (e.prototype.removeAllSystems = function () {
          var e,
            t,
            n = this._systems
          this._systems = []
          try {
            for (var r = i.__values(n), o = r.next(); !o.done; o = r.next()) {
              o.value.onRemovedFromEngine()
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              o && !o.done && (t = r.return) && t.call(r)
            } finally {
              if (e) throw e.error
            }
          }
        }),
        (e.prototype.removeAllQueries = function () {
          var e,
            t,
            n = this._queries
          this._queries = []
          try {
            for (var r = i.__values(n), o = r.next(); !o.done; o = r.next()) {
              var a = o.value
              ;(this.disconnectQuery(a), a.clear())
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              o && !o.done && (t = r.return) && t.call(r)
            } finally {
              if (e) throw e.error
            }
          }
        }),
        (e.prototype.removeAllEntities = function () {
          this.removeAllEntitiesInternal(false)
        }),
        (e.prototype.clear = function () {
          ;(this.removeAllEntitiesInternal(true), this.removeAllSystems(), this.removeAllQueries())
        }),
        (e.prototype.update = function (e) {
          var t, n
          try {
            for (var r = i.__values(this._systems), o = r.next(); !o.done; o = r.next()) {
              o.value.update(e)
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
        (e.prototype.addQuery = function (e) {
          return (
            this.connectQuery(e),
            e.matchEntities(this.entities),
            (this._queries[this._queries.length] = e),
            this
          )
        }),
        (e.prototype.addSystem = function (e, t) {
          if ((undefined === t && (t = 0), e.setPriority(t), 0 === this._systems.length))
            this._systems[0] = e
          else {
            var n = this._systems.findIndex(function (e) {
              return e.priority > t
            })
            ;-1 === n ? (this._systems[this._systems.length] = e) : this._systems.splice(n, 0, e)
          }
          return (e.setEngine(this), e.onAddedToEngine(), this)
        }),
        (e.prototype.removeQuery = function (e) {
          var t = this._queries.indexOf(e)
          if (-1 != t) return (this._queries.splice(t, 1), this.disconnectQuery(e), e.clear(), this)
        }),
        (e.prototype.subscribe = function (e, t) {
          this.addSubscription(e, t)
        }),
        (e.prototype.unsubscribe = function (e, t) {
          this.removeSubscription(e, t)
        }),
        (e.prototype.unsubscribeAll = function () {
          this._subscriptions.length = 0
        }),
        (e.prototype.addSubscription = function (e, t) {
          var n, r
          try {
            for (var a = i.__values(this._subscriptions), s = a.next(); !s.done; s = a.next()) {
              var u = s.value
              if (u.equals(e, t)) return u
            }
          } catch (e) {
            n = { error: e }
          } finally {
            try {
              s && !s.done && (r = a.return) && r.call(a)
            } finally {
              if (n) throw n.error
            }
          }
          var l = new o.Subscription(e, t)
          return (this._subscriptions.push(l), l)
        }),
        (e.prototype.removeSubscription = function (e, t) {
          for (var n = this._subscriptions.length; --n >= 0; ) {
            if (
              this._subscriptions[n].equals(e, t) &&
              (this._subscriptions.splice(n, 1), undefined !== t)
            )
              return
          }
        }),
        (e.prototype.dispatch = function (e) {
          var t, n
          try {
            for (var r = i.__values(this._subscriptions), o = r.next(); !o.done; o = r.next()) {
              var a = o.value
              ;(("function" == typeof a.messageType && e instanceof a.messageType) ||
                e === a.messageType) &&
                a.handler(e)
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
        (e.prototype.connectEntity = function (e) {
          ;(e.onComponentAdded.connect(this.onComponentAdded, Number.POSITIVE_INFINITY),
            e.onComponentRemoved.connect(this.onComponentRemoved, Number.POSITIVE_INFINITY),
            e.onInvalidationRequested.connect(
              this.onInvalidationRequested,
              Number.NEGATIVE_INFINITY,
            ))
        }),
        (e.prototype.disconnectEntity = function (e) {
          ;(e.onComponentAdded.disconnect(this.onComponentAdded),
            e.onComponentRemoved.disconnect(this.onComponentRemoved),
            e.onInvalidationRequested.disconnect(this.onInvalidationRequested))
        }),
        (e.prototype.connectQuery = function (e) {
          ;(this.onEntityAdded.connect(e.entityAdded),
            this.onEntityRemoved.connect(e.entityRemoved))
        }),
        (e.prototype.disconnectQuery = function (e) {
          ;(this.onEntityAdded.disconnect(e.entityAdded),
            this.onEntityRemoved.disconnect(e.entityRemoved))
        }),
        (e.prototype.removeAllEntitiesInternal = function (e) {
          var t,
            n,
            r = this._entities
          ;((this._entities = []), this._entityMap.clear())
          try {
            for (var o = i.__values(r), a = o.next(); !a.done; a = o.next()) {
              var s = a.value
              ;(e || this.onEntityRemoved.emit(s), this.disconnectEntity(s))
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
        }),
        e
      )
    })()
  t.Engine = s
}
