/**
 * Webpack Module #60921
 * @exports CrossPromoModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CrossPromoModule = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(86700),
    a = n(44656),
    s = n(84194),
    u = n(86125),
    l = [
      {
        id: "1",
        social: {
          fb: { id: "611639816037657" },
          ok: { id: "512000876793" },
          ya: { id: "181508" },
          vk: { id: "8212151" },
        },
        icon: "logo-hidden-object.jpg",
      },
      {
        id: "2",
        social: {
          fb: { id: "258766835191242" },
          ok: { id: "512000645067" },
          vk: { id: "8212147" },
          ya: { id: "184478" },
        },
        icon: "logo-blocks.jpg",
      },
      {
        id: "3",
        social: {
          fb: { id: "778673846242493" },
          ok: { id: "512000897558" },
          vk: { id: "8020393" },
          ya: { id: "161418" },
        },
        icon: "logo-chain-cube.jpg",
      },
      {
        id: "4",
        social: {
          fb: { id: "159047249520140" },
          ok: { id: "512000948950" },
          vk: { id: "8212140" },
          ya: { id: "191972" },
        },
        icon: "logo-state-io.jpg",
      },
      {
        id: "5",
        social: {
          fb: { id: "688260459121199" },
          ok: { id: "512001178168" },
          vk: { id: "8212155" },
          ya: { id: "195514" },
        },
        icon: "word-battle.jpg",
      },
      {
        id: "6",
        social: { fb: { id: "427004178938893" }, ya: { id: "201598" } },
        icon: "logo-homo-evolution.jpg",
      },
      { id: "7", social: { fb: { id: "3098083237124205" } }, icon: "onnet.jpg" },
    ]
  t.CrossPromoModule = new o.ContainerModule(function (e, t, n) {
    var o
    u.Localize.addTemplates({
      game_title_1: { default: "Hidden Objects", localizations: { ru_RU: "Поиск предметов" } },
      game_title_2: { default: "Nine Blocks", localizations: { ru_RU: "Блоки" } },
      game_title_3: { default: "Chain Cube", localizations: { ru_RU: "Кубики 2048" } },
      game_title_4: { default: "State.io", localizations: { ru_RU: "Битва за территории" } },
      game_title_5: { default: "Word Battle", localizations: { ru_RU: "Вокруг слова" } },
      game_subtitle_1: { default: "Brain Teaser", localizations: { ru_RU: "Hidden Objects" } },
      game_subtitle_2: { default: "Game", localizations: { ru_RU: "головоломка блок-пазл" } },
      game_subtitle_3: { default: "2048", localizations: { ru_RU: "2048" } },
      game_subtitle_4: { default: "Conquer the World", localizations: { ru_RU: "State.io" } },
      game_subtitle_5: {
        default: "Challenge your friends online",
        localizations: { ru_RU: "Word Battle" },
      },
      game_title_6: { default: "Homo Evolution", localizations: { ru_RU: "Homo Evolution" } },
      game_subtitle_6: {
        default: "Create your own little world",
        localizations: { ru_RU: "Создай свой маленький мир" },
      },
      game_title_7: { default: "Onnet Match Pairs" },
      game_subtitle_7: { default: "Connect the pairs with up to 3 lines." },
    })
    var c = function () {
      return l
        .filter(function (e) {
          return !!e.social.ya
        })
        .map(function (e) {
          var t
          return {
            appId: (null === (t = e.social.ya) || void 0 === t ? void 0 : t.id) || "",
            title: u.Localize.get("game_title_".concat(e.id)),
            subtitle: u.Localize.get("game_subtitle_".concat(e.id)),
            icon: e.icon,
          }
        })
    }
    ;(e(r.TypesPromo.config).toDynamicValue(function () {
      return (o || (o = c()), { games: o })
    }),
      e(r.TypesPromo.random).toDynamicValue(function () {
        o || (o = c())
        var e = a.di.get(r.TypesCore.gameConfig)
        return s.Random.from(
          o.filter(function (t) {
            return t.appId !== e.sid
          }),
        )
      }),
      e(r.TypesPromo.randomComponent).toDynamicValue(function () {
        var e, t
        if (n(r.TypesPromo.component)) {
          o || (o = c())
          var u = o.sort(s.Random.sign)
          try {
            for (var l = i.__values(u), d = l.next(); !d.done; d = l.next()) {
              var h = d.value
              if (n(h.icon)) {
                var p = a.di.get(r.TypesPromo.component)
                return ((p.config = h), p)
              }
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              d && !d.done && (t = l.return) && t.call(l)
            } finally {
              if (e) throw e.error
            }
          }
        }
      }))
  })
}
