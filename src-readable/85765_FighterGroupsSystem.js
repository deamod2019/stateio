/**
 * Webpack Module #85765
 * @exports FighterGroupsSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FighterGroupsSystem = undefined))
  var i = n(77577) /* 77577__mod */,
    r = n(72257) /* 72257_FighterGroup */,
    o = (function () {
      function e() {}
      return (
        (e.GetActiveGroups = function () {
          return e._groups.filter(function (e) {
            return null !== e
          })
        }),
        (e.CreateNewGroup = function (t, n, o, a, s) {
          return (
            (e._lastIndex = i.math.repeat(e._lastIndex + 1, 100)),
            (e._groups[e._lastIndex] = new r.FighterGroup(e._lastIndex, t, n, o, a, s)),
            e.GetActiveGroups().forEach(function (e) {
              return null == e ? undefined : e.Check()
            }),
            e._lastIndex
          )
        }),
        (e.AddFighterToGroup = function (t, n) {
          var i
          null === (i = e._groups[t]) || undefined === i || i.AddFighter(n)
        }),
        (e.RemoveGroup = function (t) {
          e._groups[t] = null
        }),
        (e.Clear = function () {
          e._groups.fill(null)
        }),
        (e._groups = new Array(100).fill(null)),
        (e._lastIndex = -1),
        e
      )
    })()
  t.FighterGroupsSystem = o
}
