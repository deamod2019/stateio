/**
 * Webpack Module #60079
 * @exports SkinManager
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SkinManager = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(95781) /* 95781_TypesGame */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(56792) /* 56792_CookieModel */,
    u = n(36596) /* 36596_PlayerType */,
    l = n(66154) /* 66154_SelectableFighterDataSet */,
    c = (function () {
      function e() {
        ;((this.fighters = new Map()), (this.buildings = new Map()))
      }
      var t
      return (
        (e.prototype.fillSkins = function () {
          var e = this,
            t = this.cookies.absoluteLevelNum,
            n = l.SelectableBuildingDataSet[0],
            o = l.SelectableFighterDataSet[0],
            a = i.__read(
              l.SelectableFighterDataSet.filter(function (t) {
                return t.id === e.cookies.selected_fighter_id
              }),
              1,
            )[0],
            s = i.__read(
              l.SelectableBuildingDataSet.filter(function (t) {
                return t.id === e.cookies.selected_building_id
              }),
              1,
            )[0]
          ;(this.fighters.set(u.PlayerType.First, (a || o).textureUrl),
            this.buildings.set(u.PlayerType.First, (s || n).textureUrl),
            this.buildings.set(u.PlayerType.Neutral, n.textureUrl),
            Object.keys(u.PlayerType).forEach(function (i, a) {
              a != u.PlayerType.First &&
                a !== u.PlayerType.Neutral &&
                (t <= 5
                  ? (e.fighters.set(a, o.textureUrl), e.buildings.set(a, n.textureUrl))
                  : (e.fighters.set(a, r.Random.from(l.SelectableFighterDataSet).textureUrl),
                    e.buildings.set(a, r.Random.from(l.SelectableBuildingDataSet).textureUrl)))
            }))
        }),
        (e.prototype.clearSkins = function () {
          ;(this.fighters.clear(), this.buildings.clear())
        }),
        (e.prototype.getGift = function () {
          var e = this.cookies.absoluteLevelNum,
            t = this.cookies.getUserFighterSet(),
            n = this.cookies.getUserBuildingSet(),
            i = l.SelectableFighterDataSet.concat(l.SelectableBuildingDataSet).filter(function (i) {
              if (i.playerLevelUnlock <= e) {
                if (i.type === l.SkinType.FIGHTER) return !t.includes(i.id)
                if (i.type === l.SkinType.BUILDING) return !n.includes(i.id)
              }
              return false
            })
          return r.Random.from(i)
        }),
        (e.prototype.updateSkins = function () {
          ;(this.clearSkins(), this.fillSkins())
        }),
        Object.defineProperty(e.prototype, "selectedColorSet", {
          get: function () {
            var e = this
            return l.SelectableColorsDataSet.filter(function (t) {
              return t.id === e.cookies.selected_color_set_id
            }).map(function (e) {
              return i.__assign(i.__assign({}, e), { selected: true, stored: true })
            })[0]
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.getBuildingTextureBy = function (e) {
          return this.buildings.get(e)
        }),
        (e.prototype.getFighterTextureBy = function (e) {
          return this.fighters.get(e)
        }),
        (e.prototype.getColorBy = function (e) {
          var t,
            n,
            i = l.GameColors.players[e]
          if (e === u.PlayerType.First)
            (null === (t = this.selectedColorSet) || undefined === t ? undefined : t.data) &&
              (i = this.selectedColorSet.data)
          else if (
            e === u.PlayerType.Second &&
            (null === (n = this.selectedColorSet) || undefined === n ? undefined : n.id)
          ) {
            var r = l.SelectableColorsDataSet.filter(function (e) {
              return e.id === l.UserSelectableColorsSet.BLUE
            })
            ;(this.selectedColorSet.id === l.UserSelectableColorsSet.BLUE &&
              (r = l.SelectableColorsDataSet.filter(function (e) {
                return e.id === l.UserSelectableColorsSet.RED
              })),
              r.length && (i = r[0].data))
          }
          return i
        }),
        Object.defineProperty(e.prototype, "availableBuildings", {
          get: function () {
            return this.selectFrom(
              l.SelectableBuildingDataSet,
              this.cookies.getUserBuildingSet(),
              this.cookies.selected_building_id,
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "availableFighters", {
          get: function () {
            return this.selectFrom(
              l.SelectableFighterDataSet,
              this.cookies.getUserFighterSet(),
              this.cookies.selected_fighter_id,
            )
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.selectFrom = function (e, t, n) {
          var r = this
          return e
            .filter(function (e) {
              return r.cookies.absoluteLevelNum >= e.enemyLevelUnlock || -1 !== t.indexOf(e.id)
            })
            .map(function (e) {
              var r = e.id === n,
                o = -1 !== t.indexOf(e.id)
              return i.__assign(i.__assign({}, e), { selected: r, stored: o })
            })
        }),
        i.__decorate(
          [
            (0, a.inject)(o.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (t = undefined !== s.CookieModel && s.CookieModel) ? t : Object,
            ),
          ],
          e.prototype,
          "cookies",
          undefined,
        ),
        (e = i.__decorate([(0, a.injectable)()], e))
      )
    })()
  t.SkinManager = c
}
