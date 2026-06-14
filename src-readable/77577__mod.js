/**
 * Webpack Module #77577
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.getOwnerGenerator = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(36596) /* 36596_PlayerType */
  ;(i.__exportStar(n(68532) /* 68532__mod */, t),
    i.__exportStar(n(98707) /* 98707__mod */, t),
    (t.getOwnerGenerator = function (e) {
      return (
        undefined === e &&
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
    switch (null == e ? undefined : e.toUpperCase()) {
      case "#DE7676":
        return t[0]
      case "#74BCFF":
        return r.PlayerType.First
    }
    return r.PlayerType.Neutral
  }
}
