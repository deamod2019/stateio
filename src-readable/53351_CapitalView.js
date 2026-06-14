/**
 * Webpack Module #53351
 * @exports CapitalView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CapitalView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(36596) /* 36596_PlayerType */,
    s = n(25317) /* 25317_SteppedEase */,
    u = n(86700) /* 86700_MetadataReader */,
    l = n(77577) /* 77577__mod */,
    c = n(6538) /* 6538_SIDES */,
    d = n(95781) /* 95781_TypesGame */,
    h = n(158) /* 158_SpritesPool */,
    p = n(56792) /* 56792_CookieModel */,
    f = n(60079) /* 60079_SkinManager */,
    _ = function (e) {
      return (
        undefined === e && (e = 20),
        new c.Graphics().beginFill(16777215).drawCircle(0, 0, e).endFill()
      )
    },
    g = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._radius = 20), (t._active = true), t)
      }
      var n, r, g
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          var t
          ;((this._radius = e.stateRadius),
            (t = this.position).set.apply(t, i.__spreadArray([], i.__read(e.statePos), false)))
        }),
        (t.prototype.initBaseGraphics = function () {
          var e,
            t,
            n = "base".concat(this._radius),
            i =
              null === (e = this.cookies.selectedBuilding) || undefined === e ? undefined : e.textureUrl,
            r = 2 * this._radius
          if (i) {
            if ((t = new c.Sprite(c.utils.TextureCache[i]))) {
              var o = r / Math.max(t.getBounds().height, t.getBounds().width)
              ;(t.scale.set(o), t.anchor.set(0.5), (n = i))
            }
          } else t = _(this._radius)
          return { id: n, obj: t }
        }),
        (t.prototype.occupiedAnimation = function (e) {
          ;(undefined === e && (e = 0.5),
            s.gsap.killTweensOf(this.base.scale),
            s.gsap.fromTo(this.base.scale, { x: 1.5, y: 1.5 }, { x: 1, y: 1, duration: e }))
        }),
        (t.prototype.shake = function (e, t) {
          if (!s.gsap.isTweening(this.base)) {
            var n = this.base.width * t,
              i = this.base.height * t,
              r = o.Random.rangeFloat(-n, n),
              a = o.Random.rangeFloat(-i, i)
            s.gsap.fromTo(
              this.base.position,
              { x: r, y: a },
              { x: 0, y: 0, ease: "elastic.out", duration: e },
            )
          }
        }),
        (t.prototype.showSelection = function (e, t) {
          var n = this
          ;(undefined === t && (t = 0.5),
            s.gsap.killTweensOf(this),
            this.selection ||
              ((this.selection = this.spritesPool.fromDisplayObject(
                "base_selection".concat(this._radius),
                function () {
                  return _(2 * n._radius)
                },
              )),
              this.selection.anchor.set(0.5),
              (this.selection.alpha = 0),
              this.addChildAt(this.selection, 0)),
            e
              ? ((this.selection.tint = e), s.gsap.to(this.selection, { alpha: t }))
              : s.gsap.to(this.selection, { alpha: 0 }))
        }),
        (t.prototype.updateSkin = function (e, t) {
          var n = this
          ;(undefined === e && (e = a.PlayerType.Default), undefined === t && (t = true))
          var r = i.__read(this.skinManager.getColorBy(e), 2)[1],
            o = this.skinManager.getBuildingTextureBy(t ? e : a.PlayerType.Neutral)
          ;(this.base && this.removeChild(this.base),
            (this.base = this.spritesPool.fromDisplayObject(o, function () {
              var e = new c.Sprite(c.utils.TextureCache[o]),
                t = e.getBounds(),
                i = (2 * n._radius) / Math.max(t.height, t.width)
              return (e.anchor.set(0.5), e.scale.set(i), e)
            })),
            this.base.anchor.set(0.5),
            this.addChild(this.base),
            (this.base.tint = e === a.PlayerType.Neutral ? 16777215 : l.color.fromHex(r)))
        }),
        (t.prototype.setActive = function (e, t) {
          ;((this._active = e),
            s.gsap.killTweensOf(this, "alpha"),
            s.gsap.to(this, { alpha: this._active ? 1 : 0.25, duration: t }))
        }),
        i.__decorate(
          [
            (0, u.inject)(d.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== h.SpritesPool && h.SpritesPool) ? n : Object,
            ),
          ],
          t.prototype,
          "spritesPool",
          undefined,
        ),
        i.__decorate(
          [
            (0, u.inject)(d.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== p.CookieModel && p.CookieModel) ? r : Object,
            ),
          ],
          t.prototype,
          "cookies",
          undefined,
        ),
        i.__decorate(
          [
            (0, u.inject)(d.TypesGame.skinManager),
            i.__metadata(
              "design:type",
              "function" == typeof (g = undefined !== f.SkinManager && f.SkinManager) ? g : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          undefined,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(r.View)
  t.CapitalView = g
}
