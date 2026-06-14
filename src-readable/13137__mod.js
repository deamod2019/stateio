/**
 * Webpack Module #13137
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.parseLevelSVG = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = function (e) {
      for (
        var t = function (t) {
            if (t) {
              if (t.id.startsWith("Centre")) return true
              if (t.id.startsWith("Ð¡entre"))
                return (e.id.startsWith("Ð¡entre") || console.warn(e.id, "starts with Ð¡entre"), true)
            }
            return false
          },
          n = e.getElementsByTagName("g"),
          i = 0;
        i < n.length;
        i++
      )
        if (t(n[i])) {
          var r = o(n[i])
          if (r) return r
        }
      var a = e.getElementsByTagName("circle")
      for (i = 0; i < a.length; i++) if (t(a[i].parentNode)) return a[i]
      var s = e.getElementsByTagName("ellipse")
      for (i = 0; i < s.length; i++) if (t(s[i].parentNode)) return s[i]
    }
  t.parseLevelSVG = function (e) {
    var t = e.children[0].children[0]
    r.log.debug("parse", t.id)
    for (
      var n = { id: t.id, states: [], stages: [] },
        a = function (e) {
          var t = o(e),
            n = (function (e) {
              var t = e.getAttribute("cx"),
                n = e.getAttribute("cy")
              return { x: parseInt(t, 10), y: parseInt(n, 10) }
            })(t),
            r = (function (e) {
              return parseInt(e.getAttribute("r"), 10)
            })(t),
            a = (function (e) {
              for (var t = e.getElementsByTagName("path"), n = 0; n < t.length; n++) {
                var i = t[n].getAttribute("fill")
                if (i) return i
              }
              return null
            })(e),
            s = (function (e) {
              for (var t = e.getElementsByTagName("path"), n = [], i = 0; i < t.length; i++) {
                var r = t[i].getAttribute("d")
                r && n.push(r)
              }
              return n
            })(e)
          return i.__assign(i.__assign({}, n), { radius: r, id: e.id, fillColor: a, shapes: s })
        },
        s = 0;
      s < t.childElementCount;
      s++
    ) {
      var u = t.children[s]
      if (u.id.toLocaleLowerCase().startsWith("stage")) {
        var l = { id: u.id, states: [] }
        n.stages.push(l)
        for (var c = 0; c < u.childElementCount; c++) l.states.push(a(u.children[c]))
      } else 2 === u.children.length && n.states.push(a(u))
    }
    return (
      n.stages.length || (n.stages = [{ id: n.id, states: n.states }]),
      (n.stages = n.stages.sort(function (e, t) {
        return e.id < t.id ? -1 : 1
      })),
      n
    )
  }
}
