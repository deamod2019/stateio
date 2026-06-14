/**
 * Webpack Module #62260
 * @exports ActiveBuildingsQuery
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ActiveBuildingsQuery = undefined))
  var i = n(75111) /* 75111__mod */,
    r = n(36596) /* 36596_PlayerType */,
    o = n(52057) /* 52057_Spawner */
  t.ActiveBuildingsQuery = new i.Query(function (e) {
    return e.has(o.Spawner) && e.owner !== r.PlayerType.Default
  })
}
