/**
 * Webpack Module #46697
 * @exports Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Fighter = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(26511) /* 26511_Building */,
    o = n(77577) /* 77577__mod */,
    a = n(36596) /* 36596_PlayerType */,
    s = n(66154) /* 66154_SelectableFighterDataSet */,
    u = n(86700) /* 86700_MetadataReader */,
    l = n(75111) /* 75111__mod */,
    c = n(56792) /* 56792_CookieModel */,
    d = n(95781) /* 95781_TypesGame */,
    h = (function (e) {
      function t(t, r, a, u, l, c, d, h) {
        undefined === h && (h = 1)
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
          undefined === e && (e = 100)
          var t = i.__read(this.position, 2),
            n = t[0],
            r = t[1]
          return [Math.round(n / e), Math.round(r / e)]
        }),
        (t.prototype.move = function (e) {
          undefined === e && (e = 0)
          var t = this.path[0]
          if (!t) return true
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
          enumerable: false,
          configurable: true,
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
              "function" == typeof (v = undefined !== c.CookieModel && c.CookieModel) ? v : Object,
            ),
          ],
          t.prototype,
          "cookies",
          undefined,
        ),
        (t = n =
          i.__decorate(
            [
              (0, u.injectable)(),
              i.__metadata("design:paramtypes", [
                "function" == typeof (l = undefined !== a.PlayerType && a.PlayerType) ? l : Object,
                "function" == typeof (h = undefined !== r.Building && r.Building) ? h : Object,
                "function" == typeof (p = undefined !== r.Building && r.Building) ? p : Object,
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
