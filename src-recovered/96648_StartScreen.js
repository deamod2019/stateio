/**
 * Webpack Module #96648
 * @exports StartScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartScreen = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(44656),
    s = n(86178),
    u = n(48616),
    l = n(83430),
    c = n(95781),
    d = n(67884),
    h = n(10065),
    p = n(55378),
    f = n(96087),
    _ = n(20911),
    g = n(32715),
    m = n(14954),
    v = n(12832),
    y = n(82978),
    C = n(53309),
    b = i.__importDefault(n(94184)),
    w = n(30396),
    x = n(30107)
  n(56635)
  var T = n(37725),
    S = n(69080),
    L = n(30396),
    E = !1
  t.StartScreen = function () {
    var e = (0, l.useInjection)(c.TypesGame.model),
      t = (0, l.useInjection)(s.TypesSocial.model),
      n = (0, l.useInjection)(c.TypesGame.skinManager),
      A = (0, l.useInjection)(s.TypesCore.dispatcher),
      I = (0, l.useInjection)(c.TypesGame.cookieModel),
      M = {
        authorized: void 0 === t.userAuthorized || t.userAuthorized,
        stageLevel: e.currentContinent.stageLevel,
        totalStages: e.currentContinent.totalStages,
      },
      P = i.__read(
        (0, L.useState)(function () {
          return M
        }),
        2,
      ),
      O = P[0],
      R = P[1],
      k = i.__read((0, l.visibilityEffect)(), 2),
      N = k[0],
      D = k[1],
      B =
        i
          .__spreadArray(
            i.__spreadArray(
              i.__spreadArray([], i.__read(n.availableBuildings), !1),
              i.__read(n.availableFighters),
              !1,
            ),
            i.__read(e.cookie.availableColors),
            !1,
          )
          .filter(function (e) {
            return !e.stored
          }).length > 0
    return (
      (0, w.useEffect)(
        function () {
          var n
          t.session.ftue ||
            !t.inSolo ||
            E ||
            ((n = e.getOfflineEarning()).isRewarded &&
              A.emit(l.UIEvents.POPUP, {
                id: x.PopupType.OFFLINE_EARNINGS,
                props: {
                  coins: n.reward,
                  hours: n.date.getUTCHours(),
                  minutes: n.date.getUTCMinutes(),
                  seconds: n.date.getUTCSeconds(),
                },
              }),
            (E = !0))
        },
        [E],
      ),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, b.default)("screen", "screen__start") },
          {
            children: [
              (0, r.jsxs)(
                "div",
                i.__assign(
                  { className: (0, b.default)("screen-top", { invisible: N }) },
                  {
                    children: [
                      (0, r.jsxs)(
                        "div",
                        i.__assign(
                          { className: (0, b.default)("container", "top-bar") },
                          {
                            children: [
                              (0, r.jsx)(v.SettingsButton, {
                                onClick: function () {
                                  return A.emit(l.UIEvents.POPUP, { id: x.PopupType.SETTINGS })
                                },
                              }),
                              (0, r.jsx)(_.LevelTitle, {}),
                              (0, r.jsx)(g.CoinsIndicator, {
                                total: e.cookie.coins,
                                className: (0, b.default)(
                                  "coins-indicator",
                                  "coins-indicator_filled",
                                ),
                              }),
                            ],
                          },
                        ),
                      ),
                      (0, r.jsx)(h.Capturing, {
                        captured: O.stageLevel / O.totalStages,
                        title: o.Localize.get("ui-menu-capturing", "CAPTURING"),
                        stages: O.totalStages,
                        showGift: t.inSolo,
                      }),
                      (0, r.jsxs)(
                        "div",
                        i.__assign(
                          {
                            className: (0, b.default)("container", "buttons-container", {
                              invisible: N,
                            }),
                          },
                          {
                            children: [
                              (0, r.jsxs)(
                                "span",
                                i.__assign(
                                  {
                                    className: (0, b.default)(
                                      "buttons-group",
                                      "buttons-group_left",
                                    ),
                                  },
                                  {
                                    children: [
                                      ["ya", "gd"].includes(t.socialPlatform)
                                        ? null
                                        : (0, r.jsx)(p.InviteButton, {}),
                                      "gd" === t.socialPlatform
                                        ? null
                                        : (0, r.jsx)(f.LeaderboardButton, {
                                            onClick: function () {
                                              return A.emit(l.UIEvents.SCREEN_CHANGED, {
                                                id: s.TypesUI.screen.LEADERBOARD,
                                                props: {
                                                  scoreType: u.ScoreType.GLOBAL,
                                                  users: t.friends.concat(t.me),
                                                },
                                              })
                                            },
                                          }),
                                    ],
                                  },
                                ),
                              ),
                              (0, r.jsxs)(
                                "span",
                                i.__assign(
                                  {
                                    className: (0, b.default)(
                                      "buttons-group",
                                      "buttons-group_right",
                                    ),
                                  },
                                  {
                                    children: [
                                      (0, r.jsx)(m.NoAdsButton, {
                                        className: "btn-unsupported",
                                        onClick: function () {},
                                      }),
                                      (0, r.jsx)(y.ShopButton, {
                                        showNotification: B,
                                        onClick: function () {
                                          ;((0, T.playUIClickSound)(),
                                            A.emit(l.UIEvents.SCREEN_CHANGED, {
                                              id: s.TypesUI.screen.SHOP,
                                              props: {},
                                            }))
                                        },
                                      }),
                                    ],
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
              (0, r.jsx)(C.TapToPlayButton, {
                onDown: function () {
                  return D(!0)
                },
                onClick: function () {
                  var e
                  return null === (e = (0, a.lazyGet)(c.TypesGame.actions.startGame)) ||
                    void 0 === e
                    ? void 0
                    : e.run()
                },
              }),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, b.default)("screen-bottom", { invisible: N }) },
                  { children: (0, r.jsx)(d.Boosters, {}) },
                ),
              ),
              (0, r.jsx)(S.UserStatusInfo, {
                authorized: O.authorized,
                onLogin: function () {
                  return i.__awaiter(void 0, void 0, void 0, function () {
                    var n, r
                    return i.__generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return t.authorizeUser ? [4, t.authorizeUser()] : [3, 4]
                        case 1:
                          return (n = o.sent()) && I.syncAfterAuthStateChange
                            ? [4, I.syncAfterAuthStateChange()]
                            : [3, 4]
                        case 2:
                          return o.sent()
                            ? [
                                4,
                                null ===
                                  (r = (0, a.lazyGet)(
                                    c.TypesGame.actions.levelRestartAfterYandexLoginAction,
                                  )) || void 0 === r
                                  ? void 0
                                  : r.run(),
                              ]
                            : [3, 4]
                        case 3:
                          ;(o.sent(),
                            R(function (t) {
                              return i.__assign(i.__assign({}, t), {
                                authorized: n,
                                stageLevel: e.currentContinent.stageLevel,
                                totalStages: e.currentContinent.totalStages,
                              })
                            }),
                            (o.label = 4))
                        case 4:
                          return [2]
                      }
                    })
                  })
                },
              }),
            ],
          },
        ),
      )
    )
  }
}
