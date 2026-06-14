/**
 * Webpack Module #93668
 * @exports HTTPRequest
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.HTTPRequest = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function () {
      function e() {}
      return (
        (e.prototype.json = function (e, t, n, o) {
          return (
            undefined === n && (n = "GET"),
            undefined === o && (o = {}),
            i.__awaiter(this, undefined, undefined, function () {
              var a, s, u
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      (s = { method: n }),
                      t &&
                        ((o.Accept = "application/json"),
                        (o["Content-Type"] = "application/json"),
                        (s.body = JSON.stringify(t))),
                      (s.headers = o),
                      [4, fetch(e, s)]
                    )
                  case 1:
                    return ((a = i.sent()), [3, 3])
                  case 2:
                    return ((u = i.sent()), r.log.warn(u), [3, 3])
                  case 3:
                    if (a)
                      try {
                        return [2, a.json()]
                      } catch (e) {
                        r.log.warn(e)
                      }
                    return [2]
                }
              })
            })
          )
        }),
        (e = i.__decorate([(0, o.injectable)()], e))
      )
    })()
  t.HTTPRequest = a
}
