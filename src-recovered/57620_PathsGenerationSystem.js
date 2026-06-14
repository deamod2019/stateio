/**
 * Webpack Module #57620
 * @exports PathsGenerationSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PathsGenerationSystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(85126),
    a = n(53351),
    s = n(68532),
    u = (function (e) {
      function t() {
        return (
          e.call(this, function (e) {
            return e.has(a.CapitalView)
          }) || this
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.update = function (t) {
          ;(e.prototype.update.call(this, t), this.engine.removeSystem(this))
        }),
        (t.prototype.updateEntity = function (e, t) {
          var n,
            r,
            a = e.get(o.PathHolder)
          if (a) {
            a.clearCache()
            try {
              for (var u = i.__values(this.entities), l = u.next(); !l.done; l = u.next()) {
                var c = l.value
                if (c != e) {
                  var d = c.data.statePos,
                    h = e.data.statePos,
                    p = 0.5 * c.data.stateRadius,
                    f = [],
                    _ = s.math.norm(s.math.sub(d, h))
                  ;(f.push(h),
                    f.push(s.math.sum(h, s.math.scale(_, p))),
                    f.push(s.math.sub(d, s.math.scale(_, p))),
                    f.push(d))
                  var g = []
                  g.push([h, h])
                  for (
                    var m = o.PathHolder.MAX_SPAWN_LEN_ONE_DIRECTION, v = 1;
                    v < f.length - 1;
                    v++
                  ) {
                    var y = s.math.norm(s.math.sub(f[v + 1], f[v])),
                      C = s.math.rotate(y, -Math.PI / 2),
                      b = s.math.rotate(y, Math.PI / 2),
                      w = s.math.sum(f[v], s.math.scale(C, m)),
                      x = s.math.sum(f[v], s.math.scale(b, m))
                    g.push([w, x])
                  }
                  ;(g.push([d, d]), a.addPath(c, g))
                }
              }
            } catch (e) {
              n = { error: e }
            } finally {
              try {
                l && !l.done && (r = u.return) && r.call(u)
              } finally {
                if (n) throw n.error
              }
            }
          }
        }),
        t
      )
    })(r.IterativeSystem)
  t.PathsGenerationSystem = u
}
