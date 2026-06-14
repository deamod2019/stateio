/**
 * Webpack Module #77577
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.getOwnerGenerator = void 0))
  var i = n(70655),
    r = n(36596)
  ;(i.__exportStar(n(68532), t),
    i.__exportStar(n(98707), t),
    (t.getOwnerGenerator = function (e) {
      return (
        void 0 === e &&
          (e = [
            r.PlayerType.Second,
            r.PlayerType.Third,
            r.PlayerType.Fourth,
            r.PlayerType.Fifth,
            r.PlayerType.Sixth,
            r.PlayerType.Seventh,
            r.PlayerType.Eighth,
          ]),
        function (t) {
          var n = o(t, e)
          return (
            n > r.PlayerType.First && n !== r.PlayerType.Neutral && e.splice(e.indexOf(n), 1),
            n
          )
        }
      )
    }))
  var o = function (e, t) {
    switch (null == e ? void 0 : e.toUpperCase()) {
      case "#DE7676":
        return t[0]
      case "#74BCFF":
        return r.PlayerType.First
    }
    return r.PlayerType.Neutral
  }
}
