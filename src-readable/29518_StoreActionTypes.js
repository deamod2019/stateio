/**
 * Webpack Module #29518
 * @exports StoreActionTypes
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StoreActionTypes = undefined))
  var i,
    r = n(70655) /* 70655__mod */
  !(function (e) {
    ;((e.AddAlert = "ADD_ALERT"),
      (e.RemoveAlert = "REMOVE_ALERT"),
      (e.RemoveAllAlerts = "REMOVE_ALL_ALERTS"))
  })((i = t.StoreActionTypes || (t.StoreActionTypes = {})))
  var o,
    a,
    s,
    u =
      ((o = function (e, t) {
        switch ((undefined === e && (e = []), t.type)) {
          case i.AddAlert:
            return r.__spreadArray(r.__spreadArray([], r.__read(e), false), [t.payload], false)
          case i.RemoveAlert:
            var n = e.filter(function (e) {
              return e.id !== t.payload
            })
            return r.__spreadArray([], r.__read(n), false)
          case i.RemoveAllAlerts:
            return []
          default:
            return e
        }
      }),
      (a = []),
      (s = []),
      {
        getState: function () {
          return a
        },
        dispatch: function (e) {
          ;((a = o(a, e)),
            s.forEach(function (e) {
              return e()
            }))
        },
        subscribe: function (e) {
          return (
            s.push(e),
            function () {
              s = s.filter(function (t) {
                return t !== e
              })
            }
          )
        },
      })
  t.default = u
}
