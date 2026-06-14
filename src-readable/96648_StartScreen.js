/**
 * Webpack Module #96648
 * @exports StartScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StartScreen = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(86178) /* 86178__mod */,
    u = n(48616) /* 48616__mod */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(95781) /* 95781_TypesGame */,
    d = n(67884) /* 67884_Boosters */,
    h = n(10065) /* 10065_Capturing */,
    p = n(55378) /* 55378_InviteButton */,
    f = n(96087) /* 96087_LeaderboardButton */,
    _ = n(20911) /* 20911_LevelTitle */,
    g = n(32715) /* 32715_CoinsIndicator */,
    m = n(14954) /* 14954_NoAdsButton */,
    v = n(12832) /* 12832_SettingsButton */,
    y = n(82978) /* 82978_ShopButton */,
    C = n(53309) /* 53309_TapToPlayButton */,
    b = i.__importDefault(n(94184) /* 94184__mod */),
    w = n(30396) /* 30396__mod */,
    x = n(30107) /* 30107_PopupType */
  n(56635) /* 56635__mod */
  var T = n(37725) /* 37725__mod */,
    S = n(69080) /* 69080_UserStatusInfo */,
    L = n(30396) /* 30396__mod */,
    E = false
  t.StartScreen = function () {
    var e = (0, l.useInjection)(c.TypesGame.model),
      t = (0, l.useInjection)(s.TypesSocial.model),
      n = (0, l.useInjection)(c.TypesGame.skinManager),
      A = (0, l.useInjection)(s.TypesCore.dispatcher),
      I = (0, l.useInjection)(c.TypesGame.cookieModel),
      M = {
        authorized: undefined === t.userAuthorized || t.userAuthorized,
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
              i.__spreadArray([], i.__read(n.availableBuildings), false),
              i.__read(n.availableFighters),
              false,
            ),
            i.__read(e.cookie.availableColors),
            false,
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
            (E = true))
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
                  return D(true)
                },
                onClick: function () {
                  var e
                  return null === (e = (0, a.lazyGet)(c.TypesGame.actions.startGame)) ||
                    undefined === e
                    ? undefined
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
                  return i.__awaiter(undefined, undefined, undefined, function () {
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
                                  )) || undefined === r
                                  ? undefined
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
