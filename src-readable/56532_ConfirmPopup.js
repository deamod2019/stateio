/**
 * Webpack Module #56532
 * @exports ConfirmPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ConfirmPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(45878) /* 45878_CancelButton */,
    s = n(62671) /* 62671_ConfirmButton */,
    u = n(74083) /* 74083_UIConstants */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(83430) /* 83430_InversifyContext */
  n(21391) /* 21391__mod */
  t.ConfirmPopup = function (e) {
    var t = e.onConfirm,
      n = i.__read((0, c.visibilityEffect)(u.UIConstants.popup.startDelay), 1)[0]
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: "popups" },
        {
          children: (0, r.jsxs)(
            "div",
            i.__assign(
              { className: (0, l.default)("popup-confirm") },
              {
                children: [
                  (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, l.default)("popup", { invisible: n }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              { children: o.Localize.get("ui-exit-exit_label", "EXIT") },
                            ),
                          ),
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: (0, r.jsx)("div", {
                                  children: o.Localize.get(
                                    "ui-exit-description",
                                    "Leave the game?",
                                  ),
                                }),
                              },
                            ),
                          ),
                          (0, r.jsxs)(
                            "div",
                            i.__assign(
                              { className: "popup__body-buttons" },
                              {
                                children: [
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, l.default)("popup__body-button", "left") },
                                      {
                                        children: (0, r.jsx)("div", {
                                          children: (0, r.jsx)(s.ConfirmButton, {
                                            onClick: function () {
                                              return t(true)
                                            },
                                          }),
                                        }),
                                      },
                                    ),
                                  ),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, l.default)("popup__body-button", "right") },
                                      {
                                        children: (0, r.jsx)("div", {
                                          children: (0, r.jsx)(a.CancelButton, {
                                            onClick: function () {
                                              return t(false)
                                            },
                                          }),
                                        }),
                                      },
                                    ),
                                  ),
                                ],
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                  (0, r.jsx)(c.CrossPromo, { delay: u.UIConstants.popup.startDelay + 100 }),
                ],
              },
            ),
          ),
        },
      ),
    )
  }
}
