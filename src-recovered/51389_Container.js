/**
 * Webpack Module #51389
 * @exports Container
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i =
      (this && this.__awaiter) ||
      function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function a(e) {
            try {
              u(i.next(e))
            } catch (e) {
              o(e)
            }
          }
          function s(e) {
            try {
              u(i.throw(e))
            } catch (e) {
              o(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((i = i.apply(e, t || [])).next())
        })
      },
    r =
      (this && this.__generator) ||
      function (e, t) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1]
              return r[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this
            }),
          o
        )
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.")
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r =
                        2 & o[0]
                          ? i.return
                          : o[0]
                            ? i.throw || ((r = i.return) && r.call(i), 0)
                            : i.next) &&
                      !(r = r.call(i, o[1])).done)
                  )
                    return r
                  switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                    case 0:
                    case 1:
                      r = o
                      break
                    case 4:
                      return (a.label++, { value: o[1], done: !1 })
                    case 5:
                      ;(a.label++, (i = o[1]), (o = [0]))
                      continue
                    case 7:
                      ;((o = a.ops.pop()), a.trys.pop())
                      continue
                    default:
                      if (
                        !((r = a.trys),
                        (r = r.length > 0 && r[r.length - 1]) || (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                        a.label = o[1]
                        break
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        ;((a.label = r[1]), (r = o))
                        break
                      }
                      if (r && a.label < r[2]) {
                        ;((a.label = r[2]), a.ops.push(o))
                        break
                      }
                      ;(r[2] && a.ops.pop(), a.trys.pop())
                      continue
                  }
                  o = t.call(e, a)
                } catch (e) {
                  ;((o = [6, e]), (i = 0))
                } finally {
                  n = r = 0
                }
              if (5 & o[0]) throw o[1]
              return { value: o[0] ? o[1] : void 0, done: !0 }
            })([o, s])
          }
        }
      },
    o =
      (this && this.__spreadArray) ||
      function (e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n]
        return e
      }
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Container = void 0))
  var a = n(44290),
    s = n(16674),
    u = n(28421),
    l = n(6867),
    c = n(51377),
    d = n(86311),
    h = n(31927),
    p = n(51860),
    f = n(37791),
    _ = n(55800),
    g = n(85700),
    m = n(80175),
    v = (function () {
      function e(e) {
        this._appliedMiddleware = []
        var t = e || {}
        if ("object" != typeof t) throw new Error("" + s.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT)
        if (void 0 === t.defaultScope) t.defaultScope = u.BindingScopeEnum.Transient
        else if (
          t.defaultScope !== u.BindingScopeEnum.Singleton &&
          t.defaultScope !== u.BindingScopeEnum.Transient &&
          t.defaultScope !== u.BindingScopeEnum.Request
        )
          throw new Error("" + s.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE)
        if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1
        else if ("boolean" != typeof t.autoBindInjectable)
          throw new Error("" + s.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE)
        if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1
        else if ("boolean" != typeof t.skipBaseClassChecks)
          throw new Error("" + s.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK)
        ;((this.options = {
          autoBindInjectable: t.autoBindInjectable,
          defaultScope: t.defaultScope,
          skipBaseClassChecks: t.skipBaseClassChecks,
        }),
          (this.id = f.id()),
          (this._bindingDictionary = new m.Lookup()),
          (this._snapshots = []),
          (this._middleware = null),
          (this.parent = null),
          (this._metadataReader = new c.MetadataReader()))
      }
      return (
        (e.merge = function (t, n) {
          for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r]
          var a = new e(),
            s = o([t, n], i).map(function (e) {
              return d.getBindingDictionary(e)
            }),
            u = d.getBindingDictionary(a)
          function l(e, t) {
            e.traverse(function (e, n) {
              n.forEach(function (e) {
                t.add(e.serviceIdentifier, e.clone())
              })
            })
          }
          return (
            s.forEach(function (e) {
              l(e, u)
            }),
            a
          )
        }),
        (e.prototype.load = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          for (var n = this._getContainerModuleHelpersFactory(), i = 0, r = e; i < r.length; i++) {
            var o = r[i],
              a = n(o.id)
            o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)
          }
        }),
        (e.prototype.loadAsync = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return i(this, void 0, void 0, function () {
            var t, n, i, o, a
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  ;((t = this._getContainerModuleHelpersFactory()), (n = 0), (i = e), (r.label = 1))
                case 1:
                  return n < i.length
                    ? ((o = i[n]),
                      (a = t(o.id)),
                      [
                        4,
                        o.registry(
                          a.bindFunction,
                          a.unbindFunction,
                          a.isboundFunction,
                          a.rebindFunction,
                        ),
                      ])
                    : [3, 4]
                case 2:
                  ;(r.sent(), (r.label = 3))
                case 3:
                  return (n++, [3, 1])
                case 4:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.unload = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          var i = function (e) {
            return function (t) {
              return t.moduleId === e
            }
          }
          t.forEach(function (t) {
            var n = i(t.id)
            e._bindingDictionary.removeByCondition(n)
          })
        }),
        (e.prototype.bind = function (e) {
          var t = this.options.defaultScope || u.BindingScopeEnum.Transient,
            n = new a.Binding(e, t)
          return (this._bindingDictionary.add(e, n), new p.BindingToSyntax(n))
        }),
        (e.prototype.rebind = function (e) {
          return (this.unbind(e), this.bind(e))
        }),
        (e.prototype.unbind = function (e) {
          try {
            this._bindingDictionary.remove(e)
          } catch (t) {
            throw new Error(s.CANNOT_UNBIND + " " + _.getServiceIdentifierAsString(e))
          }
        }),
        (e.prototype.unbindAll = function () {
          this._bindingDictionary = new m.Lookup()
        }),
        (e.prototype.isBound = function (e) {
          var t = this._bindingDictionary.hasKey(e)
          return (!t && this.parent && (t = this.parent.isBound(e)), t)
        }),
        (e.prototype.isBoundNamed = function (e, t) {
          return this.isBoundTagged(e, l.NAMED_TAG, t)
        }),
        (e.prototype.isBoundTagged = function (e, t, n) {
          var i = !1
          if (this._bindingDictionary.hasKey(e)) {
            var r = this._bindingDictionary.get(e),
              o = d.createMockRequest(this, e, t, n)
            i = r.some(function (e) {
              return e.constraint(o)
            })
          }
          return (!i && this.parent && (i = this.parent.isBoundTagged(e, t, n)), i)
        }),
        (e.prototype.snapshot = function () {
          this._snapshots.push(
            g.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware),
          )
        }),
        (e.prototype.restore = function () {
          var e = this._snapshots.pop()
          if (void 0 === e) throw new Error(s.NO_MORE_SNAPSHOTS_AVAILABLE)
          ;((this._bindingDictionary = e.bindings), (this._middleware = e.middleware))
        }),
        (e.prototype.createChild = function (t) {
          var n = new e(t || this.options)
          return ((n.parent = this), n)
        }),
        (e.prototype.applyMiddleware = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          this._appliedMiddleware = this._appliedMiddleware.concat(e)
          var n = this._middleware ? this._middleware : this._planAndResolve()
          this._middleware = e.reduce(function (e, t) {
            return t(e)
          }, n)
        }),
        (e.prototype.applyCustomMetadataReader = function (e) {
          this._metadataReader = e
        }),
        (e.prototype.get = function (e) {
          return this._get(!1, !1, u.TargetTypeEnum.Variable, e)
        }),
        (e.prototype.getTagged = function (e, t, n) {
          return this._get(!1, !1, u.TargetTypeEnum.Variable, e, t, n)
        }),
        (e.prototype.getNamed = function (e, t) {
          return this.getTagged(e, l.NAMED_TAG, t)
        }),
        (e.prototype.getAll = function (e) {
          return this._get(!0, !0, u.TargetTypeEnum.Variable, e)
        }),
        (e.prototype.getAllTagged = function (e, t, n) {
          return this._get(!1, !0, u.TargetTypeEnum.Variable, e, t, n)
        }),
        (e.prototype.getAllNamed = function (e, t) {
          return this.getAllTagged(e, l.NAMED_TAG, t)
        }),
        (e.prototype.resolve = function (e) {
          var t = this.createChild()
          return (
            t.bind(e).toSelf(),
            this._appliedMiddleware.forEach(function (e) {
              t.applyMiddleware(e)
            }),
            t.get(e)
          )
        }),
        (e.prototype._getContainerModuleHelpersFactory = function () {
          var e = this,
            t = function (e, t) {
              e._binding.moduleId = t
            },
            n = function (n) {
              return function (i) {
                var r = e.rebind.bind(e)(i)
                return (t(r, n), r)
              }
            }
          return function (i) {
            return {
              bindFunction:
                ((r = i),
                function (n) {
                  var i = e.bind.bind(e)(n)
                  return (t(i, r), i)
                }),
              isboundFunction: function (t) {
                return e.isBound.bind(e)(t)
              },
              rebindFunction: n(i),
              unbindFunction: function (t) {
                e.unbind.bind(e)(t)
              },
            }
            var r
          }
        }),
        (e.prototype._get = function (e, t, n, i, r, o) {
          var a = null,
            u = {
              avoidConstraints: e,
              contextInterceptor: function (e) {
                return e
              },
              isMultiInject: t,
              key: r,
              serviceIdentifier: i,
              targetType: n,
              value: o,
            }
          if (this._middleware) {
            if (null == (a = this._middleware(u))) throw new Error(s.INVALID_MIDDLEWARE_RETURN)
          } else a = this._planAndResolve()(u)
          return a
        }),
        (e.prototype._planAndResolve = function () {
          var e = this
          return function (t) {
            var n = d.plan(
              e._metadataReader,
              e,
              t.isMultiInject,
              t.targetType,
              t.serviceIdentifier,
              t.key,
              t.value,
              t.avoidConstraints,
            )
            return ((n = t.contextInterceptor(n)), h.resolve(n))
          }
        }),
        e
      )
    })()
  t.Container = v
}
