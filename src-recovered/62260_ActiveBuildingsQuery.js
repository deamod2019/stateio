/**
 * Webpack Module #62260
 * @exports ActiveBuildingsQuery
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ActiveBuildingsQuery = void 0))
  var i = n(75111),
    r = n(36596),
    o = n(52057)
  t.ActiveBuildingsQuery = new i.Query(function (e) {
    return e.has(o.Spawner) && e.owner !== r.PlayerType.Default
  })
}
