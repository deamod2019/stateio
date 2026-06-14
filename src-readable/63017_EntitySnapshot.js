/**
 * Webpack Module #63017
 * @exports EntitySnapshot, Entity
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.EntitySnapshot = t.Entity = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(79574) /* 79574__mod */,
    o = n(17797) /* 17797_Signal */,
    a = n(33210) /* 33210__mod */,
    s = n(71644) /* 71644_LinkedComponent */,
    u = n(33977) /* 33977_LinkedComponentList */,
    l = (function () {
      function e() {
        ;((this.onComponentAdded = new o.Signal()),
          (this.onComponentRemoved = new o.Signal()),
          (this.onInvalidationRequested = new o.Signal()),
          (this.id = d++),
          (this._components = {}),
          (this._linkedComponents = {}),
          (this._tags = new Set()))
      }
      return (
        Object.defineProperty(e.prototype, "components", {
          get: function () {
            return this._components
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "tags", {
          get: function () {
            return this._tags
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.add = function (e, t) {
          return ((0, a.isTag)(e) ? this.addTag(e) : this.addComponent(e, t), this)
        }),
        (e.prototype.append = function (e, t) {
          return this.appendComponent(e, t)
        }),
        (e.prototype.withdraw = function (e) {
          var t = this.get(e)
          if (undefined !== t) return this.withdrawComponent(t, e)
        }),
        (e.prototype.pick = function (e, t) {
          if ("string" == typeof t) {
            var n = this.find(e, function (e) {
              return e.id === t
            })
            return undefined !== n ? this.withdrawComponent(n, e) : undefined
          }
          return this.withdrawComponent(e, t)
        }),
        (e.prototype.addComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t),
            i = (0, r.getComponentId)(n, true),
            o = (0, s.isLinkedComponent)(e)
          if (undefined !== this._components[i]) {
            if (!o && e === this._components[i]) return
            this.remove(n)
          }
          o ? this.append(e, t) : ((this._components[i] = e), this.dispatchOnComponentAdded(e))
        }),
        (e.prototype.appendComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t),
            i = (0, r.getComponentId)(n, true),
            o = this.getLinkedComponentList(i)
          return (
            o.add(e),
            undefined === this._components[i] && (this._components[i] = o.head),
            this.dispatchOnComponentAdded(e),
            this
          )
        }),
        (e.prototype.addTag = function (e) {
          this._tags.has(e) || (this._tags.add(e), this.dispatchOnComponentAdded(e))
        }),
        (e.prototype.has = function (e, t) {
          return (0, a.isTag)(e) ? this.hasTag(e) : this.hasComponent(e, t)
        }),
        (e.prototype.contains = function (e, t) {
          var n = (0, r.getComponentClass)(e, t)
          return (0, s.isLinkedComponent)(e)
            ? undefined !==
                this.find(n, function (t) {
                  return t === e
                })
            : this.get(n) === e
        }),
        (e.prototype.hasComponent = function (e, t) {
          return undefined !== this.get(e, t)
        }),
        (e.prototype.hasTag = function (e) {
          return this._tags.has(e)
        }),
        (e.prototype.hasAny = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return t.some(function (t) {
            return e.has(t)
          })
        }),
        (e.prototype.hasAll = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return t.every(function (t) {
            return e.has(t)
          })
        }),
        (e.prototype.get = function (e, t) {
          var n = (0, r.getComponentId)(e)
          if (undefined !== n) {
            var i = this._components[n]
            if (undefined === t) return this._components[n]
            if ((0, s.isLinkedComponent)(i))
              for (; undefined !== i; ) {
                if (i.id === t) return i
                i = i.next
              }
          }
        }),
        (e.prototype.getComponents = function () {
          return Array.from(Object.values(this._components))
        }),
        (e.prototype.getTags = function () {
          return Array.from(this._tags)
        }),
        (e.prototype.remove = function (e) {
          if (!(0, a.isTag)(e)) return this.removeComponent(e)
          this.removeTag(e)
        }),
        (e.prototype.removeComponent = function (e) {
          var t = (0, r.getComponentId)(e)
          if (undefined !== t && undefined !== this._components[t]) {
            var n = this._components[t]
            if ((0, s.isLinkedComponent)(n))
              for (var i = this.getLinkedComponentList(e); !i.isEmpty; ) this.withdraw(e)
            else (delete this._components[t], this.dispatchOnComponentRemoved(n))
            return n
          }
        }),
        (e.prototype.removeTag = function (e) {
          this._tags.has(e) && (this._tags.delete(e), this.dispatchOnComponentRemoved(e))
        }),
        (e.prototype.clear = function () {
          ;((this._components = {}), (this._linkedComponents = {}), this._tags.clear())
        }),
        (e.prototype.copyFrom = function (e) {
          return (
            (this._components = Object.assign({}, e._components)),
            (this._linkedComponents = Object.assign({}, e._linkedComponents)),
            (this._tags = new Set(e._tags)),
            this
          )
        }),
        (e.prototype.iterate = function (e, t) {
          var n
          this.hasComponent(e) &&
            (null === (n = this.getLinkedComponentList(e)) || undefined === n || n.iterate(t))
        }),
        (e.prototype.getAll = function (e) {
          var t
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return this.hasComponent(e)
                  ? undefined === (t = this.getLinkedComponentList(e, false))
                    ? [2, undefined]
                    : [5, i.__values(t.nodes())]
                  : [2]
              case 1:
                return (n.sent(), [2])
            }
          })
        }),
        (e.prototype.find = function (e, t) {
          var n = (0, r.getComponentId)(e, false)
          if (undefined !== n) {
            var i = this._components[n]
            if (undefined !== i) {
              if (!(0, s.isLinkedComponent)(i)) return t(i) ? i : undefined
              for (var o = i; undefined !== o; ) {
                if (t(o)) return o
                o = o.next
              }
            }
          }
        }),
        (e.prototype.lengthOf = function (e) {
          var t = 0
          return (
            this.iterate(e, function () {
              t++
            }),
            t
          )
        }),
        (e.prototype.invalidate = function () {
          this.onInvalidationRequested.emit(this)
        }),
        (e.prototype.takeSnapshot = function (e, t, n) {
          var i = e.previous
          if ((e.current !== this && ((e.current = this), i.copyFrom(this)), undefined !== t))
            if ((0, a.isTag)(t)) {
              var o = i._tags
              this.has(t) ? o.delete(t) : o.add(t)
            } else {
              var s = null != n ? n : Object.getPrototypeOf(t).constructor,
                u = (0, r.getComponentId)(s, true),
                l = i._components
              this.has(s) ? delete l[u] : (l[u] = t)
            }
        }),
        (e.prototype.getLinkedComponentList = function (e, t) {
          return (
            undefined === t && (t = true),
            "number" != typeof e && (e = (0, r.getComponentId)(e)),
            undefined === this._linkedComponents[e] && t
              ? (this._linkedComponents[e] = new u.LinkedComponentList())
              : this._linkedComponents[e]
          )
        }),
        (e.prototype.withdrawComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t)
          if (!(0, s.isLinkedComponent)(e)) return this.remove(n)
          var i = this.getLinkedComponentList(n, false)
          if (this.hasComponent(n) && undefined !== i) {
            var o = i.remove(e) ? e : undefined,
              a = (0, r.getComponentId)(n, true)
            return (
              i.isEmpty
                ? (delete this._components[a], delete this._linkedComponents[a])
                : (this._components[a] = i.head),
              undefined !== o && this.dispatchOnComponentRemoved(o),
              o
            )
          }
        }),
        (e.prototype.dispatchOnComponentAdded = function (e) {
          this.onComponentAdded.hasHandlers && this.onComponentAdded.emit(this, e)
        }),
        (e.prototype.dispatchOnComponentRemoved = function (e) {
          this.onComponentRemoved.hasHandlers && this.onComponentRemoved.emit(this, e)
        }),
        e
      )
    })()
  t.Entity = l
  var c = (function () {
    function e() {
      this._previous = new l()
    }
    return (
      Object.defineProperty(e.prototype, "current", {
        get: function () {
          return this._current
        },
        set: function (e) {
          this._current = e
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(e.prototype, "previous", {
        get: function () {
          return this._previous
        },
        enumerable: false,
        configurable: true,
      }),
      e
    )
  })()
  t.EntitySnapshot = c
  var d = 1
}
