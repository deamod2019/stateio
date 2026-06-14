/**
 * Webpack Module #63017
 * @exports EntitySnapshot, Entity
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.EntitySnapshot = t.Entity = void 0))
  var i = n(70655),
    r = n(79574),
    o = n(17797),
    a = n(33210),
    s = n(71644),
    u = n(33977),
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
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "tags", {
          get: function () {
            return this._tags
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.add = function (e, t) {
          return ((0, a.isTag)(e) ? this.addTag(e) : this.addComponent(e, t), this)
        }),
        (e.prototype.append = function (e, t) {
          return this.appendComponent(e, t)
        }),
        (e.prototype.withdraw = function (e) {
          var t = this.get(e)
          if (void 0 !== t) return this.withdrawComponent(t, e)
        }),
        (e.prototype.pick = function (e, t) {
          if ("string" == typeof t) {
            var n = this.find(e, function (e) {
              return e.id === t
            })
            return void 0 !== n ? this.withdrawComponent(n, e) : void 0
          }
          return this.withdrawComponent(e, t)
        }),
        (e.prototype.addComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t),
            i = (0, r.getComponentId)(n, !0),
            o = (0, s.isLinkedComponent)(e)
          if (void 0 !== this._components[i]) {
            if (!o && e === this._components[i]) return
            this.remove(n)
          }
          o ? this.append(e, t) : ((this._components[i] = e), this.dispatchOnComponentAdded(e))
        }),
        (e.prototype.appendComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t),
            i = (0, r.getComponentId)(n, !0),
            o = this.getLinkedComponentList(i)
          return (
            o.add(e),
            void 0 === this._components[i] && (this._components[i] = o.head),
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
            ? void 0 !==
                this.find(n, function (t) {
                  return t === e
                })
            : this.get(n) === e
        }),
        (e.prototype.hasComponent = function (e, t) {
          return void 0 !== this.get(e, t)
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
          if (void 0 !== n) {
            var i = this._components[n]
            if (void 0 === t) return this._components[n]
            if ((0, s.isLinkedComponent)(i))
              for (; void 0 !== i; ) {
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
          if (void 0 !== t && void 0 !== this._components[t]) {
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
            (null === (n = this.getLinkedComponentList(e)) || void 0 === n || n.iterate(t))
        }),
        (e.prototype.getAll = function (e) {
          var t
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return this.hasComponent(e)
                  ? void 0 === (t = this.getLinkedComponentList(e, !1))
                    ? [2, void 0]
                    : [5, i.__values(t.nodes())]
                  : [2]
              case 1:
                return (n.sent(), [2])
            }
          })
        }),
        (e.prototype.find = function (e, t) {
          var n = (0, r.getComponentId)(e, !1)
          if (void 0 !== n) {
            var i = this._components[n]
            if (void 0 !== i) {
              if (!(0, s.isLinkedComponent)(i)) return t(i) ? i : void 0
              for (var o = i; void 0 !== o; ) {
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
          if ((e.current !== this && ((e.current = this), i.copyFrom(this)), void 0 !== t))
            if ((0, a.isTag)(t)) {
              var o = i._tags
              this.has(t) ? o.delete(t) : o.add(t)
            } else {
              var s = null != n ? n : Object.getPrototypeOf(t).constructor,
                u = (0, r.getComponentId)(s, !0),
                l = i._components
              this.has(s) ? delete l[u] : (l[u] = t)
            }
        }),
        (e.prototype.getLinkedComponentList = function (e, t) {
          return (
            void 0 === t && (t = !0),
            "number" != typeof e && (e = (0, r.getComponentId)(e)),
            void 0 === this._linkedComponents[e] && t
              ? (this._linkedComponents[e] = new u.LinkedComponentList())
              : this._linkedComponents[e]
          )
        }),
        (e.prototype.withdrawComponent = function (e, t) {
          var n = (0, r.getComponentClass)(e, t)
          if (!(0, s.isLinkedComponent)(e)) return this.remove(n)
          var i = this.getLinkedComponentList(n, !1)
          if (this.hasComponent(n) && void 0 !== i) {
            var o = i.remove(e) ? e : void 0,
              a = (0, r.getComponentId)(n, !0)
            return (
              i.isEmpty
                ? (delete this._components[a], delete this._linkedComponents[a])
                : (this._components[a] = i.head),
              void 0 !== o && this.dispatchOnComponentRemoved(o),
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
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "previous", {
        get: function () {
          return this._previous
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    )
  })()
  t.EntitySnapshot = c
  var d = 1
}
