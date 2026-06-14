/**
 * Webpack Module #47702
 * @exports AvatarGroup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AvatarGroup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(41595) /* 41595_Avatar */,
    s = n(37909) /* 37909_Icon */
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
