/**
 * Webpack Module #70796
 * @exports Localize
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Localize = undefined))
  var i = n(70655) /* 70655__mod */,
    r = (function () {
      function e() {}
      return (
        (e.addTemplates = function (t) {
          Object.keys(t).forEach(function (n) {
            return e.templates.set(n, t[n])
          })
        }),
        (e.get = function (t, n, r) {
          undefined === r && (r = e.defaultLocale)
          var o = this.templates.get(t)
          if (null == o ? undefined : o.localizations) {
            var a = (function (e, t) {
              var n = i.__read(e.split("_"), 2),
                r = n[0],
                o = n[1]
              if (t && "en" !== r) {
                var a = Object.keys(t),
                  s = a.filter(function (e) {
                    return r === e.split("_")[0]
                  })
                if (1 == s.length) return s[0]
                if (s.length > 1) {
                  var u = a.filter(function (e) {
                    return o === e.split("_")[1]
                  })
                  if (1 == u.length) return u[0]
                  console.warn('Unable to determine locale for "'.concat(e, '"'))
                }
              }
            })(r, o.localizations)
            if (a) {
              var s = o.localizations[a]
              if (s) return s
            }
          }
          return (null == o ? undefined : o.default) || n || t
        }),
        Object.defineProperty(e, "defaultLocale", {
          get: function () {
            return (
              e._defaultLocale ||
                (e._defaultLocale = (function (e) {
                  if (e) {
                    var t = i.__read(e.split("-"), 2),
                      n = t[0],
                      r = t[1]
                    return r
                      ? "".concat(n, "_").concat(r.toLocaleUpperCase())
                      : "".concat(n, "_").concat(n.toUpperCase())
                  }
                  return "en_US"
                })(null === window || undefined === window ? undefined : window.navigator.language)),
              e._defaultLocale
            )
          },
          set: function (t) {
            e._defaultLocale = t
          },
          enumerable: false,
          configurable: true,
        }),
        (e.templates = new Map()),
        e
      )
    })()
  t.Localize = r
}
