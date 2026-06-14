/**
 * Webpack Module #8207
 * @exports ShareComponent
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShareComponent = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(31529) /* 31529__mod */
  var o = n(44656) /* 44656__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(86178) /* 86178__mod */,
    u = i.__importDefault(n(94184) /* 94184__mod */),
    l = n(37909) /* 37909_Icon */
  t.ShareComponent = function (e) {
    var t = e.invisible,
      n = e.screenshot,
      c = e.onShare
    return (0, r.jsxs)(
      "div",
      i.__assign(
        {
          class: (0, u.default)("share-cont", { invisible: t }),
          onClick: function () {
            return i.__awaiter(undefined, undefined, undefined, function () {
              var e, t
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      null === (t = (0, o.lazyGet)(s.TypesFlow.share)) || undefined === t
                        ? undefined
                        : t.run(n),
                    ]
                  case 1:
                    return ((e = i.sent()), c && c(e), [2])
                }
              })
            })
          },
        },
        {
          children: [
            (0, r.jsxs)(
              "div",
              i.__assign(
                { className: "share_ico" },
                {
                  children: [
                    (0, r.jsx)(l.Icon, { type: "share" }),
                    (0, r.jsx)("div", { children: a.Localize.get("share", "Share") }),
                  ],
                },
              ),
            ),
            (0, r.jsx)("img", { className: "screenshot", src: n, alt: "" }),
          ],
        },
      ),
    )
  }
}
