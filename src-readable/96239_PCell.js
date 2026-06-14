/**
 * Webpack Module #96239
 * @exports PCell
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PCell = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(46697) /* 46697_Fighter */,
    a = n(77577) /* 77577__mod */,
    s = (function () {
      function e() {
        ;((this._owners = []), (this._fighters = new Set()))
      }
      return (
        (e.prototype.add = function (e) {
          ;(-1 == this._owners.indexOf(e.owner) && this._owners.push(e.owner),
            this._fighters.add(e))
        }),
        (e.prototype.getCollisions = function () {
          var e, t, n, r
          if (this._owners.length < 2) return []
          var s = []
          try {
            e: for (var u = i.__values(this._fighters), l = u.next(); !l.done; l = u.next()) {
              var c = l.value
              try {
                for (
                  var d = ((n = undefined), i.__values(this._fighters)), h = d.next();
                  !h.done;
                  h = d.next()
                ) {
                  var p = h.value
                  if (
                    c.owner !== p.owner &&
                    a.math.dist(c.position, p.position) < 2 * o.Fighter.DEFAULT_SIZE
                  ) {
                    ;(this._fighters.delete(c), s.push([c, p]))
                    continue e
                  }
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  h && !h.done && (r = d.return) && r.call(d)
                } finally {
                  if (n) throw n.error
                }
              }
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              l && !l.done && (t = u.return) && t.call(u)
            } finally {
              if (e) throw e.error
            }
          }
          return (this._owners.splice(0, this._owners.length), this._fighters.clear(), s)
        }),
        (e.SIZE = 100),
        (e = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.PCell = s
}
