/**
 * Webpack Module #68313
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i
  ;(n.r(t), n.d(t, { log: () => l }))
  var r = 2,
    o =
      (((i = {})[1] = ["fatal", ["#7c002a"], console.error]),
      (i[2] = ["info", ["#4454FF", "#7e86de"], console.info]),
      (i[3] = ["error", ["#f31"], console.error]),
      (i[4] = ["warn", ["#ffcd84"], console.warn]),
      (i[5] = ["debug", ["#168d21", "#168d21"], console.log]),
      (i[6] = ["trace", ["#aaa"], console.log]),
      i),
    a = function (e) {
      switch (typeof e) {
        case "string":
          return "%s"
        case "boolean":
          return "%o"
        case "number":
          return (0 ^ e) === e ? "%i" : "%f"
        default:
          return "%O"
      }
    },
    s = function (e, t) {
      return (
        void 0 === t && (t = ""),
        function (n) {
          if (r >= e && o[e]) {
            var i = o[e],
              s = i[0],
              u = i[1]
            i[2].apply(
              null,
              [
                t + " %c #%s %c " + n.map(a).join(" "),
                "background-color:" + (u[0] || "") + ";color:white;",
                s,
                u[1] ? "color:" + u[1] + ";" : "",
              ].concat(n),
            )
          }
        }
      )
    },
    u = function (e) {
      return {
        trace: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(6, e)(t)
        },
        debug: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(5, e)(t)
        },
        warn: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(4, e)(t)
        },
        error: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(3, e)(t)
        },
        info: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(2, e)(t)
        },
        fatal: function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          return s(1, e)(t)
        },
      }
    },
    l = Object.assign(u(), {
      scope: u,
      setLevel: function (e) {
        return (r = e)
      },
    })
}
