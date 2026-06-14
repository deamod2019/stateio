/**
 * Webpack Module #9931
 * @exports Participants
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Participants = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(8803) /* 8803__mod */
  var o = n(83430) /* 83430_InversifyContext */,
    a = i.__importDefault(n(94184) /* 94184__mod */)
  t.Participants = function (e) {
    var t = e.users
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, a.default)("participants-bar") },
        {
          children: t.map(function (e) {
            return (0, r.jsx)(
              "span",
              i.__assign(
                { className: (0, a.default)("avatar", "participant") },
                {
                  children: (0, r.jsx)(
                    "span",
                    i.__assign(
                      { className: "avatar-inner", style: { borderColor: e.color } },
                      {
                        children: e.data.photo
                          ? (0, r.jsx)("img", { src: e.data.photo, alt: e.data.name })
                          : (0, r.jsx)(o.Icon, {
                              type: "placeholder-avatar",
                              className: "avatar-bg",
                            }),
                      },
                    ),
                  ),
                },
              ),
            )
          }),
        },
      ),
    )
  }
}
