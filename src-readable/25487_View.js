/**
 * Webpack Module #25487
 * @exports View, ADDED_TO_SCENE, REMOVED_FROM_SCENE
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.View = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t._addedToScene = false),
          t.on(n.ADDED_TO_SCENE, t.onAdded).on(n.REMOVED_FROM_SCENE, t.onRemoved),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        Object.defineProperty(t.prototype, "mediator", {
          set: function (e) {
            this._mediator = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "addedToScene", {
          get: function () {
            return this._addedToScene
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.addChild = function (t) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r]
          var o = e.prototype.addChild.apply(this, i.__spreadArray([t], i.__read(n), false))
          return this.postAddChild(o)
        }),
        (t.prototype.addChildAt = function (t, n) {
          return this.postAddChild(e.prototype.addChildAt.call(this, t, n))
        }),
        (t.prototype.removeChild = function (t) {
          return this.postRemoveChild(e.prototype.removeChild.call(this, t))
        }),
        (t.prototype.removeChildAt = function (t) {
          return this.postRemoveChild(e.prototype.removeChildAt.call(this, t))
        }),
        (t.prototype.onAdded = function () {
          var e, t, r
          if (!this._addedToScene) {
            this._addedToScene = true
            try {
              for (var o = i.__values(this.children), a = o.next(); !a.done; a = o.next()) {
                a.value.emit(n.ADDED_TO_SCENE)
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                a && !a.done && (t = o.return) && t.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            null === (r = this._mediator) || undefined === r || r.setView(this)
          }
        }),
        (t.prototype.onRemoved = function () {
          var e, t, r
          if (this._addedToScene) {
            ;((this._addedToScene = false),
              null === (r = this._mediator) || undefined === r || r.destroy())
            try {
              for (var o = i.__values(this.children), a = o.next(); !a.done; a = o.next()) {
                a.value.emit(n.REMOVED_FROM_SCENE)
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                a && !a.done && (t = o.return) && t.call(o)
              } finally {
                if (e) throw e.error
              }
            }
          }
        }),
        (t.prototype.destroy = function () {
          ;(this.off(n.ADDED_TO_SCENE, this.onAdded).off(n.REMOVED_FROM_SCENE, this.onRemoved),
            e.prototype.destroy.call(this))
        }),
        (t.prototype.postAddChild = function (e) {
          return (this._addedToScene && e && e.emit(n.ADDED_TO_SCENE), e)
        }),
        (t.prototype.postRemoveChild = function (e) {
          return (this._addedToScene && e && e.emit(n.REMOVED_FROM_SCENE), e)
        }),
        Object.defineProperty(t.prototype, "debugId", {
          get: function () {
            return "v_".concat(this.constructor.name)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.ADDED_TO_SCENE = "onAddedToScene"),
        (t.REMOVED_FROM_SCENE = "onRemovedFromScene"),
        (t = n = i.__decorate([(0, r.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(n(6538) /* 6538_SIDES */.Container)
  t.View = o
}
