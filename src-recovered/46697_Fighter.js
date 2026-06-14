/**
 * Webpack Module #46697
 * @exports Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Fighter = void 0))
  var i = n(70655),
    r = n(26511),
    o = n(77577),
    a = n(36596),
    s = n(66154),
    u = n(86700),
    l = n(75111),
    c = n(56792),
    d = n(95781),
    h = (function (e) {
      function t(t, r, a, u, l, c, d, h) {
        void 0 === h && (h = 1)
        var p = e.call(this) || this
        ;((p.owner = t),
          (p.source = r),
          (p.target = a),
          (p.step = u),
          (p.path = l),
          (p.amount = c),
          (p.speed = d),
          (p.scaleFactor = h),
          (p.color = 16711680),
          (p.position = [0, 0]),
          (p._rotation = 0))
        var f = i.__read(s.GameColors.players[t], 2)[1]
        return ((p.color = o.color.fromHex(f)), p.add(n.TAG), p)
      }
      var n, l, h, p, f, _, g, m, v
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.getPositionOnGrid = function (e) {
          void 0 === e && (e = 100)
          var t = i.__read(this.position, 2),
            n = t[0],
            r = t[1]
          return [Math.round(n / e), Math.round(r / e)]
        }),
        (t.prototype.move = function (e) {
          void 0 === e && (e = 0)
          var t = this.path[0]
          if (!t) return !0
          var r = i.__read(t, 2),
            a = r[0],
            s = r[1],
            u = i.__read(this.position, 2),
            l = u[0],
            c = u[1],
            d = Math.atan2(s - c, a - l),
            h = n.DEFAULT_SIZE
          if (
            ((l += (Math.cos(d) * this.speed * e) / h),
            (c += (Math.sin(d) * this.speed * e) / h),
            (this.position[0] = l),
            (this.position[1] = c),
            (this._rotation = d + Math.PI / 2),
            this.path.length > 0)
          ) {
            o.math.dist(this.position, t) <= 30 * n.DISTANCE_TOLERANCE && this.path.shift()
          }
          return 0 == this.path.length
        }),
        Object.defineProperty(t.prototype, "rotation", {
          get: function () {
            return this._rotation
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.TAG = "fighter"),
        (t.TAG_DIED = "fighter_died"),
        (t.DEFAULT_SIZE = 7),
        (t.NORMAL_SPEED = 6),
        (t.DISTANCE_TOLERANCE = 0.5),
        i.__decorate(
          [
            (0, u.inject)(d.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (v = void 0 !== c.CookieModel && c.CookieModel) ? v : Object,
            ),
          ],
          t.prototype,
          "cookies",
          void 0,
        ),
        (t = n =
          i.__decorate(
            [
              (0, u.injectable)(),
              i.__metadata("design:paramtypes", [
                "function" == typeof (l = void 0 !== a.PlayerType && a.PlayerType) ? l : Object,
                "function" == typeof (h = void 0 !== r.Building && r.Building) ? h : Object,
                "function" == typeof (p = void 0 !== r.Building && r.Building) ? p : Object,
                "function" == typeof (f = "undefined" != typeof float && float) ? f : Object,
                Array,
                "function" == typeof (_ = "undefined" != typeof int && int) ? _ : Object,
                "function" == typeof (g = "undefined" != typeof float && float) ? g : Object,
                "function" == typeof (m = "undefined" != typeof float && float) ? m : Object,
              ]),
            ],
            t,
          ))
      )
    })(l.Entity)
  t.Fighter = h
}
