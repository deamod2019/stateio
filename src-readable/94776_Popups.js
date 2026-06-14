/**
 * Webpack Module #94776
 * @exports Popups
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Popups = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(6400) /* 6400__mod */,
    s = n(30396) /* 30396__mod */,
    u = n(19562) /* 19562__mod */
  t.Popups = function () {
    var e = i.__read(
        (0, s.useState)(function () {
          return { Current: null, CurrentProps: null }
        }),
        2,
      ),
      t = e[0],
      n = e[1]
    ;(0, u.useEventListener)(
      o.TypesUI.events.POPUP,
      function (e) {
        n(i.__assign(i.__assign({}, t), { Current: (0, r.lazyGet)(e.id), CurrentProps: e.props }))
      },
      [],
    )
    var l = t.Current
    return l && (0, a.h)(l, t.CurrentProps)
  }
}
