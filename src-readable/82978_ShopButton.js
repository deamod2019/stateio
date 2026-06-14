/**
 * Webpack Module #82978
 * @exports ShopButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShopButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(5777) /* 5777_ExclamationMarkNotificator */,
    a = i.__importDefault(n(94184) /* 94184__mod */)
  t.ShopButton = function (e) {
    return (0, r.jsxs)(
      "button",
      i.__assign(
        {
          onClick: e.onClick,
          className: (0, a.default)("btn", "btn-blue", "shop-button", e.className),
          type: "button",
        },
        {
          children: [
            (0, r.jsx)(
              "span",
              i.__assign(
                { className: (0, a.default)("icon") },
                {
                  children: (0, r.jsx)(
                    "svg",
                    i.__assign(
                      {
                        width: "108",
                        height: "108",
                        viewBox: "0 0 108 108",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      {
                        children: (0, r.jsx)("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M1.3653 6.35365L12.7525 13.7559L25.1751 76.4441C25.4905 78.0359 26.9937 79.0506 28.5326 78.833C28.6369 78.844 28.7428 78.8496 28.85 78.8496H93.85C95.5068 78.8496 96.85 77.5065 96.85 75.8496V74.8496C96.85 73.1928 95.5068 71.8496 93.85 71.8496H31.3162L30.332 66.8496H94.0206C96.8402 66.8496 99.2794 64.8863 99.882 62.1318L107.226 28.5592C108.317 23.57 104.518 18.8496 99.4108 18.8496H20.8835L19.2976 10.7932C19.1263 9.92276 18.5945 9.21493 17.8878 8.79425C17.7702 8.68773 17.6424 8.58899 17.5047 8.49941L5.18056 0.485338C3.7914 -0.418 1.93295 -0.024006 1.02984 1.3653L0.485078 2.20332C-0.417938 3.59247 -0.0238486 5.45064 1.3653 6.35365ZM41.85 98.8496C46.2682 98.8496 49.85 95.2679 49.85 90.8496C49.85 86.4314 46.2682 82.8496 41.85 82.8496C37.4317 82.8496 33.85 86.4314 33.85 90.8496C33.85 95.2679 37.4317 98.8496 41.85 98.8496ZM81.85 98.8496C86.2682 98.8496 89.85 95.2679 89.85 90.8496C89.85 86.4314 86.2682 82.8496 81.85 82.8496C77.4317 82.8496 73.85 86.4314 73.85 90.8496C73.85 95.2679 77.4317 98.8496 81.85 98.8496Z",
                          fill: "white",
                        }),
                      },
                    ),
                  ),
                },
              ),
            ),
            e.showNotification
              ? (0, r.jsx)(o.ExclamationMarkNotificator, {
                  className: (0, a.default)(
                    "exclamation-mark-notificator_animated",
                    "exclamation-mark-notificator_top-left",
                  ),
                })
              : null,
          ],
        },
      ),
    )
  }
}
