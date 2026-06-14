/**
 * Webpack Module #20911
 * @exports LevelTitle
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelTitle = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(95781) /* 95781_TypesGame */
  n(70461) /* 70461__mod */
  t.LevelTitle = function () {
    var e = (0, o.lazyGet)(s.TypesGame.model)
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "level-number" },
        {
          children: [
            a.Localize.get("ui-menu-level_num", "LEVEL"),
            " ",
            (null == e ? undefined : e.absoluteLevelNum) || "-",
          ],
        },
      ),
    )
  }
}
