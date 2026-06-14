/**
 * Webpack Module #71981
 * @exports FighterDeathEffectAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FighterDeathEffectAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(25317) /* 25317_SteppedEase */,
    o = n(84194) /* 84194__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(6538) /* 6538_SIDES */,
    l = n(26463) /* 26463_FighterView */,
    c = n(95781) /* 95781_TypesGame */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          var t
          return i.__awaiter(this, undefined, undefined, function () {
            var n, s, d
            return i.__generator(this, function (i) {
              for (
                n = function (n) {
                  var i = e[n],
                    d = e[n + 1],
                    h = i.get(l.FighterView),
                    p = d.get(l.FighterView),
                    f = h.position,
                    _ = p.position,
                    g = s.skull
                  ;((g.tint = o.Random.from(i.color, d.color)),
                    (g.width = h.width),
                    g.pivot.set(0.5),
                    g.scale.set(0.15),
                    g.position.set((f.x + _.x) / 2, (f.y + _.y) / 2))
                  var m = new u.Point((f.x + _.x) / 2, (f.y + _.y) / 2),
                    v = m.clone(),
                    y = g.scale.clone()
                  ;((y.x *= 2),
                    (y.y *= 2),
                    (v.y -= 5 * g.height),
                    r.gsap
                      .timeline()
                      .fromTo(g, { x: m.x, y: m.y, alpha: 0 }, { x: v.x, y: v.y, alpha: 0.5 })
                      .add(
                        r.gsap.to(g.scale, {
                          x: y.x,
                          y: y.y,
                          onComplete: function () {
                            var e
                            null === (e = g.parent) || undefined === e || e.removeChild(g)
                          },
                        }),
                        0,
                      )
                      .add(r.gsap.to(g, { alpha: 0 }), 0.3),
                    null === (t = (0, a.lazyGet)(c.TypesGame.views.fieldInstance)) ||
                      undefined === t ||
                      t.addChild(g))
                },
                  s = this,
                  d = 0;
                d < e.length;
                d += 2
              )
                n(d)
              return [2]
            })
          })
        }),
        i.__decorate(
          [
            (0, s.inject)("skull.svg"),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.Sprite && u.Sprite) ? n : Object,
            ),
          ],
          t.prototype,
          "skull",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(a.Action)
  t.FighterDeathEffectAction = d
}
