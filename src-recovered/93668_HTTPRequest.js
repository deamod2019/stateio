/**
 * Webpack Module #93668
 * @exports HTTPRequest
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.HTTPRequest = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(86700),
    a = (function () {
      function e() {}
      return (
        (e.prototype.json = function (e, t, n, o) {
          return (
            void 0 === n && (n = "GET"),
            void 0 === o && (o = {}),
            i.__awaiter(this, void 0, void 0, function () {
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
