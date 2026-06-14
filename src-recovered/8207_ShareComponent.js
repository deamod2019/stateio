/**
 * Webpack Module #8207
 * @exports ShareComponent
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShareComponent = void 0))
  var i = n(70655),
    r = n(16584)
  n(31529)
  var o = n(44656),
    a = n(86125),
    s = n(86178),
    u = i.__importDefault(n(94184)),
    l = n(37909)
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
            return i.__awaiter(void 0, void 0, void 0, function () {
              var e, t
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      null === (t = (0, o.lazyGet)(s.TypesFlow.share)) || void 0 === t
                        ? void 0
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
