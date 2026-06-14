/**
 * Webpack Module #85162
 * @exports CheatsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CheatsAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, o, a, s
            return i.__generator(this, function (u) {
              return (
                (t = document.getElementById(r.CANVAS_ID)),
                (n = i.__read(e, 3)),
                (o = n[0]),
                (a = n[1]),
                (s = n[2]),
                a || (a = o),
                s || (s = a || o),
                t &&
                  (document.addEventListener("touchstart", function (e) {
                    var t
                    switch (
                      null === (t = null == e ? undefined : e.touches) || undefined === t
                        ? undefined
                        : t.length
                    ) {
                      case 2:
                        o()
                        break
                      case 3:
                        a()
                        break
                      case 4:
                        s()
                    }
                  }),
                  t.addEventListener("pointerdown", function (e) {
                    return e.shiftKey && e.altKey ? s() : e.altKey ? a() : e.shiftKey ? o() : undefined
                  })),
                [2]
              )
            })
          })
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.CheatsAction = a
}
