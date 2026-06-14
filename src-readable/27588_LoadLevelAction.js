/**
 * Webpack Module #27588
 * @exports LoadLevelAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LoadLevelAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(13137) /* 13137__mod */,
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, Promise, function () {
            var t, n, o, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;((t = (null == e ? undefined : e.endsWith(".svg")) ? e : e + ".svg"), (i.label = 1))
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    (o = r.IS_ODR_BUILD ? r.ODR_BUILD_ORIGIN : r.GAME_SCRIPT_ORIGIN),
                    [4, fetch("".concat(o, "assets/maps/").concat(t))]
                  )
                case 2:
                  return ((n = i.sent()), [3, 4])
                case 3:
                  throw ((s = i.sent()), new Error(s))
                case 4:
                  return [4, n.text()]
                case 5:
                  return (
                    (u = i.sent()),
                    [2, (0, a.parseLevelSVG)(new window.DOMParser().parseFromString(u, "text/xml"))]
                  )
              }
            })
          })
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.LoadLevelAction = s
}
