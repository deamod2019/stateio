/**
 * Webpack Module #20911
 * @exports LevelTitle
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelTitle = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86125),
    s = n(95781)
  n(70461)
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
            (null == e ? void 0 : e.absoluteLevelNum) || "-",
          ],
        },
      ),
    )
  }
}
