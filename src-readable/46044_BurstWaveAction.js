/**
 * Webpack Module #46044
 * @exports BurstWaveAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BurstWaveAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = i.__importStar(n(90505) /* 90505__mod */),
    o = n(44656) /* 44656__mod */,
    a = n(46697) /* 46697_Fighter */,
    s = n(94572) /* 94572_GameModel */,
    u = n(95781) /* 95781_TypesGame */,
    l = n(86700) /* 86700_MetadataReader */,
    c = n(85126) /* 85126_PathHolder */,
    d = n(85765) /* 85765_FighterGroupsSystem */,
    h = n(77577) /* 77577__mod */,
    p = n(52057) /* 52057_Spawner */,
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, o, s, u, l, f, _
            return i.__generator(this, function (g) {
              for (
                t = e.amount,
                  n = e.target,
                  o = e.spawner,
                  s = 1 / (p.Spawner.UNITS_PER_WAVE - 1),
                  u = Math.ceil(t),
                  1,
                  l = function (e) {
                    var u = e % 2 == 0 ? 0.5 - s * Math.ceil(e / 2) : 0.5 + s * Math.ceil(e / 2),
                      l = 1
                    t < 1 ? (l = t) : (t -= 1)
                    var p = o.selfBuilding
                    if (p === n)
                      return (
                        r.captureMessage("BurstWaveAction. from === target – logical mistake"),
                        { value: undefined }
                      )
                    var f = p.get(c.PathHolder),
                      _ = []
                    if (f) {
                      var g = f.get(n)
                      if (!g)
                        return (
                          r.captureMessage(
                            "BurstWaveAction. Path is undefined, something weren't disposed properly",
                          ),
                          { value: undefined }
                        )
                      _ = g.map(function (e) {
                        return h.math.lerp.apply(
                          h.math,
                          i.__spreadArray(i.__spreadArray([], i.__read(e), false), [u], false),
                        )
                      })
                    }
                    var m = 1 * a.Fighter.NORMAL_SPEED,
                      v = d.FighterGroupsSystem.CreateNewGroup(_, m, p.owner, n, p)
                    d.FighterGroupsSystem.AddFighterToGroup(
                      v,
                      new a.Fighter(p.owner, p, n, u, _, l, m, 1),
                    )
                  },
                  f = 0;
                f < u;
                f++
              )
                if ("object" == typeof (_ = l(f))) return [2, _.value]
              return [2]
            })
          })
        }),
        i.__decorate(
          [
            (0, l.inject)(u.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(o.Action)
  t.BurstWaveAction = f
}
