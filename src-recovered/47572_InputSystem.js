/**
 * Webpack Module #47572
 * @exports InputSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.InputSystem = t.distanceBetweenPoints = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(53351),
    a = n(86178),
    s = n(44656),
    u = n(77577),
    l = n(47283),
    c = n(62260),
    d = n(6538)
  t.distanceBetweenPoints = function (e, t) {
    return u.math.dist([e.x, e.y], [t.x, t.y])
  }
  var h = (function (e) {
    function n() {
      var t = e.call(this, c.ActiveBuildingsQuery) || this
      return (
        (t._selected = new Set()),
        (t._isTouchStartedOnBuilding = !1),
        (t._wasBuildingInteracted = !1),
        (t._multiselectTimer = 0),
        t
      )
    }
    return (
      i.__extends(n, e),
      Object.defineProperty(n.prototype, "dispatcher", {
        get: function () {
          return this._dispatcher || (this._dispatcher = s.di.get(a.TypesCore.dispatcher))
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.onCancel = function (e) {
        ;(this.dispatcher.emit(l.GameEvents.AIM_REMOVE), this.deselectLast())
      }),
      (n.prototype.onStart = function (e) {
        var t
        ;((this._buildingHitThisFrame = this.getClosest(new d.Point(e.clientX, e.clientY))),
          (null === (t = this._buildingHitThisFrame) || void 0 === t ? void 0 : t.isFirstPlayer) &&
            ((this._isTouchStartedOnBuilding = !0),
            this._buildingHitThisFrame.selected || this.selectAsSource(this._buildingHitThisFrame)))
      }),
      (n.prototype.onDrag = function (e) {
        var i, r, a
        if (0 != this._selected.size && this._isTouchStartedOnBuilding) {
          var s = new d.Point(e.clientX, e.clientY),
            u = this.getClosest(s)
          u != this._buildingHitLastFrame && (this._wasBuildingInteracted = !1)
          var c = d.Ticker.shared.deltaMS / 1e3
          if (u) {
            var h = u.get(o.CapitalView)
            if (h) {
              var p = h.toGlobal(new d.Point(0, 0))
              if (this._selected.has(u)) {
                if (u.isFirstPlayer && this._selected.size > 1 && !this._wasBuildingInteracted)
                  (0, t.distanceBetweenPoints)(p, s) < n._multiselectDistanceMax &&
                    (this._buildingHitLastFrame == u
                      ? ((this._multiselectTimer += c),
                        this._multiselectTimer >= n._timeForMultiselectAdding &&
                          (this.removeSource(u),
                          (this._multiselectTimer = 0),
                          (this._wasBuildingInteracted = !0)))
                      : (this._multiselectTimer = 0))
                this._lastSelectedTargetBuilding &&
                  (null === (i = this._lastSelectedTargetBuilding) || void 0 === i || i.deselect(),
                  delete this._lastSelectedTargetBuilding)
              } else {
                if (u.isFirstPlayer && !this._wasBuildingInteracted)
                  (0, t.distanceBetweenPoints)(p, s) < n._multiselectDistanceMax &&
                    (this._buildingHitLastFrame == u
                      ? ((this._multiselectTimer += c),
                        this._multiselectTimer >= n._timeForMultiselectAdding &&
                          (this.selectAsSource(u),
                          (this._multiselectTimer = 0),
                          (this._wasBuildingInteracted = !0)))
                      : (this._multiselectTimer = 0))
              }
            }
            u != this._lastSelectedTargetBuilding &&
              (null === (r = this._lastSelectedTargetBuilding) || void 0 === r || r.deselect(),
              (this._lastSelectedTargetBuilding = u),
              this._lastSelectedTargetBuilding.selectAsTarget())
          } else
            (null === (a = this._lastSelectedTargetBuilding) || void 0 === a || a.deselect(),
              delete this._lastSelectedTargetBuilding,
              this.dispatcher.emit(l.GameEvents.AIM_SET, null))
          ;((this._buildingHitLastFrame = this.getClosest(s)),
            this.dispatcher.emit(l.GameEvents.AIM_UPDATE, e))
        }
      }),
      (n.prototype.onEnd = function (e) {
        var t = this
        if (this._lastSelectedTargetBuilding) {
          this._selected.forEach(function (e) {
            e !== t._lastSelectedTargetBuilding &&
              e.isFirstPlayer &&
              e.sendTo(t._lastSelectedTargetBuilding)
          })
          var n = this._lastSelectedTargetBuilding.get(o.CapitalView)
          ;(n && this.dispatcher.emit(l.GameEvents.AIM_SET, n.toGlobal(new d.Point(0, 0))),
            this._lastSelectedTargetBuilding.deselect(),
            delete this._lastSelectedTargetBuilding)
        }
        ;(this.dispatcher.emit(l.GameEvents.AIM_REMOVE), this.deselectLast())
      }),
      (n.prototype.getClosest = function (e) {
        var t,
          n = Number.MAX_VALUE
        return (
          this.entities.forEach(function (i) {
            var r = i.get(o.CapitalView)
            if (r) {
              var a = r.toLocal(e),
                s = Math.sqrt(a.x * a.x + a.y * a.y)
              s < n && ((t = i), (n = s))
            }
          }),
          t
        )
      }),
      (n.prototype.selectAsSource = function (e) {
        ;(this._selected.add(e),
          e.selectAsSource(),
          this.dispatcher.emit(l.GameEvents.AIM_CREATE, e),
          this.vibratePeek())
      }),
      (n.prototype.removeSource = function (e) {
        this._selected.has(e) &&
          (this._selected.delete(e),
          this.dispatcher.emit(l.GameEvents.AIM_HIDE, e),
          this.vibratePeek())
      }),
      (n.prototype.vibratePeek = function () {
        var e = (0, s.lazyGet)(a.TypesSocial.vibrationManager)
        null == e || e.vibrate()
      }),
      (n.prototype.deselectLast = function () {
        ;(this._selected.forEach(function (e) {
          return e.deselect()
        }),
          this._selected.clear())
      }),
      (n.prototype.updateEntity = function () {}),
      (n._multiselectDistanceMax = Number.MAX_VALUE),
      (n._timeForMultiselectAdding = 0.25),
      n
    )
  })(r.IterativeSystem)
  t.InputSystem = h
}
