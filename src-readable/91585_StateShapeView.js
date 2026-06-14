/**
 * Webpack Module #91585
 * @exports StateShapeView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StateShapeView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(77577) /* 77577__mod */,
    s = n(25317) /* 25317_SteppedEase */,
    u = n(6538) /* 6538_SIDES */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(86700) /* 86700_MetadataReader */,
    d = n(60079) /* 60079_SkinManager */,
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
          (t._active = true),
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
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.init = function (e, t) {
          return (
            undefined === t && (t = o.Random.UUID()),
            i.__awaiter(this, undefined, undefined, function () {
              var n = this
              return i.__generator(this, function (o) {
                return (
                  this.addChild(this._container),
                  (this._initialPromise = i.__awaiter(n, undefined, undefined, function () {
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
          ;(undefined === t && (t = false),
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
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.updateFill = function () {
          this.color = a.color.lerp(this._baseColorMin, this._baseColorMax, this._fill)
        }),
        Object.defineProperty(t.prototype, "color", {
          set: function (e) {
            ;((this._color = e), this._shapesSprite && (this._shapesSprite.tint = this._color))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "baseColorMax", {
          get: function () {
            return this._baseColorMax
          },
          enumerable: false,
          configurable: true,
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
              "function" == typeof (n = undefined !== d.SkinManager && d.SkinManager) ? n : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          undefined,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(u.Container)
  t.StateShapeView = h
}
