/**
 * Webpack Module #85765
 * @exports FighterGroupsSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.FighterGroupsSystem = void 0))
  var i = n(77577),
    r = n(72257),
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
              return null == e ? void 0 : e.Check()
            }),
            e._lastIndex
          )
        }),
        (e.AddFighterToGroup = function (t, n) {
          var i
          null === (i = e._groups[t]) || void 0 === i || i.AddFighter(n)
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
