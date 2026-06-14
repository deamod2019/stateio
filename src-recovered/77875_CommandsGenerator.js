/**
 * Webpack Module #77875
 * @exports CommandsGenerator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandsGenerator = void 0))
  var i = n(70655),
    r = n(25583),
    o = n(36596),
    a = function (e, t) {
      return e.filter(function (e) {
        return e.Owner == t
      })
    },
    s = function (e, t) {
      return e.filter(function (e) {
        return e.Owner !== t
      })
    }
  function u(e, t) {
    var n, r, o, a
    return i.__generator(this, function (i) {
      switch (i.label) {
        case 0:
          ;((n = new Array(e)), (r = new Array()).push(0), (i.label = 1))
        case 1:
          if (!(r.length > 0)) return [3, 6]
          ;((o = r.length - 1), (a = r.pop()), (i.label = 2))
        case 2:
          return a < t ? ((n[o++] = a++), r.unshift(a), o != e ? [3, 4] : [4, n]) : [3, 5]
        case 3:
          ;(i.sent(), (i.label = 4))
        case 4:
          return [3, 2]
        case 5:
          return [3, 1]
        case 6:
          return [2]
      }
    })
  }
  var l = (function () {
    function e() {}
    return (
      (e.GeneratePossibleCommands = function (e, t, n) {
        var o = []
        return (
          o.push.apply(o, i.__spreadArray([], i.__read(this.GenerateAttackCommands(e, t, n)), !1)),
          o.push.apply(o, i.__spreadArray([], i.__read(this.GenerateDefenceCommands(e, t, n)), !1)),
          o.push.apply(o, i.__spreadArray([], i.__read(this.GenerateWaitCommands(e, t)), !1)),
          o.length < 1 ? [{ Type: r.DecisionType.Wait }] : o
        )
      }),
      (e.GenerateAttackCommands = function (e, t, n) {
        var l,
          c,
          d,
          h,
          p,
          f,
          _ = [],
          g = a(e.buildings, o.PlayerType.First).length
        if (-1 != n.alivePlayerBuildingsLimit && n.alivePlayerBuildingsLimit > g) return _
        for (
          var m = a(e.buildings, t), v = Math.min(m.length, n.maxBuildingsMove), y = 1;
          y <= v;
          y++
        ) {
          var C = u(y, m.length),
            b =
              n.alivePlayerBuildingsLimit == g
                ? a(e.buildings, o.PlayerType.Neutral)
                : s(e.buildings, t)
          try {
            for (var w = ((l = void 0), i.__values(b)), x = w.next(); !x.done; x = w.next()) {
              var T = x.value
              try {
                for (var S = ((d = void 0), i.__values(C)), L = S.next(); !L.done; L = S.next()) {
                  var E = L.value,
                    A = []
                  try {
                    for (
                      var I = ((p = void 0), i.__values(E)), M = I.next();
                      !M.done;
                      M = I.next()
                    ) {
                      var P = M.value
                      A.push(m[P])
                    }
                  } catch (e) {
                    p = { error: e }
                  } finally {
                    try {
                      M && !M.done && (f = I.return) && f.call(I)
                    } finally {
                      if (p) throw p.error
                    }
                  }
                  _.push({ Type: r.DecisionType.Move, Objects: A, Subject: T })
                }
              } catch (e) {
                d = { error: e }
              } finally {
                try {
                  L && !L.done && (h = S.return) && h.call(S)
                } finally {
                  if (d) throw d.error
                }
              }
            }
          } catch (e) {
            l = { error: e }
          } finally {
            try {
              x && !x.done && (c = w.return) && c.call(w)
            } finally {
              if (l) throw l.error
            }
          }
        }
        return _
      }),
      (e.GenerateDefenceCommands = function (e, t, n) {
        for (
          var o,
            s,
            l,
            c,
            d,
            h,
            p = [],
            f = a(e.buildings, t),
            _ = Math.min(f.length, n.maxBuildingsMove),
            g = 1;
          g <= _;
          g++
        ) {
          var m = u(_, f.length)
          try {
            for (var v = ((o = void 0), i.__values(f)), y = v.next(); !y.done; y = v.next()) {
              var C = y.value
              try {
                for (var b = ((l = void 0), i.__values(m)), w = b.next(); !w.done; w = b.next()) {
                  var x = w.value,
                    T = !1,
                    S = []
                  try {
                    for (
                      var L = ((d = void 0), i.__values(x)), E = L.next();
                      !E.done;
                      E = L.next()
                    ) {
                      var A = f[E.value]
                      if (A == C) {
                        T = !0
                        break
                      }
                      S.push(A)
                    }
                  } catch (e) {
                    d = { error: e }
                  } finally {
                    try {
                      E && !E.done && (h = L.return) && h.call(L)
                    } finally {
                      if (d) throw d.error
                    }
                  }
                  T || p.push({ Type: r.DecisionType.Move, Objects: S, Subject: C })
                }
              } catch (e) {
                l = { error: e }
              } finally {
                try {
                  w && !w.done && (c = b.return) && c.call(b)
                } finally {
                  if (l) throw l.error
                }
              }
            }
          } catch (e) {
            o = { error: e }
          } finally {
            try {
              y && !y.done && (s = v.return) && s.call(v)
            } finally {
              if (o) throw o.error
            }
          }
        }
        return p
      }),
      (e.GenerateWaitCommands = function (e, t) {
        return [{ Type: r.DecisionType.Wait, Objects: [], Subject: {} }]
      }),
      e
    )
  })()
  t.CommandsGenerator = l
}
