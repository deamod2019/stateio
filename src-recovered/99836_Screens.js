/**
 * Webpack Module #99836
 * @exports Screens
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Screens = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(6400),
    s = n(30396),
    u = n(19562)
  t.Screens = function () {
    var e = i.__read(
        (0, s.useState)(function () {
          return { Current: null, CurrentProps: null }
        }),
        2,
      ),
      t = e[0],
      n = e[1]
    ;(0, u.useEventListener)(
      o.TypesUI.events.SCREEN_CHANGED,
      function (e) {
        n(i.__assign(i.__assign({}, t), { Current: (0, r.lazyGet)(e.id), CurrentProps: e.props }))
      },
      [],
    )
    var l = t.Current
    return l && (0, a.h)(l, t.CurrentProps)
  }
}
