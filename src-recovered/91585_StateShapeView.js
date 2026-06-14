/**
 * Webpack Module #91585
 * @exports StateShapeView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StateShapeView = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(84194),
    a = n(77577),
    s = n(25317),
    u = n(6538),
    l = n(95781),
    c = n(86700),
    d = n(60079),
    h = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t._container = new u.Container()),
          (t._color = 0),
          (t._baseColorMin = 65280),
          (t._baseColorMax = 16711680),
          (t._fill = 1),
          (t._initialPromise = Promise.resolve()),
          (t._active = !0),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "initialPromise", {
          get: function () {
            return this._initialPromise
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.init = function (e, t) {
          return (
            void 0 === t && (t = o.Random.UUID()),
            i.__awaiter(this, void 0, void 0, function () {
              var n = this
              return i.__generator(this, function (o) {
                return (
                  this.addChild(this._container),
                  (this._initialPromise = i.__awaiter(n, void 0, void 0, function () {
                    var n
                    return i.__generator(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = this),
                            [
                              4,
                              r.di
                                .get(l.TypesGame.actions.createMapPart)
                                .run({ id: "field-".concat(t), shapes: e.shapes || [] }),
                            ]
                          )
                        case 1:
                          return (
                            (n._shapesSprite = i.sent()),
                            (this._shapesSprite.tint = this._color),
                            this._container.addChild(this._shapesSprite),
                            [2]
                          )
                      }
                    })
                  })),
                  [2]
                )
              })
            })
          )
        }),
        (t.prototype.updateSkin = function (e) {
          var t = i.__read(this.skinManager.getColorBy(e), 1)[0]
          ;((this._baseColorMax = a.color.fromHex(t)),
            (this._baseColorMin = a.color.lerp(16777215, this._baseColorMax, 0.4)),
            this.updateFill())
        }),
        (t.prototype.updateWithPopulation = function (e, t) {
          ;(void 0 === t && (t = !1),
            s.gsap.isTweening(this) && s.gsap.killTweensOf(this, "fill"),
            t
              ? s.gsap.to(this, { fill: Math.min(1, e.current / e.cap) })
              : ((this._fill = Math.min(1, e.current / e.cap)), this.updateFill()))
        }),
        Object.defineProperty(t.prototype, "fill", {
          get: function () {
            return this._fill
          },
          set: function (e) {
            ;((this._fill = e), this.updateFill())
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.updateFill = function () {
          this.color = a.color.lerp(this._baseColorMin, this._baseColorMax, this._fill)
        }),
        Object.defineProperty(t.prototype, "color", {
          set: function (e) {
            ;((this._color = e), this._shapesSprite && (this._shapesSprite.tint = this._color))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "baseColorMax", {
          get: function () {
            return this._baseColorMax
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setActive = function (e, t) {
          ;((this._active = e),
            s.gsap.killTweensOf(this, "alpha"),
            s.gsap.to(this, { alpha: this._active ? 1 : 0.25, duration: t }))
        }),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.skinManager),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== d.SkinManager && d.SkinManager) ? n : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          void 0,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(u.Container)
  t.StateShapeView = h
}
