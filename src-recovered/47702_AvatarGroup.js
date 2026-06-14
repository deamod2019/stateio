/**
 * Webpack Module #47702
 * @exports AvatarGroup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AvatarGroup = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(41595),
    s = n(37909)
  ;((t.AvatarGroup = function (e) {
    var t = e.className,
      n = i.__rest(e, ["className"]),
      a = (0, o.default)("avatar-group", t)
    return (0, r.jsx)("div", i.__assign({ className: a }, n))
  }),
    (t.AvatarGroup.Item = function (e) {
      var t = e.className,
        n = i.__rest(e, ["className"]),
        a = (0, o.default)("avatar-group-item", t)
      return (0, r.jsx)("div", i.__assign({ className: a }, n))
    }),
    (t.AvatarGroup.Separator = function (e) {
      var t = e.className,
        n = i.__rest(e, ["className"]),
        a = (0, o.default)("avatar-group-item", "avatar-group-separator", t)
      return (0, r.jsx)(s.Icon, i.__assign({ className: a }, n))
    }),
    (t.AvatarGroup.Avatar = function (e) {
      return (0, r.jsx)(a.Avatar, i.__assign({}, e))
    }))
}
