/**
 * Webpack Module #22094
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i = n(59480) /* 59480__mod */,
    r = { matrix: true, scale: true, rotate: true, translate: true, skewX: true, skewY: true },
    o = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
    a = /[\s,]+/
  e.exports = function (e) {
    var t,
      n,
      s = new i()
    return (
      e.split(o).forEach(function (e) {
        if (e.length)
          if (undefined === r[e])
            switch (
              ((n = e.split(a).map(function (e) {
                return +e || 0
              })),
              t)
            ) {
              case "matrix":
                return void (6 === n.length && s.matrix(n))
              case "scale":
                return void (1 === n.length
                  ? s.scale(n[0], n[0])
                  : 2 === n.length && s.scale(n[0], n[1]))
              case "rotate":
                return void (1 === n.length
                  ? s.rotate(n[0], 0, 0)
                  : 3 === n.length && s.rotate(n[0], n[1], n[2]))
              case "translate":
                return void (1 === n.length
                  ? s.translate(n[0], 0)
                  : 2 === n.length && s.translate(n[0], n[1]))
              case "skewX":
                return void (1 === n.length && s.skewX(n[0]))
              case "skewY":
                return void (1 === n.length && s.skewY(n[0]))
            }
          else t = e
      }),
      s
    )
  }
}
