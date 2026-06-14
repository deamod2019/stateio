/**
 * Webpack Module #74083
 * @exports UIConstants, ShopType
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  var n
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.UIConstants = t.ShopType = undefined),
    (function (e) {
      ;((e.BUILDING = "ShopType.BUILDING"),
        (e.FIGHTER = "ShopType.FIGHTER"),
        (e.COLOR = "ShopType.COLOR"))
    })((n = t.ShopType || (t.ShopType = {}))),
    (t.UIConstants = {
      tapToPlayButton: { showGoDelay: 200, hideDelay: 800 },
      coinsIndicator: { updateDelay: 350 },
      popup: {
        startDelay: 100,
        noThanksButtonDelay: 0,
        updateCoinsTime: 800,
        updateCoinsInterval: 25,
      },
      boosters: [
        {
          id: "BoosterType.START_UNITS",
          className: "booster-start-units",
          icon: "",
          disabled: true,
          defaultCount: 10,
          title: { i18n: "ui-upgrade-start_units", default: "START UNITS" },
          description: { i18n: "ui-upgrade-units", default: "units" },
        },
        {
          id: "BoosterType.START_PRODUCE",
          className: "booster-produce-speed",
          disabled: false,
          icon: "",
          defaultCount: "10",
          title: { i18n: "ui-upgrade-produce_speed", default: "PRODUCE SPEED" },
          description: { i18n: "ui-upgrate-rate", default: "units per second" },
        },
        {
          id: "BoosterType.OFFLINE_EARNINGS",
          className: "booster-offline-earnings",
          icon: "",
          defaultCount: 10,
          disabled: false,
          title: { i18n: "ui-offline-title", default: "OFFLINE EARNINGS" },
          description: { i18n: "ui-upgrade-offline", default: "coins per hour" },
        },
      ],
      shop: { tabTypes: [n.BUILDING, n.FIGHTER, n.COLOR], defaultTabType: n.BUILDING },
    }))
}
